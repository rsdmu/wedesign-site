import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";

export default function ProductPage(){
  return (
    <>
      <Section className="pt-12 md:pt-20">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Product</h1>
        <p className="mt-3 text-white/80 max-w-2xl">WeDesign+ is a research-informed platform that blends participatory workshops, image-based rating tools, and AI-assisted analysis to help cities design better public spaces.</p>
      </Section>

      <Section className="mt-12 grid md:grid-cols-3 gap-4">
        <FeatureCard title="Community recruitment">
          Reach 100+ organizations, recruit residents across a diversity grid, and capture interviews for context.
        </FeatureCard>
        <FeatureCard title="Rating & ranking engine">
          Collect individual ratings on key criteria and facilitate group re-evaluations; rank images based on feedback.
        </FeatureCard>
        <FeatureCard title="Dialogue analytics">
          See agreement and disagreement patterns; quantify the effect of discussion.
        </FeatureCard>
      </Section>

      <Section className="mt-12 grid md:grid-cols-2 gap-4">
        <FeatureCard title="Brief & concepts">
          Turn results into clear design briefs and before/after image concepts for stakeholder dialogue.
        </FeatureCard>
        <FeatureCard title="Governance & ethics">
          Built-in plural value alignment, equal-weight ratings, and local place understanding to reduce bias.
        </FeatureCard>
      </Section>
    </>
  )
}
