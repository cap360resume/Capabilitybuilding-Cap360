

# Apply New Sub-Page UI Template Across All Verticals

## What We're Building

Rewrite all 16 sub-service pages to match the new layout you shared for ManagedHR. The new template replaces the current simple "hero + card grid + stats + CTA" layout with a richer Accenture-style structure:

1. **Breadcrumb** — Service > Sub-service name
2. **Hero** — Split layout with left image and right text (title + description)
3. **Context Section** — Left paragraph + right data callout card (stat + explanation)
4. **Vision Section** — Heading, left image, right text with description
5. **Accordion Section ("How We Support")** — Expandable items with animated orange bar and +/- toggle, each containing detailed bullet-point content
6. **Slider Section ("What You'll Achieve")** — Horizontal card carousel with icon, title, description, and prev/next navigation
7. **CTA Banner** — Full-width call-to-action
8. **Footer**

## Pages to Update (16 total)

**HRCAMS (6):** PerformanceManagement, TotalRewards, LabourLaw, GenAIHR, OrgDesign, ManagedHR

**ASER (4):** CompetencyAssessments, AssessmentCentres, PsychometricTesting, TalentAnalytics

**TCB (6):** LeadershipDevelopment, DigitalUpskilling, TeamEffectiveness, InnovationDesignThinking, LearningExperienceDesign, CertificationCompliance

**PACE (6):** CareerPathArchitecture, ProfessionalCoaching, RoleAlignment, SuccessionPlanning, CareerTransition, IndividualDevelopment

## Technical Approach

1. **Each page** will follow the same 7-section structure with service-specific content:
   - Unique hero image (reuse existing `service-hero-*.jpg` assets per vertical)
   - Unique data stat and explanation for the context card
   - Unique vision/strategy paragraph and image
   - 3 accordion items with detailed JSX content (paragraphs + bullet lists)
   - 5 slider cards with icons, titles, and descriptions
   - Unique CTA text

2. **Shared patterns:**
   - `useState` for accordion `activeIndex` and slider `index`
   - `AnimatePresence` + `motion.div` for accordion open/close
   - Slider uses CSS `translateX` with prev/next buttons
   - `useScrollAnimation` for scroll-triggered sections
   - Consistent Tailwind classes matching the template

3. **Images:** Will use existing hero images per vertical. The template references `Genai.png` and `hrservices.jpg` — for non-HRCAMS pages, we'll use the corresponding vertical's hero image as placeholder since no new images were provided.

4. **No new components** — the template is self-contained within each page file, keeping the pattern consistent with the provided code.

## Content Strategy

Each page gets domain-specific content:
- **Accordion items**: 3 expandable sections covering key service pillars with bullet-point details
- **Slider cards**: 5 outcome-focused cards describing what clients achieve
- **Data card**: A relevant industry statistic with source-style explanation
- **Vision text**: How the service transforms the specific domain

