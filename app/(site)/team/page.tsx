import Section from "@/components/Section";

const TEAM = [
  {name: "Rashid Mushkani", role: "CEO"},
  {name: "Hugo Berard", role: "CTO"},
  {name: "Shin Koseki", role: "CFO"},
];

export default function TeamPage(){
  return (
    <>
      <Section className="pt-12 md:pt-20">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Team</h1>
        <p className="mt-3 text-white/80">We are urbanists and technologists working at the intersection of AI and public space.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {TEAM.map(m => (
            <div key={m.name} className="card">
              <div className="h-24 w-24 rounded-full bg-white/10 border border-white/10" />
              <div className="mt-3 text-white font-medium">{m.name}</div>
              <div className="text-white/70 text-sm">{m.role}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
