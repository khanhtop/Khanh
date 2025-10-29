import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, Calendar } from "lucide-react";

const Contact = () => {
  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/khanhtop", color: "hover:text-primary" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-accent" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-primary" },
    { icon: Mail, label: "Email", href: "mailto:khanhtopdev@gmail.com", color: "hover:text-accent" },
  ];

  return (
    <section id="contact" className="py-32 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-accent/20 to-transparent blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <div className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">Get In Touch</div>
              <h2 className="text-5xl md:text-7xl font-black font-display">
                Let's Build <span className="gradient-text">Together</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Have an ambitious project in mind? I'm always interested in hearing about 
              innovative ideas and challenging problems to solve.
            </p>
          </div>

          {/* CTA Card */}
          <div className="glass-card p-12 glow-mixed animate-scale-in text-center space-y-8 relative overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-[hsl(320_80%_55%)]/10 opacity-50" />
            
            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold font-display">Ready to start your project?</h3>
                <p className="text-muted-foreground text-lg">
                  Let's discuss how I can help bring your vision to life
                </p>
              </div>

              <Button 
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-all px-10 py-7 text-lg rounded-2xl glow-primary group"
                asChild
              >
                <a href="https://calendly.com/khanhtopdev/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Consultation
                </a>
              </Button>

              {/* Social links */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">Connect on</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {socials.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="border-2 border-white/10 hover:border-primary hover:bg-primary/10 group backdrop-blur-xl rounded-xl"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className={`h-5 w-5 mr-2 ${social.color} transition-colors`} />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
            {[
              { label: "Response Time", value: "< 24h" },
              { label: "Location", value: "Hanoi, VN" },
              { label: "Time Zone", value: "GMT+7" },
              { label: "Languages", value: "Multi" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-2xl font-bold gradient-text font-display">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
