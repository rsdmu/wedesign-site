import Section from "@/components/Section";

export default function OpenSourcePage() {
  return (
    <div className="container-prose">
      <Section
        title="Open, Inspectable, Extensible"
        subtitle="WeDesign+ is being developed as open-source software to empower communities, municipalities and researchers to build equitable, local-first consultation tooling."
      />
      <div className="paper p-6 leading-relaxed text-muted">
        <ul className="list-disc pl-6">
          <li>Transparent code and data pathways—facilitate community audit and improvement.</li>
          <li>Pluggable generation backends, including Stable Diffusion XL and emerging open models.</li>
          <li>Roadmap highlights: region‑specific in‑painting, bilingual prompt tooling, group voting and preference weighting, export pipelines for civic documentation.</li>
        </ul>
        <p className="mt-6">Want to contribute? Email <a className="underline" href="mailto:hello@wedesign.one">hello@wedesign.one</a> and we’ll invite you to the repository.</p>
      </div>
    </div>
  );
}
