import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import GridBackground from "@/components/GridBackground";
import CodeRain from "@/components/CodeRain";
import StatusBadge from "@/components/StatusBadge";
import heroBackground from "@/assets/hero-coding-bg.jpg";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <StatusBadge />
      
      {/* Unified background for all sections */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${heroBackground})`,
            animation: 'slow-zoom 30s ease-in-out infinite alternate',
          }}
        />
        {/* Overlay gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        
        <CodeRain />
        <GridBackground />
      </div>

      {/* All content sections */}
      <div className="relative z-10">
        <Hero />
        <Stats />
        <TechStack />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </main>
  );
};

export default Index;
