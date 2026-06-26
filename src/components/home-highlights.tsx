import { Dumbbell, Flame, Users, Shield, ArrowRight } from "lucide-react";
import { FadeUp } from "./fade-up";
import gymInterior from "@/assets/gym-interior.png";
import gymRooftop from "@/assets/gym-rooftop.png";

const STATS = [
  { icon: Dumbbell, stat: "2x", label: "Dual Equipment", sub: "Never wait for a machine" },
  { icon: Flame, stat: "3K", label: "Sq.Ft Rooftop", sub: "Delhi's largest CrossFit deck" },
  { icon: Users, stat: "10+", label: "Expert Trainers", sub: "Certified coaches on floor" },
  { icon: Shield, stat: "4.8★", label: "Google Rating", sub: "519+ verified reviews" },
];

export function HomeHighlights() {
  return (
    <section className="relative border-t border-white/5 bg-transparent py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">
            Why JUST 2 FIT
          </p>
          <h2 className="mt-2 font-display text-2xl leading-none text-white sm:text-4xl lg:text-5xl">
            Paharganj's Toughest Gym
          </h2>
          <p className="mt-3 max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Built for serious lifters and beginners alike. Opposite Paharganj
            Police Station — safe, clean, and absolutely stacked.
          </p>
        </FadeUp>

        {/* Stats Grid — 2 cols mobile, 4 cols desktop */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {STATS.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.08}>
              <div className="group flex flex-col gap-2 rounded-xl border border-white/8 bg-surface/60 p-4 transition-all hover:border-primary/40 hover:shadow-[0_0_12px_rgba(255,215,0,0.15)]">
                <s.icon className="h-5 w-5 text-primary" />
                <div className="font-display text-2xl leading-none text-primary sm:text-3xl">
                  {s.stat}
                </div>
                <div>
                  <div className="text-xs font-semibold text-white sm:text-sm">{s.label}</div>
                  <div className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">{s.sub}</div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Gym Photo Cards */}
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          <FadeUp delay={0.1}>
            <a
              href="/facilities"
              className="group relative block h-48 overflow-hidden rounded-xl border border-white/10 sm:h-60"
            >
              <img
                src={gymInterior}
                alt="JUST 2 FIT Gym Interior — Premium Equipment Zone"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <div className="font-display text-base text-white sm:text-xl">
                  Premium Equipment Zone
                </div>
                <div className="mt-1 flex items-center gap-1 text-[10px] text-primary sm:text-xs">
                  <span>Explore Facilities</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </a>
          </FadeUp>
          <FadeUp delay={0.15}>
            <a
              href="/facilities"
              className="group relative block h-48 overflow-hidden rounded-xl border border-white/10 sm:h-60"
            >
              <img
                src={gymRooftop}
                alt="JUST 2 FIT Rooftop CrossFit Arena"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <div className="font-display text-base text-white sm:text-xl">
                  Rooftop CrossFit Arena
                </div>
                <div className="mt-1 flex items-center gap-1 text-[10px] text-primary sm:text-xs">
                  <span>Explore Facilities</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
