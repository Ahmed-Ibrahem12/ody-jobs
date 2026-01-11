const Footer = () => {
  return (
    <footer className="bg-cyan-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo / About */}
          <div>
            <h2 className="text-2xl font-bold mb-3">JobFinder</h2>
            <p className="text-sm text-cyan-100 leading-relaxed">
              Find the best remote jobs from top companies worldwide. Built with
              React & modern web technologies.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-cyan-300 cursor-pointer">Jobs</li>
              <li className="hover:text-cyan-300 cursor-pointer">Categories</li>
              <li className="hover:text-cyan-300 cursor-pointer">Companies</li>
              <li className="hover:text-cyan-300 cursor-pointer">About</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: contact@jobfinder.com</li>
              <li>Location: Worldwide</li>
            </ul>
            <div className="w-100 gap-2 flex ">
              <input
                type="email"
                className="mt-2 p-2 rounded-md w-1/2 bg-white text-black"
                placeholder="Your Email"
              />
              <button className="mt-2 px-4 py-2 w-1/4 bg-cyan-600 rounded-md hover:bg-cyan-500 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cyan-700 mt-8 pt-4 text-center text-sm text-cyan-200">
          © {new Date().getFullYear()} JobFinder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
