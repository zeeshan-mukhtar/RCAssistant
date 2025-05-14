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
          TRUSTED BY LEADING COMPANIES
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
    // Simple horizontal bars
    <svg key="logo1" className="h-10" viewBox="0 0 100 34" fill="currentColor">
      <rect width="100" height="8" rx="2"></rect>
      <rect y="16" width="60" height="6" rx="2"></rect>
      <rect y="28" width="80" height="6" rx="2"></rect>
    </svg>,
    
    // Circle and rectangle
    <svg key="logo2" className="h-10" viewBox="0 0 100 34" fill="currentColor">
      <circle cx="17" cy="17" r="17"></circle>
      <rect x="40" y="9" width="60" height="16" rx="8"></rect>
    </svg>,
    
    // Diamond and bars
    <svg key="logo3" className="h-10" viewBox="0 0 100 34" fill="currentColor">
      <path d="M0 17L17 0L34 17L17 34L0 17Z"></path>
      <rect x="40" y="6" width="60" height="6" rx="2"></rect>
      <rect x="40" y="14" width="40" height="6" rx="2"></rect>
      <rect x="40" y="22" width="50" height="6" rx="2"></rect>
    </svg>,
    
    // Square and bars
    <svg key="logo4" className="h-10" viewBox="0 0 100 34" fill="currentColor">
      <rect width="34" height="34" rx="4"></rect>
      <rect x="40" y="6" width="60" height="6" rx="2"></rect>
      <rect x="40" y="14" width="30" height="6" rx="2"></rect>
      <rect x="40" y="22" width="45" height="6" rx="2"></rect>
    </svg>,
    
    // Circle and square
    <svg key="logo5" className="h-10" viewBox="0 0 100 34" fill="currentColor">
      <rect width="34" height="34" rx="17"></rect>
      <rect x="40" width="60" height="34" rx="4"></rect>
    </svg>,
    
    // Triangle and bars
    <svg key="logo6" className="h-10" viewBox="0 0 100 34" fill="currentColor">
      <polygon points="17,0 34,34 0,34"></polygon>
      <rect x="40" y="6" width="60" height="6" rx="2"></rect>
      <rect x="40" y="14" width="50" height="6" rx="2"></rect>
      <rect x="40" y="22" width="40" height="6" rx="2"></rect>
    </svg>
  ];
  
  return logos[index % logos.length];
}
