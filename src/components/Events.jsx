import PropTypes from "prop-types";

const Events = ({ name, img, details }) => {
  return (
    <div className="px-4 py-5 border-2 border-cse-cyan rounded-xl">
      <h1 className="text-white font-semibold text-3xl text-shadow text-center mb-3">
        {name}
      </h1>

      <img src={img} alt={name} className="rounded-lg" />

      <div className="mt-5">
        <p className=" text-white text-center text-shadow text-2xl">
          {details}
        </p>
      </div>
    </div>
  );
};

Events.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  details: PropTypes.string,
};

export default Events;
