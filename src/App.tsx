import { useState } from 'react'
import { EligibilityWizard } from './components/EligibilityWizard'
import { Header } from './components/Header'
import { EthicsSection, FAQ, Footer, HowItWorks, LawyerSection, TrustSignals } from './components/Sections'

export default function App() {
  const [resetSignal, setResetSignal] = useState(0)

  const openAssessment = () => {
    setResetSignal((value) => value + 1)
    document.getElementById('avaliacao')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div id="top">
      <Header onAssessmentClick={openAssessment} />

      <main>
        <section className="hero" id="avaliacao" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <EligibilityWizard resetSignal={resetSignal} />
          <TrustSignals />
        </section>
        <HowItWorks />
        <LawyerSection />
        <EthicsSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
