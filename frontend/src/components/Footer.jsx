import { Rocket, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Career Guidance', href: '#services' },
      { name: 'Mentorship', href: '#services' },
      { name: 'Internships', href: '#services' },
      { name: 'Skill Development', href: '#services' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Success Stories', href: '#success' },
      { name: 'Career Tips', href: '#' },
      { name: 'Industry Insights', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Disclaimer', href: '#' },
    ]
  };

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      alert('Thank you for subscribing! We\'ll keep you updated with the latest career insights.');
      e.target.reset();
    }
  };

  return (
    <footer className="bg-dark-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 fade-in">
              <div className="flex items-center space-x-2 mb-6">
                <div className="pulse-glow rounded-full p-1">
                  <Rocket className="h-8 w-8 text-primary-500" />
                </div>
                <span className="text-2xl font-bold gradient-text">Beyond Career</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Empowering students with personalized career guidance, expert mentorship, 
                and exclusive opportunities. Founded by IIT Kharagpur students for the next generation.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-400 hover:text-primary-500 transition-colors duration-300 cursor-pointer" onClick={() => window.open('mailto:hello@beyondcareer.in')}>
                  <Mail className="h-4 w-4 mr-3 text-primary-500" />
                  <span>hello@beyondcareer.in</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-primary-500 transition-colors duration-300 cursor-pointer" onClick={() => window.open('tel:+919876543210')}>
                  <Phone className="h-4 w-4 mr-3 text-primary-500" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-primary-500 transition-colors duration-300 cursor-pointer" onClick={() => window.open('https://maps.google.com/?q=IIT+Kharagpur')}>
                  <MapPin className="h-4 w-4 mr-3 text-primary-500" />
                  <span>IIT Kharagpur, West Bengal</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="stagger-item">
              <h3 className="text-white font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-400 hover:text-primary-500 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="stagger-item">
              <h3 className="text-white font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-400 hover:text-primary-500 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="stagger-item">
              <h3 className="text-white font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-400 hover:text-primary-500 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-700 fade-in fade-in-delay-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 gradient-text">Stay Updated</h3>
              <p className="text-gray-400">
                Get the latest career insights and opportunities delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-dark-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-all duration-300"
              />
              <button 
                type="submit"
                className="btn-primary bg-gradient-to-r from-primary-500 to-purple-500 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-gray-400">
              <span>© 2025 Beyond Career. Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
              <span>by IIT Kharagpur students</span>
            </div>
            
            <div className="flex space-x-6">
              {footerLinks.legal.map((link, index) => (
                <button 
                  key={index}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;