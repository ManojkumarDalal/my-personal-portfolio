import PropTypes from "prop-types";

const SkillCart = ({ icon, text }) => {
  return (
    <div className="w-32 sm:w-44 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
      <div className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-xl border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500 w-full h-full">
        {icon}
        <p className="text-white font-roboto text-sm sm:text-md mt-2">{text}</p>
      </div>
    </div>
  );
};

SkillCart.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default SkillCart;
