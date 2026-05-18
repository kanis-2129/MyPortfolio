import HTML from "../image/html.jpeg";
import CSS3 from "../image/CSS3.png";
import JS from "../image/JS.png";
import React from "../image/React.png";
import MongoDB from "../image/mongoDB.png";
import Node from "../image/node.png";
import TailwindCSS from "../image/tailwind.png";
import firebase from "../image/firebase.png";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./animation";

const Skill = () => {
  const skills = [
    { img: HTML, name: "HTML5" },
    { img: CSS3, name: "CSS3" },
    { img: JS, name: "JavaScript" },
    { img: React, name: "React" },
    { img: MongoDB, name: "MongoDB" },
    { img: Node, name: "Node.js" },
    { img: TailwindCSS, name: "Tailwind" },
    { img: firebase, name: "Firebase" },
  ];


  return (
    <section id="skills" className="min-h-[60vh] flex flex-col justify-center items-center w-full bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Title with subtle fade-in */}
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl mb-20 text-purple-900 font-bold text-center"
        >
          Technical Skills
        </motion.h1>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-8 md:gap-12 justify-center max-w-5xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                transition: { duration: 0.2 } 
              }}
              className="group flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <img
                className="w-16 h-16 md:w-20 md:h-20 object-contain filter  transition-all duration-300"
                src={skill.img}
                alt={skill.name}
              />
              <span className="mt-4 text-xs font-semibold text-gray-400 group-hover:text-purple-700 uppercase tracking-widest transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;