import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import heroBannerImg from "@assets/hero-banner.png";
import alprDeepDiveBg from "@assets/alpr-deep-dive-bg.png";

const PRODUCT_SLIDES = [
  {
    id: "adtech-platform",
    tag: "Products",
    name: "AdTech Platform",
    accentClass: "bg-[#feac00]",
    description:
      "Our platform enables highly relevant advertising messages based on aggregated shopper behavior and segmented by demographics, movement, and engagement.",
    imageSrc: heroBannerImg,
  },
  {
    id: "loyalty",
    tag: "Products",
    name: "Loyalty & Offers",
    accentClass: "bg-[#639b5c]",
    description:
      "Recognizing intent based on actual behavior and context allows retailers to build trust and strengthen customer loyalty with real-time offers.",
    imageSrc: alprDeepDiveBg,
  },
  {
    id: "edge",
    tag: "Products",
    name: "Edge Applications",
    accentClass: "bg-[#78afdb]",
    description:
      "Our revolutionary AdTech platform processes real-time vehicle and demographic data to automate advertising decisions directly at the edge.",
    imageSrc: alprDeepDiveBg,
  },
  {
    id: "dashboard",
    tag: "Products",
    name: "Dynamic Attribution Dashboard",
    accentClass: "bg-[#e84825]",
    description:
      "A centralized decisioning dashboard provides immediate visibility into how advertising decisions are made and performed across locations.",
    imageSrc: alprDeepDiveBg,
  },
  {
    id: "security",
    tag: "Products",
    name: "Layered Security & Privacy",
    accentClass: "bg-[#e9c46a]",
    description:
      "Our platform protects individual identities by processing data in an aggregated, anonymized, and compliant manner.",
    imageSrc: alprDeepDiveBg,
  },
];

function ProductsCarousel() {
  const [productSlideIndex, setProductSlideIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setProductSlideIndex((i) => (i + 1) % PRODUCT_SLIDES.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden">
      {PRODUCT_SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 grid grid-cols-1 md:grid-cols-2 transition-opacity duration-700 ${
            i === productSlideIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <div className="relative h-full min-h-[240px] md:min-h-0 bg-muted">
            {slide.imageSrc ? (
              <img
                src={slide.imageSrc}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            ) : (
              <div className={`absolute inset-0 ${slide.accentClass} opacity-90`} aria-hidden />
            )}
          </div>
          <div className="relative h-full flex items-center justify-center p-6 md:p-10 lg:p-12">
            <div className="w-full max-w-md rounded-2xl bg-foreground/85 backdrop-blur-sm p-6 md:p-8 border border-primary-foreground/10">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-foreground/80">
                {slide.tag}
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mt-2 mb-4 leading-tight">
                {slide.name}
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed">
                <span className="font-semibold text-primary-foreground">Our</span>{" "}
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-foreground/5 pointer-events-none z-[5]" aria-hidden />
    </div>
  );
}

export default function HLAPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="pt-16">
        {/* 1. Hero */}
        <section className="w-full relative overflow-hidden" aria-label="AdTech Platform hero">
          <div
            className="relative w-full max-h-[85vh] min-h-[400px] bg-cover bg-center bg-no-repeat bg-[#0b1220]"
            style={{ backgroundImage: `url(${heroBannerImg})`, aspectRatio: "1920 / 810" }}
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

        {/* 3. Products carousel */}
        <section className="relative py-14 md:py-20 bg-background overflow-hidden" data-section="products">
          <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6">
            <ProductsCarousel />
          </div>
        </section>

        {/* 4. Key benefits + Feature Deep Dive */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              <div className="flex flex-col">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
                  Key benefits
                </h2>
                <ul className="space-y-5 text-base md:text-lg text-foreground leading-relaxed list-none">
                  <li className="flex gap-3">
                    <span className="text-primary shrink-0 mt-1.5 w-1.5 h-1.5 rounded-sm bg-current" aria-hidden />
                    Our platform offers shopper behavior insights right at the edge, removing delays
                    caused by sending data back and forth to the cloud
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary shrink-0 mt-1.5 w-1.5 h-1.5 rounded-sm bg-current" aria-hidden />
                    Smarter targeting reduces wasted advertising spend by focusing impressions only
                    on shoppers who are most likely to respond
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary shrink-0 mt-1.5 w-1.5 h-1.5 rounded-sm bg-current" aria-hidden />
                    Ads and offers are delivered instantly by processing behavior on site and
                    responding immediately, so messages appear while shopper interest is still high
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary shrink-0 mt-1.5 w-1.5 h-1.5 rounded-sm bg-current" aria-hidden />
                    Context-aware personalization delivers messaging tailored to live demographics,
                    movement, and engagement in the moment
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary shrink-0 mt-1.5 w-1.5 h-1.5 rounded-sm bg-current" aria-hidden />
                    Clear measurement connects every impression to real-world engagement and
                    business results
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary shrink-0 mt-1.5 w-1.5 h-1.5 rounded-sm bg-current" aria-hidden />
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

        {/* 5. Feature Deep Dive intro */}
        <section className="py-14 md:py-20 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              We provide actionable insights into customer behavior, dwell time, and intent, helping
              retailers make confident decisions without being overwhelmed by large volumes of data.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our platform reduces wasted advertising spend and connects every impression to
              real-world engagement and business outcomes.
            </p>
          </div>
        </section>

        {/* 6. Product sections: text + image/video placeholder */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-16 md:space-y-24">
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
                  </Button>
                </Link>
              </div>
              <div className="aspect-video rounded-xl bg-foreground/10 flex items-center justify-center text-muted-foreground">
                <span className="text-sm">Image / demo area</span>
              </div>
            </div>

            {/* 2. Loyalty & Offers: media left, text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 aspect-video rounded-xl bg-foreground/10 flex items-center justify-center text-muted-foreground">
                <span className="text-sm">Image / demo area</span>
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
                  </Button>
                </Link>
              </div>
              <div className="aspect-video rounded-xl bg-foreground/10 flex items-center justify-center text-muted-foreground">
                <span className="text-sm">Image / demo area</span>
              </div>
            </div>

            {/* 4. Dynamic Attribution Dashboard: media left, text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 aspect-video rounded-xl bg-foreground/10 flex items-center justify-center text-muted-foreground">
                <span className="text-sm">Image / demo area</span>
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
                  </Button>
                </Link>
              </div>
              <div className="aspect-video rounded-xl bg-foreground/10 flex items-center justify-center text-muted-foreground">
                <span className="text-sm">Image / demo area</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
