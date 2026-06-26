import {
  Dumbbell,
  UserCog,
  Flame,
  Salad,
  Activity,
  Sparkles,
} from "lucide-react";
import { FadeUp } from "./fade-up";
import gymInterior from "@/assets/gym-interior.png";
import gymRooftop from "@/assets/gym-rooftop.png";
import gymWeights from "@/assets/gym-freeweights.png";
import serviceDiet from "@/assets/service-diet.jpg";
import servicePersonal from "@/assets/service-personal.jpg";
import serviceCardio from "@/assets/service-cardio.jpg";

type Service = {
  title: string;
  body: string;
  icon: typeof Dumbbell;
  image?: string;
};

const SERVICES: Service[] = [
  {
    title: "Strength & Cardio Zones",
    body: "Premium modern machines and an extensive free-weight section. Dual setup means you never wait.",
    icon: Dumbbell,
    image: gymInterior,
  },
  {
    title: "Rooftop CrossFit Deck",
    body: "Delhi's largest open rooftop CrossFit arena. Battle ropes, tires, pull-up bars, and open sky.",
    icon: Flame,
    image: gymRooftop,
  },
  {
    title: "Free Weights Section",
    body: "Full range of dumbbells, barbells, and plates. Classic iron training at its finest.",
    icon: Activity,
    image: gymWeights,
  },
  {
    title: "In-House Diet Kitchen",
    body: "Fuel your body right. Customized healthy pre- and post-workout meals made on-site.",
    icon: Salad,
    image: serviceDiet,
  },
  {
    title: "Expert Certified Trainers",
    body: "Top-tier coaches dedicated to perfecting your form and maximizing your results every session.",
    icon: UserCog,
    image: servicePersonal,
  },
  {
    title: "Cardio Zone",
    body: "Treadmills, ellipticals, cycles and more. Burn calories or warm up — your choice.",
    icon: Activity,
    image: serviceCardio,
  },
  {
    title: "Member Comforts",
    body: "Central AC, clean locker rooms, fresh showers, and free secure parking for cars and bikes.",
    icon: Sparkles,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative border-t border-white/5 bg-transparent py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">Facilities & Amenities</p>
          <h2 className="mt-2 font-display text-2xl leading-none sm:text-4xl lg:text-5xl">Designed for Peak Performance</h2>
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Every zone at JUST 2 FIT is built with one goal — your results. From heavy iron to open-sky CrossFit.
          </p>
        </FadeUp>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <FadeUp key={s.title} delay={Math.min(i, 5) * 0.07}>
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
      className={`group relative flex min-h-[11rem] flex-col justify-end overflow-hidden rounded-xl border border-white/8 p-4 transition-all hover:border-primary/40 hover:-translate-y-0.5 sm:min-h-[13rem] sm:p-5 ${
        image ? "bg-black/60" : "bg-background/60"
      }`}
    >
      {image && (
        <>
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-55 transition-all duration-500 group-hover:scale-105 group-hover:opacity-75"
          />
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,12,0.1)_0%,rgba(12,12,12,0.82)_65%,rgba(12,12,12,0.96)_100%)]" />
        </>
      )}
      {!image && (
        <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:bg-primary/20" />
      )}
      <div className="relative flex flex-col">
        <Icon className="mb-3 h-6 w-6 text-primary" />
        <h3 className="font-display text-lg tracking-wide sm:text-xl">{title}</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{body}</p>
      </div>
    </article>
  );
}
