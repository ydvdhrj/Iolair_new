import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ALPRPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Hero Card */}
          <div className="bg-gradient-to-br from-[#332D41] via-[#2A2535] to-[#1F1B2E] rounded-3xl p-8 md:p-12 lg:p-16 mb-16 shadow-2xl border border-white/5">
            <div className="text-center space-y-8">
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
                An Intelligent ALPR Platform for Faster, Smarter Enforcement
              </h2>
              
              {/* Introductory Text */}
              <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                In an era of growing urban complexity and increasing safety expectations, our automatic license plate recognition (ALPR) platform delivers:
              </p>
              
              {/* Metrics */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-20 md:gap-40 pt-4">
                {/* Image Accuracy Metric */}
                <div className="flex flex-col items-center">
                  <div className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-primary mb-2">
                    95%
                  </div>
                  <div className="text-base md:text-lg text-white/90 font-medium">
                    Image accuracy
                  </div>
                </div>
                
                {/* Geo Location Accuracy Metric */}
                <div className="flex flex-col items-center">
                  <div className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-[#2ECC71] mb-2">
                    100%
                  </div>
                  <div className="text-base md:text-lg text-white/90 font-medium">
                    Geo location accuracy
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description Section */}
          <div className="max-w-4xl mx-auto space-y-8 text-lg text-muted-foreground leading-relaxed">
            <div className="space-y-6">
              <p>
                Modern cities generate vast volumes of vehicle movement data across roads, neighborhoods, commercial zones, and sensitive locations. Manual enforcement and traditional surveillance methods cannot scale to monitor this activity effectively or consistently.
              </p>
              <p>
                ALPR platforms provide the ability to identify vehicles, detect patterns, and generate timely intelligence that supports proactive safety enforcement, faster response, and secure communities. While ALPR technology is not new, many existing platforms fall short of modern requirements.
              </p>
            </div>

            {/* Limitations List */}
            <div className="space-y-3">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Siloed systems that do not integrate well with other intelligence tools</li>
                <li>Limited real time processing and delayed alerts</li>
                <li>Poor accuracy in low light, high speed, or complex environments</li>
                <li>Overreliance on centralized cloud processing, increasing latency</li>
                <li>Insufficient contextual insight beyond simple plate reads</li>
                <li>High operational overhead and manual review requirements</li>
                <li>Weak privacy controls, limited anonymization, or unclear data governance</li>
                <li>Interfaces that overwhelm users rather than support decision making</li>
              </ul>
            </div>

            <p>
              These limitations reduce effectiveness, increase risk, and can quickly erode public trust if not addressed carefully.
            </p>

            {/* Technical Deep Dive Section */}
            <div className="space-y-6 pt-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Technical Deep Dive
              </h2>
              <p>
                Our next generation ALPR platform combines Vision AI, edge applications, adaptive machine learning, and unified interfaces to deliver timely, contextual, and privacy-first intelligence.
              </p>
              <p>
                The platform uses Vision AI to capture and enhance vehicle imagery, isolate license plates, and apply advanced optical character recognition (OCR) for high precision recognition. Plate data is processed and analyzed in real time, compared against authorized hotlists and law enforcement databases, and used to generate immediate alerts in line with agency policies.
              </p>
              <p>
                Our ALPR platform empowers law enforcement to recover stolen vehicles, strengthen investigations, prioritize tracking for amber and silver alerts, and turn vehicle data into actionable intelligence.
              </p>
              <p>
                Our platform is built on a modern technology stack that includes computer vision, OCR, real time video streaming, tokenization, encryption, edge computing, micro data centers, virtualized environments, APIs, 5G and FirstNet. Our platform easily integrates with private 5G to segment traffic directly to a city owned private data center. Integrated dashboards, analytics, and alerting systems deliver actionable intelligence through a unified portal, enabling faster decisions, improving situational awareness, and delivering secure, scalable operations.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
