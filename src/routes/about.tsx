import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { FeaturesSection } from "@/components/features-section";
import { BenefitsSection } from "@/components/benefits-section";
import { ReviewsSection } from "@/components/reviews-section";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — JUST 2 FIT GYM Paharganj" },
      {
        name: "description",
        content:
          "Why choose JUST 2 FIT GYM? Delhi's premier gym with dual equipment, rooftop CrossFit, certified trainers, and a safe welcoming environment.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <SiteHeader />
      <main className="pt-16 sm:pt-20">
        <section className="relative py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">
              Our Story
            </p>
            <h1 className="mt-2 font-display text-3xl leading-none text-white sm:text-5xl lg:text-6xl">
              About JUST 2 FIT GYM
            </h1>
            <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm sm:mt-4">
              Located directly opposite the Paharganj Police Station, JUST 2 FIT
              GYM has become Paharganj's most trusted fitness destination —
              combining world-class equipment, expert coaching, and a culture
              built on results.
            </p>
          </div>
        </section>
        <FeaturesSection />
        <BenefitsSection />
        <ReviewsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
