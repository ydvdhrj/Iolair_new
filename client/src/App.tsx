import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ALPRPage from "@/pages/ALPRPage";
import HLAPage from "@/pages/HLAPage";
import AboutUsPage from "@/pages/AboutUsPage";
import GetInTouchPage from "@/pages/GetInTouchPage";
import CareersPage from "@/pages/CareersPage";
import OfficeLocationsPage from "@/pages/OfficeLocationsPage";
import ALPRResourcesPage from "@/pages/ALPRResourcesPage";
import HLAResourcesPage from "@/pages/HLAResourcesPage";
import IndustrySolutionsPage from "@/pages/IndustrySolutionsPage";
import RetailPage from "@/pages/RetailPage";
import SafetyEnforcementPage from "@/pages/SafetyEnforcementPage";
import CalendarPage from "@/pages/CalendarPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Products */}
      <Route path="/alpr" component={ALPRPage} />
      <Route path="/hla" component={HLAPage} />
      {/* Industry Solutions */}
      <Route path="/industry-solutions" component={IndustrySolutionsPage} />
      <Route path="/retail" component={RetailPage} />
      <Route path="/safety-enforcement" component={SafetyEnforcementPage} />
      {/* Resources */}
      <Route path="/alpr-resources" component={ALPRResourcesPage} />
      <Route path="/hla-resources" component={HLAResourcesPage} />
      {/* About Us */}
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/get-in-touch" component={GetInTouchPage} />
      <Route path="/careers" component={CareersPage} />
      <Route path="/office-locations" component={OfficeLocationsPage} />
      {/* Calendar/Booking */}
      <Route path="/calendar" component={CalendarPage} />
      <Route path="/book-appointment" component={CalendarPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
