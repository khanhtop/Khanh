import { Quote, Star } from "lucide-react";
import sarahJohnson from "@/assets/testimonials/sarah-johnson.jpg";
import michaelChen from "@/assets/testimonials/michael-chen.jpg";
import emilyRodriguez from "@/assets/testimonials/emily-rodriguez.jpg";
import davidPark from "@/assets/testimonials/david-park.jpg";
import lisaThompson from "@/assets/testimonials/lisa-thompson.jpg";
import jamesWilson from "@/assets/testimonials/james-wilson.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechVision",
      company: "NTQ Solutions",
      image: sarahJohnson,
      content: "Khanh is an exceptional developer who consistently delivers beyond expectations. His technical expertise and problem-solving abilities are outstanding. The platform he built for us handles millions of users seamlessly.",
      rating: 5,
      project: "Enterprise SaaS Platform"
    },
    {
      name: "Michael Chen",
      role: "CEO & Founder",
      company: "Global Client",
      image: michaelChen,
      content: "Working with Khanh was a game-changer for our business. He transformed our complex requirements into an elegant solution. His attention to detail and commitment to quality are unmatched.",
      rating: 5,
      project: "E-Commerce Platform"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Director",
      company: "Freelance Client",
      image: emilyRodriguez,
      content: "Incredible work! Khanh's ability to architect scalable solutions and mentor our team was invaluable. He delivered a robust system that exceeded our performance targets by 200%.",
      rating: 5,
      project: "Analytics Dashboard"
    },
    {
      name: "David Park",
      role: "VP of Engineering",
      company: "NTQ Solutions",
      image: davidPark,
      content: "One of the best developers I've worked with. Khanh's expertise spans the entire stack and his code quality is exceptional. He's a true professional who delivers results.",
      rating: 5,
      project: "Microservices Architecture"
    },
    {
      name: "Lisa Thompson",
      role: "Head of Product",
      company: "KIMEI Global",
      image: lisaThompson,
      content: "Khanh brought our vision to life with incredible precision. His technical skills combined with business acumen made him an invaluable partner. Highly recommended!",
      rating: 5,
      project: "Payment Gateway"
    },
    {
      name: "James Wilson",
      role: "Founder",
      company: "Freelance Client",
      image: jamesWilson,
      content: "Outstanding developer with a rare combination of technical depth and practical experience. Khanh delivered our MVP on time and it scaled beautifully to thousands of users.",
      rating: 5,
      project: "Mobile App Backend"
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <div className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">Client Feedback</div>
              <h2 className="text-5xl md:text-7xl font-black font-display">
                <span className="text-foreground">What Clients </span>
                <span className="gradient-text">Say</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
              Trusted by industry leaders and innovative startups worldwide
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass-card p-8 group hover:glow-mixed transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 animate-slide-up relative overflow-hidden flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-accent" fill="currentColor" />
                </div>

                <div className="relative z-10 space-y-6 flex-1 flex flex-col">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground/80 leading-relaxed flex-1">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-accent p-0.5 group-hover:scale-110 transition-transform">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-foreground group-hover:gradient-text transition-all">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-accent font-medium">
                        {testimonial.company}
                      </div>
                    </div>
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

export default Testimonials;
