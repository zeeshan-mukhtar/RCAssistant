import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ChatWindow from "@/components/chat/ChatWindow";
import { useLocation } from "wouter";

export default function HeroSection() {
  const [, setLocation] = useLocation();

  return (
    <section className="pt-28 lg:pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 pt-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 md:pr-12 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform your
              <span className="text-primary block"> support experience</span>
              with AI
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8">
              RC Assistant delivers instant, accurate answers to employee questions across all enterprise applications, automating support tasks and boosting productivity.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="px-8 bg-primary hover:bg-primary-700 shadow-lg hover:shadow-xl"
                onClick={() => setLocation("/playground")}
              >
                Try Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 border-neutral-200 hover:border-primary text-neutral-700 hover:text-primary"
                asChild
              >
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ChatWindow 
              variant="demo"
              demoFlow="passwordReset" 
              autoplay={true}
            />
            
            {/* Decorative elements */}
            <div className="absolute -z-10 rounded-full bg-blue-200/40 w-64 h-64 -bottom-10 -left-10 blur-xl"></div>
            <div className="absolute -z-10 rounded-full bg-purple-200/30 w-32 h-32 -top-5 right-10 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
