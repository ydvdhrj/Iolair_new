import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Lock,
  ShoppingCart,
  LineChart,
  Eye,
  Layers,
  ShieldCheck,
  Calendar,
  FileText,
  Cookie,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { VisionAIFeatureTracks } from "@/components/VisionAIFeatureTracks";

import heroPageImg from "@assets/HeroPage.png";
import retailHeroImg from "@assets/retail-hero.png";
import safetyTeamImg from "@assets/safety-enforcement-team.png";
import seeResultsHighwayImg from "@assets/see-results-highway.png";
import seeResultsBillboardImg from "@assets/see-results-billboard.png";
import seeResultsAlprImg from "@assets/see-results-alpr.png";

import icon5g from "@assets/vision-ai/5g.png";
import iconApis from "@assets/vision-ai/apis.png";
import iconComputerVision from "@assets/vision-ai/computer-vision.png";
import iconDashboard from "@assets/vision-ai/dashboard.png";
import iconEncryption from "@assets/vision-ai/encryption.png";
import iconFirstnet from "@assets/vision-ai/firstnet.png";
import iconMicroDataCenter from "@assets/vision-ai/micro-data-center.png";
import iconOcr from "@assets/vision-ai/ocr.png";
import iconSdWan from "@assets/vision-ai/sd-wan.png";
import iconTokenization from "@assets/vision-ai/tokenization.png";
import iconVirtualMachines from "@assets/vision-ai/virtual-machines.png";
import iconStreamingVideo from "@assets/vision-ai/streaming-video.png";
import iconAlerts from "@assets/vision-ai/alerts.png";
import iconEdgeApplications from "@assets/vision-ai/edge-applications.png";

const VISION_AI_FEATURES = [
  { id: "5g", label: "5G", iconSrc: icon5g },
  { id: "apis", label: "APIs", iconSrc: iconApis },
  { id: "computer-vision", label: "Computer Vision", iconSrc: iconComputerVision },
  { id: "encryption", label: "Encryption", iconSrc: iconEncryption },
  { id: "firstnet", label: "FirstNet", iconSrc: iconFirstnet },
  { id: "micro-data-center", label: "Micro Data Center", iconSrc: iconMicroDataCenter },
  { id: "alerts", label: "Alerts", iconSrc: iconAlerts },
  { id: "sd-wan", label: "SD-WAN", iconSrc: iconSdWan },
  { id: "streaming-video", label: "Streaming Video", iconSrc: iconStreamingVideo },
  { id: "tokenization", label: "Tokenization", iconSrc: iconTokenization },
  { id: "virtual-machines", label: "Virtual Machines", iconSrc: iconVirtualMachines },
  { id: "dashboard", label: "Dashboard", iconSrc: iconDashboard },
  { id: "ocr", label: "OCR", iconSrc: iconOcr },
  { id: "edge-applications", label: "Edge Applications", iconSrc: iconEdgeApplications },
];

/* Explore Our Platform card colors */
const PLATFORM_CARD_COLORS = [
  "#6a2de2", // 0 - AdTech Overview
  "#39827a", // 1 - Loyalty & Offers
  "#1f6fff", // 2 - ALPR Overview
  "#78afdb", // 3 - Edge Applications
  "#feac00", // 4 - Unified Dashboard & Layered Security (shared)
];

