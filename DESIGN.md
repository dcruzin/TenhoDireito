---
name: Civic Legal Clarity
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#43474c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#74777d'
  outline-variant: '#c3c7cd'
  surface-tint: '#4c6075'
  primary: '#000f1d'
  on-primary: '#ffffff'
  primary-container: '#0f2537'
  on-primary-container: '#788da3'
  inverse-primary: '#b3c9e0'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#001209'
  on-tertiary: '#ffffff'
  tertiary-container: '#002a1b'
  on-tertiary-container: '#1a9e70'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cfe5fd'
  primary-fixed-dim: '#b3c9e0'
  on-primary-fixed: '#061d2f'
  on-primary-fixed-variant: '#34495c'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-hero:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  currency-callout:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an empathetic, reassuring, and rigorously transparent civic-legal presence. It removes the intimidation, convoluted jargon, and visual fatigue often associated with bureaucratic legal claims in Portugal, substituting them with clarity, optimism, and procedural momentum.

The design movement combines **Corporate Modern** with **Civic Fintech** qualities:
- **Tone & Demeanor**: Authoritative yet deeply approachable, ethical, transparent, and frictionless.
- **Visual Stance**: Ample breathable canvas, precise structural alignment, and friendly interactive surfaces that guide claimants confidently through eligibility checks and compensation estimates.
- **Target Audience Experience**: Users experiencing stress or frustration from flight cancellations, consumer disputes, or labor delays must immediately feel protected, taken seriously, and empowered by actionable data.

## Colors

The palette balances legal gravity with consumer confidence and optimistic outcomes:

- **Primary (`#0F2537`)**: Deep Atlantic Navy. Anchors legal credibility, institutional reliability, navigation chrome, high-contrast headings, and primary form actions.
- **Secondary (`#D97706`)**: Warm Golden Amber. Reserved exclusively for compensation callouts, potential payout figures, currency metrics, and highlight indicators that signal tangible value for the user.
- **Tertiary (`#059669`)**: Forest Verification Green. Signals verified status, confirmed eligibility badges, successful document uploads, and affirmative pathway outcomes.
- **Neutral (`#F8FAFC`)**: Crisp Warm Slate. Delivers soft canvas luminosity without the harsh glare of pure white. Surfaces layer above it using pure white `#FFFFFF` for primary interaction cards and `#E2E8F0` for structural delimiters.

Functional state accents:
- **Error/Destructive**: `#DC2626` for rejected claims, invalid NIF entries, and missing statutory criteria.
- **Surface Contrast Tier**: Canvas `#F8FAFC`, Elevated Card `#FFFFFF`, Active Selection Accent `#EFF6FF`.

## Typography

The single font family **Manrope** unifies the system across geometric structure, open aperture, and modern technical precision. Manrope eliminates institutional stuffiness while maintaining legal legibility.

- **Display & Headlines**: Heavy weights (`700` and `800`) paired with subtle negative tracking (`-0.01em` to `-0.03em`) assert confidence and authority on questions of legal rights and eligibility steps.
- **Numbers & Currencies**: Utilize tabular figures (`tnum`) in compensation breakdowns, flight delays, statutory interest calculations, and payout counters.
- **Body & Captions**: Generous line heights (`1.5` to `1.55`) ensure effortless readability across long-form statutory disclaimers and multi-paragraph advisory summaries.

## Layout & Spacing

The layout is built on a responsive 12-column fluid grid system on desktop, collapsing to 8 columns on tablet and 4 columns on mobile viewports.

- **Breakpoints**: Mobile (`<640px`), Tablet (`640px`–`1023px`), Desktop (`1024px+`), Wide Desktop (`1280px+`).
- **Claim & Funnel Max Width**: Form intake flows, eligibility multi-step sequences, and confirmation screens must be constrained to a focused max-width of `680px` to maintain high completion velocity and low visual anxiety.
- **Dashboard & Comparison Grid**: Expanded views use a max-width of `1200px` with `1.5rem` gutters to house side-by-side claim parameters and payout comparisons.
- **Vertical Rhythm**: A strict 4px/8px incremental rhythm governs section stacks. Forms cluster related inputs with `space-md` (`1rem`) and isolate sequential question blocks with `space-xl` (`2.5rem`).

## Elevation & Depth

Visual hierarchy uses a refined hybrid of **low-contrast structural borders** and **deep ambient micro-shadows**. Surfaces convey stability rather than floating detachment:

