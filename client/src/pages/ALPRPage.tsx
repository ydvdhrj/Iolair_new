import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import heroBannerImg from "@assets/hero-banner.png";
import alprDeepDiveBg from "@assets/alpr-deep-dive-bg.png";
import alprPlatformVideo from "@/assets/alpr-platform.mp4";
import unifiedDashboardVideo from "@/assets/unified-dashboard.mp4";
import layerSecurityVideo from "@/assets/layer-security.mp4";
import edgeApplicationVideo from "@/assets/edge-application.mp4";

const PRODUCT_SLIDES = [
  {
    id: "alpr",
    tag: "Products",
    name: "ALPR Platform",
    accentClass: "bg-[#feac00]",
    description:
      "Our advanced automated license plate reader (ALPR) platform monitors real time traffic.",
  },
  {
    id: "alerts",
    tag: "Products",
    name: "Real Time AI Alerts",
    accentClass: "bg-[#e84826]",
    description:
      "Get instant, actionable alerts from your Vision AI feeds with real-time detection and notification.",
  },
  {
    id: "security",
    tag: "Products",
    name: "Layered Security & Privacy",
    accentClass: "bg-[#639b5c]",
    description:
      "Privacy-first architecture with encryption, tokenization, and compliance built in.",
  },
  {
    id: "edge",
    tag: "Products",
    name: "Edge Applications",
    accentClass: "bg-[#78afdb]",
    description:
      "Run Vision AI and analytics at the edge for low latency and resilient operations.",
  },
];

/* Box positions (left, top 0–1, width/height in %) align with license plates in hero banner */
const DEMO_VEHICLES = [
  {
    id: "car-1",
    fallbackPlate: "GXB-5332",
    region: "New York",
    model: "3 Series (F30)",
    make: "BMW",
    color: "Dark Blue",
    direction: "Moving West",
    confidence: "97.2%",
    box: { left: 0.34, top: 0.56, width: 8, height: 4 },
  },
  {
    id: "car-2",
    fallbackPlate: "2AQC214",
    region: "California",
    model: "Camry",
    make: "Toyota",
    color: "Red",
    direction: "Moving West",
    confidence: "96.5%",
    box: { left: 0.68, top: 0.52, width: 8, height: 4 },
  },
  {
    id: "car-3",
    fallbackPlate: "OR-A21B",
    region: "Oregon",
    model: "Accord",
    make: "Honda",
    color: "Silver",
    direction: "Moving West",
    confidence: "95.8%",
    box: { left: 0.20, top: 0.60, width: 8, height: 4 },
  },
];

