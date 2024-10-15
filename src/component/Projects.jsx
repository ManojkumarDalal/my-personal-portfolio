import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./commonUI/Title";
import ProjectCart from "./commonUI/ProjectCart";
import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const Projects = () => {
  // Slick slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 slides at once on larger screens
    slidesToScroll: 1, // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const { portfolioData } = useContext(PortfolioContext);

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto space-y-6 px-4">
        {/* My Project Heading */}
        <Title title="Latest Projects" />

        {/* Project Carousel */}
        <Slider {...settings}>
          {portfolioData.projects.map((project) => (
            <ProjectCart
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              codeLink={project.codeLink}
              link={project.link}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
