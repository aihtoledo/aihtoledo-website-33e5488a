const Footer = () => {
  return (
    <footer className="bg-toledo-teal text-white py-8 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} AIH Toledo. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-2">
            Made with ❤️ in Toledo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
