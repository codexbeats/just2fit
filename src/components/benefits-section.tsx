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
    <section id="benefits" className="relative border-t border-white/5 bg-transparent py-10 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-24">
          
          <FadeUp>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-primary">Benefits</p>
            <h2 className="mt-2 sm:mt-3 font-display text-2xl leading-none sm:text-4xl lg:text-5xl">
              Membership Benefits
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
              At JUST 2 FIT GYM, every member enjoys:
            </p>
            <ul className="mt-5 sm:mt-8 space-y-2.5 sm:space-y-4">
              {BENEFITS.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-primary" />
                  <span className="text-sm sm:text-base text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-primary">Community</p>
            <h2 className="mt-2 sm:mt-3 font-display text-2xl leading-none sm:text-4xl lg:text-5xl">
              Why Members Love Us
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
              What sets JUST 2 FIT apart from the rest:
            </p>
            <ul className="mt-5 sm:mt-8 space-y-2.5 sm:space-y-4">
              {LOVE_REASONS.map((reason, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-primary" />
                  <span className="text-sm sm:text-base text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
