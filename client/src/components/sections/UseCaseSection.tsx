import { motion } from "framer-motion";
import {
  ShoppingBag,
  Stethoscope,
  Banknote,
  ShieldCheck
} from "lucide-react";

export default function UseCaseSection() {
  const useCases = [
    {
      icon: <ShoppingBag className="h-6 w-6 text-primary" />,
      title: "Retail",
      description: "Deliver seamless customer experiences and optimize omnichannel operations."
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-primary" />,
      title: "Healthcare",
      description: "Enhance patient care and streamline clinical and administrative workflows."
    },
    {
      icon: <Banknote className="h-6 w-6 text-primary" />,
      title: "Finance",
      description: "Modernize financial services with secure, intelligent, and efficient operations."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Insurance",
      description: "Transform policy management, claims processing, and customer engagement."
    }
  ];

  return (
    <section id="use-cases" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">USE CASES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Reimagining Industry Workflows</h2>
          <p className="text-neutral-600 text-lg">From retail to finance, our AI AgentBot adapt to industry-specific needs—automating complex processes, minimizing errors, enhancing decision-making, and unlocking new value chains.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-neutral-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-neutral-600 mb-4">{useCase.description}</p>
              <a href="#" className="text-primary font-medium hover:text-primary-700 flex items-center">
                View more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 