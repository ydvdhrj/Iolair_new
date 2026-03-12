import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown, ExternalLink, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import logoNew from "@assets/LogoNew.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "PRODUCTS",
      options: [
        { label: "AdTech Platform", path: "/adtech" },
        { label: "ALPR Platform", path: "/alpr" },
      ],
    },
    { 
      name: "INDUSTRY SOLUTIONS", 
      options: [
        { label: "Retail", path: "/retail" },
        { label: "Safety Enforcement", path: "/safety-enforcement" }
      ]
    },
    { 
      name: "RESOURCES", 
      options: [
        { label: "AdTech Resources", path: "/adtech-resources" },
        { label: "ALPR Resources", path: "/alpr-resources" }
      ]
    },
    { 
      name: "ABOUT US", 
      options: [
        { label: "Company", path: "/about-us" },
        { label: "Get In Touch", path: "/calendar" },
        { label: "Careers", path: "/careers" },
        { label: "Office Locations", path: "/office-locations" }
      ]
    },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b font-[Roboto,sans-serif]",
        isScrolled
          ? "bg-background/98 backdrop-blur-md border-border/80 shadow-sm"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div
              className={cn(
                "h-10 w-auto rounded-md flex items-center justify-center px-2 py-1 bg-white"
              )}
            >
              <img
                src={logoNew}
                alt=""
                className="h-8 w-auto object-contain"
              />
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 mr-2">
            {navItems.map((item) => (
              <HoverCard key={item.name} openDelay={0} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <button
                    type="button"
                    className="text-base font-bold text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-all duration-200 flex items-center gap-1.5 uppercase tracking-wider outline-none cursor-pointer px-3 py-2 rounded-lg"
                  >
                    {item.name} <ChevronDown className="h-3 w-3 opacity-50" />
                  </button>
                </HoverCardTrigger>
                <HoverCardContent
                  sideOffset={6}
                  align="start"
                  className="bg-card/98 backdrop-blur-xl border border-border/50 shadow-lg rounded-xl w-auto p-3 mt-1"
                >
                  {item.name === "PRODUCTS" ? (
                    <div className="flex gap-6">
                      <div className="flex flex-col gap-1.5 min-w-[180px]">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground px-1">
                          AdTech Platform
                        </span>
                        <Link href="/adtech">
                          <a className="text-base py-1.5 px-2 rounded-lg hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-200 font-medium whitespace-nowrap">
                            Overview
                          </a>
                        </Link>
                        <Link href="/adtech/loyalty-offers">
                          <a className="text-base py-1.5 px-2 rounded-lg hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-200 font-medium whitespace-nowrap">
                            Loyalty &amp; Offers
                          </a>
                        </Link>
                      </div>
                      <div className="flex flex-col gap-1.5 min-w-[200px]">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground px-1">
                          ALPR Platform
                        </span>
                        <Link href="/alpr">
                          <a className="text-base py-1.5 px-2 rounded-lg hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-200 font-medium whitespace-nowrap">
                            Overview
                          </a>
                        </Link>
                        <Link href="/alpr/unified-dashboard">
                          <a className="text-base py-1.5 px-2 rounded-lg hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-200 font-medium whitespace-nowrap">
                            Unified Dashboard
                          </a>
                        </Link>
                        <Link href="/alpr/layered-security-privacy">
                          <a className="text-base py-1.5 px-2 rounded-lg hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-200 font-medium whitespace-nowrap">
                            Layered Security &amp; Privacy
                          </a>
                        </Link>
                        <Link href="/alpr/edge-applications">
                          <a className="text-base py-1.5 px-2 rounded-lg hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-200 font-medium whitespace-nowrap">
                            Edge Applications
                          </a>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-0.5">
                      {item.options.map((opt) => (
                        <Link key={opt.path} href={opt.path}>
                          <a className="text-base py-2 px-3 rounded-lg hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-200 font-medium whitespace-nowrap">
                            {opt.label}
                          </a>
                        </Link>
                      ))}
                    </div>
                  )}
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <Link href="/calendar">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-5 flex items-center gap-2 h-9 text-base">
                Contact Us <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </Link>
            <Link href="/client-login">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-5 flex items-center gap-2 h-9 text-base">
                Client Login <Lock className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col gap-1.5">
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest px-2">{item.name}</span>
              {item.name === "PRODUCTS" ? (
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.18em] px-3 mt-1">
                    AdTech Platform
                  </span>
                  <Link href="/adtech">
                    <a className="text-lg text-foreground/90 hover:text-primary hover:bg-muted/50 px-3 py-2 rounded-lg transition-all duration-200">
                      Overview
                    </a>
                  </Link>
                  <Link href="/adtech/loyalty-offers">
                    <a className="text-lg text-foreground/90 hover:text-primary hover:bg-muted/50 px-3 py-2 rounded-lg transition-all duration-200">
                      Loyalty &amp; Offers
                    </a>
                  </Link>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.18em] px-3 mt-3">
                    ALPR Platform
                  </span>
                  <Link href="/alpr">
                    <a className="text-lg text-foreground/90 hover:text-primary hover:bg-muted/50 px-3 py-2 rounded-lg transition-all duration-200">
                      Overview
                    </a>
                  </Link>
                  <Link href="/alpr/unified-dashboard">
                    <a className="text-lg text-foreground/90 hover:text-primary hover:bg-muted/50 px-3 py-2 rounded-lg transition-all duration-200">
                      Unified Dashboard
                    </a>
                  </Link>
                  <Link href="/alpr/layered-security-privacy">
                    <a className="text-lg text-foreground/90 hover:text-primary hover:bg-muted/50 px-3 py-2 rounded-lg transition-all duration-200">
                      Layered Security &amp; Privacy
                    </a>
                  </Link>
                  <Link href="/alpr/edge-applications">
                    <a className="text-lg text-foreground/90 hover:text-primary hover:bg-muted/50 px-3 py-2 rounded-lg transition-all duration-200">
                      Edge Applications
                    </a>
                  </Link>
                </div>
              ) : (
                item.options.map((opt) => (
                  <Link key={opt.path} href={opt.path}>
                    <a className="text-lg text-foreground/90 hover:text-primary hover:bg-muted/50 px-3 py-2 rounded-lg transition-all duration-200">
                      {opt.label}
                    </a>
                  </Link>
                ))
              )}
            </div>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Link href="/calendar">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-10 text-base">
                Contact Us
              </Button>
            </Link>
            <Link href="/client-login">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-10 text-base">
                Client Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
