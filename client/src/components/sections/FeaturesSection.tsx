import { motion } from "framer-motion";
import { 
  Calendar, 
  ClipboardCheck, 
  TrendingUp, 
  Sliders, 
  ShieldCheck, 
  BarChart4
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Instant Answers",
      description: "Provide immediate responses to employee questions across all enterprise applications, reducing wait times and boosting productivity."
    },
    {
      icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
      title: "Automated Workflows",
      description: "Automate repetitive IT tasks and support processes, allowing your team to focus on strategic initiatives rather than routine issues."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Enterprise Integration",
      description: "Seamlessly connect with all your enterprise systems and knowledge bases to provide accurate, consistent information across platforms."
    },
    {
      icon: <Sliders className="h-6 w-6 text-primary" />,
      title: "Conversational AI",
      description: "Advanced natural language processing understands context and intent, delivering human-like interactions that improve over time."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Enterprise Security",
      description: "Built with enterprise-grade security from the ground up, ensuring data protection and compliance with industry standards."
    },
    {
      icon: <BarChart4 className="h-6 w-6 text-primary" />,
      title: "Advanced Analytics",
      description: "Gain insights into support trends, common issues, and employee satisfaction with comprehensive analytics dashboards."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Transform your support experience with AI</h2>
          <p className="text-neutral-600 text-lg">RC Assistant combines breakthrough AI and enterprise knowledge to deliver instant, accurate support across your organization.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-neutral-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-neutral-600 mb-4">{feature.description}</p>
              <a href="#" className="text-primary font-medium hover:text-primary-700 flex items-center">
                Learn more
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
