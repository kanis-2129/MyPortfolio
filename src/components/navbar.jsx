import { useState } from "react";
import { Menu, X} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "#hero" }, // Hero section ID code-oda match aagum mari set panniruken
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" }, // Plural ID fix
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full  bg-white/80 backdrop-blur-md text-purple-900 shadow-sm z-50 transition-all duration-300 border-b border-purple-50/50">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-10 py-4 max-w-6xl">
        {/* Logo Element */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="cursor-pointer"
        >
          <div className="relative w-14 h-12  flex items-center justify-center">
            {/* Left Top Border */}
            <span className="absolute top-0 left-0 w-8 h-5 border-t-2 border-l-2 border-purple-700 rounded-tl-lg"></span>

            {/* Right Bottom Border */}
            <span className="absolute bottom-0 right-0 w-8 h-5 border-b-2 border-r-2 border-purple-700 rounded-br-lg"></span>

            {/* Logo Text */}
            <h1 className="text-2xl font-black text-purple-900 ">K <span className="text-fuchsia-700">K</span></h1>
          </div>
        </motion.div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-8 font-medium text-sm lg:text-base text-gray-700">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href={link.href}
                className="hover:text-purple-700 transition-colors duration-200 relative group py-1"
              >
                {link.name}
                {/* Subtle underline hover micro-interaction effect */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Contact Button Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block"
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kaniskasinathan@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="bg-purple-900 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-purple-800 transition-all shadow-sm hover:shadow-purple-100"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Mobile Hamburg Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-purple-950 hover:text-purple-700 transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Overlay Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-purple-50 px-6 py-6 shadow-inner overflow-hidden"
          >
            <ul className="flex flex-col gap-5 font-semibold text-gray-800">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)} // Menu-va click panna close aiyidum
                    className="block text-lg hover:text-purple-700 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <li className="pt-2 border-t border-purple-50">
                <a
                  href="mailto:kaniskasinathan@gmail.com"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center block bg-purple-900 text-white font-medium py-3 rounded-xl shadow-md"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
