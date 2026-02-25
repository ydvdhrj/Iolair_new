import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";

import heroPageImg from "@assets/HeroPage.png";
import retailHeroImg from "@assets/retail-hero.png";
import safetyTeamImg from "@assets/safety-enforcement-team.png";
import seeResultsHighwayImg from "@assets/see-results-highway.png";

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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden hero-pattern">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/15 rounded-full blur-[140px] -z-10 opacity-60" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10 opacity-40" />
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] mb-6 tracking-tight text-foreground">
              Vision AI <span className="text-gradient">Platform</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Powering Safety Enforcement
              <br />
              and
              <br />
              Intelligent Retail Engagement at the Edge
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/calendar">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-12 px-8 text-base shadow-lg shadow-primary/20"
                >
                  Get a demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[500px]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/60 shadow-2xl shadow-primary/10">
              <img
                src={heroPageImg}
                alt="IOLAIRE.AI Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. RETAIL CARD */}
      <section className="py-20 md:py-28 section-soft border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                Product Suite
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
                Retail
              </h2>
              <p className="text-xl md:text-2xl font-medium italic text-foreground mb-6">
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
            <div className="order-1 lg:order-2 relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] rounded-2xl overflow-hidden shadow-lg shadow-primary/5">
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
      <section className="py-20 md:py-28 bg-background border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                Product Suite
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
                Safety Enforcement
              </h2>
              <p className="text-xl md:text-2xl font-medium italic text-foreground mb-6">
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
      <section className="py-20 md:py-28 section-soft border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 leading-tight">
              One Vision AI Partner Building Real-Time Trust and Engagement for{" "}
              <span className="text-primary">Last Mile Advertising</span>{" "}
              <span className="text-primary">Safer Neighborhoods</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our advanced AI delivers accuracy where it matters most
            </p>
            <div className="flex flex-wrap gap-12 md:gap-16 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">↗</span>
                <div>
                  <div className="text-4xl md:text-5xl font-heading font-bold text-primary">
                    95%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Image accuracy
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">↗</span>
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
            <Link href="/calendar">
              <a className="link-underline inline-flex items-center gap-1 text-primary font-semibold">
                Request a demo <span className="ml-1">-&gt;</span>
              </a>
            </Link>
          </div>
          {/* Scrollers run full width; card sits centered on top */}
          <div className="relative min-h-[320px] md:min-h-[360px] flex items-center justify-center py-12 md:py-16">
            <div className="absolute inset-x-0 top-14 md:top-20 bottom-0 z-0">
              <VisionAIFeatureTracks features={VISION_AI_FEATURES} />
            </div>
            <div className="relative z-10 w-full max-w-3xl px-4">
              <div className="bg-background p-8 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Future of Vision AI is here
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
                  Transformative Vision AI solutions designed for industry needs,
                  securing communities through reliable intelligence while operating
                  efficiently within existing infrastructure.
                </p>
                <Link href="/alpr" className="inline-flex">
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

      {/* 6. SEE THE RESULTS - Carousel with highway image */}
      <section className="relative py-20 md:py-28 bg-background overflow-hidden">
        <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full relative"
          >
            <CarouselContent className="ml-0">
              <CarouselItem className="pl-0">
                <div className="relative min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden">
                  <img
                    src={seeResultsHighwayImg}
                    alt="IOLAIRE.AI - See the results"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  <div className="absolute left-0 top-0 bottom-0 flex items-center p-6 md:p-12 max-w-md z-10">
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
              </CarouselItem>
              <CarouselItem className="pl-0">
                <div className="min-h-[400px] md:min-h-[500px] rounded-2xl bg-muted/30 flex items-center justify-center">
                  <p className="text-muted-foreground text-lg">
                    More slides can be added here later.
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10">
              <CarouselNext className="relative static translate-y-0 h-12 w-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground border-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* 7. EXPLORE OUR PLATFORM */}
      <section className="py-20 md:py-28 section-soft">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12"
          >
            Explore Our Platform
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AdTech Platform Overview",
                href: "/hla",
                icon: Lock,
              },
              {
                title: "Loyalty & Offers",
                href: "/hla",
                icon: ShoppingCart,
              },
              {
                title: "Unified Dashboard",
                href: "/hla",
                icon: LineChart,
              },
              {
                title: "ALPR Platform Overview",
                href: "/alpr",
                icon: Eye,
              },
              {
                title: "Edge Applications",
                href: "/industry-solutions",
                icon: Layers,
              },
              {
                title: "Layered Security & Privacy",
                href: "/alpr",
                icon: ShieldCheck,
              },
            ].map((card) => (
              <Link key={card.title} href={card.href}>
                <a className="group relative block overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 md:p-10 text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300">
                  {/* Subtle inner glow */}
                  <div className="pointer-events-none absolute -top-12 -right-12 h-24 w-24 rounded-full bg-primary-foreground/10 blur-2xl" />
                  <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className="shrink-0 h-16 w-16 rounded-2xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center ring-2 ring-primary-foreground/10 group-hover:bg-primary-foreground/25 group-hover:ring-primary-foreground/20 transition-all duration-300">
                      <card.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="font-heading font-bold text-lg md:text-xl leading-snug block group-hover:underline decoration-2 underline-offset-2">
                        {card.title}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn more
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
