export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`font-display flex items-baseline tracking-tighter uppercase transform -skew-x-12 ${className}`}>
      <span className="text-primary font-black drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]" style={{ WebkitTextStroke: '1px rgba(255,215,0,0.3)' }}>JUST</span>
      <span className="text-white font-black text-[1.15em] mx-1.5 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>2</span>
      <span className="text-[#FF0000] font-black drop-shadow-[0_0_20px_rgba(255,0,0,1)]" style={{ WebkitTextStroke: '1px rgba(255,0,0,0.5)' }}>FIT</span>
    </div>
  );
}
