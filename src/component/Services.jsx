import Title from "./commonUI/Title";
import ServiceCart from "./commonUI/ServiceCart";
import { PortfolioContext } from "../context/PortfolioContext";
import { useContext } from "react";

const Services = () => {
  const { portfolioData } = useContext(PortfolioContext);

  return (
    <section id="services" className="mx-auto py-16 bg-secondary">
      <Title title="Services" />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {portfolioData.services.map((service) => (
          <ServiceCart
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