export default function ALPRPage() {
  const [productIndex, setProductIndex] = useState(0);
  const [demoVehicleIndex, setDemoVehicleIndex] = useState(0);
  const [cardUpdating, setCardUpdating] = useState(false);

  const currentVehicle = DEMO_VEHICLES[demoVehicleIndex];

  useEffect(() => {
    const id = setInterval(() => {
      setCardUpdating(true);
      setTimeout(() => {
        setDemoVehicleIndex((i) => (i + 1) % DEMO_VEHICLES.length);
        setCardUpdating(false);
      }, 260);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main>
        {/* 1. Vision AI demo: hero banner + detection overlay + ANPR card */}
        <section
          className="demo-image-section w-full relative overflow-hidden"
          aria-label="Vision AI demo"
        >
          <div
            className="demo-image-section__inner relative w-full max-h-[85vh] min-h-[400px]"
            style={{ aspectRatio: "1920 / 810" }}
          >
            <div
              className="demo-image-section__bg absolute inset-0 bg-cover bg-center bg-no-repeat bg-[#0b1220]"
              style={{ backgroundImage: `url(${heroBannerImg})` }}
            />
            <div
              id="vehicle-detection-overlay"
              className="vehicle-detection-overlay absolute inset-0 pointer-events-none z-[1]"
              aria-hidden
            >
              {currentVehicle && (
                <div
                  className="vehicle-detection-box active"
                  style={{
                    left: `${currentVehicle.box.left * 100}%`,
                    top: `${currentVehicle.box.top * 100}%`,
                    width: `${currentVehicle.box.width}%`,
                    height: `${currentVehicle.box.height ?? 4}%`,
                  }}
                  aria-hidden
                />
              )}
            </div>
            <div className="demo-image-section__card absolute bottom-6 right-6 z-[2] max-w-[340px]">
              <div
                id="anpr-card"
                className={`vehicle-detection-card rounded-xl bg-card/95 backdrop-blur-sm border border-border shadow-2xl p-5 ${cardUpdating ? "is-updating" : ""}`}
              >
                <div className="vehicle-card-top space-y-4">
                  <div className="vehicle-card-left">
                    <div className="license-plate-display inline-block rounded bg-primary px-3 py-1.5">
                      <div className="plate-number js-plate-number text-primary-foreground font-bold text-lg tracking-wide">
                        {currentVehicle?.fallbackPlate ?? "--"}
                      </div>
                      <div className="plate-region js-plate-region text-primary-foreground/80 text-sm">
                        {currentVehicle?.region ?? "--"}
                      </div>
                    </div>
                    <div className="anpr-inline mt-2">
                      <span className="anpr-status inline-flex items-center px-2.5 py-1 rounded-full bg-success/20 text-success text-sm font-medium js-anpr-status">
                        {cardUpdating ? "Detecting..." : "Plate Detected"}
                      </span>
                    </div>
                  </div>
                  <div className="vehicle-details-compact space-y-2 text-sm">
                    <div className="detail-line flex justify-between gap-2">
                      <span className="detail-label text-muted-foreground">Vehicle Model:</span>
                      <span className="detail-value js-vehicle-model font-medium">
                        {currentVehicle?.model ?? "--"}
                      </span>
                    </div>
                    <div className="detail-line flex justify-between gap-2">
                      <span className="detail-label text-muted-foreground">Vehicle Make:</span>
                      <span className="detail-value js-vehicle-make font-medium">
                        {currentVehicle?.make ?? "--"}
                      </span>
                    </div>
                    <div className="detail-line flex justify-between gap-2">
                      <span className="detail-label text-muted-foreground">Vehicle Color:</span>
                      <span className="detail-value js-vehicle-color font-medium">
                        {currentVehicle?.color ?? "--"}
                      </span>
                    </div>
                    <div className="detail-line flex justify-between gap-2">
                      <span className="detail-label text-muted-foreground">Direction:</span>
                      <span className="detail-value js-vehicle-direction font-medium">
                        {currentVehicle?.direction ?? "--"}
                      </span>
                    </div>
                    <div className="detail-line flex justify-between gap-2">
                      <span className="detail-label text-muted-foreground">Confidence:</span>
                      <span className="detail-value js-vehicle-confidence font-medium">
                        {currentVehicle?.confidence ?? "--"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Intro text */}
        <section className="py-14 md:py-20 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Traditional traffic enforcement often misses critical events,
              provides limited situational awareness, and increases burden on law
              enforcement. When threats go unseen and unresolved, communities
              lose trust.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Vision AI empowers authorities to identify incidents early, improve
              accuracy, reduce operational burden, and enable faster, evidence
              based decisions.
            </p>
          </div>
        </section>

        {/* 3. Products section: blue box + slider */}
        <section className="relative py-16 md:py-24 overflow-hidden" data-section="products">
          <div className="products_bg absolute inset-0 bg-primary/8" aria-hidden />
          <div className="relative padding-global container mx-auto px-4 md:px-6">
            <div className="products-blue-box max-w-6xl mx-auto rounded-2xl bg-primary/12 border border-primary/20 p-8 md:p-12">
              <div className="products-slider-container">
                {PRODUCT_SLIDES.map((slide, i) => (
                  <div
                    key={slide.id}
                    className={`product-slide ${i === productIndex ? "block" : "hidden"}`}
                    data-product={i + 1}
                  >
                    <div className="alpr-platform-layout grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                      <div className="alpr-platform-video aspect-video rounded-xl bg-foreground/10 flex items-center justify-center text-muted-foreground">
                        <span className="text-sm">Video / demo area</span>
                      </div>
                      <div className="alpr-platform-content">
                        <div className="product-header-flex flex flex-wrap items-center gap-3 mb-4">
                          <span className="product-tag text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            {slide.tag}
                          </span>
                          <span
                            className={`product-name-button inline-block px-4 py-2 rounded-lg text-primary-foreground font-bold text-lg ${slide.accentClass}`}
                          >
                            {slide.name}
                          </span>
                        </div>
                        <div className="product-content-card">
                          <p className="text-muted-foreground leading-relaxed">
                            <span className="font-semibold text-foreground">Our</span>{" "}
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider nav: dots + arrows */}
              <div className="products-slider-nav flex items-center justify-center gap-4 mt-10 pt-6 border-t border-border/50">
                <button
                  type="button"
                  onClick={() => setProductIndex((i) => Math.max(0, i - 1))}
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors disabled:opacity-40"
                  disabled={productIndex === 0}
                  aria-label="Previous product"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex gap-2">
                  {PRODUCT_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setProductIndex(i)}
                      className={`h-2.5 rounded-full transition-all ${
                        i === productIndex ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                      aria-current={i === productIndex ? "true" : undefined}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setProductIndex((i) => Math.min(PRODUCT_SLIDES.length - 1, i + 1))}
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors disabled:opacity-40"
                  disabled={productIndex === PRODUCT_SLIDES.length - 1}
                  aria-label="Next product"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Key benefits + Feature Deep Dive */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              {/* Key benefits */}
              <div className="flex flex-col">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
                  Key benefits
                </h2>
                <ul className="space-y-5 text-base md:text-lg text-foreground leading-relaxed list-none">
                  <li className="flex gap-3">
                    <span className="text-primary shrink-0 mt-1.5 w-1.5 h-1.5 rounded-sm bg-current" aria-hidden />
                    Improved officer safety through situational awareness and location accuracy
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary shrink-0 mt-1.5 w-1.5 h-1.5 rounded-sm bg-current" aria-hidden />
                    Early detection of potential threats before they escalate
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary shrink-0 mt-1.5 w-1.5 h-1.5 rounded-sm bg-current" aria-hidden />
                    Increased situational awareness. Faster and confident decision making
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary shrink-0 mt-1.5 w-1.5 h-1.5 rounded-sm bg-current" aria-hidden />
                    Optimized for existing infrastructure, low operational overhead
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary shrink-0 mt-1.5 w-1.5 h-1.5 rounded-sm bg-current" aria-hidden />
                    Stronger protection of public events, crowded zones, and sensitive buildings
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary shrink-0 mt-1.5 w-1.5 h-1.5 rounded-sm bg-current" aria-hidden />
                    Reduced manual monitoring workload for control room teams
                  </li>
                </ul>
              </div>

              {/* Feature Deep Dive: background image only */}
              <div className="relative min-h-[360px] md:min-h-[420px] rounded-2xl overflow-hidden">
                <img
                  src={alprDeepDiveBg}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. Four product sections: text + video placeholder */}
        <section className="py-14 md:py-20 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-16 md:space-y-24">
            {/* 1. ALPR Platform: text left, video right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  ALPR Platform
                </h2>
                <div className="h-1 w-16 rounded-full bg-primary mb-6" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our advanced automated license plate reader (ALPR) platform analyzes
                    live and recorded camera feeds with unparalleled speed, consistency,
                    and scale. It compares license plate numbers against authorized
                    databases to generate timely alerts and maintain accurate records of
                    vehicle activity.
                  </p>
                  <p>
                    It delivers reliable intelligence that helps protect neighborhoods,
                    parks, transit, public area, and community environments.
                  </p>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-muted border border-border shadow-lg">
                <video
                  src={alprPlatformVideo}
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* 2. Unified Dashboard: video left, text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 relative aspect-video rounded-xl overflow-hidden bg-muted border border-border shadow-lg">
                <video
                  src={unifiedDashboardVideo}
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Unified Dashboard
                </h2>
                <div className="h-1 w-16 rounded-full bg-primary mb-6" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our &apos;Single pane of glass&apos; delivers faster decision making and
                    stronger situational awareness by analyzing vehicle movement and
                    behavior in real time. By combining location, time, movement
                    patterns, and historical data, it provides deep contextual
                    understanding of every situation.
                  </p>
                  <p>
                    Together, these capabilities give law enforcement the clarity and
                    confidence needed to act decisively, enhancing officer safety through
                    improved awareness and precise location information.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Layered Security & Privacy: text left, video right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Layered Security & Privacy
                </h2>
                <div className="h-1 w-16 rounded-full bg-primary mb-6" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At IOLAIRE.AI, we recognize that safeguarding resident privacy is
                    essential to maintaining public trust. For this reason, we apply
                    strict data protection standards and ensure that all information is
                    handled responsibly and transparently.
                  </p>
                  <p>
                    Our platform is designed to protect sensitive data while supporting
                    community safety, and our operational practices fully comply with
                    the Driver&apos;s Privacy Protection Act (DPPA) and all applicable
                    privacy requirements.
                  </p>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-muted border border-border shadow-lg">
                <video
                  src={layerSecurityVideo}
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* 4. Edge Applications: video left, text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 relative aspect-video rounded-xl overflow-hidden bg-muted border border-border shadow-lg">
                <video
                  src={edgeApplicationVideo}
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Edge Applications
                </h2>
                <div className="h-1 w-16 rounded-full bg-primary mb-6" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our edge applications continuously monitor activity and identify
                    potential risks as they emerge, processing intelligence directly
                    in the field close to cameras and sensors.
                  </p>
                  <p>
                    When a risk is detected, alerts are generated immediately with
                    actionable context including location, movement patterns, and visual
                    evidence. This edge based approach strengthens situational
                    awareness for officers and control room teams, helping them respond
                    with confidence and care.
                  </p>
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
