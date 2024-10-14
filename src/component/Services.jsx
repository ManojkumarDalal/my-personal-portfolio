import Title from "./ui/Title";
import { FaLaptopCode } from "react-icons/fa";
import { MdWeb, MdDesignServices } from "react-icons/md";
import { SiJavascript } from "react-icons/si";
import { AiOutlineLaptop } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Responsive Web Design",
      description:
        "Creating mobile-friendly, responsive websites that work seamlessly on all devices.",
      icon: <FaLaptopCode size={60} className="text-red-500" />,
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Developing custom web applications tailored to meet client needs using HTML, CSS, JavaScript, and React.",
      icon: <MdWeb size={60} className="text-blue-500" />,
    },
    {
      id: 3,
      title: "UI/UX Design Integration",
      description:
        "Translating design mockups into fully functional, visually appealing web pages using modern frameworks.",
      icon: <MdDesignServices size={60} className="text-green-500" />,
    },
    {
      id: 4,
      title: "Single Page Applications (SPA) Development",
      description:
        "Building fast and dynamic single-page applications with React and Tailwind CSS.",
      icon: <AiOutlineLaptop size={60} className="text-purple-500" />,
    },
    {
      id: 5,
      title: "JavaScript Development",
      description:
        "Implementing dynamic features and interactivity through JavaScript and modern frameworks like React.js.",
      icon: <SiJavascript size={60} className="text-yellow-500" />,
    },
    {
      id: 6,
      title: "Software Training",
      description:
        "I provide comprehensive software training tailored to all experience levels, from beginners to advanced users.",
      icon: <FaChalkboardTeacher size={60} className="text-pink-500" />,
    },
  ];

  return (
    <section id="services" className="mx-auto py-16 bg-secondary">
      <Title title="Services" />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-2xl text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            {/* Icon */}
            <div className="flex justify-center items-center mb-4">
              {service.icon}
            </div>

            {/* Service Title */}
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

            {/* Service Description */}
            <p className="text-gray-600 text-justify">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
