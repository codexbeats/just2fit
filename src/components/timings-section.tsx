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
    <section id="timings" className="relative border-t border-white/5 bg-transparent py-10 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-primary">Plan Your Visit</p>
          <h2 className="mt-2 sm:mt-3 max-w-2xl font-display text-2xl leading-none sm:text-5xl lg:text-6xl">
            Working Hours
          </h2>
          <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-muted-foreground">
            Two daily shifts so early risers and after-work warriors can both get their reps in.
          </p>
        </FadeUp>

        <div className="mt-8 sm:mt-14 grid gap-3 sm:gap-5 md:grid-cols-3">
          {SHIFTS.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/8 bg-background/60 p-5 sm:p-7 transition-all hover:border-primary/40">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:bg-primary/20"
                />
                <s.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                <div className="mt-4 sm:mt-5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {s.days}
                </div>
                <div className="mt-1 sm:mt-2 font-display text-xl sm:text-2xl lg:text-3xl tracking-wide">{s.label}</div>
                <div className="mt-2 sm:mt-4 font-display text-2xl text-primary sm:text-3xl lg:text-4xl">
                  {s.time}
                </div>
              </div>
            </FadeUp>
          ))}

          <FadeUp delay={0.2}>
            <div className="relative h-full overflow-hidden rounded-xl sm:rounded-2xl border border-destructive/20 bg-destructive/5 p-5 sm:p-7">
              <CalendarX className="h-6 w-6 sm:h-8 sm:w-8 text-destructive/80" />
              <div className="mt-4 sm:mt-5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Sunday
              </div>
              <div className="mt-1 sm:mt-2 font-display text-xl sm:text-2xl lg:text-3xl tracking-wide text-muted-foreground">
                Rest Day
              </div>
              <div className="mt-2 sm:mt-4 font-display text-2xl text-destructive/80 sm:text-3xl lg:text-4xl">
                Closed
              </div>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground">
                Recovery is part of the program. See you Monday.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
