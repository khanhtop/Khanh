import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Fullstack Engineer",
      company: "Freelancer",
      location: "Remote / Global Clients",
      period: "June 2024 - Present",
      duration: "1+ year",
      description: "Building custom web applications and solutions for clients worldwide.",
      achievements: [
        "Delivered full-stack solutions for diverse international clients",
        "Developed responsive and scalable web applications",
        "Provided end-to-end project development and deployment"
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"]
    },
    {
      title: "Software Engineer",
      company: "NTQ Solutions",
      location: "Hanoi, Vietnam",
      period: "June 2022 - June 2024",
      duration: "2 years",
      description: "Developed enterprise software solutions and worked on multiple client projects.",
      achievements: [
        "Built and maintained enterprise-level applications",
        "Collaborated with cross-functional teams on software development",
        "Implemented best practices for code quality and performance"
      ],
      technologies: ["React", "JavaScript", "Node.js", "MongoDB", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "KIMEI Global",
      location: "Hanoi, Vietnam",
      period: "May 2021 - October 2021",
      duration: "6 months",
      description: "Contributed to full-stack development projects using modern web technologies.",
      achievements: [
        "Developed and deployed web applications",
        "Worked with both frontend and backend technologies",
        "Participated in agile development processes"
      ],
      technologies: ["JavaScript", "React", "Node.js", "MySQL"]
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <div className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">Career Journey</div>
              <h2 className="text-5xl md:text-7xl font-black font-display">
                <span className="text-foreground">Professional </span>
                <span className="gradient-text">Experience</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
              A decade of delivering excellence across diverse projects and technologies
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="glass-card p-8 md:p-10 group hover:glow-mixed transition-all duration-500 hover:scale-[1.01] animate-slide-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-[hsl(320_80%_55%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="space-y-6">
                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold font-display gradient-text group-hover:scale-105 transition-transform inline-block">
                        {exp.title}
                      </h3>
                      <div className="text-xl font-semibold text-foreground/80">
                        {exp.company}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                    
                    {/* Info badges */}
                    <div className="flex flex-col gap-2 md:items-end">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-primary font-display">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3 pl-4 border-l-2 border-primary/20">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <ChevronRight className="w-5 h-5 text-accent mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                        <span className="text-foreground/80 leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
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

export default Experience;
