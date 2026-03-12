import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function LoyaltyOffersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-10">
          <header className="space-y-4">
            <span className="text-primary font-bold tracking-widest uppercase text-[0.9rem]">
              AdTech Platform
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Loyalty and Offers
            </h1>
          </header>

          <section className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Long lasting customer loyalty is built in the moment, not on retrospective or
              historical assumptions. Our AdTech Platform empowers retailers to deliver timely,
              relevant, and precision driven offers aligned with live consumer behavior, creating
              a compelling opportunity to reinforce loyalty.
            </p>
          </section>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Turning Real Time Intent into Action
            </h2>
            <p>
              Our AdTech Platform observes arrival patterns, movement, dwell time, and engagement
              to understand shopper intent as it forms. Retailers can use aggregated and
              anonymized shopper data sets to deliver real time offers based on live behavioral,
              demographic, and analytical signals.
            </p>
            <p>
              These insights, combined with real time offers, enable highly targeted advertising
              and promotions that feel relevant, timely, and earned rather than generic or
              transactional. The real impact comes from activating offers when shoppers are most
              receptive, improving conversion while avoiding unnecessary discounting.
            </p>
            <p>
              The alignment of intent, timing, and relevance enhances the customer experience,
              protects margins, and ensures loyalty and offers operate as a unified strategy
              rather than disconnected efforts.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

