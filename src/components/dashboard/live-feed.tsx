import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Activity, RadioTower, AlertTriangle, Truck } from "lucide-react";

const mockSignals = [
    { id: 1, type: "critical", msg: "Category 4 Hurricane strike. Power grid failure.", loc: "Sector 3, Coastal", action: "500 water filters dispatched", time: "Just now" },
    { id: 2, type: "dispatch", msg: "Deploying medical personnel and triage tents.", loc: "Sector 7, Transit Hub", action: "Convoy en route (ETA 12m)", time: "2m ago" },
    { id: 3, type: "warning", msg: "Flash flood warnings escalating.", loc: "Sector 12, Valley", action: "Evacuation route calculated", time: "5m ago" },
    { id: 4, type: "critical", msg: "Hospital backup generator failing.", loc: "Sector 9, Downtown", action: "2 Mobile Generators dispatched", time: "11m ago" },
    { id: 5, type: "dispatch", msg: "Aerial drop of MREs requested.", loc: "Sector 14, Remote", action: "Drone swarm deployed", time: "14m ago" },
    { id: 6, type: "warning", msg: "Communication blackout reported.", loc: "Sector 2, Outskirts", action: "Starlink node deployment planned", time: "18m ago" },
    { id: 7, type: "critical", msg: "Bridge collapse. Commuters trapped.", loc: "Sector 5, River", action: "Search & Rescue dispatched", time: "22m ago" },
    { id: 8, type: "dispatch", msg: "Antibiotics shortage at makeshift clinic.", loc: "Sector 8, Central", action: "Medical airdrop executed", time: "27m ago" },
    { id: 9, type: "warning", msg: "Structural instability in residential block.", loc: "Sector 11, North", action: "Monitoring drones surveying", time: "31m ago" },
    { id: 10, type: "dispatch", msg: "Clean water reservoirs depleted.", loc: "Sector 4, East", action: "Purification convoy dispatched", time: "45m ago" }
];

export function LiveFeed() {
    return (
        <Card className="flex flex-col h-[500px] border-border/40 shadow-xl shadow-black/20 bg-card/50 backdrop-blur-xl">
            <CardHeader className="border-b border-border/20 py-4">
                <CardTitle className="flex items-center justify-between text-lg">
                    <span className="flex items-center gap-2">
                        <RadioTower className="w-5 h-5 text-primary" /> Live Intel Feed
                    </span>
                    <Badge variant="outline" className="animate-pulse bg-primary/10 text-primary border-primary/20">
                        10 Active Logs
                    </Badge>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-0 overflow-hidden">
                <ScrollArea className="h-full">
                    <div className="flex flex-col divide-y divide-border/20">
                        {mockSignals.map((signal) => (
                            <div key={signal.id} className="p-4 hover:bg-muted/30 transition-colors cursor-default group">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-2">
                                        {signal.type === "critical" && <AlertTriangle className="w-4 h-4 text-destructive" />}
                                        {signal.type === "dispatch" && <Truck className="w-4 h-4 text-blue-400" />}
                                        {signal.type === "warning" && <Activity className="w-4 h-4 text-amber-500" />}
                                        <h5 className="font-semibold text-sm">{signal.loc}</h5>
                                    </div>
                                    <span className="text-xs text-muted-foreground">{signal.time}</span>
                                </div>
                                <p className="text-sm text-foreground/80 mb-2 leading-relaxed">
                                    {signal.msg}
                                </p>
                                <div className="flex items-center justify-between">
                                    <Badge variant="secondary" className="bg-background text-xs text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                        {signal.action}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}
