import { CheckCircle2 } from "lucide-react";
import { FadeUp } from "./fade-up";

const BENEFITS = [
  "Professional fitness guidance",
  "Customized workout plans",
  "Weight loss & muscle gain programs",
  "Functional fitness training",
  "CrossFit coaching",
  "Nutrition support",
  "Friendly and motivating atmosphere",
  "Safe environment for women",
  "Premium fitness equipment",
];

const LOVE_REASONS = [
  "Premium Fitness Equipment",
  "Massive Rooftop CrossFit Arena",
  "Expert Certified Trainers",
  "In-House Diet Kitchen",
  "No Waiting for Machines",
  "Safe Environment for Women",
  "Fully Air Conditioned",
  "Clean & Hygienic Facilities",
  "Free Parking",
  "Excellent Community Atmosphere",
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="relative border-t border-white/5 bg-transparent py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Benefits</p>
            <h2 className="mt-3 font-display text-3xl leading-none sm:text-5xl">
              Membership Benefits
            </h2>
            <p className="mt-4 text-muted-foreground">
              At JUST 2 FIT GYM, every member enjoys:
            </p>
            <ul className="mt-8 space-y-4">
              {BENEFITS.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Community</p>
            <h2 className="mt-3 font-display text-3xl leading-none sm:text-5xl">
              Why Members Love Us
            </h2>
            <p className="mt-4 text-muted-foreground">
              What sets JUST 2 FIT apart from the rest:
            </p>
            <ul className="mt-8 space-y-4">
              {LOVE_REASONS.map((reason, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
