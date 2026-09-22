import type { Answer, EligibilityResult, Scenario } from '../types'

function includes(answers: Answer, id: string, values: string[]) {
  return values.includes(String(answers[id] ?? ''))
}

export function assessScenario(scenario: Scenario, answers: Answer): EligibilityResult {
  const reasons: string[] = []
  const components: string[] = []

  if (includes(answers, 'final_values', ['no', 'partly'])) {
    reasons.push('Indicou que os valores finais não foram pagos na totalidade.')
    components.push('valores devidos no fim do contrato')
  }
  if (answers.salary_arrears === 'yes') {
    reasons.push('Referiu salários ou outros valores em atraso.')
    components.push('salários ou créditos laborais em atraso')
  }
  if (includes(answers, 'overtime_payment', ['no', 'partly'])) {
    reasons.push('As horas extra poderão não ter sido pagas ou compensadas na totalidade.')
    components.push('trabalho suplementar')
  }
  if (includes(answers, 'holiday_payment', ['no', 'partly'])) {
    reasons.push('Existem férias ou subsídios que poderão continuar por regularizar.')
    components.push('férias e subsídios')
  }
  if (includes(answers, 'issue_resolved', ['no', 'partly'])) {
    reasons.push('O valor indicado continua total ou parcialmente por pagar.')
    components.push('valores salariais ou subsídios em falta')
  }
  if (includes(answers, 'departure_reason', ['unpaid', 'conditions'])) {
    reasons.push('O motivo da saída pode exigir uma análise jurídica mais cuidada.')
  }
  if (scenario.id === 'dismissal' || scenario.id === 'contract-end') {
    components.push('eventual compensação pela cessação')
    if (answers.unused_holidays === 'yes') components.push('férias não gozadas')
  }

  const uniqueComponents = [...new Set(components)]
  const resolved = answers.issue_resolved === 'yes' || answers.holiday_payment === 'yes' || answers.overtime_payment === 'yes'
  const hasUncertainty = Object.values(answers).some((value) => value === 'unsure')

  if (reasons.length > 0) {
    return {
      state: 'potential',
      title: 'Poderá existir um valor a receber',
      description: 'As tuas respostas mostram um ou mais pontos que poderão justificar uma análise profissional.',
      reasons,
      estimate: {
        status: 'requires-review',
        label: 'Valor a determinar após análise',
        components: uniqueComponents,
      },
    }
  }

  if (resolved && !hasUncertainty) {
    return {
      state: 'no-obvious',
      title: 'Não identificámos uma compensação evidente',
      description: 'Com base nas informações fornecidas, a situação parece ter sido regularizada. Podem existir circunstâncias que esta avaliação não abrange.',
      reasons: ['Indicou que os valores ou horas em causa já foram regularizados.'],
      estimate: { status: 'requires-review', label: 'Sem estimativa nesta fase', components: [] },
    }
  }

  return {
    state: 'review',
    title: 'O teu caso merece uma análise mais detalhada',
    description: 'As respostas não permitem chegar a uma conclusão preliminar com segurança.',
    reasons: hasUncertainty
      ? ['Uma ou mais respostas precisam de contexto adicional.']
      : ['A situação depende de detalhes do contrato e da forma como os acontecimentos foram comunicados.'],
    estimate: { status: 'requires-review', label: 'Valor a determinar após análise', components: uniqueComponents },
  }
}
