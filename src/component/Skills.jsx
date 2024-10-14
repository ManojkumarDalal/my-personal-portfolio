import Marquee from "react-fast-marquee";
import {
  FaGithub,
  FaReact,
  FaJs,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import Title from "./ui/Title";

const Skills = () => {
  const skills = [
    {
      id: 1,
      icon: <FaHtml5 size={80} className="text-orange-600" />,
      text: "HTML5",
    },
    {
      id: 2,
      icon: <FaCss3Alt size={80} className="text-blue-500" />,
      text: "CSS3",
    },
    {
      id: 3,
      icon: <FaBootstrap size={80} className="text-blue-500" />,
      text: "Bootstrap",
    },
    {
      id: 4,
      icon: <SiTailwindcss size={80} className="text-blue-400" />,
      text: "Tailwind CSS",
    },
    {
      id: 5,
      icon: <FaJs size={80} className="text-yellow-500" />,
      text: "JavaScript",
    },
    {
      id: 6,
      icon: <FaReact size={80} className="text-cyan-500" />,
      text: "React JS",
    },
    {
      id: 7,
      icon: <FaGithub size={80} className="text-gray-500" />,
      text: "Github",
    },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto space-y-3 px-4 sm:px-8">
        {/* Skill Heading */}
        <Title title="My Skills"/>

        {/* Skill Description */}
        <div className="mx-auto max-w-3xl">
          <p className="text-base text-black sm:text-xl text-center my-8 sm:my-16">
            I specialize in building efficient, user-centric web applications.
            My core expertise lies in creating responsive, scalable, and
            interactive web interfaces using modern frontend technologies.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="w-full flex flex-row items-center justify-center">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="w-32 sm:w-44 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-xl border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500 w-full h-full">
                  {skill.icon}
                  <p className="text-white font-roboto text-sm sm:text-md mt-2">
                    {skill.text}
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
