import { Star, Quote } from "lucide-react";
import { FadeUp } from "./fade-up";

const REVIEWS = [
  {
    name: "Gym Member",
    body: "The environment here is incredibly motivating. The machines are top-notch, well-maintained, and having duplicate equipment means no waiting around. Highly recommend training with the coaches here!",
  },
  {
    name: "Gym Member",
    body: "Best gym in the Central Delhi/Paharganj area. The rooftop CrossFit section is massive and completely changes the workout vibe. Very safe and respectful crowd for women.",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative border-t border-white/5 bg-transparent py-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-primary">Reviews</p>
              <h2 className="mt-2 sm:mt-3 max-w-2xl font-display text-3xl leading-none sm:text-6xl">
                Loved by members across Paharganj.
              </h2>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-primary/30 bg-primary/5 px-4 py-3 sm:px-5 sm:py-4">
              <div>
                <div className="font-display text-3xl sm:text-4xl text-primary text-glow">5.0</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">Google</div>
              </div>
              <div>
                <div className="flex gap-0.5 sm:gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-primary" />
                  ))}
                </div>
                <div className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-muted-foreground">61 verified reviews</div>
              </div>
            </div>
          </div>
        </FadeUp>

        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-5 md:grid-cols-2">
          {REVIEWS.map((r, i) => (
            <FadeUp key={r.name + i} delay={i * 0.1}>
              <figure className="h-full rounded-xl sm:rounded-2xl border border-white/8 bg-surface/60 p-5 sm:p-7 transition-colors hover:border-primary/30">
                <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-primary/60" />
                <blockquote className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-foreground">
                  "{r.body}"
                </blockquote>
                <figcaption className="mt-4 sm:mt-5 flex items-center justify-between border-t border-white/5 pt-3 sm:pt-4">
                  <span className="text-sm sm:text-base font-semibold">{r.name}</span>
                  <span className="flex gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-primary" />
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
