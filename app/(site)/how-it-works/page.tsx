import Section from "@/components/Section";
import Steps from "@/components/Steps";

export default function HowItWorksPage(){
  return (
    <>
      <Section className="pt-12 md:pt-20">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">How it works</h1>
        <p className="mt-3 text-white/80 max-w-2xl">
          A structured co-creation workflow that turns community ideas into a tagged image library for future planning.
        </p>
        <div className="mt-8">
          <Steps
            steps={[
              {
                title: "Co-create prompts",
                body: "Small groups brainstorm ambiance, usage, and materiality, then draft text prompts together.",
              },
              {
                title: "Generate & discuss",
                body: "WeDesign turns prompts into images; participants review results, comment, and iterate to refine their intent.",
              },
              {
                title: "Tag and store",
                body: "Prompt–image–comment sets are saved with metadata and theme tags for future reference.",
              },
              {
                title: "Reuse in planning",
                body: "Clustered images support consultation boards, design briefs, policy guidelines, and ongoing analysis.",
              },
            ]}
          />
        </div>
      </Section>
    </>
  )
}
