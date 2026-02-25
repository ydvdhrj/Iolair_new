import { Link } from "wouter";
import { FileText, Cookie, Settings } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        {/* Row 1: Products, Company, Logo + Social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 md:py-16">
          <div>
            <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hla">
                  <a className="text-primary hover:underline font-medium">
                    AdTech Platform
                  </a>
                </Link>
              </li>
              <li className="pl-4 text-muted-foreground">
                <Link href="/hla">
                  <a className="hover:text-primary transition-colors">
                    &gt; Loyalty and Offers
                  </a>
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/alpr">
                  <a className="text-primary hover:underline font-medium">
                    ALPR Platform
                  </a>
                </Link>
              </li>
              <li className="pl-4 text-muted-foreground">
                <Link href="/alpr">
                  <a className="hover:text-primary transition-colors">
                    &gt; ALPR Platform
                  </a>
                </Link>
              </li>
              <li className="pl-4 text-muted-foreground">
                <Link href="/hla">
                  <a className="hover:text-primary transition-colors">
                    &gt; Unified Dashboard
                  </a>
                </Link>
              </li>
              <li className="pl-4 text-muted-foreground">
                <Link href="/alpr">
                  <a className="hover:text-primary transition-colors">
                    &gt; Layered Security & Privacy
                  </a>
                </Link>
              </li>
              <li className="pl-4 text-muted-foreground">
                <Link href="/industry-solutions">
                  <a className="hover:text-primary transition-colors">
                    &gt; Edge Applications
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us">
                  <a className="text-primary hover:underline">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <a className="text-primary hover:underline">Careers</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="IOLAIRE.AI"
                className="h-10 w-auto object-contain"
              />
              <span className="text-primary font-bold text-lg">IOLAIRE.AI</span>
            </div>
            <div className="flex gap-2">
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-background border border-border shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-background border border-border shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-background border border-border shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Row 2: Office locations - purple bar */}
        <div className="rounded-xl bg-primary py-4 px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 sm:divide-x sm:divide-white/30 divide-y sm:divide-y-0">
          <span className="text-primary-foreground font-medium sm:pr-6">
            🇺🇸 San Jose, California
          </span>
          <span className="text-primary-foreground font-medium sm:px-6">
            🇺🇸 Dallas, Texas
          </span>
          <span className="text-primary-foreground font-medium sm:pl-6">
            🇮🇳 Bengaluru, India
          </span>
        </div>

        {/* Row 3: Copyright + legal links */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-muted-foreground">© 2026 IOLAIRE.AI</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-primary">
            <a href="#" className="inline-flex items-center gap-1.5 hover:underline">
              <FileText className="h-4 w-4" />
              Terms of Service
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 hover:underline">
              <FileText className="h-4 w-4" />
              Privacy Policy
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 hover:underline">
              <Settings className="h-4 w-4" />
              Privacy Settings
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 hover:underline">
              <Cookie className="h-4 w-4" />
              Manage Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
