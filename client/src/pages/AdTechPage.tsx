import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AutoplayVideoWithPlayPause } from "@/components/AutoplayVideoWithPlayPause";
import { Button } from "@/components/ui/button";
import adtechHeroImg from "@assets/adtech-hero.png";
import alprDeepDiveBg from "@assets/alpr-deep-dive-bg.png";
import adtechPlatformImg from "@assets/adtech-platform.jpg";
import loyaltyOffersImg from "@assets/Loyalty-Offers.jpg";
import edgeApplicationsImg from "@assets/adtechedge-application.jpg";
import dynamicAttributionImg from "@assets/DynamicAttribution.jpg";
import layeredSecurityImg from "@assets/adtechlayered-security.jpg";
import virginiaLicensePlateImg from "@assets/virginia-license-plate.png";
import alprPlatformVideo from "@/assets/alpr-platform.mp4";
import unifiedDashboardVideo from "@/assets/unified-dashboard.mp4";
import layerSecurityVideo from "@/assets/layer-security.mp4";

const ADTECH_PRODUCT_SLIDES = [
  {
    id: "adtech-platform",
    tag: "Products",
    name: "AdTech Platform",
    description:
      "Our AdTech Platform, paired with edge based micro data centers, processes data instantly on site, right as customers arrive and park their vehicles.",
    highlight: "Our",
    accentClass: "bg-[#5E17EB]",
    media: { type: "image" as const, src: adtechPlatformImg },
  },
  {
    id: "edge-applications",
    tag: "Use Cases",
    name: "Edge Applications",
    description:
      'Our platform adapts dynamically to changing shopper behaviour, helping retailers deliver smarter, faster, and more impactful advertising at the edge with measurable results.',
    highlight: "adapts dynamically",
    accentClass: "bg-[#639b5c]",
    media: { type: "image" as const, src: edgeApplicationsImg },
  },
  {
    id: "dynamic-attribution-dashboard",
    tag: "Features",
    name: "Dynamic Attribution Dashboard",
    description:
      'We provide real time awareness and actionable offer insights that drive in store and online engagement, increase conversions, and optimize advertising spend.',
    highlight: "real time",
    accentClass: "bg-[#e84826]",
    media: { type: "image" as const, src: dynamicAttributionImg },
  },
  {
    id: "layered-security",
    tag: "Features",
    name: "Layered Security & Privacy",
    description:
      "This approach leverages anonymized, secure data gathering and aggregated data sets, ensuring action and attribution at the demographic level, resulting in faster insights, reduced latency, and privacy preserving targeting.",
    highlight: "faster insights",
    accentClass: "bg-[#feac00]",
    media: { type: "image" as const, src: layeredSecurityImg },
  },
];

