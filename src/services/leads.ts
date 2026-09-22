import type { Lead } from '../types'

export interface LeadPreparation {
  status: 'prepared-locally'
  createdAt: string
}

export async function prepareLead(_lead: Lead): Promise<LeadPreparation> {
  await new Promise((resolve) => window.setTimeout(resolve, 450))
  return { status: 'prepared-locally', createdAt: new Date().toISOString() }
}
