import Section from "@/components/Section";
import Steps from "@/components/Steps";

export default function HowItWorksPage(){
  return (
    <>
      <Section className="pt-12 md:pt-20">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">How it Works</h1>
        <p className="mt-3 text-white/80 max-w-2xl">We combine public perception, structured rating, and dialogue to capture what matters—and where values diverge.</p>
        <div className="mt-8">
          <Steps steps={[
            {title: "Public perception & site selection", body: "Select representative streets and spaces via a diversity grid and local knowledge."},
            {title: "Individual rating", body: "Residents score 20 images on 4 key criteria to establish baselines."},
            {title: "Group rating & re-evaluation", body: "Small groups discuss, re-evaluate with all 12 criteria, and document rationales."},
            {title: "Ranking exercise", body: "Rank 7 options with full criteria to reveal trade-offs and consensus."},
            {title: "Results synthesis", body: "Surface agreement vs. disagreement, including shifts post‑dialogue."},
            {title: "Design briefing", body: "Translate insights into a design brief and before/after visuals."},
          ]} />
        </div>
      </Section>
    </>
  )
}
