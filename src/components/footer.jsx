import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa"; // react-icons install pannikonga

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/kanis-2129", // Unga link-a inga podunga
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com/in/kaneeswari-k/", // Unga link-a inga podunga
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=kaniskasinathan@gmail.com", // Unga mail-a inga podunga
      color: "hover:text-red-500",
    },
  ];

  return (
    <footer className="bg-black  text-gray-200 border-t  border-gray-100 pt-4 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Logo or Name */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold text-gray mb-6"
          >
            Let's Connect
          </motion.h2>

          <div className="flex flex-row gap-32">
            {/* Social Icons Container */}
            <div className="flex gap-8 mb-10 ">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-2xl text-gray-400 transition-colors duration-300 ${social.color}`}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            {/* Navigation Links (Optional but looks professional) */}
            <div className="flex gap-6 mb-8 text-sm font-medium text-gray-500">
              <a
                href="#about"
                className="hover:text-purple-900 transition-colors"
              >
                About
              </a>

              <a
                href="#skills"
                className="hover:text-purple-900 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-purple-900 transition-colors"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {currentYear} • Built with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
