import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function LayeredSecurityPrivacyPage() {
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
              Layered Security &amp; Privacy
            </h1>
          </header>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Privacy and Compliance at the Core of Public Safety
            </h2>
            <p>
              We rigorously protect public data and ensure the responsible handling of residents’
              information, which strengthens confidence in the technologies used to keep
              communities safe. Our platform and operational practices are compliant with the
              Driver’s Privacy Protection Act (DPPA).
            </p>
          </section>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Committed to Responsible Data Handling
            </h2>
            <p>
              Our automatic license plate recognition (ALPR) platform transforms license plate
              imagery into machine readable intelligence using advanced optical character
              recognition (OCR), enabling secure analysis in real time.
            </p>
            <p>
              Another layer of security includes data verification, transmission, and storage
              using strong encryption and strict access controls, ensuring that sensitive
              information is protected at every stage.
            </p>
            <p>
              Recognizing public concerns around privacy and data profiling, we tightly follow
              federal, state, and local regulations. Under certain state laws, ALPR data is
              required to be erased within three minutes of being captured and analyzed. Only
              information associated with authorized matches is retained for legitimate
              investigative purposes, balancing effective law enforcement with the responsibility
              to safeguard public data and trust.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

