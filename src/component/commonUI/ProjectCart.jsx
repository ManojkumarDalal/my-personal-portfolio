import Button from "./Button";
import PropTypes from 'prop-types';

const ProjectCart = ({title, image, description, codeLink, link}) => {
  return (
    <div className="px-6 py-2">
      <div className="w-full max-w-sm h-[450px] p-6 bg-secondary rounded-lg shadow-2xl flex flex-col items-center justify-around space-y-4">
        <h1 className="text-xl font-medium text-primary font-jost">
          {title}
        </h1>
        <figure className="w-full">
          <img
            src={image}
            alt="Project screenshot"
            className="border border-cyan-500 rounded-lg w-full object-cover"
          />
        </figure>
        <div>
          <p className="text-md text-justify">{description}</p>
        </div>
        <div className="w-full flex justify-around">
          <Button title="View Code" link={codeLink} />
          <Button title="Live View" link={link} />
        </div>
      </div>
    </div>
  );
};

ProjectCart.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.elementType.isRequired,
    description: PropTypes.string.isRequired,
    codeLink: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default ProjectCart;
