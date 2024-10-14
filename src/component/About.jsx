import Title from "./ui/Title";

const About = () => {
  return (
    <section id="about" className="mx-auto bg-secondary py-16 sm:p-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img
            src="../AboutMe.jpg"
            alt="About me"
            className="rounded-lg shadow-lg border-l-8 border-orange-500 w-3/4 md:w-full sm:mt-16"
          />
        </div>

        {/* About Text Section */}
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start justify-center space-y-5">
          <Title title="About Me" />
          
          {/* First paragraph */}
          <p className="text-lg text-justify leading-relaxed">
            Innovative and results-oriented professional with over 11+ years of experience in the training field, ready to transition into a dynamic role as a React.js developer.
          </p>

          {/* Second paragraph */}
          <p className="text-lg text-justify leading-relaxed">
            I am a passionate{" "}
            <span className="text-cyan-500">React JS Developer</span> with a
            knack for building scalable and responsive web applications. With a
            strong foundation in front-end technologies like HTML5, CSS3,
            Bootstrap, Tailwind CSS, JavaScript, and React JS, I aim to create
            seamless user experiences and visually stunning web interfaces.
          </p>
          
          {/* Personal Info Section */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-bold">Name:</p>
              <p>Manojkumar Ganesh Dalal</p>
            </div>
            <div>
              <p className="font-bold">Email:</p>
              <p>rajhansmanoj77@gmail.com</p>
            </div>
            <div>
              <p className="font-bold">Mobile:</p>
              <p>+91 8308341531</p>
            </div>
            <div>
              <p className="font-bold">Date of Birth:</p>
              <p>16-Feb-1987</p>
            </div>
            <div>
              <p className="font-bold">Nationality:</p>
              <p>Indian</p>
            </div>
            <div>
              <p className="font-bold">Address:</p>
              <p>Nashik, Maharashtra, India.</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <a href="#contact" className="bg-primary text-white py-2 px-6 rounded-md shadow hover:bg-orange-500 text-center transition">
              Hire Me
            </a>
            <button className="bg-gray-700 text-white py-2 px-6 rounded-md shadow text-center hover:bg-gray-900 transition">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
