import { MapPin } from "lucide-react";
import { FadeUp } from "./fade-up";

export function MapSection() {
  return (
    <section
      id="location"
      className="relative border-t border-white/5 bg-transparent py-12 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mb-8 sm:mb-10 text-center">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Location
            </p>
            <h2 className="mt-2 sm:mt-3 font-display text-3xl leading-none sm:text-6xl">
              Find Us Here
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground px-2">
              02, Desh Bandhu Gupta Road, In front of the Police Station, Motia
              Khan, Paharganj, New Delhi 110055
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <a
            href="https://share.google/MyyTZzOnfdb2UT6gP"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 shadow-[var(--shadow-glow-sm)] transition-all hover:border-primary/50"
          >
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 sm:bg-transparent transition-colors group-hover:bg-black/20">
              <span className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-background/95 sm:bg-background/90 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary opacity-100 sm:opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 shadow-md sm:shadow-none">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Open in Google Maps
              </span>
            </div>
            <iframe
              src="https://www.google.com/maps?q=02,+Desh+Bandhu+Gupta+Road,+Motia+Khan,+Paharganj,+New+Delhi,+Delhi+110055&output=embed"
              width="100%"
              style={{
                border: 0,
                filter:
                  "invert(90%) hue-rotate(180deg) brightness(85%) contrast(85%)",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Just 2 Fit Gym Location"
              className="pointer-events-none h-[350px] sm:h-[500px]"
            ></iframe>
            {/* CSS Filter hack makes Google Maps dark mode to match the theme */}
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
