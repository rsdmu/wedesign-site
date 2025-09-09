import Image from "next/image";
import Section from "@/components/Section";

interface TeamMember {
  name: string;
  image: string;
}

const TEAM: TeamMember[] = [
  { name: "Rashid Mushkani", image: "/rashid.png" },
  { name: "Hugo Berard", image: "/hugo.png" },
  { name: "Shin Koseki", image: "/shin.png" },
];

export default function TeamPage(){
  return (
    <>
      <Section className="pt-12 md:pt-20">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Team</h1>
        <p className="mt-3 text-white/80">
          We are urbanists and technologists working at the intersection of AI and public space.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {TEAM.map((m) => (
            <div key={m.name} className="card">
              <Image
                src={m.image}
                alt={`Portrait of ${m.name}`}
                width={96}
                height={96}
                className="h-24 w-24 rounded-full object-cover"
              />
              <div className="mt-3 text-white font-medium">{m.name}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
