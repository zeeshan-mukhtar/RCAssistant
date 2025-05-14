import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function UseCasesSection() {
  const useCases = [
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      title: "IT Support Automation",
      description: "Automate common IT support tasks like password resets, software installations, and access requests, reducing ticket volume by up to 70%."
    },
    {
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      title: "HR Knowledge Access",
      description: "Provide instant answers to employee questions about benefits, policies, and procedures, ensuring consistent and accurate information."
    },
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      title: "Enterprise Onboarding",
      description: "Streamline the onboarding process with guided setup, training, and answering new employee questions, reducing time to productivity."
    }
  ];

  return (
    <section id="use-cases" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Applications</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Solve real business challenges</h2>
          <p className="text-neutral-600 text-lg">Discover how RC Assistant transforms support experiences across your organization.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={useCase.image}
                  alt={useCase.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-neutral-600 mb-4">{useCase.description}</p>
                <a href="#" className="text-primary font-medium hover:text-primary-700 flex items-center">
                  Learn more
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
