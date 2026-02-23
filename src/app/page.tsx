import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Activity, Globe, ShieldAlert, Cpu } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary/30">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[600px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Navbar */}
      <nav className="relative z-10 border-b border-border/40 backdrop-blur-md bg-background/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/50 text-primary">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">CrisisLink</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">Documentation</Button>
            <Link href="/dashboard">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                Launch Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          System Online • v2.4.1 Series A Release
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150 fill-mode-both">
          Intelligent Resource Allocation for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            Global Crises
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
          An AI-driven disaster relief control center that ingests live distress signals, matches critical supplies dynamically, and orchestrates logistics in real-time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500 fill-mode-both">
          <Link href="/dashboard">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold shadow-2xl shadow-primary/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2">
                Enter Control Center <Globe className="w-5 h-5" />
              </span>
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-background/50 border-border/50 backdrop-blur-sm hover:bg-muted">
            Test AI Chat
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 fill-mode-both">
        {[
          {
            icon: <Activity className="w-6 h-6 text-emerald-400" />,
            title: "Live Threat Feed",
            desc: "Ingests multimodality alerts globally and prioritizes them via proprietary scoring."
          },
          {
            icon: <Globe className="w-6 h-6 text-blue-400" />,
            title: "Dynamic Grid Map",
            desc: "Visualizes supply chain networks and distress zones with millisecond latency."
          },
          {
            icon: <Cpu className="w-6 h-6 text-purple-400" />,
            title: "Logistics AI",
            desc: "Generates optimal dispatch scenarios in conversational real-time formats."
          }
        ].map((feature, i) => (
          <div key={i} className="p-6 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-md flex flex-col gap-4 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center border border-border">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
