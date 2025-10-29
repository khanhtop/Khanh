import { Layers, Server, Database, Cloud, GitBranch, Settings, FileText, Sparkles } from "lucide-react";

const TechStack = () => {
  const technologies = {
    "Frontend": {
      icon: Layers,
      techs: ["React", "Next.js", "Vue", "Nuxt", "Gatsby", "Angular", "TypeScript", "JavaScript"],
      gradient: "from-primary to-accent"
    },
    "Backend": {
      icon: Server,
      techs: ["Node.js", "Express", "Python", "Django", "Flask", "FastAPI", "GraphQL", "REST API"],
      gradient: "from-accent to-[hsl(320_80%_55%)]"
    },
    "Microsoft": {
      icon: Cloud,
      techs: ["C#", "ASP.NET Core", ".NET Framework", "Entity Framework"],
      gradient: "from-[hsl(320_80%_55%)] to-primary"
    },
    "Database & Cloud": {
      icon: Database,
      techs: ["SQL", "PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase", "Convex", "Azure", "AWS", "Docker", "Kubernetes"],
      gradient: "from-primary to-accent"
    },
    "Headless CMS": {
      icon: FileText,
      techs: ["Prismic", "Sanity", "Contentful", "Strapi"],
      gradient: "from-accent to-[hsl(320_80%_55%)]"
    },
    "DevOps & Tools": {
      icon: GitBranch,
      techs: ["Git", "GitHub", "GitLab", "CI/CD", "Jenkins", "Terraform", "Nginx", "Linux"],
      gradient: "from-primary to-accent"
    },
    "AI Development": {
      icon: Sparkles,
      techs: ["Cursor", "Augment", "Claude Code", "GitHub Copilot", "ChatGPT", "Lovable AI"],
      gradient: "from-[hsl(320_80%_55%)] to-primary"
    },
    "Architecture": {
      icon: Settings,
      techs: ["Microservices", "Serverless", "Event-Driven", "WebSocket", "gRPC", "Message Queue"],
      gradient: "from-accent to-[hsl(320_80%_55%)]"
    },
  };

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="space-y-4">
              <div className="text-sm uppercase tracking-[0.3em] text-accent font-bold">Technology Mastery</div>
              <h2 className="text-5xl md:text-7xl font-black font-display">
                <span className="text-foreground">Tech </span>
                <span className="gradient-text">Dominance</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Leveraging cutting-edge technologies to build scalable, performant applications
            </p>
          </div>

          {/* Tech grid - 2 columns on desktop, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(technologies).map(([category, data], categoryIndex) => (
              <div 
                key={category}
                className="glass-card p-8 group hover:glow-mixed transition-all duration-500 hover:scale-[1.02] animate-slide-up relative overflow-hidden"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10 space-y-6">
                  {/* Category header */}
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${data.gradient} flex items-center justify-center glow-primary`}>
                      <data.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-foreground font-bold text-xl uppercase tracking-wider font-display">
                      {category}
                    </h3>
                  </div>
                  
                  {/* Tech badges - pill style */}
                  <div className="flex flex-wrap gap-2.5">
                    {data.techs.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 text-sm font-medium bg-background/60 backdrop-blur-sm text-foreground/90 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
