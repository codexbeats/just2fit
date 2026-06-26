export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`font-display flex items-end tracking-tighter uppercase ${className}`}>
      <span className="text-primary drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">JUST</span>
      <span className="text-white text-[1.15em] mx-0.5 sm:mx-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">2</span>
      <span className="text-[#FF0000] drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">FIT</span>
      <span className="text-white text-[0.6em] mb-[0.1em] ml-0.5 sm:ml-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">GYM</span>
    </div>
  );
}
