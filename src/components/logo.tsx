export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`font-display flex items-end tracking-tighter ${className}`}>
      <span className="text-primary drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">JUST</span>
      <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] ml-1">2</span>
      <span className="text-[#FF0000] drop-shadow-[0_0_8px_rgba(255,0,0,0.5)] ml-1">FIT</span>
      <span className="text-white text-[0.55em] mb-[0.1em] ml-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">GYM</span>
    </div>
  );
}
