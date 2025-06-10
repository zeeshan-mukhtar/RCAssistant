import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Connect & Learn",
      description: "AIagentBot connects to your enterprise systems and knowledge bases, learning the structure and content of your organization's information."
    },
    {
      number: 2,
      title: "Analyze & Understand",
      description: "The AI analyzes queries using natural language processing to understand context, intent, and urgency, matching them to appropriate solutions."
    },
    {
      number: 3,
      title: "Deliver & Automate",
      description: "AIagentBot provides immediate answers and solutions while also automating common support tasks like password resets, access requests, and more."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">How AIagentBot Works</h2>
          <p className="text-neutral-600 text-lg">Our AI assistant transforms your enterprise knowledge into instant solutions for employees.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-xl p-8 shadow-md h-full border border-neutral-100">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  {/* <ChevronRight className="h-8 w-8 text-primary" /> */}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img 
            src="/AIAgentBot_banner.png" 
            alt="Modern tech office environment with employees using AIagentBot" 
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
