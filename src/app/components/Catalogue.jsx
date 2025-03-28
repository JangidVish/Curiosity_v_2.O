import Image from "next/image";

const catalogueData = [
    {
      title: "Eklavya training bot",
      description:
        "Our takeaway Eklavya Bot training kit is designed to empower your champ with the skills to control technology through gestures. Just as Eklavya mastered archery with unwavering dedication and ingenuity, your champ will learn to command the Eklavya Bot using a mobile app, transforming their innovative ideas into reality with precision and confidence. This kit instills not only technical prowess but also the spirit of determination and creativity, enabling them to achieve mastery in the realm of robotics.",
      image: "/pravi2.png",
      buttons: [
        { text: "Download Brochure", link: "/brochure.pdf" },
        { text: "Get a Quote", link: "/quote" },
      ],
    },
    {
      title: "Eklavya training bot",
      description:
        "Our takeaway Eklavya Bot training kit is designed to empower your champ with the skills to control technology through gestures. Just as Eklavya mastered archery with unwavering dedication and ingenuity, your champ will learn to command the Eklavya Bot using a mobile app, transforming their innovative ideas into reality with precision and confidence. This kit instills not only technical prowess but also the spirit of determination and creativity, enabling them to achieve mastery in the realm of robotics.",
      image: "/pravi2.png",
      buttons: [
        { text: "Download Brochure", link: "/brochure.pdf" },
        { text: "Get a Quote", link: "/quote" },
      ],
    },
    {
      title: "Eklavya training bot",
      description:
        "Our takeaway Eklavya Bot training kit is designed to empower your champ with the skills to control technology through gestures. Just as Eklavya mastered archery with unwavering dedication and ingenuity, your champ will learn to command the Eklavya Bot using a mobile app, transforming their innovative ideas into reality with precision and confidence. This kit instills not only technical prowess but also the spirit of determination and creativity, enabling them to achieve mastery in the realm of robotics.",
      image: "/pravi2.png",
      buttons: [
        { text: "Download Brochure", link: "/brochure.pdf" },
        { text: "Get a Quote", link: "/quote" },
      ],
    },
  ];
  export const Catalogue = () => {
    return (
      <div className="bg-gradient-to-b from-black to-red-950 min-h-screen  p-5">
        <h1 className="text-4xl text-center text-white py-5">Catalogue</h1>
        <div className="flex flex-col  gap-8 items-center">
          {catalogueData.map((item, index) => (
            <div
              key={index}
              className={`text-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row  w-full lg:w-5/6 justify-center items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex-1   w-full flex justify-center items-center">
                <div className=" max-w-full flex justify-center items-center h-auto  rounded-lg overflow-hidden">
                  <Image
                  className="max-w-1/2 rounded-lg "
                    src={item.image}
                    alt={item.title}
                    width={1000}                    
                    height={1000}
                    // className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1  justify-center text-white mt-4 md:mt-0 md:px-4 " >
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="  text-gray-200 leading-8 text-lg xl:w-3/4 mt-2">{item.description}</p>
                <div className="mt-4 flex gap-4">
                  {item.buttons.map((button, idx) => (
                    <a
                      key={idx}
                      href={button.link}
                      className="font-bold bg-gray-700 text-white px-4 py-2 rounded-lg text-sm shadow hover:bg-gray-800"
                    >
                      {button.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

// export default Catalogue