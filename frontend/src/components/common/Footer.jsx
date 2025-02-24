const Footer = () => {
    const footerLinks = {
      company: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" }
      ],
      services: [
        { name: "Delivery Areas", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Partner with Us", href: "#" },
        { name: "Business Orders", href: "#" }
      ],
      help: [
        { name: "FAQs", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" }
      ]
    };
  
    return (
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-green-600">GROCEASE</h2>
              <p className="text-gray-600">
                Fresh groceries delivered to your doorstep. Quality products, fast delivery.
              </p>
              <div className="flex space-x-4">
                <span className="text-2xl cursor-pointer hover:text-green-600 transition-colors">📱</span>
                <span className="text-2xl cursor-pointer hover:text-green-600 transition-colors">📧</span>
                <span className="text-2xl cursor-pointer hover:text-green-600 transition-colors">📞</span>
              </div>
            </div>
  
            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-600 hover:text-green-600 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Services Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-600 hover:text-green-600 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Help Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Help</h3>
              <ul className="space-y-2">
                {footerLinks.help.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-600 hover:text-green-600 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-600 text-sm">
                © 2025 GRCEASE. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;