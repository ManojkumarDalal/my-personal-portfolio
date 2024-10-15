import Marquee from "react-fast-marquee";
import Title from "./commonUI/Title";
import SkillCart from "./commonUI/SkillCart";
import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const Skills = () => {
  const {portfolioData} = useContext(PortfolioContext);
  
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto space-y-2 px-4 sm:px-8">
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
            {portfolioData.skills.map((skill) => (
              <SkillCart key={skill.id} icon={skill.icon} text={skill.text}/>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
