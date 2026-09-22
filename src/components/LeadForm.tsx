import { forwardRef, useState } from 'react'
import { track } from '../lib/analytics'
import { prepareLead } from '../services/leads'
import type { Answer, EligibilityResult, Lead, Scenario } from '../types'
import { Icon } from './Icons'

interface LeadFormProps {
  scenario: Scenario
  answers: Answer
  result: EligibilityResult
  onBack: () => void
  onPrepared: () => void
}

type LeadDraft = Pick<Lead, 'name' | 'email' | 'phone' | 'contactMethod' | 'description' | 'consent'>

export const LeadForm = forwardRef<HTMLHeadingElement, LeadFormProps>(function LeadForm({ scenario, answers, result, onBack, onPrepared }, ref) {
  const [lead, setLead] = useState<LeadDraft>({ name: '', email: '', phone: '', contactMethod: 'email', description: '', consent: false })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)

  const update = <K extends keyof LeadDraft>(key: K, value: LeadDraft[K]) => {
    setLead((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: '' }))
  }

  const submit = async (event: React.FormEvent) => {
    event.preventDefault()
    const nextErrors: Record<string, string> = {}
    if (!lead.name.trim()) nextErrors.name = 'Indica o teu nome.'
    if (!/^\S+@\S+\.\S+$/.test(lead.email)) nextErrors.email = 'Indica um email válido.'
    if (!/^[+\d][\d\s()-]{7,}$/.test(lead.phone)) nextErrors.phone = 'Indica um número de telefone válido.'
    if (!lead.consent) nextErrors.consent = 'É necessário aceitar para preparar o pedido.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      document.getElementById(Object.keys(nextErrors)[0])?.focus()
      return
    }
    setSubmitting(true)
    await prepareLead({ ...lead, scenarioId: scenario.id, answers, resultState: result.state })
    track('lead_submitted', { scenario_id: scenario.id, result_state: result.state, simulated: true })
    setSubmitting(false)
    onPrepared()
  }

  return (
    <div className="lead-stage stage-enter">
      <div className="eyebrow">ANÁLISE PROFISSIONAL</div>
      <h2 ref={ref} tabIndex={-1}>Como podemos contactar-te?</h2>
      <p className="lead-intro">Preenche apenas os dados necessários para preparar o pedido. Antes de um envio real, poderás confirmar com quem serão partilhados.</p>
      <form noValidate onSubmit={submit}>
        <div className="form-grid">
          <label className="form-field full"><span>Nome</span><input id="name" autoComplete="name" value={lead.name} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} onChange={(e) => update('name', e.target.value)} />{errors.name && <small id="name-error" className="field-error">{errors.name}</small>}</label>
          <label className="form-field"><span>Email</span><input id="email" type="email" autoComplete="email" value={lead.email} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} onChange={(e) => update('email', e.target.value)} />{errors.email && <small id="email-error" className="field-error">{errors.email}</small>}</label>
          <label className="form-field"><span>Telefone</span><input id="phone" type="tel" autoComplete="tel" value={lead.phone} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} onChange={(e) => update('phone', e.target.value)} />{errors.phone && <small id="phone-error" className="field-error">{errors.phone}</small>}</label>
        </div>

        <fieldset className="contact-method">
          <legend>Como preferes ser contactado?</legend>
          {([['email', 'Email'], ['phone', 'Telefone'], ['whatsapp', 'WhatsApp']] as const).map(([value, label]) => (
            <label key={value}><input type="radio" name="contact-method" checked={lead.contactMethod === value} onChange={() => update('contactMethod', value)} /><span>{label}</span></label>
          ))}
        </fieldset>

        <label className="form-field full"><span>Queres acrescentar algum detalhe? <em>Opcional</em></span><textarea rows={4} value={lead.description} onChange={(e) => update('description', e.target.value)} placeholder="Conta-nos brevemente o que consideras importante." /></label>

        <label className={`consent-field ${errors.consent ? 'has-error' : ''}`}>
          <input id="consent" type="checkbox" checked={lead.consent} aria-invalid={Boolean(errors.consent)} aria-describedby="consent-copy consent-error" onChange={(e) => update('consent', e.target.checked)} />
          <span className="custom-checkbox"><Icon name="check" size={14} /></span>
          <span id="consent-copy">Autorizo o tratamento destes dados para preparar o pedido de análise e compreendo que, antes de qualquer partilha com um advogado independente, deverei confirmar o envio. Li a <a href="#privacidade">Política de Privacidade</a>.</span>
        </label>
        {errors.consent && <p id="consent-error" className="field-error">{errors.consent}</p>}

        <div className="notice-box"><Icon name="shield" /><span>Preparar este pedido não cria uma relação advogado-cliente e, nesta versão, nenhum dado é enviado.</span></div>

        <div className="wizard-actions">
          <button className="button button-ghost" type="button" onClick={onBack}><Icon name="back" size={18} /> Voltar</button>
          <button className="button button-success" type="submit" disabled={submitting}>{submitting ? 'A validar…' : 'Preparar pedido'} {!submitting && <Icon name="arrow" size={18} />}</button>
        </div>
      </form>
    </div>
  )
})
