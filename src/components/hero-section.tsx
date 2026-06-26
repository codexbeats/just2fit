import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Phone, Star, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 140]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.4]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-16 sm:pt-24"
    >
      <motion.div
        style={{ y, opacity }}
        aria-hidden
        className="absolute inset-0 -z-20 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"
      >
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/60 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.10),transparent_60%)]"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur"
        >
          <Star className="h-3.5 w-3.5 fill-primary" />
          5.0 Google Rating · 61 Reviews
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display flex flex-wrap items-end justify-start gap-x-2 sm:gap-x-4 leading-[0.85] tracking-tighter"
        >
          <span className="text-primary text-[4.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] text-glow drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]">JUST</span>
          <span className="text-white text-[4.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">2</span>
          <span className="text-[#FF0000] text-[4.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] drop-shadow-[0_0_15px_rgba(255,0,0,0.4)]">FIT</span>
          <span className="text-white text-[2rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] mb-2 sm:mb-4 lg:mb-5 ml-[-0.5rem] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">GYM</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg space-y-4"
        >
          <p>
            Welcome to Paharganj's premier fitness destination. Featuring a premium fitness facility with a massive <strong className="text-white">3,000 sq. ft. open rooftop CrossFit arena</strong>, JUST 2 FIT GYM combines world-class equipment, certified trainers, and a motivating community to help you achieve your fitness goals.
          </p>
          <p>
            Whether you want to build muscle, lose weight, improve endurance, or increase functional strength, we provide the perfect environment to transform your body and mind.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#contact"
            className="btn-glow btn-glow-hover group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 sm:py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground"
          >
            Book a Free Trial Session
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+919990318990"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/50 bg-transparent px-7 py-3 sm:py-4 text-sm font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6 sm:mt-20"
        >
          {[
            { k: "5.0★", v: "Rating" },
            { k: "61+", v: "Reviews" },
            { k: "6AM–12AM", v: "Mon–Sat*" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-2xl text-primary sm:text-3xl">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
