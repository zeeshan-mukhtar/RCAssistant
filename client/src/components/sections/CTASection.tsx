import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="demo" className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="lg:flex items-center">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Change the Game with AIagentBot</h2>
            <p className="text-white/90 text-lg mb-8">Build specialized AI agents that align with your industry, brand, data, and compliance needs!</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg"
                className="px-8 bg-white text-primary hover:bg-neutral-100"
                asChild
              >
                <a href="#contact">Request a Demo</a>
              </Button>
              {/* <Button 
                size="lg"
                variant="outline" 
                className="px-8 bg-transparent border border-white text-white hover:bg-white/10"
              >
                Watch Video
              </Button> */}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="/AIAgentBot.png" 
              alt="Professional AI assistant interface" 
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
