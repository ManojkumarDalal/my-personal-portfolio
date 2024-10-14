import { FaLinkedin, FaGithub, FaMedium, FaYoutube } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className="text-white flex flex-col-reverse min-h-screen md:flex-row items-center justify-center md:justify-between px-4 sm:px-8 md:px-24 py-8">
      {/* Left Side: Title and CTA */}
      <div className="container flex flex-col text-center md:text-left md:w-1/2 space-y-5">
        <h1 className="font-jost text-2xl sm:text-3xl text-primary font-semibold">
          Hello, I{"'"}m
        </h1>
        <h1 className="text-black font-poppins text-4xl sm:text-5xl font-semibold">
          Manojkumar Dalal
        </h1>
        <div className="text-2xl sm:text-4xl mt-4 text-black font-medium">
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
        <p className="text-gray-600 text-base sm:text-lg md:text-xl w-full mt-7 sm:text-start">
          Passionate about building responsive, scalable, and efficient web
          applications using modern JavaScript frameworks.
        </p>
        <div className="flex items-center justify-center md:justify-start mt-6 sm:mt-10 space-x-4">
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
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="../ManojDalal.jpg"
          alt="Developer Illustration"
          className="w-56 h-56 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] object-cover rounded-full shadow-lg shadow-white"
        />
      </div>
    </section>
  );
};

export default Hero;
