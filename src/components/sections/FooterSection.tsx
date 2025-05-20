
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-neutral-950 text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Expert Office Hours</h3>
            <p className="text-neutral-300">Professional support when you need it most.</p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="text-neutral-400 hover:text-brand-400 transition-all" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-brand-400 transition-all" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-brand-400 transition-all" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:info@experthofficehours.com" className="text-neutral-400 hover:text-brand-400 transition-all" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#meet-the-experts" className="text-neutral-300 hover:text-brand-400 transition-all">Meet Our Experts</a>
              </li>
              <li>
                <a href="#what-are" className="text-neutral-300 hover:text-brand-400 transition-all">About Office Hours</a>
              </li>
              <li>
                <a href="#what-we-help" className="text-neutral-300 hover:text-brand-400 transition-all">Services</a>
              </li>
              <li>
                <a href="#who-its-for" className="text-neutral-300 hover:text-brand-400 transition-all">Who It's For</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-neutral-300 hover:text-brand-400 transition-all">How It Works</a>
              </li>
            </ul>
          </div>
          
          {/* Legal & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-300 hover:text-brand-400 transition-all">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-brand-400 transition-all">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-brand-400 transition-all">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-neutral-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Expert Office Hours. All rights reserved.
          </p>
          <p className="text-sm text-neutral-400 mt-2 md:mt-0">
            Made with care in Toledo, Ohio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
