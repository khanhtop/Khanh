import { Sparkles, Zap } from "lucide-react";

const StatusBadge = () => {
  return (
    <div className="fixed top-6 right-6 z-50 animate-fade-in">
      <div className="relative group">
        {/* Glow effect */}
        <div
          className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-700 rounded-full"
          style={{ animation: "glow-pulse 6s ease-in-out infinite" }}
        />

        {/* Main badge */}
        <div className="relative glass-card px-5 py-3 rounded-full inline-flex items-center gap-2.5 overflow-hidden">
          {/* Animated background gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ backgroundSize: "200% 100%", animation: "gradient-shift 6s ease infinite" }}
          />

          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-2000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Icons and text */}
          <div className="relative z-10 flex items-center gap-2.5">
            <div className="relative">
              <Sparkles
                className="w-4 h-4 text-accent"
                style={{ animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xs font-bold gradient-text leading-none mb-0.5">OPEN TO WORK</span>
              <span className="text-[10px] text-muted-foreground leading-none">Premium Projects Only</span>
            </div>

            <div className="relative ml-1">
              <Zap
                className="w-4 h-4 text-primary"
                style={{ animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite", animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBadge;
