import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function UnifiedDashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-10">
          <header className="space-y-4">
            <span className="text-primary font-bold tracking-widest uppercase text-[0.9rem]">
              ALPR Platform
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Unified Dashboard
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              One Unified View for Real Time Public Safety.
            </p>
          </header>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              A &apos;single pane of glass&apos; dashboard enables faster decision making and
              improves situational awareness, both of which are critical to public safety. It
              consolidates all relevant data, alerts, analytics, and system controls into a
              unified real time view allowing either the dispatch agent or the officer to
              prioritize resources for engagement.
            </p>
          </section>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Operational Challenges Law Enforcement Encounter
            </h2>
            <p>
              In the absence of a unified dashboard, law enforcement officers are forced to piece
              together information from multiple systems. This slows response, increases mental
              strain, and raises the risk of missed potential threats.
            </p>
            <p>
              Fragmented visibility makes coordination difficult and reduces confidence in the
              decision making process, adding to the everyday challenges officers already face in
              protecting their communities.
            </p>
          </section>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              How Our Unified View Dashboard Supports Officers in Critical Moments
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Offers unified intelligence in one interface.</li>
              <li>
                Reduces cognitive load by presenting prioritized, contextual alerts instead of raw
                data streams.
              </li>
              <li>
                Enables real time situational awareness using edge processing and continuous data
                streaming.
              </li>
              <li>
                Provides a single source of truth through secure APIs that integrate multiple
                systems and data sources.
              </li>
              <li>Accelerates decision making through real time correlation of events.</li>
              <li>
                Improves response coordination with visual overlays, location intelligence, and
                shared operational views.
              </li>
              <li>
                Scales efficiently by supporting high volume data processing and complex
                environments through a unified architecture.
              </li>
              <li>
                Strengthens operational reliability by delivering consistent workflows, analytics,
                and alerting in one controlled platform.
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

