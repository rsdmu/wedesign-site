export default function Section({ id, eyebrow, title, children, subtitle }: { id?: string; eyebrow?: string; title: string; subtitle?: string; children?: React.ReactNode }) {
  return (
    <section id={id} className="container-prose mb-20 mt-14">
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && <div className="mb-3 text-xs uppercase tracking-widest text-muted">{eyebrow}</div>}
        <h2 className="headline">{title}</h2>
        {subtitle && <p className="subhead mt-4">{subtitle}</p>}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}
