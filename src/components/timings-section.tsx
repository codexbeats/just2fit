import { Sunrise, Moon, CalendarX } from "lucide-react";
import { FadeUp } from "./fade-up";

const SHIFTS = [
  {
    icon: Sunrise,
    label: "Morning Shift",
    days: "Mon – Sat",
    time: "6:00 AM – 1:00 PM",
  },
  {
    icon: Moon,
    label: "Evening Shift",
    days: "Mon – Sat",
    time: "4:00 PM – 12:00 AM",
  },
];

export function TimingsSection() {
  return (
    <section id="timings" className="relative border-t border-white/5 bg-transparent py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">Plan Your Visit</p>
          <h2 className="mt-2 font-display text-2xl leading-none sm:text-4xl">Working Hours</h2>
          <p className="mt-3 max-w-xl text-xs text-muted-foreground sm:text-sm">
            Two daily shifts — early risers and after-work warriors both covered.
          </p>
        </FadeUp>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
          {SHIFTS.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-xl border border-white/8 bg-background/60 p-4 transition-all hover:border-primary/40 sm:p-6">
                <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:bg-primary/20" />
                <s.icon className="h-6 w-6 text-primary" />
                <div className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{s.days}</div>
                <div className="mt-1.5 font-display text-xl tracking-wide sm:text-2xl">{s.label}</div>
                <div className="mt-2 font-display text-2xl text-primary sm:text-3xl">{s.time}</div>
              </div>
            </FadeUp>
          ))}

          <FadeUp delay={0.2}>
            <div className="relative overflow-hidden rounded-xl border border-destructive/20 bg-destructive/5 p-4 sm:p-6">
              <CalendarX className="h-6 w-6 text-destructive/80" />
              <div className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Sunday</div>
              <div className="mt-1.5 font-display text-xl tracking-wide text-muted-foreground sm:text-2xl">Rest Day</div>
              <div className="mt-2 font-display text-2xl text-destructive/80 sm:text-3xl">Closed</div>
              <p className="mt-2 text-xs text-muted-foreground">Recovery is part of the program.</p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
