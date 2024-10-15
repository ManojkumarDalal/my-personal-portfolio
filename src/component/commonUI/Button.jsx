import PropTypes from "prop-types";

const Button = ({title, link}) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        className="inline-block border border-primary text-black font-medium py-2 px-4 rounded-lg hover:bg-orange-600 hover:text-white transition-colors text-sm md:text-md"
      >
        {title}
      </a>
    </>
  );
};
Button.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };
export default Button;
