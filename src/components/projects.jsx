import ArmyBook from "../image/armyBook.png";
import FinalSem from "../image/FinalSem.png";
import BulkMail from "../image/BulkMail.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { containerVariants, itemVariants } from "./animation";

// INDIVIDUAL CARD COMPONENT
const ProjectCard = ({ project }
  
) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full md:w-[42%] lg:w-[38%] h-[380px]"
      variants={itemVariants}
      style={{ perspective: "1200px" }} // Direct Inline Perspective for guaranteed 3D effect
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }} // Inline fallback for browser engine
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
      >
        {/* FRONT SIDE: Only Image */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden", // Safari dynamic engine layer
            zIndex: isHovered ? 1 : 2, // Dynamic indexing to strictly force show the card elements
          }}
        >
          <motion.img
            src={project.pic.src}
            alt={project.pic.alt}
            className="w-full h-full object-cover block"
          />
          {/* Transparent Overlay tint */}
          <div className="absolute inset-0 bg-purple-900/5" />
        </motion.div>

        {/* BACK SIDE: Content (Text & Buttons) */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl p-8 shadow-xl bg-white border border-purple-100 flex flex-col justify-between"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            zIndex: isHovered ? 2 : 1, // Forces back content to stack on top after safe hover trigger
          }}
        >
          <div>
            <h2 className="text-2xl font-bold mb-4 text-purple-900 border-b border-purple-50 pb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify">
              {project.desc}
            </p>
            {project.status && (
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full mt-2">
                {project.status}
              </span>
            )}
          </div>

          <div className="flex gap-6 mt-4">
            <button
              onClick={() => window.open(project.code, "_blank")}
              className="text-sm font-bold text-purple-700 hover:text-purple-900 transition-colors flex items-center gap-1"
            >
              View Code <span>→</span>
            </button>
            <button
              onClick={() => window.open(project.liveDemo, "_blank")}
              className="text-sm font-bold text-purple-700 hover:text-purple-900 transition-colors flex items-center gap-1"
            >
              Live Demo <span>↗</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// MAIN PROJECTS ARCHITECTURE
const Projects = () => {
  const projects = [
    {
      title: "Army Book Store Webpage",
      pic: { src: ArmyBook, alt: "Army Book Store" },
      desc: `Developed a responsive online bookstore using HTML5 and Tailwind CSS. Implemented interactive UI features using JavaScript. Integrated NodeMailer to enable email functionality.`,
      code: "https://github.com/kanis-2129/Army_book_Store",
      liveDemo: "https://army-book-store.vercel.app/",
    },
    {
      title: "Bulk Mail",
      pic: { src: BulkMail, alt: "Bulk Mail" },
      desc: `Developed a bulk email platform using MongoDB, Express, React, and Node.js. Enabled sending personalized emails to multiple recipients with real-time status updates.`,
      code: "https://github.com/kanis-2129/bulk",
      liveDemo: "https://bulk-mfv3.vercel.app/",
    },

    {
      title: "Student Performance Analysis Dashboard System",
      pic: { src: FinalSem, alt: "Final Semester Project" },
      desc: `The EduManage Integrated Smart Portal is a smart academic management system built using React through AI-based analysis and real-time dashboards. It helps securely manage marks and track student progress.`,
      status: "Under Development",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-gray-50 w-full overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl mb-20 text-purple-900 font-bold text-center"
        >
          Featured Projects
        </motion.h1>

        {/* Projects Grid Container */}
        <motion.div className="flex flex-wrap justify-center gap-12 md:gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
