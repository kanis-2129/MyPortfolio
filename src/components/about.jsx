import { motion } from "framer-motion";

const About = () => {
  const education = [
    {
      class: "HSC",
      institution: "State Board",
      mark: "86%",
    },
    {
      class: "Undergraduate (UG)",
      institution: "Bachelor's Degree",
      mark: "7.8 CGPA",
    },
    {
      class: "Postgraduate (PG)",
      institution: "Master of Computer Applications (MCA)",
      mark: "7.3 CGPA",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50 py-24 w-full">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl mb-12 text-purple-900 font-bold text-center"
        >
          About Me
        </motion.h1>

        {/* Intro Paragraph */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700 leading-relaxed font-sans">
            I am an MCA student and an aspiring Full Stack Developer passionate about building 
            scalable web applications. Currently, I am sharpening my expertise in React.js, 
            Tailwind CSS, and robust backend ecosystems. I thoroughly enjoy converting complex 
            problems into seamless, responsive UI experiences.
          </p>
        </div>

        {/* Core Layout Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl  border bg-fuchsia-200 border-gray-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col justify-between"
            >
              <div >
                
                <h3 className="text-xl font-bold text-purple-900 mt-2 mb-1">{item.class}</h3>
                <p className="text-sm text-gray-500 mb-4">{item.institution}</p>
              </div>
              <p className="text-2xl font-extrabold text-purple-900">{item.mark}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificates & Actions */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-white border border-gray-100 rounded-2xl shadow-sm max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <h2 className="text-xs font-bold text-purple-600 tracking-wider uppercase mb-1">Certifications</h2>
            <h4 className="text-lg font-bold text-gray-800">Full Stack Web Development</h4>
            <p className="text-sm text-gray-500">JM Tech Institute</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;