import { ReactNode } from "react";
import Link from "next/link";
import { ShieldAlert, Activity, Map, Cpu, Bell, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen overflow-hidden bg-background text-foreground">
            <aside className="w-64 border-r border-border/40 bg-card/30 backdrop-blur-md flex flex-col shrink-0">
                <div className="h-16 flex items-center px-6 border-b border-border/40 gap-2 text-primary shrink-0">
                    <ShieldAlert className="w-6 h-6" />
                    <span className="font-bold text-lg tracking-tight text-foreground">CrisisLink<span className="text-primary">.ai</span></span>
                </div>

                <nav className="flex-1 px-4 py-6 flex flex-col gap-2 overflow-y-auto hidden-scrollbar">
                    <div className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Modules</div>
                    <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium">
                        <Activity className="w-4 h-4" /> Overview
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                        <Map className="w-4 h-4" /> Global Grid
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                        <Cpu className="w-4 h-4" /> Logistics AI
                    </Link>
                </nav>

                <div className="p-4 border-t border-border/40 shrink-0">
                    <div className="flex items-center gap-3 px-3 py-2 mb-2 rounded-lg hover:bg-muted text-muted-foreground cursor-pointer transition-colors">
                        <Settings className="w-4 h-4" /> Settings
                    </div>
                    <Link href="/">
                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-destructive/10 text-destructive cursor-pointer transition-colors">
                            <LogOut className="w-4 h-4" /> Exit Console
                        </div>
                    </Link>
                </div>
            </aside>

            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                <header className="h-16 border-b border-border/40 bg-background/50 backdrop-blur-md flex items-center justify-between px-6 shrink-0 z-10 w-full">
                    <h1 className="text-xl font-semibold">Global Command Center</h1>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" className="relative hidden sm:flex bg-card">
                            <Bell className="w-4 h-4" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
                        </Button>
                        <div className="flex items-center gap-3 border border-border/50 rounded-full pl-1 pr-4 py-1 bg-card">
                            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs uppercase">
                                JD
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium leading-none">Commander Doe</span>
                                <span className="text-xs text-muted-foreground leading-none mt-1">Sector 7</span>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="flex-1 overflow-auto p-6 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-background to-background">
                    {children}
                </div>
            </main>
        </div>
    );
}
