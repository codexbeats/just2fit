import {
  Phone,
  MapPin,
  Navigation,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { FadeUp } from "./fade-up";
import { Logo } from "./logo";

const ADDRESS =
  "02, Desh Bandhu Gupta Road, Motia Khan, Paharganj, New Delhi, Delhi 110055";
const MAPS_URL = "https://share.google/MyyTZzOnfdb2UT6gP";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/5 bg-transparent "
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Visit Us
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-none sm:text-6xl">
            Step inside. Start lifting.
          </h2>
        </FadeUp>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <FadeUp>
            <div className="space-y-8">
              <a
                href="tel:+919990318990"
                className="group flex items-start gap-4 rounded-2xl border border-white/8 bg-background/60  p-6 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-glow-sm)]"
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Call us
                  </div>
                  <div className="mt-1 break-all font-display text-2xl tracking-wide text-primary sm:text-3xl">
                    +91 99903 18990
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-background/60  p-6">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Address
                  </div>
                  <div className="mt-1 text-base leading-relaxed">
                    {ADDRESS}
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-white/8 bg-background/60  p-6 sm:p-8">
              <div>
                <h3 className="font-display text-3xl tracking-wide">Find Us</h3>
                <p className="mt-2 text-muted-foreground">
                  We're located opposite the Paharganj Police Station. Tap below
                  for turn-by-turn directions.
                </p>
              </div>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow btn-glow-hover inline-flex items-center justify-center gap-2 self-start rounded-full bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>

              <div className="mt-auto pt-4">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Follow
                </div>
                <div className="mt-3 flex gap-3">
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
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all hover:border-primary hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" aria-label="Just 2 Fit home">
            <Logo className="text-2xl sm:text-3xl" />
          </a>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Just 2 Fit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
