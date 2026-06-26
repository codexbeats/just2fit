import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ServicesSection } from "@/components/services-section";
import { TimingsSection } from "@/components/timings-section";
import { ReviewsSection } from "@/components/reviews-section";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JUST 2 FIT GYM — Premier Fitness Center in Paharganj, New Delhi" },
      {
        name: "description",
        content:
          "Paharganj's premier fitness destination. 5.0★ on Google. 3,000 sq. feet open rooftop CrossFit arena, elite equipment, certified trainers. 02, Desh Bandhu Gupta Road.",
      },
      { property: "og:title", content: "JUST 2 FIT GYM — Premier Fitness Center in Paharganj" },
      {
        property: "og:description",
        content:
          "Elevate your fitness. Paharganj's premier gym for serious lifters. Call +91 99903 18990.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <TimingsSection />
        <ReviewsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
