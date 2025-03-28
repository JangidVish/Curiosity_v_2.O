import React from "react";

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

 const WhyPravi = () => {
  const leftItems = whyPraviData.filter((item) => item.position === "left");
  const rightItems = whyPraviData.filter((item) => item.position === "right");

  return (
    <div className="bg-gradient-to-b from-black to-red-950 min-h-screen flex justify-center items-center p-6">
      <div className="relative max-w-full w-full flex flex-col items-center">
        {/* Center Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-200 rounded-full flex flex-col justify-center items-center shadow-lg text-center z-10">
          <h2 className="text-xl font-bold text-gray-800">Why Pravi?</h2>
        </div>

        {/* Card Columns */}
        <div className="w-full flex justify-between mt-10 px-5">
          {/* Left Column */}
          <div className="flex flex-col gap-4 items-start">
            {leftItems.map((item, index) => (
              <div
                key={`left-${index}`}
                className="max-w-sm p-4 rounded-full bg-gray-900 text-white shadow-md"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 items-end">
            {rightItems.map((item, index) => (
              <div
                key={`right-${index}`}
                className="max-w-sm p-4 rounded-full bg-gray-900 text-white shadow-md"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyPravi;