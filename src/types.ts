export type AnswerValue = string | number | boolean

export type Answer = Record<string, AnswerValue>

export interface QuestionOption {
  value: string
  label: string
  hint?: string
}

export interface QuestionCondition {
  questionId: string
  equals?: AnswerValue
  oneOf?: AnswerValue[]
}

export interface Question {
  id: string
  type: 'single' | 'date' | 'money'
  title: string
  help?: string
  options?: QuestionOption[]
  required?: boolean
  condition?: QuestionCondition
}

export interface Scenario {
  id: string
  title: string
  shortTitle: string
  description: string
  icon: 'departure' | 'calendar' | 'exit' | 'euro' | 'clock' | 'sun' | 'other'
  questions: Question[]
}

export type ResultState = 'potential' | 'review' | 'no-obvious'

export interface Estimate {
  status: 'requires-review'
  label: string
  components: string[]
}

export interface EligibilityResult {
  state: ResultState
  title: string
  description: string
  reasons: string[]
  estimate: Estimate
}

export interface Lead {
  name: string
  email: string
  phone: string
  contactMethod: 'email' | 'phone' | 'whatsapp'
  description?: string
  consent: boolean
  scenarioId: string
  answers: Answer
  resultState: ResultState
}
