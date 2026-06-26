import { Dumbbell, Flame, Users, Star } from "lucide-react";
import { FadeUp } from "./fade-up";

const FEATURES = [
  {
    icon: Dumbbell,
    title: "No Waiting for Machines",
    body: "Our dual-equipment setup ensures you never wait. Two of every major machine means zero downtime even at peak hours.",
  },
  {
    icon: Flame,
    title: "Delhi's Best Rooftop CrossFit",
    body: "Fresh-air functional training, tire flips, and HIIT circuits on our dedicated 3,000 sq. ft. open rooftop — Delhi's largest.",
  },
  {
    icon: Users,
    title: "Safety & Respect First",
    body: "A highly respectful environment and a completely safe, welcoming space for female fitness enthusiasts. Zero tolerance policy.",
  },
  {
    icon: Star,
    title: "Premium Comfort",
    body: "Centralized AC, spotless shower facilities, clean restrooms, locker rooms, and ample hassle-free parking included.",
  },
];

export function FeaturesSection() {
  return (
    <section id="about" className="relative border-t border-white/5 bg-transparent py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">
            About Us
          </p>
          <h2 className="mt-2 font-display text-2xl leading-none sm:text-4xl lg:text-5xl">
            Why Choose JUST 2 FIT?
          </h2>
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Located directly opposite the Paharganj Police Station, our gym
            offers a clean, energetic, and welcoming atmosphere — from absolute
            beginners to seasoned athletes.
          </p>
        </FadeUp>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5">
          {FEATURES.map((f, i) => (
            <FadeUp key={f.title} delay={i * 0.1}>
              <div className="group h-full rounded-xl border border-white/8 bg-surface/60 p-4 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_12px_rgba(255,215,0,0.15)] sm:p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:h-12 sm:w-12">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg tracking-wide sm:text-xl">{f.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {f.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
