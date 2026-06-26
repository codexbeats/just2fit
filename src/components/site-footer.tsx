import { Phone, MapPin, Navigation, Instagram, Facebook, MessageCircle } from "lucide-react";
import { FadeUp } from "./fade-up";
import { Logo } from "./logo";

const ADDRESS =
  "02, Desh Bandhu Gupta Road, Motia Khan, Paharganj, New Delhi 110055";
const MAPS_URL = "https://share.google/MyyTZzOnfdb2UT6gP";

export function SiteFooter() {
  return (
    <footer id="contact" className="relative border-t border-white/5 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <FadeUp>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">
            Visit Us
          </p>
          <h2 className="mt-2 font-display text-2xl leading-none sm:text-4xl lg:text-5xl">
            Step Inside. Start Lifting.
          </h2>
        </FadeUp>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
          <FadeUp>
            <div className="space-y-3">
              {/* Phone */}
              <a
                href="tel:+919990318990"
                className="group flex items-center gap-3 rounded-xl border border-white/8 bg-background/60 p-4 transition-all hover:border-primary/40"
              >
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Call us anytime
                  </div>
                  <div className="font-display text-xl tracking-wide text-primary">
                    +91 99903 18990
                  </div>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-background/60 p-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Address
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-foreground sm:text-sm">
                    {ADDRESS}
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex h-full flex-col gap-4 rounded-xl border border-white/8 bg-background/60 p-4 sm:p-6">
              <div>
                <h3 className="font-display text-xl tracking-wide">Find Us</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Opposite the Paharganj Police Station. Tap below for
                  directions.
                </p>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow btn-glow-hover inline-flex items-center justify-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground sm:text-sm"
              >
                <Navigation className="h-3.5 w-3.5" />
                Get Directions
              </a>
              <div className="mt-auto pt-2">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Follow Us
                </div>
                <div className="mt-2 flex gap-2.5">
                  {[
                    {
                      Icon: Instagram,
                      href: "https://instagram.com/just2fit_by_ashwin",
                      label: "Instagram",
                    },
                    { Icon: Facebook, href: "#", label: "Facebook" },
                    {
                      Icon: MessageCircle,
                      href: "https://wa.me/919990318990",
                      label: "WhatsApp",
                    },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all hover:border-primary hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" aria-label="Just 2 Fit home">
            <Logo className="text-xl sm:text-2xl" />
          </a>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Just 2 Fit GYM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
