'use client'
import { motion } from "framer-motion";
const whyPraviData = [
  {
    title: "Free public seminar",
    description: "Seminar on latest trends on robotics and drones.",
    position: "left",
  },
  {
    title: "Free public seminar",
    description: "Seminar on latest trends on robotics and drones.",
    position: "left",
  },
  {
    title: "Free public seminar",
    description: "Seminar on latest trends on robotics and drones.",
    position: "left",
  },
  {
    title: "Hands-On Training With Take Away Kits",
    description: "Training By Gurus Experienced from DIAT-DRDO.",
    position: "right",
  },
  {
    title: "Appraisal By Pravi",
    description:
      "Our single batch consists of 20 students out of which top 5 students provided 100% refund.",
    position: "right",
  },
  {
    title: "Course Ke Sath Bhi Course Ke Baad Bhi",
    description:
      "Patents/ Copyrights last a lifetime preserving the values of ideas. We generate Student Id that can be used for seamless support by our techsay team up to 6 months after enrollment.",
    position: "right",
  },
];

const WhyPraviCard = ({ title, description, position }) => (
  <motion.div
    initial={{ opacity: 0, x: position === "left" ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="w-full max-w-md p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl backdrop-blur-sm border border-gray-700 hover:border-red-500 transition-all duration-300"
  >
    <h3 className="text-xl font-bold mb-3 text-red-400">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
);

const WhyPravi = () => {
  const leftItems = whyPraviData.filter((item) => item.position === "left");
  const rightItems = whyPraviData.filter((item) => item.position === "right");

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-red-950 to-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-[85%] mx-auto relative">
        {/* Center Circle */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-red-950 to-black rounded-full flex flex-col justify-center items-center shadow-2xl z-10"
        >
          <h2 className="text-2xl font-bold text-white mb-2">Why Pravi?</h2>
          {/* <span className="text-gray-200 text-sm">Innovation Through Education</span> */}
        </motion.div>

        {/* Responsive Grid Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-25 z-20">
          {/* Left Column */}
          <div className="flex flex-col items-center space-y-8 lg:space-y-12">
            {leftItems.map((item, index) => (
              <WhyPraviCard
                key={`left-${index}`}
                {...item}
                position="left"
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center space-y-8 lg:space-y-12 mt-8 lg:mt-0">
            {rightItems.map((item, index) => (
              <WhyPraviCard
                key={`right-${index}`}
                {...item}
                position="right"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPravi;
