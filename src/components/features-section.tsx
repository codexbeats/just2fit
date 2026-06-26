import { Dumbbell, Flame, Users, Star } from "lucide-react";
import { FadeUp } from "./fade-up";

const FEATURES = [
  {
    icon: Dumbbell,
    title: "No Waiting for Machines",
    body: "Our dual-equipment setup ensures you never have to waste time waiting for a machine or bench to clear up during peak hours.",
  },
  {
    icon: Flame,
    title: "Delhi's Best Rooftop CrossFit",
    body: "Enjoy fresh-air functional training, tire flips, and high-intensity circuits on our dedicated 3,000 sq. feet open rooftop.",
  },
  {
    icon: Users,
    title: "Uncompromised Safety & Respect",
    body: "We take pride in maintaining a highly respectful crowd and a completely safe, welcoming environment for female fitness enthusiasts.",
  },
  {
    icon: Star,
    title: "Premium Comfort",
    body: "Fully centralized air conditioning, spotless shower facilities, clean restrooms, and ample hassle-free parking.",
  },
];

export function FeaturesSection() {
  return (
    <section id="about" className="relative border-t border-white/5 bg-transparent py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">About Us</p>
          <h2 className="mt-3 max-w-2xl font-display text-2xl leading-none sm:text-5xl">
            Why Choose JUST 2 FIT?
          </h2>
          <p className="mt-6 max-w-3xl text-base text-muted-foreground sm:text-lg">
            At JUST 2 FIT, we believe that great results start with the right environment. Conveniently located directly opposite the Paharganj Police Station, our gym offers a clean, energetic, and welcoming atmosphere for everyone—from beginners to professional athletes.
          </p>
        </FadeUp>

        <div className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {FEATURES.map((f, i) => (
            <FadeUp key={f.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-white/8 bg-surface/60 p-5 sm:p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow-sm)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl sm:text-2xl tracking-wide">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
