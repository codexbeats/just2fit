import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { ServicesSection } from "@/components/services-section";
import { BenefitsSection } from "@/components/benefits-section";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities & Amenities — JUST 2 FIT GYM" },
      {
        name: "description",
        content:
          "Explore the premium facilities, elite equipment, and massive rooftop CrossFit arena at JUST 2 FIT GYM.",
      },
    ],
  }),
  component: FacilitiesPage,
});

function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <SiteHeader />
      <main className="pt-16 sm:pt-24">
        <ServicesSection />
        <BenefitsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
