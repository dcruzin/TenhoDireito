import { useEffect, useMemo, useRef, useState } from 'react'
import { scenarios, getVisibleQuestions } from '../data/questionnaire'
import { track } from '../lib/analytics'
import { assessScenario } from '../services/assessment'
import type { Answer, AnswerValue, EligibilityResult, Question, Scenario } from '../types'
import { Icon } from './Icons'
import { LeadForm } from './LeadForm'
import { ResultSummary } from './ResultSummary'

type Stage = 'scenario' | 'questions' | 'result' | 'lead' | 'prepared'

function ProgressIndicator({ value, label }: { value: number; label: string }) {
  return (
    <div className="progress-wrap" aria-label={label}>
      <div className="progress-meta"><span>{label}</span><span>{Math.round(value)}%</span></div>
      <div className="progress-track"><span style={{ width: `${value}%` }} /></div>
    </div>
  )
}

function ScenarioCard({ scenario, selected, onSelect }: { scenario: Scenario; selected: boolean; onSelect: () => void }) {
  return (
    <button type="button" className={`scenario-card ${selected ? 'selected' : ''}`} aria-pressed={selected} onClick={onSelect}>
      <span className="scenario-icon"><Icon name={scenario.icon} /></span>
      <span className="scenario-title">{scenario.title}</span>
      <span className="scenario-description">{scenario.description}</span>
      <span className="scenario-select" aria-hidden="true">{selected ? <Icon name="check" size={15} /> : <Icon name="arrow" size={15} />}</span>
    </button>
  )
}

function QuestionInput({ question, value, onChange, error }: { question: Question; value?: AnswerValue; onChange: (value: AnswerValue) => void; error?: string }) {
  if (question.type === 'single') {
    return (
      <fieldset className="option-list" aria-describedby={error ? `${question.id}-error` : undefined}>
        <legend className="sr-only">{question.title}</legend>
        {question.options?.map((option) => {
          const checked = value === option.value
          return (
            <label className={`option-card ${checked ? 'selected' : ''}`} key={option.value}>
              <input type="radio" name={question.id} value={option.value} checked={checked} onChange={() => onChange(option.value)} />
              <span className="option-radio" aria-hidden="true">{checked && <span />}</span>
              <span><strong>{option.label}</strong>{option.hint && <small>{option.hint}</small>}</span>
            </label>
          )
        })}
      </fieldset>
    )
  }

  const isMoney = question.type === 'money'
  return (
    <div className={`field-shell ${isMoney ? 'money-field' : ''}`}>
      {isMoney && <span className="field-prefix" aria-hidden="true">€</span>}
      <input
        id={question.id}
        className="text-input"
        type={isMoney ? 'number' : 'date'}
        inputMode={isMoney ? 'decimal' : undefined}
        min={isMoney ? '0' : undefined}
        step={isMoney ? '0.01' : undefined}
        value={String(value ?? '')}
        aria-invalid={Boolean(error)}
        aria-describedby={`${question.id}-help${error ? ` ${question.id}-error` : ''}`}
        onChange={(event) => onChange(event.target.value)}
      />
      {isMoney && <span className="field-suffix">EUR / mês</span>}
    </div>
  )
}

