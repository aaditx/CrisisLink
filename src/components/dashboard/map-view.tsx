import { MapPin, Radio, Zap } from "lucide-react";

export function MapView() {
    // Pre-generate some random nodes to mock a supply chain / tracking map
    const nodes = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        x: Math.random() * 80 + 10, // 10% to 90%
        y: Math.random() * 80 + 10,
        status: Math.random() > 0.8 ? "critical" : Math.random() > 0.5 ? "dispatching" : "stable",
    }));

    return (
        <div className="relative w-full h-full min-h-[400px] bg-slate-950/50 border border-border/50 rounded-2xl overflow-hidden group shadow-inner">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            {/* Scanning line effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-primary/30 shadow-[0_0_20px_2px_theme('colors.primary.DEFAULT')] blur-[1px] animate-[scan_4s_ease-in-out_infinite]" />

            {/* Nodes mapping */}
            {nodes.map((node) => (
                <div
                    key={node.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center group/node"
                    style={{ top: `${node.y}%`, left: `${node.x}%` }}
                >
                    {/* Radar ping effect */}
                    {node.status === "critical" && (
                        <div className="absolute w-12 h-12 bg-destructive/30 rounded-full animate-ping" />
                    )}
                    {node.status === "dispatching" && (
                        <div className="absolute w-8 h-8 bg-blue-500/30 rounded-full animate-ping" />
                    )}

                    <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center z-10 transition-transform hover:scale-150 cursor-pointer ${node.status === "critical"
                                ? "bg-destructive border-red-300 shadow-[0_0_15px_theme('colors.destructive.DEFAULT')]"
                                : node.status === "dispatching"
                                    ? "bg-blue-500 border-blue-300 shadow-[0_0_10px_theme('colors.blue.500')]"
                                    : "bg-emerald-500 border-emerald-300 shadow-[0_0_10px_theme('colors.emerald.500')]"
                            }`}
                    >
                        {node.status === "critical" && <Radio className="w-2 h-2 text-white absolute" />}
                    </div>

                    {/* Hover info */}
                    <div className="absolute top-6 opacity-0 group-hover/node:opacity-100 transition-opacity bg-black/80 backdrop-blur-sm border border-border px-2 py-1 object-contain rounded text-xs whitespace-nowrap z-20 pointer-events-none">
                        Sector {node.id.toString().padStart(2, "0")} <br />
                        Status: {node.status.toUpperCase()}
                    </div>
                </div>
            ))}

            {/* Decorative Overlays */}
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur border border-border/50 p-3 rounded-lg flex flex-col gap-2 shadow-xl z-20">
                <h4 className="text-xs font-bold tracking-wider text-muted-foreground uppercase flex items-center gap-2">
                    <Zap className="w-3 h-3 text-primary" /> Live Global Feed Node
                </h4>
                <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-destructive animate-pulse" /> Critical</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500" /> Dispatching</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Stable</span>
                </div>
            </div>
            <style>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          50% { top: 100%; }
        }
      `}</style>
        </div>
    );
}
