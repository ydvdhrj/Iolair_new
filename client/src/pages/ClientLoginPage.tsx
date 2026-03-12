import { FormEvent } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import heroDisplayImg from "@assets/hero-display.png";

export default function ClientLoginPage() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder submit handler – integrate with real auth later.
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="pt-20 md:pt-24 pb-16">
        <section className="relative min-h-[calc(100vh-80px-80px)] flex items-center justify-center">
          {/* Background image */}
          <div className="absolute inset-0 -z-10">
            <img
              src={heroDisplayImg}
              alt="Client platform background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
          </div>

          {/* Centered login card */}
          <div className="w-full max-w-md px-4">
            <div className="rounded-3xl bg-card/95 shadow-2xl border border-border/70 px-6 py-8 md:px-8 md:py-9">
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-center mb-6">
                Login
              </h1>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label
                    htmlFor="userId"
                    className="block text-sm font-medium text-foreground"
                  >
                    User ID
                  </label>
                  <input
                    id="userId"
                    name="userId"
                    type="text"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm md:text-base outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary transition-shadow"
                    placeholder="iolaire.ai"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-foreground"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm md:text-base outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:border-primary transition-shadow"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-11 text-sm md:text-base shadow-lg shadow-primary/25"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

