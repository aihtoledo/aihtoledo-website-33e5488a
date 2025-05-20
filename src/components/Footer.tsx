const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-toledo-blue text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-toledo-light/80 text-sm">
            &copy; {currentYear} Expert Office Hours. All rights reserved.
          </p>
          <p className="text-toledo-light/60 text-sm mt-2">
            Made with ❤️ in Toledo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
