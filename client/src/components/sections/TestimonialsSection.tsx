import { motion } from "framer-motion";
import { Star, User } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "AIagentBot has transformed our IT support operations. We've seen a 75% reduction in ticket volume and significantly improved employee satisfaction. The ROI has been incredible.",
      author: "Sarah Johnson",
      role: "CIO, Global Financial Services"
    },
    {
      quote: "Employee onboarding time has been cut in half since implementing AIagentBot. New hires get immediate answers to their questions, and our HR team can focus on more strategic work.",
      author: "Michael Chen",
      role: "HR Director, Tech Innovations Inc."
    },
    {
      quote: "The integration capabilities of AIagentBot are impressive. It connects with all our systems and provides a single source of truth for employees. The ROI has exceeded our expectations.",
      author: "Alex Rodriguez",
      role: "CTO, Enterprise Solutions Ltd."
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What our customers are saying</h2>
          <p className="text-neutral-600 text-lg">Hear from organizations that have transformed their support experience with AIagentBot.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md border border-neutral-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-neutral-600 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-neutral-200 rounded-full mr-4 flex items-center justify-center">
                  <User className="h-6 w-6 text-neutral-500" />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
