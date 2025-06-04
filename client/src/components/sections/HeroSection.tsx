import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ChatWindow from "@/components/chat/ChatWindow";
import { useLocation } from "wouter";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import type { VariantProps } from "class-variance-authority";

type ButtonSize = "default" | "sm" | "lg" | "icon";
type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";

type FormType = { firstName: string; lastName: string; email: string; company: string; updates: boolean };

const personalEmailDomains = [
  "gmail.com", "yahoo.com", "hotmail.com", "aol.com", "outlook.com",
  "icloud.com", "mail.com", "gmx.com", "protonmail.com", "yandex.com",
  "zoho.com", "msn.com", "live.com", "rediffmail.com"
];

export default function HeroSection() {
  const [, setLocation] = useLocation();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormType>({ firstName: '', lastName: '', email: '', company: '', updates: true });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  function validate(form: FormType) {
    // Name: only letters, spaces, hyphens, apostrophes, min 2 chars
    if (!form.firstName || !/^[A-Za-z\s'-]{2,}$/.test(form.firstName.trim())) {
      return "Name must be at least 2 letters and contain only letters, spaces, hyphens, or apostrophes.";
    }
    // Email: standard email regex
    if (!form.email || !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)) {
      return "Please enter a valid email address.";
    }
    // Business email check
    const domain = form.email.split('@')[1]?.toLowerCase();
    if (domain && personalEmailDomains.includes(domain)) {
      return "Please use your business email address.";
    }
    // Company: at least 2 chars, must contain at least one letter, can have numbers, spaces, hyphens, ampersands
    if (
      !form.company ||
      form.company.trim().length < 2 ||
      !/[A-Za-z]/.test(form.company) ||
      /[^A-Za-z0-9\s\-&]/.test(form.company)
    ) {
      return "Company name must be at least 2 characters, contain at least one letter, and only use letters, numbers, spaces, hyphens, or ampersands.";
    }
    return "";
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const validationError = validate(form);
    if (validationError) {
      setError(validationError);
      return;
    }
    setSubmitting(true);
    try {
      await fetch('/api/send-try-now', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, to: 'zeeshan.mukhtar@royalcyber.com' })
      });
      setOpen(false);
      setLocation('/playground');
    } catch (err) {
      setError('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

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
              Hello
              <span className="text-primary block"> AIagentBot!</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Deploy Scalable, Intelligent AI Agents—Seamlessly Integrated, Enterprise-Ready for Seamless Customer & Business Automation
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg"
                    variant="default"
                    className="px-8 bg-primary hover:bg-primary-700 shadow-lg hover:shadow-xl"
                    onClick={() => setOpen(true)}
                  >
                    Try Now
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="text-lg font-semibold text-center mb-2">Fill out the form. Get instant access. Try the AI Assistant.</div>
                    <Input name="firstName" placeholder="Name: *" required value={form.firstName} onChange={handleChange} />
                    {/* <Input name="lastName" placeholder="Last Name: *" required value={form.lastName} onChange={handleChange} /> */}
                    <Input name="email" type="email" placeholder="Company Email: *" required value={form.email} onChange={handleChange} />
                    <Input name="company" placeholder="Company: *" required value={form.company} onChange={handleChange} />
                    {/* <div className="flex items-center mt-2">
                      <input type="checkbox" name="updates" checked={form.updates} onChange={handleChange} className="mr-2" id="updates-check" />
                      <label htmlFor="updates-check" className="text-sm">By checking this box, I agree to receive company news and updates</label>
                    </div> */}
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                    <Button type="submit" className="w-full mt-2" disabled={submitting}>{submitting ? 'Submitting...' : 'Try now'}</Button>
                  </form>
                </DialogContent>
              </Dialog>
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
