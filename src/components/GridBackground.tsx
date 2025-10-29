const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(270 80% 60% / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(270 80% 60% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'grid-flow 20s linear infinite',
        }}
      />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-0 left-1/3 w-[550px] h-[550px] bg-[hsl(320_80%_55%)]/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '3s' }} />
    </div>
  );
};

export default GridBackground;