export function EligibilityWizard({ resetSignal = 0 }: { resetSignal?: number }) {
  const [stage, setStage] = useState<Stage>('scenario')
  const [scenarioId, setScenarioId] = useState<string>()
  const [answers, setAnswers] = useState<Answer>({})
  const [questionIndex, setQuestionIndex] = useState(0)
  const [result, setResult] = useState<EligibilityResult>()
  const [error, setError] = useState<string>()
  const headingRef = useRef<HTMLHeadingElement>(null)

  const scenario = scenarios.find((item) => item.id === scenarioId)
  const questions = useMemo(() => scenario ? getVisibleQuestions(scenario.questions, answers) : [], [scenario, answers])
  const currentQuestion = questions[questionIndex]

  useEffect(() => {
    if (resetSignal > 0) {
      setStage('scenario')
      setQuestionIndex(0)
      setError(undefined)
      window.setTimeout(() => document.getElementById('avaliacao')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0)
    }
  }, [resetSignal])

  useEffect(() => {
    if (stage !== 'scenario') headingRef.current?.focus()
  }, [stage, questionIndex])

  const selectScenario = (id: string) => {
    setScenarioId(id)
    track('scenario_selected', { scenario_id: id })
  }

  const startQuestions = () => {
    if (!scenario) return
    setAnswers({})
    setQuestionIndex(0)
    setError(undefined)
    setStage('questions')
    track('assessment_started', { scenario_id: scenario.id })
  }

  const answerQuestion = (value: AnswerValue) => {
    if (!currentQuestion) return
    setAnswers((current) => ({ ...current, [currentQuestion.id]: value }))
    setError(undefined)
  }

  const continueQuestion = () => {
    if (!scenario || !currentQuestion) return
    const value = answers[currentQuestion.id]
    if (currentQuestion.required && (value === undefined || value === '')) {
      setError('Escolhe uma opção ou preenche este campo para continuar.')
      return
    }
    track('assessment_step_completed', { scenario_id: scenario.id, question_id: currentQuestion.id, step: questionIndex + 1 })
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((index) => index + 1)
      setError(undefined)
      return
    }
    const nextResult = assessScenario(scenario, answers)
    setResult(nextResult)
    setStage('result')
    track('assessment_completed', { scenario_id: scenario.id, result_state: nextResult.state })
    if (nextResult.state === 'potential') track('potential_claim_identified', { scenario_id: scenario.id })
  }

  const goBack = () => {
    setError(undefined)
    if (questionIndex === 0) setStage('scenario')
    else setQuestionIndex((index) => index - 1)
  }

  const showLeadForm = () => {
    setStage('lead')
    track('lead_form_viewed', { scenario_id: scenario?.id, result_state: result?.state })
  }

  const restart = () => {
    setStage('scenario')
    setScenarioId(undefined)
    setAnswers({})
    setQuestionIndex(0)
    setResult(undefined)
    setError(undefined)
  }

  const progress = stage === 'scenario' ? 8 : stage === 'questions' ? ((questionIndex + 1) / Math.max(questions.length, 1)) * 88 : 100

  return (
    <div className={`assessment-card stage-${stage}`}>
      {stage === 'scenario' && (
        <div className="stage-enter">
          <div className="eyebrow">AVALIAÇÃO GRATUITA · PASSO 1</div>
          <h1 id="hero-title">Descobre se podes ter direito a receber uma compensação</h1>
          <p className="hero-copy">Responde a algumas perguntas sobre a tua situação profissional e recebe uma avaliação preliminar em poucos minutos.</p>
          <fieldset className="scenario-grid" id="situacoes">
            <legend className="sr-only">Seleciona a tua situação profissional</legend>
            {scenarios.map((item) => <ScenarioCard key={item.id} scenario={item} selected={scenarioId === item.id} onSelect={() => selectScenario(item.id)} />)}
          </fieldset>
          <div className="assessment-footer">
            <p aria-live="polite">{scenario ? `Selecionaste: ${scenario.shortTitle}` : 'Seleciona a opção que melhor descreve o que aconteceu.'}</p>
            <button className="button" type="button" disabled={!scenario} onClick={startQuestions}>Continuar <Icon name="arrow" size={18} /></button>
          </div>
        </div>
      )}

      {stage === 'questions' && scenario && currentQuestion && (
        <div className="question-stage stage-enter">
          <ProgressIndicator value={progress} label={`Pergunta ${questionIndex + 1} de ${questions.length}`} />
          <div className="question-context"><span>{scenario.shortTitle}</span><button type="button" onClick={() => setStage('scenario')}>Alterar situação</button></div>
          <div className="question-heading">
            <div className="eyebrow">AVALIAÇÃO PRELIMINAR</div>
            <h2 ref={headingRef} tabIndex={-1}>{currentQuestion.title}</h2>
            {currentQuestion.help && <p id={`${currentQuestion.id}-help`}>{currentQuestion.help}</p>}
          </div>
          <QuestionInput question={currentQuestion} value={answers[currentQuestion.id]} onChange={answerQuestion} error={error} />
          {error && <p className="field-error" id={`${currentQuestion.id}-error`} role="alert">{error}</p>}
          {!currentQuestion.required && <p className="optional-note">Este campo é opcional. Podes avançar sem o preencher.</p>}
          <div className="wizard-actions">
            <button className="button button-ghost" type="button" onClick={goBack}><Icon name="back" size={18} /> Voltar</button>
            <button className="button" type="button" onClick={continueQuestion}>{questionIndex === questions.length - 1 ? 'Ver resultado' : 'Continuar'} <Icon name="arrow" size={18} /></button>
          </div>
          <p className="privacy-microcopy"><Icon name="lock" size={15} /> As tuas respostas mantêm-se neste dispositivo durante a avaliação.</p>
        </div>
      )}

      {stage === 'result' && scenario && result && (
        <ResultSummary ref={headingRef} scenario={scenario} result={result} onBack={() => { setStage('questions'); setQuestionIndex(Math.max(questions.length - 1, 0)) }} onLead={showLeadForm} onRestart={restart} />
      )}

      {stage === 'lead' && scenario && result && (
        <LeadForm ref={headingRef} scenario={scenario} answers={answers} result={result} onBack={() => setStage('result')} onPrepared={() => setStage('prepared')} />
      )}

      {stage === 'prepared' && (
        <div className="prepared-state stage-enter">
          <span className="result-icon"><Icon name="check" size={28} /></span>
          <div className="eyebrow">PEDIDO PREPARADO</div>
          <h2 ref={headingRef} tabIndex={-1}>Os teus dados foram validados</h2>
          <p>Este protótipo ainda não envia informação. Quando a ligação segura ao serviço estiver ativa, poderás confirmar o envio a um profissional independente.</p>
          <div className="notice-box"><Icon name="info" /><span>Nenhum advogado recebeu os teus dados e não foi criada uma relação advogado-cliente.</span></div>
          <button className="button" type="button" onClick={restart}>Fazer nova avaliação</button>
        </div>
      )}
    </div>
  )
}
