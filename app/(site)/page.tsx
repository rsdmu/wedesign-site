import Section from "@/components/Section";
import { Button } from "@/components/Button";
import VideoPlayer from "@/components/VideoPlayer";
import Marquee from "@/components/Marquee";
import FeatureCard from "@/components/FeatureCard";
import Steps from "@/components/Steps";

export default function Page(){
  return (
    <>
      <Section className="pt-12 md:pt-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block"></span>
              Participatory AI for cities
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
              Design inclusive public spaces with <span className="gradient-text">WeDesign+</span>
            </h1>
            <p className="mt-4 text-white/80 leading-7 max-w-xl">
              WeDesign+ helps municipalities and community partners discover what diverse residents value in streets, parks, and plazas—then co-create designs everyone can live with.
            </p>
            <div className="mt-6 flex gap-3">
              <Button href="/contact">Request a demo</Button>
              <Button href="/product" variant="ghost">Explore the product</Button>
            </div>
            <div className="mt-8 text-xs text-white/50 max-w-lg">
              Backed by dialogue-based methods that increased agreement after group discussion.
            </div>
          </div>
          <div className="lg:col-span-6">
            <VideoPlayer />
          </div>
        </div>
      </Section>

      <Section className="mt-12 md:mt-20">
        <div className="text-white/70 text-sm">Trusted by community partners</div>
        <Marquee />
      </Section>

      <Section className="mt-16 md:mt-24">
        <div className="grid md:grid-cols-3 gap-4">
          <FeatureCard title="See what residents see">
            Use image-based prompts of real streets to rapidly gather preferences across key street-quality dimensions.
          </FeatureCard>
          <FeatureCard title="Facilitate consensus">
            Move from individual ratings to small-group dialogue and re-evaluation to surface agreements and disagreements.
          </FeatureCard>
          <FeatureCard title="Design with confidence">
            Turn patterns into actionable design briefs and before/after concepts stakeholders understand.
          </FeatureCard>
        </div>
      </Section>

      <Section className="mt-16 md:mt-24">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <h2 className="text-2xl font-semibold">How it works</h2>
            <p className="mt-3 text-white/80 max-w-2xl">A repeatable, mixed-methods workflow that captures authentic local knowledge and balances plural values.</p>
            <div className="mt-6">
              <Steps steps={[
                {title: "Recruit & listen", body: "Partner with community organizations; recruit across a diversity grid and conduct interviews to gather context."},
                {title: "Rate what matters", body: "Residents individually rate street images, then discuss and re-evaluate together."},
                {title: "Rank & brief", body: "Convert agreement patterns into ranked options and a design brief, then show before/after concepts stakeholders can compare."}
              ]} />
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="card">
              <h3 className="text-white text-lg font-semibold">Ethical safeguards</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>Pluralistic alignment across values (equal-weight ratings)</li>
                <li>Local place understanding in model training</li>
                <li>Transparent methods and repeatable small-group consultations</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="mt-20">
        <div className="glass rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">Imagine the future of Site Victoria (Précision)</h3>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">From “a quiet, inclusive meditation garden in a busy urban area” to concrete concept images and design trade‑offs everyone understands.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button href="/product" variant="ghost">See capabilities</Button>
            <Button href="/contact">Book a walkthrough</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
