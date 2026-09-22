import type { Answer, Question, Scenario } from '../types'

const yesNoUnsure = [
  { value: 'yes', label: 'Sim' },
  { value: 'no', label: 'Não' },
  { value: 'unsure', label: 'Não tenho a certeza' },
]

const finalValuesQuestion: Question = {
  id: 'final_values',
  type: 'single',
  title: 'Recebeste todos os valores finais?',
  help: 'Por exemplo: último salário, férias e subsídios.',
  options: [
    { value: 'yes', label: 'Sim, penso que recebi tudo' },
    { value: 'partly', label: 'Recebi apenas uma parte' },
    { value: 'no', label: 'Não recebi' },
    { value: 'not_yet', label: 'Ainda não chegou a data de pagamento' },
    { value: 'unsure', label: 'Não consigo confirmar' },
  ],
  required: true,
}

const contractTypeQuestion: Question = {
  id: 'contract_type',
  type: 'single',
  title: 'Que tipo de contrato tinhas?',
  options: [
    { value: 'permanent', label: 'Sem termo' },
    { value: 'fixed', label: 'A termo certo' },
    { value: 'uncertain', label: 'A termo incerto' },
    { value: 'service', label: 'Prestação de serviços / recibos verdes' },
    { value: 'unsure', label: 'Não sei' },
  ],
  required: true,
}

const startDateQuestion: Question = {
  id: 'start_date',
  type: 'date',
  title: 'Quando começaste a trabalhar na empresa?',
  help: 'Uma data aproximada é suficiente nesta fase.',
  required: true,
}

const endDateQuestion: Question = {
  id: 'end_date',
  type: 'date',
  title: 'Quando terminou ou vai terminar o contrato?',
  help: 'Se ainda não souberes o dia exato, indica a melhor aproximação.',
  required: true,
}

const salaryQuestion: Question = {
  id: 'monthly_salary',
  type: 'money',
  title: 'Qual era a tua remuneração base mensal?',
  help: 'Indica o valor bruto antes de impostos. Usaremos este dado apenas para preparar a análise.',
  required: true,
}

const arrearsQuestion: Question = {
  id: 'salary_arrears',
  type: 'single',
  title: 'Existem salários ou outros valores em atraso?',
  options: yesNoUnsure,
  required: true,
}

