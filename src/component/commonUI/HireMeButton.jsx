import propTypes from "prop-types";

const HireMeButton = ({title, link}) => {
  return (
    <>
      <a
        href={link}
        className="inline-block border bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors text-sm md:text-md"
      >
        {title}
      </a>
    </>
  );
};
HireMeButton.propTypes = {
    title: propTypes.string.isRequired,
    link: propTypes.string.isRequired,
  };
export default HireMeButton;
