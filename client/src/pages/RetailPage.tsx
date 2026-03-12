import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import retailKeyImg from "@assets/retail-key.jpg";

const KEY_CHALLENGES = [
  "Increasing responsibility to protect customer privacy and comply with data protection regulations",
  "Fragmented data across channels, preventing a unified understanding of customer journeys",
  "Lack of contextual intelligence to adapt experiences dynamically while maintaining consumer trust",
  "Reliance on broad assumptions, limited visibility into customer behavior and real time insights",
  "Failing to deliver timely and relevant personalized experiences",
];

export default function RetailPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-5xl mx-auto space-y-16 md:space-y-20">
          {/* Hero */}
          <section>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mt-0 mb-8 leading-tight text-left text-foreground">
              Retail
            </h1>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                Retailers today operate in an increasingly complex environment where
                customer expectations evolve rapidly across physical and digital
                spaces. Understanding what customers need in the moment, while
                respecting their right to privacy, has become one of the
                industry&apos;s greatest challenges.
              </p>
              <p>
                At Iolaire.AI, we tackle this critical challenge by combining Vision
                AI and shopper data sets along with precision ads tailored to real
                time demographics. This approach attracts engagement, enables
                transactions, and delivers delight in the moments that matter most.
              </p>
            </div>
          </section>

          {/* Key Challenges */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">
              Key Challenges
            </h2>
            <div className="h-1 w-16 rounded-full bg-primary mb-8" />
            <ul className="space-y-4">
              {KEY_CHALLENGES.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-base md:text-lg text-muted-foreground leading-relaxed"
                >
                  <span className="text-primary shrink-0 text-xs md:text-sm leading-none -translate-y-px" aria-hidden>
                    ■
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* How we enable */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">
              How we enable retailers to deliver timely, relevant, and customer
              centric experiences
            </h2>
            <div className="h-1 w-16 rounded-full bg-primary mb-8" />
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                We address these challenges by delivering real time aggregated and
                anonymized shopper data sets segmented by time of day paired with
                localized insights into real time offer conversion. Our platform
                delivers insight into the personas present, how shopper behavior
                changes throughout the day, and which contextual signals indicate
                purchase intent. This enables retailers to determine when to
                deliver targeted messaging and adapt advertising dynamically based
                on location, time, traffic flow, or crowd composition.
              </p>
              <p>
                Shopper delight is achieved without relying on personal
                identification or invasive data collection, ensuring customer
                privacy and trust are maintained.
              </p>
            </div>
          </section>

          {/* Retail Vision AI + image */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">
                Retail Vision AI
              </h2>
              <div className="h-1 w-16 rounded-full bg-primary mb-6" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our Vision AI platform powers the retail experience with
                real-time, privacy-preserving intelligence—so you can engage
                customers in the moments that matter.
              </p>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px] rounded-2xl overflow-hidden shadow-lg border border-border/50">
              <img
                src={retailKeyImg}
                alt="Retail Vision AI - intelligent retail engagement"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
