import PropTypes from "prop-types";

const EventsCard = ({ name, img, details }) => {
  return (
    <div className="px-4 py-6 border-2 border-cse-cyan rounded-xl bg-cse-main hover:cursor-pointer group transition-shadow duration-300 ease-out transform hover:shadow-[0px_0px_25px_rgba(255,46,255,0.9)] active:shadow-[0px_0px_25px_#FF2EFF] active:scale-105 ">
      <h1 className="text-white font-semibold text-2xl lg:text-3xl text-shadow text-center mb-4">
        {name}
      </h1>

      <div className="rounded-lg overflow-hidden group-hover:border group-hover:border-fuchsia-600">
        <img
          src={img}
          alt={name}
          className="rounded-lg w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="mt-4">
        <p className=" text-white text-shadow md:text-lg">{details}</p>
      </div>

      <div className="mt-5 flex justify-center">
        <button className="font-bold py-2.5 w-full text-white border border-cse-cyan hover:bg-cse-violet transition-all hover:transition-all rounded-lg text-shadow">
          Know More
        </button>
      </div>
    </div>
  );
};

EventsCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  details: PropTypes.string,
};

export default EventsCard;
