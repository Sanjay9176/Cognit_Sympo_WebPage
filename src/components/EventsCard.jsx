import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const EventsCard = ({ name, img, details }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    // cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="px-4 py-6 border-2 border-cse-cyan rounded-xl bg-cse-main  hover:cursor-pointer group">
      <h1 className="text-white font-semibold text-2xl lg:text-3xl text-shadow text-center mb-4">
        {name}
      </h1>

      <div className="rounded-lg overflow-hidden hover:border hover:border-fuchsia-600">
        <img
          src={img}
          alt={name}
          className="rounded-lg w-full h-72 object-cover transform transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="mt-4">
        <p className=" text-white text-shadow text-lg lg:text-xl">
          {isLargeScreen && details.length > 75 ? (
            <>
              {details.slice(0, 49)}{" "}
              <small className="text-sm underline underline-offset-2 hover:cursor-pointer">
                read more...
              </small>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      <div className="mt-5 flex justify-center">
        <button className="font-bold py-2.5 w-full text-white border border-cse-cyan hover:bg-cse-violet transition-all hover:transition-all rounded-lg text-shadow shadow-glow-hover">
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
