import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Appify Platform",
      description: "Enterprise web & mobile solutions with PRM for Service Operations and Student Registration systems",
      tags: ["React", "Node.js", "PostgreSQL", "Azure"],
      githubUrl: "https://github.com/khanhtop/appify",
      liveUrl: "https://www.appify.com",
    },
    {
      title: "PropStack AI",
      description: "AI-powered real estate platform with intelligent property recommendations and analytics",
      tags: ["Next.js", "AI/ML", "Python", "PostgreSQL"],
      githubUrl: "https://github.com/khanhtop/propstack",
      liveUrl: "https://www.propstack.ai",
    },
    {
      title: "Le Corto Restaurant",
      description: "Award-winning fine dining restaurant website with booking system and menu showcase",
      tags: ["WordPress", "PHP", "MySQL", "Booking Integration"],
      githubUrl: "#",
      liveUrl: "https://lecortovietnam.com",
    },
    {
      title: "Hanoi Housing",
      description: "Premium real estate platform for villas, apartments, and offices rental in Hanoi",
      tags: ["React", "Node.js", "MongoDB", "Maps API"],
      githubUrl: "#",
      liveUrl: "https://hanoihousing.vn",
    },
    {
      title: "Good Dog People",
      description: "Singapore's leading e-commerce platform for premium pet products and supplies",
      tags: ["React", "Shopify", "Node.js", "Stripe"],
      githubUrl: "#",
      liveUrl: "https://gooddogpeople.com",
    },
    {
      title: "Big M Pizza",
      description: "Multi-location pizza ordering platform with real-time inventory and delivery tracking",
      tags: ["React", "Node.js", "Stripe", "Google Maps"],
      githubUrl: "#",
      liveUrl: "https://www.bigmpizza.com",
    },
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <div className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">Portfolio Showcase</div>
              <h2 className="text-5xl md:text-7xl font-black font-display">
                <span className="text-foreground">Featured </span>
                <span className="gradient-text">Work</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Delivering excellence across industries with innovative, scalable solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-[hsl(320_80%_55%)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary via-accent to-[hsl(320_80%_55%)] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />

                <div className="relative z-10 space-y-6 flex flex-col h-full">
                  {/* Header with icons */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold font-display text-foreground group-hover:gradient-text transition-all leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 flex-shrink-0">
                      {project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group/icon"
                        >
                          <Github className="w-5 h-5 text-primary group-hover/icon:text-white transition-colors" />
                        </a>
                      )}
                      <a
                        href={project.liveUrl}
                        className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-all group/icon"
                      >
                        <ExternalLink className="w-5 h-5 text-accent group-hover/icon:text-white transition-colors" />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed flex-1">{project.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 text-sm font-medium bg-background/60 backdrop-blur-sm text-primary rounded-full border border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default"
                      >
                        {tag}
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

export default Projects;
