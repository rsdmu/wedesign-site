export default function VideoCard() {
  return (
    <div className="paper overflow-hidden">
      <video className="h-full w-full" src="/videos/demo.mp4" poster="/og.png" controls playsInline />
    </div>
  );
}