function AdTechProductsSlider() {
  const [index, setIndex] = useState(0);
  const slide = ADTECH_PRODUCT_SLIDES[index];

  const handleNext = () => {
    setIndex((i) => (i + 1) % ADTECH_PRODUCT_SLIDES.length);
  };

  const handlePrev = () => {
    setIndex((i) => (i - 1 + ADTECH_PRODUCT_SLIDES.length) % ADTECH_PRODUCT_SLIDES.length);
  };

  return (
    <section className="relative py-14 md:py-20 bg-background overflow-hidden" data-section="products">
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl bg-[#020617] text-white overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 p-6 md:p-10 lg:p-12 items-center">
            <div className="relative">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-foreground/10">
                <img
                  src={slide.media.src}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="space-y-5 md:space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {slide.tag}
                </span>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm ${slide.accentClass}`}
                >
                  {slide.name}
                </span>
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                {slide.description.split(slide.highlight).map((part, i, parts) => (
                  <span key={i}>
                    {part}
                    {i < parts.length - 1 ? (
                      <span className="font-semibold text-white">{slide.highlight}</span>
                    ) : null}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Bottom-aligned slide controls (previous/next arrows) */}
          <div className="absolute inset-x-0 bottom-4 flex justify-end px-6 md:px-10">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/5 backdrop-blur-sm p-1 shadow-lg shadow-black/40">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111827] text-white hover:bg-[#1f2937] transition-colors"
                aria-label="Previous AdTech product"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5E17EB] text-white hover:bg-[#4b12c2] transition-colors"
                aria-label="Next AdTech product"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function AdTechPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="pt-16">
        {/* 1. Hero */}
        <section className="w-full relative overflow-hidden bg-white" aria-label="AdTech Platform hero">
          <div
            className="relative w-full max-h-[85vh] min-h-[400px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${adtechHeroImg})`, aspectRatio: "1920 / 810" }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/30">
            <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-4 leading-tight">
                AdTech Platform
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/95 font-medium">
                The Widening Gap Between Data and Impact
              </p>
            </div>
          </div>
        </section>

        {/* 2. Intro text */}
        <section className="py-14 md:py-20 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              For forward-thinking retailers, the core challenge is clear: How do you close the time
              gap to deliver truly impactful advertising, right now?
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Customer behavior and demographics continuously vary throughout the day, yet most
              retail advertising remains static and delayed.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our platform closes this gap by delivering real-time insights at the point of
              engagement, enabling retailers to deliver timely, relevant advertising that drives
              conversions when customer intent is highest.
            </p>
          </div>
        </section>

        {/* 3. AdTech products slider */}
        <AdTechProductsSlider />

        {/* 4. Key benefits + Feature Deep Dive */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Key benefits
                </h2>
                <div className="h-1 w-16 rounded-full bg-primary mb-6" />
                <ul className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed list-none">
                  <li className="flex gap-3 items-start">
                    <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                    Our platform offers shopper behavior insights right at the edge, removing delays
                    caused by sending data back and forth to the cloud
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                    Smarter targeting reduces wasted advertising spend by focusing impressions only
                    on shoppers who are most likely to respond
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                    Ads and offers are delivered instantly by processing behavior on site and
                    responding immediately, so messages appear while shopper interest is still high
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                    Context-aware personalization delivers messaging tailored to live demographics,
                    movement, and engagement in the moment
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                    Clear measurement connects every impression to real-world engagement and
                    business results
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                    A single integrated platform connects Demand Side Platforms (DSP) and Supply
                    Side Platforms (SSP) in real time, ensuring smoother coordination between
                    buyers and sellers
                  </li>
                </ul>
              </div>
              <div className="relative min-h-[360px] md:min-h-[420px] rounded-2xl overflow-hidden bg-muted">
                <img
                  src={alprDeepDiveBg}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5 & 6. Feature Deep Dive: heading card + 5 product sections */}
        <section className="py-14 md:py-20 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="rounded-3xl border border-primary/20 bg-[hsl(0,0%,98%)] shadow-sm overflow-hidden">
              {/* Feature Deep Dive heading card */}
              <div className="p-8 md:p-12 lg:p-14 border-b border-primary/20 bg-[hsl(0,0%,90%)]">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
                  Feature Deep Dive
                </h2>
                <div className="h-1 w-20 rounded-full bg-primary mb-6" />
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  We provide actionable insights into customer behavior, dwell time, and intent, helping
                  retailers make confident decisions without being overwhelmed by large volumes of data.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Our platform reduces wasted advertising spend and connects every impression to
                  real-world engagement and business outcomes.
                </p>
              </div>

              {/* 5 product sections */}
              <div className="p-8 md:p-12 lg:p-14 space-y-16 md:space-y-24 bg-[hsl(0,0%,96%)]">
            {/* 1. AdTech Platform: text left, media right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  AdTech Platform
                </h2>
                <div className="h-1 w-16 rounded-full bg-primary mb-6" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our platform enables highly relevant advertising messages based on aggregated
                    shopper behavior and segmented by demographics, movement, and engagement.
                  </p>
                  <p>
                    Real-time responses to customer actions ensure ads align naturally with current
                    intent, increasing attention, relevance, and overall impact.
                  </p>
                </div>
                <Link href="/calendar" className="inline-block mt-6">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full">
                    Get a demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={adtechPlatformImg}
                  alt="AdTech Platform"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 2. Loyalty & Offers: media left, text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 aspect-video rounded-xl overflow-hidden">
                <img
                  src={loyaltyOffersImg}
                  alt="Loyalty & Offers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Loyalty & Offers
                </h2>
                <div className="h-1 w-16 rounded-full bg-primary mb-6" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Recognizing intent based on actual behavior and context allows retailers to build
                    trust and strengthen customer loyalty. We understand real-world shopper behavior
                    rather than relying on inferred profiles or historical assumptions.
                  </p>
                  <p>
                    Our advanced platform enables retailers to reward customers with real-time
                    offers matched with real-time demographic and analytical data.
                  </p>
                </div>
                <Link href="/calendar" className="inline-block mt-6">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full">
                    Get a demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* 3. Edge Applications: text left, media right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Edge Applications
                </h2>
                <div className="h-1 w-16 rounded-full bg-primary mb-6" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our revolutionary AdTech platform processes real-time vehicle and demographic
                    data to automate advertising decisions directly at the edge. This enables
                    retailers&apos; messaging to adapt immediately to changing customer context,
                    ensuring relevance at the exact moment of engagement.
                  </p>
                  <p>
                    We use machine learning to constantly adapt to visual cues, thereby increasing
                    shopper propensity to engage and convert.
                  </p>
                </div>
                <Link href="/calendar" className="inline-block mt-6">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full">
                    Get a demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={edgeApplicationsImg}
                  alt="Edge Applications"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 4. Dynamic Attribution Dashboard: media left, text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 aspect-video rounded-xl overflow-hidden">
                <img
                  src={dynamicAttributionImg}
                  alt="Dynamic Attribution Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Dynamic Attribution Dashboard
                </h2>
                <div className="h-1 w-16 rounded-full bg-primary mb-6" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A centralized decisioning dashboard provides immediate visibility into how
                    advertising decisions are made and performed across locations.
                  </p>
                  <p>
                    It allows teams to monitor live shopper signals, campaign performance, and
                    system responses in real time, enabling faster optimization and more informed
                    decision making without relying on delayed reports.
                  </p>
                </div>
                <Link href="/calendar" className="inline-block mt-6">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full">
                    Get a demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* 5. Layered Security & Privacy: text left, media right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Layered Security & Privacy
                </h2>
                <div className="h-1 w-16 rounded-full bg-primary mb-6" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We recognize that customers expect the highest standards of privacy. Our
                    platform protects individual identities by processing data in an aggregated,
                    anonymized, and compliant manner.
                  </p>
                  <p>
                    Our approach preserves privacy, reduces compliance risk, and enables retailers
                    to deliver meaningful experiences.
                  </p>
                </div>
                <Link href="/calendar" className="inline-block mt-6">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full">
                    Get a demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={layeredSecurityImg}
                  alt="Layered Security & Privacy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
