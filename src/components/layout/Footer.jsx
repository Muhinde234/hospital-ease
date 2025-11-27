import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Activity,
} from "lucide-react";
import Container from "./Container";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate subscription API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
  };

  return (
    <footer className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 pt-18 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-white animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-white animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white animate-pulse-slow"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>

      <Container className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-white">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center group">
                <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                  <Activity size={42} className="text-white drop-shadow-lg" />
                </div>
                <span className="ml-3 text-2xl font-bold text-white drop-shadow-md">
                  Health Staff Manager
                </span>
              </Link>
            </div>

            <p className="text-blue-100 text-[16px] leading-relaxed font-medium">
              Streamlining healthcare staffing to connect professionals with
              healthcare facilities efficiently and effectively.
            </p>

            {/* Newsletter Section */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold text-white drop-shadow-md">
                Stay Updated
              </h3>
              {isSubscribed ? (
                <div className="bg-green-500/20 backdrop-blur-sm text-green-100 p-4 rounded-xl border border-green-400/30 text-sm font-medium">
                  ✅ Thank you for subscribing to our newsletter!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:ring-2 focus:ring-white focus:border-white outline-none transition-all placeholder-blue-200 text-white font-medium"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-white text-blue-600 hover:bg-blue-50 font-semibold rounded-xl transition-all duration-300 disabled:opacity-70 cursor-pointer hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isLoading ? "Subscribing..." : "Subscribe Now"}
                  </button>
                </form>
              )}
            </div>

            {/* Social Media */}
            <div className="flex space-x-3 pt-6">
              {[
                { Icon: Facebook, color: "hover:bg-blue-400" },
                { Icon: Twitter, color: "hover:bg-blue-400" },
                { Icon: Linkedin, color: "hover:bg-blue-400" },
                { Icon: Instagram, color: "hover:bg-blue-400" },
              ].map(({ Icon, color }, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-white p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 ${color} hover:scale-110 hover:shadow-lg`}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/30 pb-3 drop-shadow-md">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Apply Now", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-blue-100 text-[16px] hover:text-white transition-all duration-300 flex items-center group font-medium hover:translate-x-1"
                  >
                    <span className="w-2 h-2 bg-blue-200 rounded-full mr-3 group-hover:bg-white group-hover:w-3 transition-all duration-300"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/30 pb-3 drop-shadow-md">
              Our Services
            </h3>
            <ul className="space-y-4">
              {[
                "Recruitment Portal",
                "Task Manager",
                "Staff Directory",
                "Admin Panel",
                
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="#"
                    className="text-blue-100 text-[16px] hover:text-white transition-all duration-300 flex items-center group font-medium hover:translate-x-1"
                  >
                    <span className="w-2 h-2 bg-blue-200 rounded-full mr-3 group-hover:bg-white group-hover:w-3 transition-all duration-300"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/30 pb-3 drop-shadow-md">
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <div className="bg-white/10 p-2 rounded-lg mr-3 group-hover:bg-white/20 transition-all duration-300">
                  <MapPin size={18} className="text-white flex-shrink-0" />
                </div>
                <span className="text-blue-100 text-[15px] font-medium leading-relaxed group-hover:text-white transition-colors">
                  123 Healthcare Ave, Medical District, MD 12345
                </span>
              </li>
              <li className="flex items-center group">
                <div className="bg-white/10 p-2 rounded-lg mr-3 group-hover:bg-white/20 transition-all duration-300">
                  <Phone size={18} className="text-white flex-shrink-0" />
                </div>
                <Link
                  to="tel:+11234567890"
                  className="text-blue-100 text-[15px] hover:text-white transition-colors font-medium"
                >
                  +1 (123) 456-7890
                </Link>
              </li>
              <li className="flex items-center group">
                <div className="bg-white/10 p-2 rounded-lg mr-3 group-hover:bg-white/20 transition-all duration-300">
                  <Mail size={18} className="text-white flex-shrink-0" />
                </div>
                <Link
                  to="mailto:info@healthstaffmanager.com"
                  className="text-blue-100 text-[15px] hover:text-white transition-colors font-medium"
                >
                  info@healthstaffmanager.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/30">
          <p className="text-blue-100 text-[15px] text-center md:text-base font-medium">
            © {new Date().getFullYear()} Health Staff Manager. All rights
            reserved.
            <span className="block sm:inline-block sm:ml-4 mt-2 sm:mt-0">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              •{" "}
              <Link
                to="/terms"
                className="hover:text-white transition-colors hover:underline ml-1"
              >
                Terms of Service
              </Link>
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
};
  
export default Footer;