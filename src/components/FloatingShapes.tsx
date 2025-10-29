const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute top-1/4 left-[10%] w-20 h-20 border border-primary/30 rounded-xl rotate-45"
        style={{ animation: 'float 6s ease-in-out infinite' }}
      />
      <div 
        className="absolute top-1/2 right-[15%] w-16 h-16 border border-accent/30 rounded-full"
        style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }}
      />
      <div 
        className="absolute bottom-1/4 left-[20%] w-12 h-12 border border-[hsl(320_80%_55%)]/30"
        style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '2s' }}
      />
      <div 
        className="absolute top-[15%] right-[25%] w-24 h-24 border border-primary/20 rounded-lg rotate-12"
        style={{ animation: 'float 9s ease-in-out infinite', animationDelay: '0.5s' }}
      />
    </div>
  );
};

export default FloatingShapes;
