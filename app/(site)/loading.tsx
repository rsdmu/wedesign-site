export default function Loading(){
  return (
    <div className="container-2xl py-20">
      <div className="animate-pulse h-8 w-64 rounded bg-white/10" />
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="h-32 bg-white/5 rounded" />
        <div className="h-32 bg-white/5 rounded" />
        <div className="h-32 bg-white/5 rounded" />
      </div>
    </div>
  )
}
