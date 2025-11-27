
import { Link } from "react-router-dom";
import Container from "./Container";
import { Activity, Menu, X } from "lucide-react";
import Button from "../common/Button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white shadow-lg fixed w-full h-[70px] top-0 z-50">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Activity size={42} className="text-blue-400" />
              <span className="ml-2 text-xl font-bold">
                Health Staff Manager
              </span>
            </Link>
          </div>
          <nav className="hidden  items-center md:ml-8 lg:flex  md:flex md:gap-5 text-black">

            <Link to="" className="hover:text-blue-400 text-md">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-400 text-md">

              About
            </Link>
            <Link to="/services" className="hover:text-blue-400 text-md">
              Services
            </Link>

            <Link to="/contact" className="hover:text-blue-400 text-md">
              Contact
            </Link>
          </nav>


          <div className=" text-md hidden gap-5 md:flex items-center  space-x-4">
            <Link to="/login">
              <Button className=" px-2 py-2 border-2 border-blue-300  rounded-lg cursor-pointer">
                Log In
              </Button>
            </Link>
            <Link to="/apply-page">
              <Button className=" text-md text-white bg-blue-500 py-2 px-4 rounded-lg cursor-pointer ">
                Apply Now
              </Button>
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden absolute w-full bg-white z-50 shadow-md animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md font-medium hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md font-medium hover:bg-gray-100 "
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 rounded-md font-medium hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md font-medium hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4 px-4">
                <Link
                  to="/login"
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Button variant="outline" className="w-full">
                    Log In
                  </Button>
                </Link>
                <Link
                  to="/apply-page"
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full">Apply Now</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
