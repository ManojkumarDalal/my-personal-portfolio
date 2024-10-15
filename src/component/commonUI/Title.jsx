import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-1">
      <span className="text-2xl font-bold font-poppins">{title}</span>
      <div className="flex flex-row items-center justify-center">
        <span className="w-3 h-3 rounded-full border border-gray-950"></span>
        <span className="w-28 sm:w-36 h-[2px] bg-primary"></span>
        <span className="w-3 h-3 rounded-full border border-gray-950"></span>
      </div>
      <span className="w-20 sm:w-24 h-[2px] bg-green-800"></span> {/* Adjusted widths */}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
