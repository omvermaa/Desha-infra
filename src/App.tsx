import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { Phone } from "lucide-react";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/:slug" component={ProjectDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <a
          href="tel:+919873724344"
          className="fixed bottom-6 right-6 z-50 p-4 bg-[#d9a623] text-white rounded-full shadow-lg hover:bg-[#d9a623] transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6" />
        </a>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
