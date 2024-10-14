import { FaLinkedin, FaGithub, FaMedium, FaYoutube } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className="text-white flex flex-col min-h-screen md:flex-row items-center justify-center md:justify-between px-8 md:px-24 sm:py-12">
      {/* Left Side: Title and CTA */}
      <div className="container flex flex-col text-center md:text-left md:w-1/2">
        <h1 className="font-jost text-3xl text-primary mb-5 md:text-2xl font-semibold sm:mt-20">
          Hello, I{"'"}m
        </h1>
        <h1 className="">
          <span className="text-black font-poppins text-5xl font-semibold">
            Manojkumar Dalal
          </span>
        </h1>
        <div className="text-4xl mt-4 text-black font-medium">
          I am{" "}
          <span className="font-semibold text-primary">
            <ReactTyped
              strings={[
                "FrontEnd Developer",
                "React JS Developer",
                "Software Trainer",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </span>
        </div>
        <p className="text-gray-600 text-lg text-justify md:text-xl w-full mt-7 sm:text-start">
          Passionate about building responsive, scalable, and efficient web
          applications using modern JavaScript frameworks.
        </p>
        <div className="flex items-center mt-[60px] space-x-4">
          <a href="#contact">
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-all">
              Hire Me
            </button>
          </a>
          {/* Social Media Icons */}
          <a
            href="https://www.linkedin.com/in/manojkumar-dalal-431aa615b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-black transition"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/ManojkumarDalal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-black transition"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://medium.com/@rajhansmanoj77"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-black transition"
          >
            <FaMedium size={30} />
          </a>
          <a
            href="https://www.youtube.com/@SkyTechIT99"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-black transition"
          >
            <FaYoutube size={30} />
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="mt-10 md:mt-0 md:w-1/2">
        <div className="flex items-center justify-center">
          <img
            src="../ManojDalal.jpg"
            alt="Developer Illustration"
            className="w-[400px] h-[400px] object-cover rounded-full shadow-lg shadow-white"
          />
        </div>
        
      </div>
      
    </section>
  );
};

export default Hero;