function RotatingPhrase({
  phrases,
  intervalMs = 3000,
}: {
  phrases: string[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % phrases.length), intervalMs);
    return () => clearInterval(id);
  }, [phrases.length, intervalMs]);

  return (
    <span className="relative inline-block">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function SeeTheResultsCarousel() {
  // Auto-rotating background images (billboard + ALPR) with a fixed foreground card
  const slides = [seeResultsBillboardImg, seeResultsAlprImg];
  const [index, setIndex] = useState(0);

  const goToPrev = () => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setIndex((i) => (i + 1) % slides.length);
  };

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      6000
    );
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative py-14 md:py-20 bg-background overflow-hidden">
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="relative min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden">
          {/* Background images that fade between each other */}
          <div className="absolute inset-0">
            {slides.map((src, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={src}
                  alt={
                    i === 0
                      ? "Digital billboard advertising in an urban setting"
                      : "ALPR system - real-time vehicle detection and alerts"
                  }
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-4 right-4 bg-white/70 text-foreground text-[1.2rem] sm:text-[1.35rem] md:text-[1.5rem] px-5 py-2 rounded-full backdrop-blur-sm shadow-md flex items-center gap-1.5">
                  <span>{i === 0 ? "AdTech" : "ALPR"}</span>
                  <span className="text-gradient font-semibold">Platform</span>
                </div>
              </div>
            ))}
          </div>

          {/* Manual controls */}
          <div className="absolute inset-0 flex items-center justify-end px-4 z-10 pointer-events-none">
            <button
              type="button"
              onClick={goToNext}
              className="pointer-events-auto inline-flex items-center justify-center h-10 w-10 rounded-full bg-background/80 text-foreground shadow-md hover:bg-background"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Fixed foreground card */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-md p-6 md:p-12">
              <div className="rounded-2xl bg-foreground/80 backdrop-blur-sm p-6 md:p-8 border border-primary-foreground/10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
                  See the results
                  <br />
                  for yourself
                </h2>
                <Link href="/calendar">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full w-full sm:w-auto"
                  >
                    Book an appointment{" "}
                    <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Optional subtle overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30">
      <Navbar />

      {/* 1. HERO SECTION - fills first viewport */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 md:pt-28 md:pb-24 overflow-hidden hero-pattern">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/15 rounded-full blur-[140px] -z-10 opacity-60" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10 opacity-40" />
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-0 flex-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] mb-6 tracking-tight text-foreground">
              Vision AI <span className="text-gradient">Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Powering Intelligent <span className="text-primary font-semibold">Retail</span> Engagement and <span className="text-primary font-semibold">Safety Enforcement</span> at the Edge
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/calendar">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-14 px-10 text-lg shadow-lg shadow-primary/20"
                >
                  Get a demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[320px] sm:h-[400px] lg:h-[70vh] lg:min-h-[420px]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/60 shadow-2xl shadow-primary/10">
              <img
                src={heroPageImg}
                alt="IOLAIRE.AI Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. RETAIL CARD */}
      <section className="py-14 md:py-20 section-soft">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="order-1 lg:order-1">
              <span className="text-primary font-bold tracking-widest uppercase text-[1.05rem] mb-4 block">
                Product Suite
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
                Retail
              </h2>
              <p className="text-xl md:text-2xl font-medium text-foreground mb-6">
                Real-Time Impact. Realized.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                Transform retail advertising with our edge based AI advertising
                platform, delivering hyper personalized, real time campaigns that
                reach shoppers at the right moment.
              </p>
              <Link href="/retail">
                <a className="link-underline inline-flex items-center gap-1 text-primary font-semibold">
                  Learn More <span className="ml-1">-&gt;</span>
                </a>
              </Link>
            </div>
            <div className="order-2 lg:order-2 relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] rounded-2xl overflow-hidden shadow-lg shadow-primary/5">
              <img
                src={retailHeroImg}
                alt="Retail - Digital display in urban environment"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SAFETY ENFORCEMENT CARD */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-[1.05rem] mb-4 block">
                Product Suite
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
                Safety Enforcement
              </h2>
              <p className="text-xl md:text-2xl font-medium text-foreground mb-6">
                Advancing the future of safety for every resident
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                We leverage the power of AI to deliver Safety Enforcement where
                people can live, work, and play at ease.
              </p>
              <Link href="/safety-enforcement">
                <a className="link-underline inline-flex items-center gap-1 text-primary font-semibold">
                  Learn More <span className="ml-1">-&gt;</span>
                </a>
              </Link>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] rounded-2xl overflow-hidden shadow-lg shadow-primary/5">
              <img
                src={safetyTeamImg}
                alt="Safety Enforcement team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. FUTURE OF VISION AI + LOGO SCROLLER */}
      <section className="py-14 md:py-20 section-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 leading-tight flex flex-wrap items-center justify-center gap-x-2">
              One Vision AI Partner Building
              <br />
              Real-Time Trust and Engagement for{" "}
              <span className="inline-block min-h-[1.2em] overflow-hidden text-primary align-middle">
                <RotatingPhrase
                  phrases={["Last Mile Advertising", "Safer Neighborhoods"]}
                  intervalMs={3000}
                />
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our advanced AI delivers accuracy where it matters most
            </p>
            <div className="flex flex-wrap justify-center gap-16 md:gap-24 lg:gap-32 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-primary">↗</span>
                <div>
                  <div className="text-4xl md:text-5xl font-heading font-bold text-primary">
                    95%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Image accuracy
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">↗</span>
                <div>
                  <div className="text-4xl md:text-5xl font-heading font-bold text-primary">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Geo location accuracy
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/calendar">
                <a className="link-underline inline-flex items-center gap-1 text-primary font-semibold">
                  Request a demo <span className="ml-1">-&gt;</span>
                </a>
              </Link>
            </div>
          </div>
          {/* Scrollers fill full width in background; card centered on top */}
          <div className="relative min-h-[280px] md:min-h-[320px] flex items-center justify-center py-10 md:py-12">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <VisionAIFeatureTracks features={VISION_AI_FEATURES} className="absolute inset-0 flex flex-col justify-center" />
            </div>
            <div className="relative z-10 w-full max-w-3xl px-4">
              <div className="bg-background/95 backdrop-blur-sm p-8 md:p-12 text-center rounded-2xl">
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Future of Vision AI is here
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
                  Transformative Vision AI solutions designed for industry needs,
                  securing communities through reliable intelligence while operating
                  efficiently within existing infrastructure.
                </p>
                <Link href="/platform-architecture" className="inline-flex">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8"
                  >
                    Explore the platform <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEE THE RESULTS - Carousel: slide 1 = image, slide 2 = placeholder for content */}
      <SeeTheResultsCarousel />

      {/* 7. EXPLORE OUR PLATFORM */}
      <section className="py-14 md:py-20 section-soft">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-10"
          >
            Explore Our Platform
          </motion.h2>

          <div className="max-w-6xl mx-auto space-y-4">
            {/* AdTech row: label left, cards horizontal */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch">
              <div className="flex items-center justify-center md:justify-start md:w-40 shrink-0 text-base md:text-lg font-heading font-bold text-foreground md:py-4">
                AdTech Platform
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-1 min-w-0">
                <Link href="/hla" className="flex-1 min-w-0">
                  <a
                    className="group block relative flex flex-col justify-end rounded-2xl p-6 min-h-[140px] md:min-h-[160px] text-white no-underline transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] active:translate-y-0 h-full"
                    style={{ backgroundColor: PLATFORM_CARD_COLORS[0] }}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                      <span className="font-heading font-bold text-base md:text-lg leading-snug">
                        Overview
                      </span>
                      <div className="shrink-0 w-9 h-9 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                        <Lock className="h-4 w-4" style={{ color: "#5e17eb" }} />
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="/hla" className="flex-1 min-w-0">
                  <a
                    className="group block relative flex flex-col justify-end rounded-2xl p-6 min-h-[140px] md:min-h-[160px] text-white no-underline transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] active:translate-y-0 h-full"
                    style={{ backgroundColor: PLATFORM_CARD_COLORS[1] }}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                      <span className="font-heading font-bold text-base md:text-lg leading-snug">
                        Loyalty &amp; Offers
                      </span>
                      <div className="shrink-0 w-9 h-9 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                        <ShoppingCart className="h-4 w-4" style={{ color: "#5e17eb" }} />
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="/hla" className="flex-1 min-w-0 md:-mb-2">
                  <a
                    className="group block relative flex flex-col justify-end rounded-2xl md:rounded-b-none p-6 min-h-[140px] md:min-h-[160px] text-white no-underline transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] active:translate-y-0 h-full"
                    style={{ backgroundColor: PLATFORM_CARD_COLORS[4] }}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                      <span className="font-heading font-bold text-base md:text-lg leading-snug">
                        Unified Dashboard
                      </span>
                      <div className="shrink-0 w-9 h-9 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                        <LineChart className="h-4 w-4" style={{ color: "#5e17eb" }} />
                      </div>
                    </div>
                    <div className="h-2 shrink-0 hidden md:block" aria-hidden="true" />
                  </a>
                </Link>
              </div>
            </div>

            {/* ALPR row: label left, cards horizontal */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch">
              <div className="flex items-center justify-center md:justify-start md:w-40 shrink-0 text-base md:text-lg font-heading font-bold text-foreground md:py-4">
                ALPR Platform
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-1 min-w-0">
                <Link href="/alpr" className="flex-1 min-w-0">
                  <a
                    className="group block relative flex flex-col justify-end rounded-2xl p-6 min-h-[140px] md:min-h-[160px] text-white no-underline transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] active:translate-y-0 h-full"
                    style={{ backgroundColor: PLATFORM_CARD_COLORS[2] }}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                      <span className="font-heading font-bold text-base md:text-lg leading-snug">
                        Overview
                      </span>
                      <div className="shrink-0 w-9 h-9 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                        <Eye className="h-4 w-4" style={{ color: "#5e17eb" }} />
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="/industry-solutions" className="flex-1 min-w-0">
                  <a
                    className="group block relative flex flex-col justify-end rounded-2xl p-6 min-h-[140px] md:min-h-[160px] text-white no-underline transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] active:translate-y-0 h-full"
                    style={{ backgroundColor: PLATFORM_CARD_COLORS[3] }}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                      <span className="font-heading font-bold text-base md:text-lg leading-snug">
                        Edge Applications
                      </span>
                      <div className="shrink-0 w-9 h-9 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                        <Layers className="h-4 w-4" style={{ color: "#5e17eb" }} />
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href="/alpr" className="flex-1 min-w-0 md:-mt-2">
                  <a
                    className="group block relative flex flex-col justify-end rounded-2xl md:rounded-t-none p-6 min-h-[140px] md:min-h-[160px] text-white no-underline transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] active:translate-y-0 h-full"
                    style={{ backgroundColor: PLATFORM_CARD_COLORS[4] }}
                  >
                    <div className="h-2 shrink-0 hidden md:block" aria-hidden="true" />
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                      <span className="font-heading font-bold text-base md:text-lg leading-snug">
                        Layered Security &amp; Privacy
                      </span>
                      <div className="shrink-0 w-9 h-9 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                        <ShieldCheck className="h-4 w-4" style={{ color: "#5e17eb" }} />
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
