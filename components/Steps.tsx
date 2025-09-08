import React from "react";

export default function Steps({steps}:{steps:{title:string, body:string}[]}){
  return (
    <ol className="grid md:grid-cols-3 gap-4">
      {steps.map((s, i) => (
        <li key={i} className="card">
          <div className="text-white/40 text-sm">Step {String(i+1).padStart(2, '0')}</div>
          <div className="mt-2 text-base font-medium text-white">{s.title}</div>
          <p className="mt-2 text-sm text-white/80 leading-6">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
