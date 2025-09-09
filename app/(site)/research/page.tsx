import Section from "@/components/Section";

export default function ResearchPage(){
  return (
    <>
      <Section className="pt-12 md:pt-20 prose prose-invert max-w-none">
        <h1>Research & Ethics</h1>
        <p>WeDesign+ stands on established research in citizen engagement and participatory methods. Our workflow is designed to increase agreement through structured group dialogue while keeping plural values visible.</p>
        <h2>Selected references</h2>
        <ul>
          <li>
            <a href="https://doi.org/10.48550/arXiv.2508.00138">
              Mushkani, R., Berard, H., Ammar, T., Chatonnier, C., & Koseki, S. (2025). Co-producing AI: Toward an
              augmented, participatory lifecycle.
            </a>
          </li>
          <li>
            <a href="https://doi.org/10.1016/j.jum.2025.07.004">
              Mushkani, R., Berard, H., Ammar, T., & Koseki, S. (2025). Public perceptions of Montréal’s streets:
              Implications for inclusive public space making and management. Journal of Urban Management.
            </a>
          </li>
          <li>
            <a href="https://doi.org/10.48550/arXiv.2501.17899">
              Mushkani, R., Berard, H., Cohen, A., & Koseki, S. (2025). The right to AI.
            </a>
          </li>
          <li>
            <a href="https://doi.org/10.48550/arXiv.2508.19256">
              Mushkani, R., Berard, H., & Koseki, S. (2025). WeDesign: Generative AI-facilitated community
              consultations for urban public space design.
            </a>
          </li>
          <li>
            <a href="https://doi.org/10.1016/j.habitatint.2025.103536">
              Mushkani, R., & Koseki, S. (2025). Intersecting perspectives: A participatory street review framework
              for urban inclusivity. Habitat International, 164, 103536.
            </a>
          </li>
          <li>
            <a href="https://doi.org/10.48550/arXiv.2503.01894">
              Mushkani, R., Nayak, S., Berard, H., Cohen, A., Koseki, S., & Bertrand, H. (2025). LIVS: A pluralistic
              alignment dataset for inclusive public spaces.
            </a>
          </li>
        </ul>
        <h2>Ethical safeguards</h2>
        <ul>
          <li>Pluralistic alignment techniques; equal-weight ratings</li>
          <li>Local place understanding in training data</li>
          <li>Transparent small‑group consultations; auditability of shifts pre/post discussion</li>
        </ul>
      </Section>
    </>
  )
}
