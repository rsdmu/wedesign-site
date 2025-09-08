"use client";
import Section from "@/components/Section";
import { useState } from "react";

export default function ContactPage(){
  const [status, setStatus] = useState<null | "ok" | "error">(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form) as any);
    try{
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      });
      if (res.ok) setStatus("ok"); else setStatus("error");
    }catch(e){
      setStatus("error");
    }
  }

  return (
    <>
      <Section className="pt-12 md:pt-20">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Request a demo</h1>
        <p className="mt-3 text-white/80 max-w-2xl">Tell us about your project and we’ll reach out.</p>

        <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-4">
          <input className="rounded-xl px-4 py-3 bg-white text-black border border-white/10 placeholder:text-black/50" placeholder="Full name" name="name" required />
          <input className="rounded-xl px-4 py-3 bg-white text-black border border-white/10 placeholder:text-black/50" placeholder="Email" type="email" name="email" required />
          <input className="rounded-xl px-4 py-3 bg-white text-black border border-white/10 placeholder:text-black/50 md:col-span-2" placeholder="Organization / City" name="org" />
          <textarea className="rounded-xl px-4 py-3 bg-white text-black border border-white/10 placeholder:text-black/50 md:col-span-2" placeholder="What are you trying to achieve?" name="message" rows={6} required />
          <button className="md:col-span-2 inline-flex justify-center rounded-lg bg-white text-black px-5 py-3 font-medium">Send</button>
          {status === "ok" && <div className="text-emerald-400 md:col-span-2">Thanks! We’ll be in touch shortly.</div>}
          {status === "error" && <div className="text-red-400 md:col-span-2">Something went wrong. Email us at hello@wedesign.one</div>}
        </form>

        <div className="mt-8 text-sm text-white/60">Prefer email? <a className="underline" href="mailto:hello@wedesign.one">hello@wedesign.one</a></div>
      </Section>
    </>
  )
}
