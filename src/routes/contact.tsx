import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { MapSection } from "@/components/map-section";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — JUST 2 FIT GYM Paharganj" },
      {
        name: "description",
        content:
          "Find us at 02, Desh Bandhu Gupta Road, Paharganj, New Delhi. Call +91 99903 18990. Open Mon–Sat 6AM to 12AM.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <SiteHeader />
      <main className="pt-16 sm:pt-20">
        <section className="relative py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">
              Get In Touch
            </p>
            <h1 className="mt-2 font-display text-3xl leading-none text-white sm:text-5xl lg:text-6xl">
              Contact & Location
            </h1>
            <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm sm:mt-4">
              We're right opposite the Paharganj Police Station. Walk in for a
              free tour, call us, or get directions below.
            </p>
          </div>
        </section>
        <MapSection />
      </main>
      <SiteFooter />
    </div>
  );
}
