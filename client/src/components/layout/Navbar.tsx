import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-white/90"}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <div className="bg-primary rounded-lg p-1 mr-2">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">RC Assistant</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          {!isMobile ? (
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="font-medium text-neutral-600 hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="font-medium text-neutral-600 hover:text-primary transition-colors">How It Works</a>
              <a href="#use-cases" className="font-medium text-neutral-600 hover:text-primary transition-colors">Use Cases</a>
              <a href="#contact" className="font-medium text-neutral-600 hover:text-primary transition-colors">Contact</a>
            </nav>
          ) : null}
          
          {/* CTA Button */}
          {!isMobile ? (
            <div className="hidden md:block">
              <a href="#demo">
                <Button className="bg-primary hover:bg-primary-700 shadow-md">
                  Request Demo
                </Button>
              </a>
            </div>
          ) : null}
          
          {/* Mobile menu button */}
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#features" className="font-medium text-neutral-600 hover:text-primary p-2 rounded hover:bg-neutral-100">Features</a>
                  <a href="#how-it-works" className="font-medium text-neutral-600 hover:text-primary p-2 rounded hover:bg-neutral-100">How It Works</a>
                  <a href="#use-cases" className="font-medium text-neutral-600 hover:text-primary p-2 rounded hover:bg-neutral-100">Use Cases</a>
                  <a href="#contact" className="font-medium text-neutral-600 hover:text-primary p-2 rounded hover:bg-neutral-100">Contact</a>
                  <a href="#demo">
                    <Button className="w-full bg-primary hover:bg-primary-700 mt-4">
                      Request Demo
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          ) : null}
        </div>
      </div>
    </header>
  );
}
