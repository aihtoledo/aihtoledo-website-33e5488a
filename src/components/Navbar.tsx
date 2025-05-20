
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-toledo-blue">
                <span className="text-toledo-orange">AIH</span> Toledo
              </span>
            </a>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#meet-the-experts" className="text-base font-medium text-gray-700 hover:text-toledo-blue">
              Meet The Experts
            </a>
            <a href="#what-are" className="text-base font-medium text-gray-700 hover:text-toledo-blue">
              About
            </a>
            <a href="#what-we-help" className="text-base font-medium text-gray-700 hover:text-toledo-blue">
              Services
            </a>
            <a href="#how-it-works" className="text-base font-medium text-gray-700 hover:text-toledo-blue">
              How It Works
            </a>
            <a href="#who-its-for" className="text-base font-medium text-gray-700 hover:text-toledo-blue">
              Who It's For
            </a>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#meet-the-experts">
              <Button className="ml-8 bg-toledo-blue hover:bg-toledo-blue/90 text-white">
                Book a Session
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-toledo-blue">
                  <span className="text-toledo-orange">AIH</span> Toledo
                </span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="#meet-the-experts" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-base font-medium text-gray-900">Meet The Experts</span>
                  </a>
                  <a href="#what-are" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-base font-medium text-gray-900">About</span>
                  </a>
                  <a href="#what-we-help" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-base font-medium text-gray-900">Services</span>
                  </a>
                  <a href="#how-it-works" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-base font-medium text-gray-900">How It Works</span>
                  </a>
                  <a href="#who-its-for" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-base font-medium text-gray-900">Who It's For</span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a href="#meet-the-experts" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-toledo-blue hover:bg-toledo-blue/90 text-white">
                    Book a Session
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
