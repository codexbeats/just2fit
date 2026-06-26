import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { TimingsSection } from "@/components/timings-section";
import { MapSection } from "@/components/map-section";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Info — JUST 2 FIT GYM" },
      {
        name: "description",
        content:
          "Find our working hours and get directions to JUST 2 FIT GYM in Paharganj.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <SiteHeader />
      <main className="pt-16 sm:pt-24">
        <TimingsSection />
        <MapSection />
      </main>
      <SiteFooter />
    </div>
  );
}
