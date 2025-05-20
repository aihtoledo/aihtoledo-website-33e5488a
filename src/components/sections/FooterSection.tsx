
import { Separator } from "@/components/ui/separator";

const FooterSection = () => {
  return (
    <footer className="bg-toledo-blue text-white py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white">Expert Office Hours</h3>
            <p className="mt-2 text-white/80">Professional support when you need it most.</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
            <a href="#" className="hover:text-toledo-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-toledo-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-toledo-gold transition-colors">Contact</a>
          </div>
        </div>
        <Separator className="my-8 bg-white/20" />
        <div className="text-center text-sm text-white/80">
          <p>© {new Date().getFullYear()} Expert Office Hours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
