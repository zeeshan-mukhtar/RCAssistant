import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { insertDemoRequestSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

const personalEmailDomains = [
  "gmail.com", "yahoo.com", "hotmail.com", "aol.com", "outlook.com",
  "icloud.com", "mail.com", "gmx.com", "protonmail.com", "yandex.com",
  "zoho.com", "msn.com", "live.com", "rediffmail.com"
];

// Extend the schema with validation rules
const formSchema = insertDemoRequestSchema.extend({
  name: z.string()
    .regex(/^[A-Za-z\s'-]{2,}$/, { message: "Name must be at least 2 letters and contain only letters, spaces, hyphens, or apostrophes" })
    .refine(val => (val.match(/[A-Za-z]/g) || []).length >= 2, { message: "Name must contain at least 2 letters" }),
  email: z.string()
    .email({ message: "Please enter a valid email address" })
    .refine((val) => {
      const domain = val.split('@')[1]?.toLowerCase();
      return domain && !personalEmailDomains.includes(domain);
    }, { message: "Please use your business email address." }),
  company: z.string()
    .min(2, { message: "Company name must be at least 2 characters" })
    .regex(/^[A-Za-z0-9\s\-&]+$/, { message: "Company name can only use letters, numbers, spaces, hyphens, or ampersands" })
    .refine(val => (val.match(/[A-Za-z]/g) || []).length >= 2, { message: "Company name must contain at least 2 letters" }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    },
  });
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/demo-request", data);
      setIsSuccess(true);
      form.reset();
      toast({
        title: "Demo request submitted",
        description: "We'll be in touch shortly to schedule your demo.",
        variant: "default",
      });
    } catch (error) {
      console.error("Failed to submit demo request:", error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Level Up Your Business with AI AgentBot</h2>
            <p className="text-neutral-600 text-lg mb-8">We help you build AI agents tailored to your industry, brand, data, and compliance needs. Ready to learn more or get started? Just fill out the form! </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Email Us</h3>
                  <p className="text-neutral-600">info@aiagentbot.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Call Us</h3>
                  <p className="text-neutral-600">+1.630.355.6292</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Visit Us</h3>
                  <p className="text-neutral-600">55 Shuman Blvd, Suite 275, Naperville, IL 60563 USA.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isSuccess ? (
              <div className="bg-white rounded-xl p-8 shadow-lg border border-green-200 h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                <p className="text-neutral-600 mb-4">
                  Your demo request has been submitted successfully. One of our team members will contact you shortly to schedule your personalized demo.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="mt-4"
                >
                  Submit another request
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white rounded-xl p-8 shadow-lg border border-neutral-100">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="text-sm font-medium text-neutral-700">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" 
                            placeholder="Name" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="text-sm font-medium text-neutral-700">Your Email</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" 
                            placeholder="your.email@company.com" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="text-sm font-medium text-neutral-700">Subject </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" 
                            placeholder="Subject" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="text-sm font-medium text-neutral-700">Your message (optional) </FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4} 
                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors" 
                            placeholder="Tell us about your needs" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-primary hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
