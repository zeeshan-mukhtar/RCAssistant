import React from "react";
import { MessageSquare } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { 
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
  GithubIcon
} from "lucide-react";

export default function Footer({ minimal = false }: { minimal?: boolean }) {
  return (
    <footer className="bg-neutral-800 text-white py-6">
      <div className="container mx-auto px-4">
        {!minimal && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                {/* <div className="bg-primary rounded-lg p-1 mr-2">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">RC Assistant</span> */}
                <img src="/aiagentbot-logo-footer.png" alt="AlagentBot Logo" className="h-8 mr-2" />
              </div>
              <p className="text-neutral-400 mb-4">
              AIAgentBot is an enterprise-ready AI platform that enables seamless development an deployment of AI-powered solutions. The company is a subsidiary of Royal Cyber Inc. specializing in digital transformation & IT consulting.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <TwitterIcon className="h-5 w-5" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <GithubIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-neutral-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-neutral-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Webinars</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Press</a></li>
                <li><a href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
          </div>
        )}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 sm:mb-0">&copy; {new Date().getFullYear()} RC Assistant. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