export const scenarios: Scenario[] = [
  {
    id: 'dismissal',
    title: 'Despedimento',
    shortTitle: 'Despedimento',
    description: 'Fui despedido ou disseram-me que vão terminar o meu contrato.',
    icon: 'departure',
    questions: [
      {
        id: 'contract_ended',
        type: 'single',
        title: 'O contrato já terminou?',
        options: [
          { value: 'yes', label: 'Sim, já terminou' },
          { value: 'no', label: 'Não, ainda estou a trabalhar' },
          { value: 'notice', label: 'Estou no período de aviso prévio' },
        ],
        required: true,
      },
      {
        id: 'termination_reason',
        type: 'single',
        title: 'Como te disseram que o contrato ia terminar?',
        options: [
          { value: 'dismissed', label: 'Decisão da empresa', hint: 'Disseram-me que fui ou serei despedido.' },
          { value: 'collective', label: 'Despedimento coletivo ou extinção do posto' },
          { value: 'agreement', label: 'Acordo entre mim e a empresa' },
          { value: 'trial', label: 'Durante o período experimental' },
          { value: 'unsure', label: 'Não percebi / não sei' },
        ],
        required: true,
      },
      contractTypeQuestion,
      startDateQuestion,
      endDateQuestion,
      salaryQuestion,
      {
        id: 'written_notice',
        type: 'single',
        title: 'Recebeste uma comunicação por escrito?',
        help: 'Pode ser uma carta, email ou documento entregue pela empresa.',
        options: yesNoUnsure,
        required: true,
      },
      finalValuesQuestion,
      {
        id: 'unused_holidays',
        type: 'single',
        title: 'Tinhas dias de férias por gozar?',
        options: yesNoUnsure,
        required: true,
      },
      arrearsQuestion,
    ],
  },
  {
    id: 'contract-end',
    title: 'Fim de contrato',
    shortTitle: 'Fim de contrato',
    description: 'O meu contrato terminou ou não foi renovado.',
    icon: 'calendar',
    questions: [
      {
        id: 'contract_end_reason',
        type: 'single',
        title: 'O que aconteceu ao contrato?',
        options: [
          { value: 'expired', label: 'Chegou ao fim e não foi renovado' },
          { value: 'early', label: 'A empresa terminou antes da data prevista' },
          { value: 'temporary', label: 'Terminou a necessidade temporária' },
          { value: 'unsure', label: 'Não sei ao certo' },
        ],
        required: true,
      },
      contractTypeQuestion,
      startDateQuestion,
      endDateQuestion,
      salaryQuestion,
      { id: 'written_notice', type: 'single', title: 'Foste avisado por escrito?', options: yesNoUnsure, required: true },
      finalValuesQuestion,
      { id: 'unused_holidays', type: 'single', title: 'Tinhas dias de férias por gozar?', options: yesNoUnsure, required: true },
    ],
  },
  {
    id: 'resignation',
    title: 'Demissão / saída da empresa',
    shortTitle: 'Demissão / saída',
    description: 'Despedi-me ou estou a pensar sair da empresa.',
    icon: 'exit',
    questions: [
      {
        id: 'departure_status',
        type: 'single',
        title: 'Já comunicaste a tua saída?',
        options: [
          { value: 'left', label: 'Sim, já saí' },
          { value: 'notice', label: 'Sim, estou no aviso prévio' },
          { value: 'considering', label: 'Ainda estou a pensar sair' },
        ],
        required: true,
      },
      {
        id: 'departure_reason',
        type: 'single',
        title: 'Qual é o principal motivo para saíres?',
        options: [
          { value: 'personal', label: 'Decisão pessoal ou nova oportunidade' },
          { value: 'unpaid', label: 'Salários ou valores em atraso' },
          { value: 'conditions', label: 'Condições de trabalho ou comportamento da empresa' },
          { value: 'agreement', label: 'Acordo com a empresa' },
          { value: 'other', label: 'Outro motivo' },
        ],
        required: true,
      },
      contractTypeQuestion,
      startDateQuestion,
      salaryQuestion,
      arrearsQuestion,
      finalValuesQuestion,
    ],
  },
  {
    id: 'unpaid-values',
    title: 'Salários ou valores em falta',
    shortTitle: 'Valores em falta',
    description: 'A empresa não me pagou salários, subsídios ou outros valores.',
    icon: 'euro',
    questions: [
      {
        id: 'unpaid_type',
        type: 'single',
        title: 'Que valor está em falta?',
        options: [
          { value: 'salary', label: 'Um ou mais salários' },
          { value: 'allowance', label: 'Subsídio de férias ou de Natal' },
          { value: 'expenses', label: 'Despesas ou ajudas de custo' },
          { value: 'other', label: 'Outro valor' },
          { value: 'unsure', label: 'Não consigo identificar' },
        ],
        required: true,
      },
      { id: 'employment_active', type: 'single', title: 'Ainda trabalhas na empresa?', options: yesNoUnsure, required: true },
      {
        id: 'issue_resolved',
        type: 'single',
        title: 'A empresa já regularizou a situação?',
        options: [
          { value: 'yes', label: 'Sim, entretanto pagou tudo' },
          { value: 'partly', label: 'Pagou apenas uma parte' },
          { value: 'no', label: 'Não, continua por pagar' },
        ],
        required: true,
      },
      { id: 'missing_amount', type: 'money', title: 'Qual é o valor aproximado em falta?', help: 'Se não souberes o valor exato, podes indicar uma aproximação.', required: false },
      { id: 'written_request', type: 'single', title: 'Já pediste o pagamento por escrito?', options: yesNoUnsure, required: true },
    ],
  },
  {
    id: 'overtime',
    title: 'Horas extra',
    shortTitle: 'Horas extra',
    description: 'Trabalhei horas extra que podem não ter sido pagas corretamente.',
    icon: 'clock',
    questions: [
      { id: 'employment_active', type: 'single', title: 'Ainda trabalhas na empresa?', options: yesNoUnsure, required: true },
      {
        id: 'overtime_frequency',
        type: 'single',
        title: 'Com que frequência fazias horas extra?',
        options: [
          { value: 'occasional', label: 'Ocasionalmente' },
          { value: 'monthly', label: 'Várias vezes por mês' },
          { value: 'weekly', label: 'Todas ou quase todas as semanas' },
          { value: 'unsure', label: 'É difícil estimar' },
        ],
        required: true,
      },
      {
        id: 'overtime_records',
        type: 'single',
        title: 'Existem registos dessas horas?',
        help: 'Por exemplo: horários, mensagens, registo de ponto ou emails.',
        options: yesNoUnsure,
        required: true,
      },
      {
        id: 'overtime_payment',
        type: 'single',
        title: 'Essas horas foram pagas ou compensadas?',
        options: [
          { value: 'yes', label: 'Sim, penso que foram pagas corretamente' },
          { value: 'partly', label: 'Apenas em parte' },
          { value: 'no', label: 'Não' },
          { value: 'unsure', label: 'Não consigo confirmar' },
        ],
        required: true,
      },
    ],
  },
  {
    id: 'holidays',
    title: 'Férias e subsídios',
    shortTitle: 'Férias e subsídios',
    description: 'Posso ter férias, subsídio de férias ou subsídio de Natal por receber.',
    icon: 'sun',
    questions: [
      {
        id: 'holiday_issue',
        type: 'single',
        title: 'O que parece estar em falta?',
        options: [
          { value: 'days', label: 'Dias de férias' },
          { value: 'holiday_allowance', label: 'Subsídio de férias' },
          { value: 'christmas_allowance', label: 'Subsídio de Natal' },
          { value: 'several', label: 'Mais do que uma destas opções' },
          { value: 'unsure', label: 'Não sei ao certo' },
        ],
        required: true,
      },
      { id: 'employment_active', type: 'single', title: 'Ainda trabalhas na empresa?', options: yesNoUnsure, required: true },
      {
        id: 'holiday_payment',
        type: 'single',
        title: 'A empresa já regularizou estes valores?',
        options: [
          { value: 'yes', label: 'Sim, entretanto ficou resolvido' },
          { value: 'partly', label: 'Apenas em parte' },
          { value: 'no', label: 'Não' },
          { value: 'unsure', label: 'Não consigo confirmar' },
        ],
        required: true,
      },
      { id: 'holiday_records', type: 'single', title: 'Tens recibos ou registos de férias que possas consultar?', options: yesNoUnsure, required: true },
    ],
  },
  {
    id: 'other',
    title: 'Outra situação laboral',
    shortTitle: 'Outra situação',
    description: 'A minha situação não aparece nas opções anteriores.',
    icon: 'other',
    questions: [
      {
        id: 'other_topic',
        type: 'single',
        title: 'Qual destas opções se aproxima mais da tua situação?',
        options: [
          { value: 'workplace', label: 'Condições no local de trabalho' },
          { value: 'contract', label: 'Dúvidas sobre o contrato' },
          { value: 'schedule', label: 'Horário ou turnos' },
          { value: 'leave', label: 'Baixa, licença ou parentalidade' },
          { value: 'other', label: 'Outro tema' },
        ],
        required: true,
      },
      { id: 'employment_active', type: 'single', title: 'Ainda trabalhas na empresa?', options: yesNoUnsure, required: true },
      { id: 'written_documents', type: 'single', title: 'Tens documentos ou comunicações sobre o que aconteceu?', options: yesNoUnsure, required: true },
    ],
  },
]

export function getVisibleQuestions(questions: Question[], answers: Answer): Question[] {
  return questions.filter((question) => {
    if (!question.condition) return true
    const answer = answers[question.condition.questionId]
    if (question.condition.oneOf) return question.condition.oneOf.includes(answer)
    return answer === question.condition.equals
  })
}
