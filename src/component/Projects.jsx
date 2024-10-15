import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./ui/Title";

// Project Data
const projects = [
  {
    id: 1,
    title: "E-Commerce Application",
    image: "../project1.PNG",
    description:
      "The Fashion eCommerce Application is a fully responsive online store designed for selling men's, women's, and kids' fashion products.",
    link: "https://your-ecommerce-app.com",
    codeLink: "",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    image: "../project2.PNG",
    description:
      "The Personal Portfolio Website is a modern, responsive, and visually appealing platform designed to showcase my skills, experiences & projects.",
    link: "https://manojkumardalal.netlify.app/",
    codeLink:"https://github.com/ManojkumarDalal/my-personal-portfolio",
  },
  {
    id: 3,
    title: "Fresh Fruit Store",
    image: "../project3.PNG",
    description:
      "Designed and developed an interactive and visually appealing landing page for an online fresh fruit store.",
    link: "https://main--freshfruitsapp.netlify.app/",
    codeLink: "https://github.com/ManojkumarDalal/fresh-fruits-app"
  },
];

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

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto space-y-6 px-4">
        {/* My Project Heading */}
        <Title title="Latest Projects" />

        {/* Project Carousel */}
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-6 py-2">
              {" "}
              {/* Added padding for spacing */}
              <div className="w-full max-w-sm h-[450px] p-6 bg-secondary rounded-lg shadow-2xl flex flex-col items-center justify-around space-y-4">
                <h1 className="text-xl font-medium text-primary font-jost">
                  {project.title}
                </h1>
                <figure className="w-full">
                  <img
                    src={project.image}
                    alt="Project screenshot"
                    className="border border-cyan-500 rounded-lg w-full object-cover"
                  />
                </figure>
                <div>
                  <p className="text-md text-justify">{project.description}</p>
                </div>
                <div className="w-full flex justify-around">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    className="px-4 py-2 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition"
                  >
                    View Code
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    className="px-4 py-2 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
