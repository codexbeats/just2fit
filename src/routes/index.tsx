import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { HomeHighlights } from "@/components/home-highlights";
import { HomePhotoStrip } from "@/components/home-photo-strip";
import { HomeCtaBanner } from "@/components/home-cta-banner";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({  head: () => ({    meta: [      { title: "JUST 2 FIT GYM — Premier Fitness Center in Paharganj, New Delhi" },      {        name: "description",        content: "Paharganj's premier fitness destination. 4.8★ Google rated. 3,000 sq. ft. open rooftop CrossFit arena, elite equipment, certified trainers. Book a free trial.",      },    ],  }),  component: Index,});

function Index() {  return (    <div className="min-h-screen bg-transparent text-foreground">      <SiteHeader />      <main>        <HeroSection />        <HomeHighlights />        <HomePhotoStrip />        <HomeCtaBanner />      </main>      <SiteFooter />    </div>  );}
