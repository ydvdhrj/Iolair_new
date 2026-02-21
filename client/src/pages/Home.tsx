import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, FileText, Lock, Search, Zap, Cpu, BarChart3, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Asset imports
import heroPageImg from "@assets/HeroPage.png";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import hlaImage from "@assets/HLA.jpg";
import alprImage from "@assets/ALPR.png";

export default function Home() {
  const productsRef = useRef(null);
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50" />
        
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] mb-6 tracking-tight">
              Vision AI <span className="text-gradient">Platform</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Advancing the future of safety for every resident. We leverage the power of AI to deliver Safety Enforcement where people live, work, and play at ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/calendar">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full h-12 px-8 text-base shadow-lg shadow-primary/20">
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
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img 
                src={heroPageImg} 
                alt="IOLAIRE.AI Hero" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTINUOUS SLIDING PRODUCTS SECTION */}
      <section ref={productsRef} className="relative w-full overflow-hidden">
        {/* Product 1: Full Screen Section */}
        <div className="relative h-screen w-full flex items-center overflow-hidden border-b border-border bg-background">
          <div className="absolute inset-0 z-0">
            <img src={alprImage} className="w-full h-full object-cover opacity-60 scale-105" alt="ALPR Platform" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-sm">Our Products</span>
              <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-foreground drop-shadow-lg">Automatic License Plate Recognition</h2>
              <p className="text-xl text-foreground/90 mb-8 leading-relaxed drop-shadow-sm">
                Autonomous traffic safety and enforcement platform. Real-time vehicle detection, license plate recognition, and behavior analysis for smart cities and private communities.
              </p>
              <Link href="/alpr">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full h-14 px-10 text-lg shadow-xl">
                  Explore ALPR
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Product 2: Full Screen Section */}
        <div className="relative h-screen w-full flex items-center overflow-hidden bg-background">
          <div className="absolute inset-0 z-0">
            <img src={hlaImage} className="w-full h-full object-cover opacity-60 scale-105" alt="AdTech Platform" />
            <div className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/70 to-transparent" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 flex justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-right"
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-sm">Product Suite</span>
              <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-foreground drop-shadow-lg">AdTech Platform</h2>
              <p className="text-xl text-foreground/90 mb-8 leading-relaxed drop-shadow-sm">
                Transform retail advertising with our edge-based AI advertising platform, delivering hyper-personalized, real-time campaigns that reach shoppers at the right moment.
              </p>
              <Link href="/hla">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full h-14 px-10 text-lg shadow-xl">
                  Explore AdTech Platform
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Built for High-Scale Intelligence</h2>
            <p className="text-lg text-muted-foreground">
              IOLAIRE combines proprietary machine learning models with enterprise-grade security to process millions of documents with 99.9% accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Real-time Processing", desc: "Ingest and analyze documents in milliseconds, not minutes." },
              { icon: Cpu, title: "Advanced OCR & NLP", desc: "Understand context and relationships within unstructured text." },
              { icon: Lock, title: "Enterprise Security", desc: "SOC2 compliant architecture with end-to-end encryption." }
            ].map((feature, i) => (
              <Card key={i} className="bg-card/40 border-border hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="py-24 relative overflow-hidden bg-muted/10">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to transform your workflow?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join forward-thinking companies using IOLAIRE to unlock the power of their data.
          </p>
          <Link href="/calendar">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full h-14 px-12 text-lg">
              Contact Our Sales Team
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
