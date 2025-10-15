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
    <footer className="bg-gradient-to-r from-blue-400 to-blue-500 pt-18 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-white"></div>
      </div>

      <Container className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-white">
      
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <Activity size={42} className="text-blue-700" />
                <span className="ml-2 text-xl font-bold text-black">
                  Health Staff Manager
                </span>
              </Link>
            </div>

            <p className="text-blue-100 text-[15px]">
              Streamlining healthcare staffing to connect professionals with
              healthcare facilities efficiently and effectively.
            </p>

         
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-bold text-white">
                Stay Updated
              </h3>
              {isSubscribed ? (
                <div className="bg-green-50 text-green-700 p-3 rounded-lg text-sm">
                  Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border-2 border-blue-700 rounded-lg focus:ring-2 focus:ring-white focus:border-white outline-none transition-all"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-4 py-2 bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors disabled:opacity-70 cursor-pointer"
                  >
                    {isLoading ? "Subscribing..." : "Subscribe"}
                  </button>
                </form>
              )}
            </div>

            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-blue-100 text-[15px] hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-blue-100 text-[15px] hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-blue-100 text-[15px] hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-blue-100 text-[15px] hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Apply Now
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-blue-100 text-[15px] hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/20 pb-2">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="#"
                  className="text-blue-100 text-[15px] hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Healthcare Staffing
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-blue-100 text-[15px] hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Credential Verification
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-blue-100 text-[15px] hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Skill Development
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-blue-100 text-[15px] hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Career Advancement
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-blue-100 text-[15px] hover:text-white transition-colors flex items-center"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Compliance Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/20 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-3 text-white flex-shrink-0 mt-1"
                />
                <span className="text-blue-100 text-[15px]">
                  123 Healthcare Ave, Medical District, MD 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-white flex-shrink-0" />
                <Link
                  to="tel:+11234567890"
                  className="text-blue-100 text-[15px] hover:text-white transition-colors"
                >
                  +1 (123) 456-7890
                </Link>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-white flex-shrink-0" />
                <Link
                  to="mailto:info@healthstaffmanager.com"
                  className="text-blue-100 text-[15px] hover:text-white transition-colors"
                >
                  info@healthstaffmanager.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-blue-100 text-[15px] text-center md:text-base">
            © {new Date().getFullYear()} Health Staff Manager. All rights
            reserved.
            <span className="block sm:inline-block sm:ml-4 mt-2 sm:mt-0">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>{" "}
              |
              <Link
                to="/terms"
                className="hover:text-white transition-colors ml-2"
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