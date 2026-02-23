import { MapView } from "@/components/dashboard/map-view";
import { LiveFeed } from "@/components/dashboard/live-feed";
import { AIChat } from "@/components/dashboard/ai-chat";
import { Activity, Users, Box, AlertOctagon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-6 max-w-[1600px] mx-auto pb-10">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { title: "Active Crises", val: "14", change: "+2 this hour", icon: AlertOctagon, color: "text-destructive" },
                    { title: "Personnel Deployed", val: "1,204", change: "98% capacity", icon: Users, color: "text-blue-500" },
                    { title: "Supplies Dispatched", val: "84.2k", change: "+12k today", icon: Box, color: "text-emerald-500" },
                    { title: "System Latency", val: "12ms", change: "Optimal", icon: Activity, color: "text-primary" }
                ].map((stat, i) => (
                    <Card key={i} className="bg-card/40 backdrop-blur border-border/40 hover:border-border transition-colors">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                                <div className="flex items-baseline gap-2">
                                    <h3 className="text-3xl font-bold">{stat.val}</h3>
                                    <span className="text-xs text-muted-foreground">{stat.change}</span>
                                </div>
                            </div>
                            <div className={`p-3 rounded-lg bg-background border border-border/50 shadow-sm ${stat.color}`}>
                                <stat.icon className="w-5 h-5" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-stretch">
                <div className="xl:col-span-2 flex flex-col gap-6 w-full h-full min-h-[600px]">
                    <MapView />
                </div>

                <div className="flex flex-col gap-6 xl:col-span-1 h-full">
                    <div className="w-full">
                        <LiveFeed />
                    </div>
                    <div className="w-full">
                        <AIChat />
                    </div>
                </div>
            </div>
        </div>
    );
}
