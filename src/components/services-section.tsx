import {
  Dumbbell,
  HeartPulse,
  UserCog,
  Scale,
  Flame,
  Salad,
  Activity,
  Music,
  Sparkles,
} from "lucide-react";
import { FadeUp } from "./fade-up";
import weights from "@/assets/service-weights.jpg";
import cardio from "@/assets/service-cardio.jpg";
import personal from "@/assets/service-personal.jpg";
import diet from "@/assets/service-diet.jpg";
import crossfit from "@/assets/service-crossfit.jpg";
import yoga from "@/assets/service-yoga.jpg";

type Service = {
  title: string;
  body: string;
  icon: typeof Dumbbell;
  image?: string;
  span?: string;
};

const SERVICES: Service[] = [
  {
    title: "Cardio & Strength Zones",
    body: "Premium, modern weight machines and an extensive free-weight section.",
    icon: Dumbbell,
    image: weights,
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Rooftop CrossFit Deck",
    body: "Dedicated space for functional fitness, agility training, and core workouts.",
    icon: Flame,
    image: crossfit,
    span: "sm:col-span-2 lg:col-span-2",
  },
  {
    title: "In-House Diet Kitchen",
    body: "Fuel your body correctly with customized, healthy pre- and post-workout nutritional meals made right here.",
    icon: Salad,
    image: diet,
  },
  {
    title: "Expert Certified Trainers",
    body: "Guidance from top-tier fitness coaches dedicated to correcting your form and boosting your results.",
    icon: UserCog,
    image: personal,
  },
  {
    title: "Member Comforts",
    body: "Central AC, clean locker rooms, fresh showers, and free secure parking for cars and two-wheelers.",
    icon: Sparkles,
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative border-t border-white/5 bg-transparent py-12 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Facilities & Amenities
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-2xl leading-none sm:text-5xl">
            Designed for Peak Performance
          </h2>
        </FadeUp>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[14rem]">
          {SERVICES.map((s, i) => (
            <FadeUp
              key={s.title}
              delay={Math.min(i, 5) * 0.05}
              className={`h-full ${s.span ?? ""}`}
            >
              <ServiceCard {...s} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, body, icon: Icon, image }: Service) {
  return (
    <article
      className={`group relative flex h-full min-h-[12rem] sm:min-h-[14rem] flex-col justify-end overflow-hidden rounded-2xl border border-white/8 p-5 sm:p-6 transition-all hover:border-primary/40 hover:-translate-y-1 ${
        image ? "bg-black/60 " : "bg-background/60 "
      }`}
    >
      {image && (
        <>
          <img
            src={image}
            alt={title}
            loading="lazy"
            width={1280}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
            style={{ zIndex: 0 }}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,12,0.15)_0%,rgba(12,12,12,0.80)_65%,rgba(12,12,12,0.95)_100%)]"
            style={{ zIndex: 1 }}
          />
        </>
      )}
      {!image && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:bg-primary/20"
          style={{ zIndex: 0 }}
        />
      )}

      <div className="relative flex flex-col" style={{ zIndex: 2 }}>
        <Icon className="mb-4 h-7 w-7 text-primary transition-transform group-hover:scale-110" />
        <h3 className="font-display text-xl tracking-wide sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {body}
        </p>
      </div>
    </article>
  );
}
