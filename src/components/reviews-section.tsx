import { Star, Quote } from "lucide-react";
import { FadeUp } from "./fade-up";

const REVIEWS = [
  {
    name: "Rahul S.",
    body: "The environment here is incredibly motivating. The machines are top-notch and having duplicate equipment means no waiting. The rooftop CrossFit section is a game changer!",
  },
  {
    name: "Priya M.",
    body: "Best gym in Paharganj. Very safe and respectful crowd for women. Trainers are certified, helpful, and always available. Clean facilities and great AC.",
  },
  {
    name: "Amit K.",
    body: "Been training here 6 months. Lost 12kg and built real strength. The diet kitchen meals are a massive bonus. Location is super convenient too.",
  },
  {
    name: "Sunita R.",
    body: "As a woman I was nervous about joining a gym. JUST 2 FIT made me feel completely safe and welcome from day one. The female-friendly environment is real.",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative border-t border-white/5 bg-transparent py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">
                Reviews
              </p>
              <h2 className="mt-2 font-display text-2xl leading-none sm:text-4xl">
                Loved by Members
              </h2>
            </div>
            <div className="flex items-center gap-3 self-start rounded-xl border border-primary/30 bg-primary/5 px-4 py-3">
              <div>
                <div className="font-display text-3xl text-primary">4.8</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Google
                </div>
              </div>
              <div>
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary" />
                  ))}
                </div>
                <div className="mt-0.5 text-[10px] text-muted-foreground">519 verified</div>
              </div>
            </div>
          </div>
        </FadeUp>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {REVIEWS.map((r, i) => (
            <FadeUp key={r.name} delay={i * 0.08}>
              <figure className="h-full rounded-xl border border-white/8 bg-surface/60 p-4 transition-colors hover:border-primary/30 sm:p-6">
                <Quote className="h-5 w-5 text-primary/60" />
                <blockquote className="mt-3 text-xs leading-relaxed text-foreground sm:text-sm">
                  {r.body}
                </blockquote>
                <figcaption className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                  <span className="text-xs font-semibold sm:text-sm">{r.name}</span>
                  <span className="flex gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-primary" />
                    ))}
                  </span>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
