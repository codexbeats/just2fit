import { MapPin } from "lucide-react";
import { FadeUp } from "./fade-up";

export function MapSection() {
  return (
    <section id="location" className="relative border-t border-white/5 bg-transparent py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">
            Location
          </p>
          <h2 className="mt-2 font-display text-2xl leading-none sm:text-4xl">Find Us Here</h2>
          <p className="mt-3 text-xs text-muted-foreground sm:text-sm">
            02, Desh Bandhu Gupta Road, In front of the Police Station, Motia
            Khan, Paharganj, New Delhi 110055
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <a
            href="https://share.google/MyyTZzOnfdb2UT6gP"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-6 block w-full overflow-hidden rounded-xl border border-white/10 transition-all hover:border-primary/50 sm:mt-8"
          >
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-transparent transition-colors group-hover:bg-black/20">
              <span className="flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold text-primary opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 sm:text-sm">
                <MapPin className="h-3.5 w-3.5" />
                Open in Google Maps
              </span>
            </div>
            <iframe
              src="https://www.google.com/maps?q=02,+Desh+Bandhu+Gupta+Road,+Motia+Khan,+Paharganj,+New+Delhi,+Delhi+110055&output=embed"
              width="100%"
              height="280"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(85%)",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Just 2 Fit Gym Location"
              className="pointer-events-none sm:!h-[420px]"
            ></iframe>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
