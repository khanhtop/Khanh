import { ArrowRight, Code2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={logo} alt="Logo" className="w-40 h-40 md:w-56 md:h-56 object-contain animate-fade-in" />
          </div>

          {/* Main content */}
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-accent font-semibold tracking-wider uppercase text-sm md:text-base">
                <Terminal className="w-5 h-5 animate-pulse" />
                <span className="relative">
                  {"Khanh • Senior Fullstack Developer • Hanoi, Vietnam".split('').map((char, index) => (
                    <span 
                      key={index} 
                      className="inline-block hover:font-black transition-all duration-200 hover:scale-110"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                  <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                </span>
                <Code2 className="w-5 h-5 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight font-display">
                <span className="inline-block hover:scale-105 transition-transform duration-300">
                  Architect of
                </span>
                <span className="gradient-text block mt-2 hover:scale-105 transition-transform duration-300">
                  Digital Excellence
                </span>
              </h1>
              
              <div className="relative space-y-4">
                <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed font-medium">
                  Transforming complex challenges into <span className="gradient-text font-bold">scalable solutions</span> that drive real business impact.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  <span className="text-primary font-semibold">5+ years</span> of mastery • <span className="text-accent font-semibold">30+ successful projects</span> • <span className="text-[hsl(320_80%_55%)] font-semibold">15+ satisfied clients</span> worldwide
                </p>
                {/* Animated underline */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient-shift_3s_ease_infinite] rounded-full" />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="gradient-primary text-white hover:opacity-90 transition-all group px-10 py-7 text-lg rounded-2xl glow-primary relative overflow-hidden"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 flex items-center">
                  View My Masterwork
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 px-10 py-7 text-lg rounded-2xl backdrop-blur-xl relative overflow-hidden group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10">Let's Talk Business</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
