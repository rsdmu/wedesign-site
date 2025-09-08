export default function FeatureCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="paper p-6">
      <h3 className="mb-2 text-lg font-medium">{title}</h3>
      <p className="text-sm text-muted">{children}</p>
    </div>
  );
}
