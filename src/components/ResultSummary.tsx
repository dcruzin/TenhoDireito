import { forwardRef } from 'react'
import type { EligibilityResult, Scenario } from '../types'
import { Icon } from './Icons'

interface ResultSummaryProps {
  scenario: Scenario
  result: EligibilityResult
  onBack: () => void
  onLead: () => void
  onRestart: () => void
}

export const ResultSummary = forwardRef<HTMLHeadingElement, ResultSummaryProps>(function ResultSummary({ scenario, result, onBack, onLead, onRestart }, ref) {
  const badge = result.state === 'potential' ? 'Potencial a analisar' : result.state === 'review' ? 'Requer análise' : 'Sem valor evidente'
  const cta = result.state === 'potential' ? 'Pedir análise do meu caso' : result.state === 'review' ? 'Enviar para análise' : 'Pedir revisão profissional'

  return (
    <div className={`result-stage result-${result.state} stage-enter`}>
      <div className="result-topline">
        <span className="result-badge"><Icon name={result.state === 'no-obvious' ? 'info' : 'check'} size={15} /> {badge}</span>
        <span>{scenario.shortTitle}</span>
      </div>
      <span className="result-icon"><Icon name={result.state === 'potential' ? 'euro' : result.state === 'review' ? 'document' : 'info'} size={28} /></span>
      <div className="eyebrow">RESULTADO PRELIMINAR</div>
      <h2 ref={ref} tabIndex={-1}>{result.title}</h2>
      <p className="result-lead">{result.description}</p>

      <div className="estimate-card">
        <span className="estimate-label">Estimativa preliminar</span>
        <strong>{result.estimate.label}</strong>
        {result.estimate.components.length > 0 && (
          <div className="estimate-components">
            <span>A análise poderá considerar:</span>
            <ul>{result.estimate.components.map((component) => <li key={component}><Icon name="check" size={15} />{component}</li>)}</ul>
          </div>
        )}
      </div>

      <div className="result-reasons">
        <h3>O que pesou nesta avaliação</h3>
        <ul>{result.reasons.map((reason) => <li key={reason}><span aria-hidden="true" />{reason}</li>)}</ul>
      </div>

      <p className="legal-note"><Icon name="info" size={18} /> Esta é uma avaliação preliminar baseada nas informações fornecidas. Não constitui aconselhamento jurídico nem garante a existência de um direito a compensação.</p>

      <div className="wizard-actions result-actions">
        <button className="button button-ghost" type="button" onClick={onBack}><Icon name="back" size={18} /> Rever respostas</button>
        <button className="button button-success" type="button" onClick={onLead}>{cta} <Icon name="arrow" size={18} /></button>
      </div>
      <button className="text-button" type="button" onClick={onRestart}>Começar de novo</button>
    </div>
  )
})
