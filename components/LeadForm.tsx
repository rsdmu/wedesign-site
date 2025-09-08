"use client";
import { useState } from "react";

export default function LeadForm() {
  const [state, setState] = useState<{status: 'idle'|'loading'|'ok'|'error', msg?: string}>({status: 'idle'});
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setState({status:'loading'});
    try {
      const res = await fetch('/api/lead', { method: 'POST', body: JSON.stringify(data) });
      if (!res.ok) throw new Error('Failed');
      setState({status:'ok', msg:'Thanks — we will be in touch soon.'});
      e.currentTarget.reset();
    } catch (e) {
      setState({status:'error', msg:'Something went wrong. Please email hello@wedesign.one'});
    }
  }
  return (
    <form onSubmit={onSubmit} className="paper grid gap-3 p-4 md:grid-cols-2 md:p-6">
      <input name="name" required placeholder="Your name" className="rounded-lg border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10" />
      <input name="email" required type="email" placeholder="Work email" className="rounded-lg border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10" />
      <input name="org" placeholder="Organization" className="rounded-lg border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10 md:col-span-2" />
      <textarea name="message" placeholder="Tell us about your context (optional)" className="h-28 rounded-lg border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10 md:col-span-2" />
      <div className="md:col-span-2 flex items-center gap-3">
        <button disabled={state.status==='loading'} className="btn-primary">{state.status==='loading'?'Submitting…':'Request Access'}</button>
        {state.status!=='idle' && <p className="text-sm text-muted">{state.msg}</p>}
      </div>
    </form>
  );
}
