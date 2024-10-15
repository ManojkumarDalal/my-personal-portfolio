import PropTypes from 'prop-types';

const ServiceCart = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
      {/* Icon */}
      <div className="flex justify-center items-center mb-4">{icon}</div>

      {/* Service Title */}
      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      {/* Service Description */}
      <p className="text-gray-600 text-justify">{description}</p>
    </div>
  );
};

ServiceCart.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default ServiceCart;
