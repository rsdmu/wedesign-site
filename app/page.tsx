import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import VideoCard from "@/components/VideoCard";
import LeadForm from "@/components/LeadForm";

export default function Page() {
  return (
    <div>
      {/* HERO */}
      <section className="container-prose relative">
        <div className="mx-auto max-w-3xl py-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-4 py-2 text-xs text-muted">
            <span>Research‑backed</span>
            <span>•</span>
            <span>Participatory AI</span>
          </div>
          <h1 className="headline">
            Design public spaces <span className="whitespace-nowrap">with everyone</span>
          </h1>
          <p className="subhead mt-4">
            WeDesign+ turns community ideas into instant visual scenarios, enabling equitable, bilingual consultations that balance creativity with feasibility.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link href="#cta" className="btn-primary">Request access</Link>
            <a href="#research" className="btn-ghost">See the evidence</a>
          </div>
        </div>
        <div className="paper mx-auto mt-10 max-w-5xl overflow-hidden">
          <Image src="/og.png" alt="WeDesign+ logo" width={2000} height={1000} className="h-auto w-full object-cover" />
        </div>
      </section>

      {/* PRODUCT */}
      <Section id="product" eyebrow="Product" title="Real‑time, bilingual co‑creation" subtitle="A lightweight interface that lets residents, urban professionals, and facilitators sketch possibilities together—no expert software required.">
        <div className="grid-cards">
          <FeatureCard title="Natural‑language prompting">
            Express ideas as you speak. WeDesign+ parses prompts in English or French and supports iterative refinement with negatives and re‑ordering.
          </FeatureCard>
          <FeatureCard title="Iterate in seconds">
            Generate multiple variants per prompt, heart the favorites, and branch—ideal for divergence then convergence during workshops.
          </FeatureCard>
          <FeatureCard title="Grounded context">
            Bring your own photos, sites, and references (roadmap). Region‑specific in‑painting lets you evolve one element without losing the whole scene.
          </FeatureCard>
          <FeatureCard title="Inclusive by design">
            Preference sliders make accessibility, biodiversity, or heritage explicit levers (roadmap). Decisions and rationales remain traceable.
          </FeatureCard>
          <FeatureCard title="Group decision tools">
            Built‑in voting and ranking help document consensus during sessions and export results into civic reports (roadmap).
          </FeatureCard>
          <FeatureCard title="Open & inspectable">
            WeDesign+ is being released as open source so communities can audit, extend, and host locally when needed.
          </FeatureCard>
        </div>
      </Section>

      {/* VIDEO */}
      <div className="container-prose">
        <VideoCard />
      </div>

      {/* RESEARCH */}
      <Section id="research" eyebrow="Research" title="Validated with real workshops" subtitle="A half‑day study in Montréal and expert interviews show how instant visuals spark engagement—while surfacing where AI must improve.">
        <div className="grid-cards">
          <FeatureCard title="Engagement & creativity">
            Immediate visuals catalyzed richer discussion and a sense of ownership across mixed groups (residents, designers, AI specialists).
          </FeatureCard>
          <FeatureCard title="Inclusivity gaps to solve">
            Models struggled to capture some reduced‑mobility needs and authentic local cues; bilingual prompts performed unevenly—driving our roadmap.
          </FeatureCard>
          <FeatureCard title="Operational pragmatism">
            Experts value early visuals but warn against 'fake perfects'. We balance aspiration with constraints through facilitation and UI.
          </FeatureCard>
        </div>
        <div className="mt-8 text-center text-sm text-muted">
          Read the manuscript and deck in <a className="underline" href="/docs/wedesign-manuscript-arxiv.docx">/docs</a>.
        </div>
      </Section>

      {/* FEATURES */}
      <Section id="features" eyebrow="Capabilities" title="What you can do today" subtitle="And what’s coming next.">
        <div className="grid-cards">
          <FeatureCard title="Text‑to‑image generation">
            Stable Diffusion XL backend with sensible defaults for public‑space ideation. Negative prompting and seed control for fast iteration.
          </FeatureCard>
          <FeatureCard title="Session archiving">
            Prompts, variants, and reactions are captured as a living record of participation and preference formation.
          </FeatureCard>
          <FeatureCard title="Facilitator‑first workflows">
            Light structure for divergence→convergence, bilingual prompts, and note‑taking—shaped with civic facilitators.
          </FeatureCard>
          <FeatureCard title="Roadmap: in‑painting">
            Brush‑based edits to adjust one element (e.g., ramps, benches) without regenerating the whole scene.
          </FeatureCard>
          <FeatureCard title="Roadmap: multilingual prompts">
            Built‑in translation and synonym suggestions to preserve local nomenclature while leveraging model strengths.
          </FeatureCard>
          <FeatureCard title="Roadmap: voting & sliders">
            Group voting and preference weighting for accessibility, biodiversity, heritage, and more.
          </FeatureCard>
        </div>
      </Section>

      {/* USE CASES */}
      <Section id="use-cases" eyebrow="Use Cases" title="Where WeDesign+ fits">
        <div className="grid-cards">
          <FeatureCard title="Municipal consultations">
            Early‑stage exploration for parks, promenades, streets, plazas and waterfronts—engage those who rarely see themselves in plans.
          </FeatureCard>
          <FeatureCard title="Civic & community groups">
            Run inclusive co‑creation workshops with lightweight facilitation. Export artifacts for follow‑up deliberation.
          </FeatureCard>
          <FeatureCard title="Studios & researchers">
            Probe citizen values, generate comparable variants, and study preference formation with transparent datasets.
          </FeatureCard>
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta" eyebrow="Get access" title="Join the WeDesign+ beta">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          <LeadForm />
          <div className="paper p-6 text-sm leading-relaxed text-muted">
            <p className="mb-3">We’re partnering with municipalities, community organizations and studios for pilots. Tell us about your context and we’ll follow up.</p>
            <ul className="list-disc pl-6">
              <li>Hostable on your infrastructure.</li>
              <li>Works in English and French (more to come).</li>
              <li>Open‑source, research‑backed, facilitator‑friendly.</li>
            </ul>
            <div className="mt-6 rounded-lg bg-black/5 p-4">
              <p className="mb-1 font-medium">Documents</p>
              <a className="underline" href="/docs/wedesign-manuscript-arxiv.docx">Research manuscript</a> ·{" "}
              <a className="underline" href="/docs/wedesign-deck.pptx">Pitch deck</a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
