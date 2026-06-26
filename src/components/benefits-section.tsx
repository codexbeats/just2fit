import { CheckCircle2 } from "lucide-react";
import { FadeUp } from "./fade-up";

const BENEFITS = [
  "Professional fitness guidance",
  "Customized workout plans",
  "Weight loss & muscle gain programs",
  "Functional fitness training",
  "CrossFit coaching",
  "Nutrition support & diet advice",
  "Friendly and motivating atmosphere",
  "Safe environment for women",
  "Premium fitness equipment",
];

const LOVE_REASONS = [
  "Dual equipment — zero wait time",
  "Massive Rooftop CrossFit Arena",
  "Expert Certified Trainers",
  "In-House Diet Kitchen",
  "Fully Air Conditioned",
  "Clean & Hygienic Facilities",
  "Free Parking",
  "Safe Environment for Women",
  "4.8★ Google Rated",
  "Community-driven culture",
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="relative border-t border-white/5 bg-transparent py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2">
          <FadeUp>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">
              Membership
            </p>
            <h2 className="mt-2 font-display text-2xl leading-none sm:text-4xl">
              Membership Benefits
            </h2>
            <p className="mt-3 text-xs text-muted-foreground sm:text-sm">
              Every JUST 2 FIT member gets:
            </p>
            <ul className="mt-5 space-y-2.5">
              {BENEFITS.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-xs text-foreground sm:text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">
              Community
            </p>
            <h2 className="mt-2 font-display text-2xl leading-none sm:text-4xl">
              Why Members Love Us
            </h2>
            <p className="mt-3 text-xs text-muted-foreground sm:text-sm">
              What sets JUST 2 FIT apart:
            </p>
            <ul className="mt-5 space-y-2.5">
              {LOVE_REASONS.map((reason, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-xs text-foreground sm:text-sm">{reason}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
