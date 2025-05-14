import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { value: "93%", label: "Reduction in response time" },
    { value: "85%", label: "Issues resolved on first contact" },
    { value: "3.5x", label: "Return on investment" },
    { value: "67%", label: "Reduction in IT support costs" }
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.h3 
                className="text-4xl font-bold text-primary mb-2"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-neutral-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
