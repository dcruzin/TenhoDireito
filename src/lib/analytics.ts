export type AnalyticsEvent =
  | 'assessment_started'
  | 'scenario_selected'
  | 'assessment_step_completed'
  | 'assessment_completed'
  | 'potential_claim_identified'
  | 'lead_form_viewed'
  | 'lead_submitted'

export function track(event: AnalyticsEvent, properties: Record<string, unknown> = {}) {
  window.dispatchEvent(new CustomEvent('tenhodireito:analytics', { detail: { event, properties } }))
  if (import.meta.env.DEV) console.info('[analytics]', event, properties)
}
