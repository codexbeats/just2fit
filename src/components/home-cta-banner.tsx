import { motion } from "motion/react";
import { Phone, ArrowRight, Star } from "lucide-react";

export function HomeCtaBanner() {
  return (
    <section className="relative border-t border-white/5 bg-transparent py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-surface/80 p-6 sm:p-10 lg:p-14"
        >
          {/* Glow blobs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[#FF0000]/5 blur-3xl"
          />

          <div className="relative">
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
              <Star className="h-3 w-3 fill-primary" />
              Free Trial Session — Limited Slots
            </div>

            <h2 className="font-display text-2xl leading-none text-white sm:text-4xl lg:text-5xl">
              Ready to Build Your{" "}
              <span className="text-primary">Best Body?</span>
            </h2>
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Join Paharganj's most results-driven gym. Walk in, train hard,
              transform completely. Your first session is on us — no commitment,
              no pressure.
            </p>

            {/* Buttons — full width on mobile */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/query"
                className="btn-glow btn-glow-hover group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground sm:w-auto sm:py-3.5 sm:text-sm"
              >
                Book Free Trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+919990318990"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-xs font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary sm:w-auto sm:py-3.5 sm:text-sm"
              >
                <Phone className="h-4 w-4" />
                +91 99903 18990
              </a>
            </div>

            {/* Micro perks */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/8 pt-5">
              {[
                "No joining fee for first 50 members",
                "Free body assessment",
                "Diet consultation included",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-1.5 text-[10px] text-muted-foreground sm:text-xs"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