- **Level 0 (Canvas)**: Base background `#F8FAFC`. Zero elevation, non-interactive.
- **Level 1 (Resting Cards & Steppers)**: `#FFFFFF` surface with a `1px` continuous border of `#E2E8F0` and an ambient shadow: `box-shadow: 0 1px 3px 0 rgba(15, 37, 55, 0.04), 0 1px 2px -1px rgba(15, 37, 55, 0.03)`.
- **Level 2 (Interactive / Selectable Cards)**: Hover state shifts border to `#CBD5E1` with elevation: `box-shadow: 0 4px 6px -1px rgba(15, 37, 55, 0.07), 0 2px 4px -2px rgba(15, 37, 55, 0.05)`.
- **Level 3 (Selected State)**: Active selection cards utilize a `2px` border colored in `#0F2537` or `#059669` depending on outcome context, backed by an ambient tint: `box-shadow: 0 0 0 1px #0F2537, 0 10px 15px -3px rgba(15, 37, 55, 0.08)`.
- **Level 4 (Modals & Bottom Drawers)**: High-altitude surfaces apply `box-shadow: 0 20px 25px -5px rgba(15, 37, 55, 0.12), 0 8px 10px -6px rgba(15, 37, 55, 0.06)` combined with a frosted backdrop overlay (`rgba(15, 37, 55, 0.4)` with `backdrop-filter: blur(4px)`).

## Shapes

The roundedness level is **Rounded** (`value: 2`):
- **Base Components (Inputs, Buttons, Badges)**: `0.5rem` (`8px`) border radius. This introduces an immediate friendly human feel without sacrificing institutional rigor.
- **Cards, Intake Selection Panels, & Containers**: `1rem` (`16px`) border radius (`rounded-lg`) produces a soft visual envelope that invites tap and click interaction.
- **Modal Dialogs & Payout Hero Banners**: `1.5rem` (`24px`) border radius (`rounded-xl`) frames pivotal outcomes and milestones.
- **Pills**: Badges and status pills utilize full curvature (`9999px`) to distinguish categorical metadata from interactive rectangular targets.

## Components

### Buttons
- **Primary**: Background `#0F2537`, text `#FFFFFF`, height `48px`, padding `0 24px`, font `label-lg`. On hover: `#1E3A5F` with gentle translateY(-1px).
- **Secondary / Outcome Action**: Background `#059669`, text `#FFFFFF`, used exclusively for confirming claims and triggering payout submission steps. On hover: `#047857`.
- **Payout Accent**: Background `#D97706`, text `#FFFFFF`, applied on initial conversion hooks ("Calcular Compensação"). On hover: `#B45309`.
- **Ghost / Back Action**: Transparent surface, text `#0F2537`, border `1px solid #E2E8F0`. On hover: background `#F1F5F9`.

### Selection & Decision Cards (Frictionless Intake)
- Used for single/multi-choice triage (e.g., "Atraso superior a 3 horas", "Cancelamento").
- Resting state: `#FFFFFF` surface, `1.5px` border `#E2E8F0`, padding `20px`.
- Active/Selected state: border `2px solid #0F2537`, background `#F8FAFC` with a top-right checked indicator ring.

### Badges & Status Chips
- **Eligible Badge**: Background `#ECFDF5`, text `#065F46`, border `1px solid #A7F3D0`, font `label-md`, radius `9999px`. Prefixed with a crisp checkmark icon.
- **Under Review / Caution**: Background `#FEF3C7`, text `#92400E`, border `1px solid #FDE68A`.
- **Ineligible**: Background `#FEF2F2`, text `#991B1B`, border `1px solid #FECACA`.

### Input Fields & Selects
- Height `48px`, radius `8px`, border `1px solid #CBD5E1`, background `#FFFFFF`, font `body-md`.
- Focus state: border `2px solid #0F2537`, zero harsh box-shadow, outline none.
- Portuguese-specific fields (NIF, IBAN, Flight Code) feature embedded prefix icons and automated formatting masks.

### Step Indicator (Progress Header)
- Horizontal connected tracker featuring numbered nodes (`32px` circles).
- Completed steps: `#059669` fill with white checkmark.
- Active step: `#0F2537` ring with white center.
- Pending steps: `#E2E8F0` fill with `#64748B` label text. Connected via `2px` track lines.

### Payout Estimate Hero Card
- A distinct high-impact container highlighting estimated compensation (e.g., "€600 por passageiro").
- Background: Linear gradient from `#FFFFFF` to `#FEFCE8`, border `1.5px solid #FDE68A`, elevation Level 2.
- Contains primary amber currency callout, statutory basis tag ("Regulamento CE 261/2004"), and zero-risk legal reassurance microcopy.