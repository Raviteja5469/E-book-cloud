import React from "react";
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Apple,
  PlayCircle,
  Heart
} from "lucide-react";

const Footer = () => {
  const contactInfo = [
    { icon: Mail, text: "support@EduLibrary.com" },
    { icon: Phone, text: "+91 9949693415" },
    { icon: MapPin, text: "Hyderabad" }
  ];

  const quickLinks = [
    "About Us",
    "Contact",
    "Terms of Service",
    "Privacy Policy",
    "FAQ",
    "Help Center"
  ];

  const socials = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 font-inter">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 border-b border-gray-800 pb-10">
          {/* Brand */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-indigo-500 w-6 h-6" />
              <h1 className="text-2xl font-bold text-white">EduLibrary</h1>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Dive into a world of knowledge. EduLibrary brings books, tools, and resources to your fingertips—anytime, anywhere.
            </p>
          </div>

          {/* Newsletter */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe to our newsletter</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="bg-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 placeholder-gray-500 text-sm w-full"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-indigo-500" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-indigo-400 text-sm transition-all"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Get the App</h4>
            <div className="space-y-3">
              {[{ icon: Apple, name: "App Store" }, { icon: PlayCircle, name: "Google Play" }].map((item, index) => (
                <button
                  key={index}
                  className="flex items-center gap-4 px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all w-full"
                >
                  <item.icon className="w-5 h-5 text-indigo-400" />
                  <span className="text-sm text-white font-medium">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="p-3 rounded-full bg-gray-800 hover:bg-indigo-600 transition-all"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>© 2025 EduLibrary. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Raviteja
          </span>
          <div className="flex gap-4">
            {["License", "Sitemap", "Cookies"].map((item, index) => (
              <a key={index} href="#" className="hover:text-indigo-400 transition-all">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
