import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function OfficeLocationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-foreground">
            Office Locations
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Find our offices around the world.
          </p>
          
          <div className="mt-16">
            <p className="text-muted-foreground">Page content coming soon...</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
