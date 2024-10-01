import { useState } from "react";
import "./fonts/stylesheet.css";
import { useEffect } from "react";
import { useMemo } from "react";

const App = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = useMemo(() => new Date("2024-10-16T00:00:00"), []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const splitDigits = (num) => String(num).padStart(2, "0").split("");

  const dayDigits = splitDigits(timeLeft.days);
  const hourDigits = splitDigits(timeLeft.hours);
  const minuteDigits = splitDigits(timeLeft.minutes);
  const secondDigits = splitDigits(timeLeft.seconds);

  return (
    <div className="">
      <div className="bg-[url('/home-bg.jpeg')] bg-cover object-cover min-h-screen bg-no-repeat flex justify-center items-center text-center px-3 py-10">
        <div className="">
          <h1 className="mt-5 md:mt-0 text-6xl md:text-8xl lg:text-9xl md:mb-3 jersey-10-regular tracking-wide">
            SPARZO’24
          </h1>
          <h2
            className="text-white text-lg md:text-3xl lg:text-4xl mb-7 md:mb-12"
            style={{
              fontFamily: "Porter Sans Block",
            }}
          >
            LET’S VIBE WITH US
          </h2>
          <h3 className="text-white text-lg md:text-4xl lg:text-5xl font-bold tracking-wider">
            THE GREAT EVENTS STARTS FROM
          </h3>

          {/* TIME LEFT */}
          <div className="mt-5 md:mt-10 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
            {/* Group for Days and Hours */}
            <div className="flex items-center flex-row justify-between space-x-5 md:space-x-0 flex-grow">
              <div className="text-center">
                <label
                  htmlFor="days"
                  className="text-white font-semibold text-xl md:text-3xl lg:text-4xl"
                >
                  DAYS
                </label>
                <div className="flex flex-row justify-center items-center space-x-1.5 md:space-x-3 mt-3">
                  {dayDigits.map((digit, index) => (
                    <input
                      key={`day-${index}`}
                      type="number"
                      disabled
                      className="outline-none w-10 h-14 md:w-14 md:h-20 lg:w-20 lg:h-28 bg-white shadow-lg shadow-cse-cyan rounded-xl text-center text-2xl md:text-5xl lg:text-6xl"
                      value={digit}
                      style={{ MozAppearance: "textfield" }}
                    />
                  ))}
                </div>
              </div>

              <div className="text-center md:ml-5">
                <label
                  htmlFor="hrs"
                  className="text-white font-semibold text-xl md:text-3xl lg:text-4xl"
                >
                  HRS
                </label>
                <div className="flex flex-row justify-center items-center space-x-1.5 md:space-x-3 mt-3">
                  {hourDigits.map((digit, index) => (
                    <input
                      key={`hour-${index}`}
                      type="number"
                      disabled
                      className="outline-none w-10 h-14 md:w-14 md:h-20 lg:w-20 lg:h-28 bg-white shadow-lg shadow-cse-cyan rounded-xl text-center text-2xl md:text-5xl lg:text-6xl"
                      value={digit}
                      style={{ MozAppearance: "textfield" }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Group for Minutes and Seconds */}
            <div className="flex items-center flex-row justify-between space-x-5 md:space-x-0 flex-grow">
              <div className="text-center">
                <label
                  htmlFor="mins"
                  className="text-white font-semibold text-xl md:text-3xl lg:text-4xl"
                >
                  MINS
                </label>
                <div className="flex flex-row justify-center items-center space-x-1.5 md:space-x-3 mt-3">
                  {minuteDigits.map((digit, index) => (
                    <input
                      key={`minute-${index}`}
                      type="number"
                      disabled
                      className="outline-none w-10 h-14 md:w-14 md:h-20 lg:w-20 lg:h-28 bg-white shadow-lg shadow-cse-cyan rounded-xl text-center text-2xl md:text-5xl lg:text-6xl"
                      value={digit}
                      style={{ MozAppearance: "textfield" }}
                    />
                  ))}
                </div>
              </div>

              <div className="text-center md:ml-5">
                <label
                  htmlFor="secs"
                  className="text-white font-semibold text-xl md:text-3xl lg:text-4xl"
                >
                  SECS
                </label>
                <div className="flex flex-row justify-center items-center space-x-1.5 md:space-x-3 mt-3">
                  {secondDigits.map((digit, index) => (
                    <input
                      key={`second-${index}`}
                      type="number"
                      disabled
                      className="outline-none w-10 h-14 md:w-14 md:h-20 lg:w-20 lg:h-28 bg-white shadow-lg shadow-cse-cyan rounded-xl text-center text-2xl md:text-5xl lg:text-6xl"
                      value={digit}
                      style={{ MozAppearance: "textfield" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex-col flex md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-10">
            <div>
              <a
                href="https://forms.gle/2LhNuqZ98DwFEnDe7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold px-5 py-3.5 text-white text-xl md:text-2xl lg:text-3xl border-2 border-cse-cyan hover:bg-cse-cyan transition-all hover:transition-all rounded-lg"
              >
                Register Now
              </a>
            </div>
            <div>
              <a
                href="https://linktr.ee/sparzo"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold px-5 py-3.5 text-white text-xl md:text-2xl lg:text-3xl border-2 border-cse-cyan hover:bg-cse-cyan transition-all hover:transition-all rounded-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
