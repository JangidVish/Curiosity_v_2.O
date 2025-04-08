import React from 'react';
import { CardDemo } from './ui/cardTimeline';

const about = [
  {
    year: "September 2021",
    title: "Founded Curiosity4u",
    content: "Curiosity4u was founded in September 2021  to create a platform for fun learning and experiences."
  },
  {
    year: "December 2021",
    title: "First Major Update",
    content: "We released our first major update, introducing new features to enhance user experience."
  },
  {
    year: "February 2022",
    title: "Community Growth",
    content: "Our community grew to over 10,000 active users, sharing their knowledge and experiences."
  },
  {
    year: "August 2022",
    title: "Mobile App Launch",
    content: "We launched our mobile app, making it easier for users to access Curiosity4u on the go."
  },
  {
    year: "June 2023",
    title: "Global Expansion",
    content: "Curiosity4u expanded globally, reaching users in over 50 countries."
  },
];

export const AboutUs = () => {
  return (
    <div className="min-h-screen min-w-full bg-gradient-to-b from-red-950 to-black flex items-center justify-center">
      <div className="text-red-50 w-full  px-4">
        <h1 className="text-center text-2xl font-bold mb-8  ">About Us</h1>
        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-white transform -translate-y-1/2"></div>

          <ul className="relative flex justify-between">
            {about.map((data, index) => (
              <li
                key={index}
                className={`flex flex-col items-center ${index % 2 === 0 ? 'mb-100' : 'mt-100 '}`}
              >
                <div
                  className={`absolute w-px bg-white ${
                    index % 2 === 1 ? 'top-1/2 h-32' : 'bottom-1/2 h-32'
                  }`}
                ></div>
                <CardDemo card={data} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;