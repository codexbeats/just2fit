import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Phone, Star, ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.5]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden py-8 sm:py-24"
    >
      {/* Parallax hero image */}
      <motion.div
        style={{ y, opacity }}
        aria-hidden
        className="absolute inset-0 -z-20 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"
      >
        <img src={heroImg} alt="" className="h-full w-full object-cover" />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/65 to-black/90"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.08),transparent_65%)]"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary backdrop-blur sm:text-xs"
        >
          <Star className="h-3 w-3 fill-primary" />
          4.8 Stars · 519+ Ratings on Google
        </motion.div>

        {/* Main heading — mobile-first sizes */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display flex flex-wrap items-baseline gap-x-2 uppercase tracking-tighter sm:gap-x-4"
        >
          <span className="text-5xl leading-none text-primary text-glow drop-shadow-[0_0_12px_rgba(255,215,0,0.5)] sm:text-7xl lg:text-8xl">
            JUST
          </span>
          <span className="text-6xl leading-none text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] sm:text-8xl lg:text-9xl">
            2
          </span>
          <span className="text-5xl leading-none text-[#FF0000] drop-shadow-[0_0_12px_rgba(255,0,0,0.5)] sm:text-7xl lg:text-8xl">
            FIT
          </span>
          <span className="text-4xl leading-none text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] sm:text-5xl lg:text-6xl">
            GYM
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 max-w-sm text-xs leading-relaxed text-muted-foreground sm:max-w-xl sm:text-base"
        >
          Paharganj's premier fitness destination — featuring a massive{" "}
          <strong className="text-white">3,000 sq. ft. open rooftop CrossFit arena</strong>,
          elite equipment & certified trainers. Build your best body here.
        </motion.p>

        {/* CTA Buttons — stacked on mobile, row on sm+ */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-4"
        >
          <a
            href="/query"
            className="btn-glow btn-glow-hover group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
          >
            Book Free Trial
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+919990318990"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/40 px-5 py-3 text-xs font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
          >
            <Phone className="h-3.5 w-3.5" />
            Call Now
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto mt-8 grid w-full max-w-xs grid-cols-3 gap-4 border-t border-white/10 pt-5 text-center sm:mx-0 sm:max-w-md sm:gap-6 sm:mt-12 sm:text-left"
        >
          {[
            { k: "4.8★", v: "Rating" },
            { k: "519+", v: "Reviews" },
            { k: "6AM–12AM", v: "Mon–Sat" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-base text-primary sm:text-2xl">{s.k}</div>
              <div className="mt-0.5 text-[9px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint — desktop only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 hidden sm:block"
        >
          <ChevronDown className="h-5 w-5 animate-bounce text-primary/40" />
        </motion.div>
      </div>
    </section>
  );
}
