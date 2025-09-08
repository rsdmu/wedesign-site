import Section from "@/components/Section";

export default function ResearchPage(){
  return (
    <>
      <Section className="pt-12 md:pt-20 prose prose-invert max-w-none">
        <h1>Research & Ethics</h1>
        <p>WeDesign+ stands on established research in citizen engagement and participatory methods. Our workflow is designed to increase agreement on inclusivity and accessibility through structured group dialogue while keeping plural values visible.</p>
        <h2>Selected references</h2>
        <ul>
          <li>DataIntelo – Citizen Engagement Software Market (industry outlook)</li>
          <li>DataHorizzon Research – Citizen Engagement Software Market</li>
          <li>Shin B. et al. – A systematic analysis of digital tools for citizen participation</li>
          <li>Zhao B. et al. – Digital transparency and citizen participation: Evidence from the City of Sacramento</li>
        </ul>
        <h2>Ethical safeguards</h2>
        <ul>
          <li>Pluralistic alignment techniques; equal-weight ratings across criteria</li>
          <li>Local place understanding in training data</li>
          <li>Transparent small‑group consultations; auditability of shifts pre/post discussion</li>
        </ul>
      </Section>
    </>
  )
}
