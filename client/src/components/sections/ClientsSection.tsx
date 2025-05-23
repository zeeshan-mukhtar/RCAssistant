import { motion } from "framer-motion";

export default function ClientsSection() {
  return (
    <section className="py-12 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.p 
          className="text-center text-neutral-500 font-medium mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by Leading Brands
          <span className="text-primary"> Across Industries</span>
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div 
              key={i}
              className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <LogoPlaceholder index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SVG logo placeholders with different shapes
function LogoPlaceholder({ index }: { index: number }) {
  const logos = [
    '/educause.png',
    '/ksm.png',
    '/adatelum.png',
    '/uc.png',
    '/Instructure.png',
    '/microsoft.png',
  ];
  return (
    <img
      key={logos[index % logos.length]}
      src={logos[index % logos.length]}
      alt="Client Logo"
      className="h-10 object-contain"
      loading="lazy"
    />
  );
}
