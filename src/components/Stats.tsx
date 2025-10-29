import { TrendingUp, Users, Briefcase } from "lucide-react";

const Stats = () => {
  const stats = [
    { 
      value: "5+", 
      label: "Years Experience",
      icon: TrendingUp,
      gradient: "from-primary via-[hsl(280_80%_60%)] to-accent"
    },
    { 
      value: "30+", 
      label: "Projects Completed",
      icon: Briefcase,
      gradient: "from-accent via-[hsl(200_90%_60%)] to-primary"
    },
    { 
      value: "15+", 
      label: "Happy Clients",
      icon: Users,
      gradient: "from-[hsl(320_80%_55%)] via-primary to-accent"
    },
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div 
                className="glass-card p-12 text-center transition-all duration-500 hover:scale-105 animate-fade-in relative overflow-hidden h-full flex flex-col items-center justify-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Animated background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                
                {/* Glow effect behind card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-700 -z-10`} />
                
                <div className="relative z-10 space-y-8">
                  {/* Icon with gradient background */}
                  <div className="flex justify-center">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                      <stat.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  {/* Number with gradient */}
                  <div className={`text-7xl md:text-8xl font-black font-display bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-foreground/90 text-sm uppercase tracking-[0.2em] font-bold">
                    {stat.label}
                  </div>
                </div>
                
                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity`} />
                <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${stat.gradient} opacity-5 rounded-tr-full group-hover:opacity-10 transition-opacity`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
