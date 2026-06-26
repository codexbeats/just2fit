import { FadeUp } from "./fade-up";
import gymWeights from "@/assets/gym-freeweights.png";
import gymMachines from "@/assets/gym-machines.png";
import gymDumbbells from "@/assets/gym-dumbbells.png";
import serviceCardio from "@/assets/service-cardio.jpg";
import serviceCrossfit from "@/assets/service-crossfit.jpg";
import serviceDiet from "@/assets/service-diet.jpg";

const PHOTOS = [
  { src: gymWeights, label: "Free Weights Section" },
  { src: gymMachines, label: "Machine Zone" },
  { src: gymDumbbells, label: "Dumbbell Rack" },
  { src: serviceCardio, label: "Cardio Zone" },
  { src: serviceCrossfit, label: "CrossFit Deck" },
  { src: serviceDiet, label: "Diet Kitchen" },
];

export function HomePhotoStrip() {
  return (
    <section className="relative border-t border-white/5 bg-transparent py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">
            Inside JUST 2 FIT
          </p>
          <h2 className="mt-2 font-display text-2xl leading-none text-white sm:text-4xl">
            The Arena Awaits
          </h2>
        </FadeUp>

        {/* Mobile: horizontal scroll strip. Desktop: 3-col grid */}
        <div className="mt-5 -mx-4 flex gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0">
          {PHOTOS.map((p, i) => (
            <FadeUp key={p.label} delay={i * 0.06} className="shrink-0 w-60 sm:w-auto">
              <div className="group relative h-40 overflow-hidden rounded-xl border border-white/8 sm:h-48">
                <img
                  src={p.src}
                  alt={p.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-3">
                  <div className="font-display text-sm text-white sm:text-base">{p.label}</div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
