import { useState } from "react";
import "./fonts/stylesheet.css";
import { useEffect } from "react";
import { useMemo } from "react";
import Events from "./components/Events";

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
      {/* Banner */}
      <section className="bg-[url('/home-bg.jpeg')] bg-cover object-cover bg-cen min-h-screen bg-no-repeat flex justify-center items-center text-center px-3 py-10 relative">
        <div className="">
          <h1 className="mt-5 md:mt-0 text-6xl md:text-8xl lg:text-9xl md:mb-3 jersey-10-regular tracking-wide text-border-cyan text-shadow-cyan">
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
          <h3 className="text-white text-lg md:text-4xl lg:text-5xl font-bold tracking-wider text-shadow ">
            THE GREAT EVENTS STARTS FROM
          </h3>

          {/* TIME LEFT */}
          <div className="mt-5 md:mt-10 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
            <div className="flex items-center flex-row justify-between space-x-5 md:space-x-0 flex-grow">
              <div className="text-center">
                <label
                  htmlFor="days"
                  className="text-white font-semibold text-xl md:text-3xl lg:text-4xl text-shadow "
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
                  className="text-white font-semibold text-xl md:text-3xl lg:text-4xl text-shadow"
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

            <div className="flex items-center flex-row justify-between space-x-5 md:space-x-0 flex-grow">
              <div className="text-center">
                <label
                  htmlFor="mins"
                  className="text-white font-semibold text-xl md:text-3xl lg:text-4xl text-shadow"
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
                  className="text-white font-semibold text-xl md:text-3xl lg:text-4xl text-shadow"
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

          <div className="mt-20 flex-col flex md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-10">
            <div>
              <a
                href="https://forms.gle/2LhNuqZ98DwFEnDe7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold px-6 py-3.5 text-white text-xl md:text-2xl lg:text-3xl border-2 border-cse-cyan hover:bg-cse-violet  transition-all hover:transition-all rounded-lg text-shadow shadow-glow-hover"
              >
                Register Now
              </a>
            </div>
            <div>
              <a
                href="https://linktr.ee/sparzo"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold px-5 py-3.5 text-white text-xl md:text-2xl lg:text-3xl border-2 border-cse-cyan hover:bg-cse-violet hover:shadow-glow transition-all hover:transition-all rounded-lg text-shadow shadow-glow-hover"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* College Name */}
      <section className="bg-[url('/ellipse.png')] bg-cse-main bg-cover bg-no-repeat bg-center">
        <div className="space-y-6 md:space-y-12 px-1 text-center py-16 md:py-20 lg:py-20">
          <div className="space-y-3 md:space-y-5">
            <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-stroke-1-cse-cyan tracking-wide">
              Department of
            </h3>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-stroke-1-cse-cyan tracking-wide">
              Computer Science & Engineering
            </h1>
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-stroke-1-cse-cyan tracking-wide">
              Government College of Engineering, Tiruneveli
            </h2>
          </div>

          <div className="space-y-3">
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-stroke-1-cse-cyan tracking-wide">
              Proudly Presents
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-8xl jersey-10-regular tracking-wider text-shadow-violet">
              SPARZO’24
            </h1>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="bg-cse-main py-5 md:pt-10 md:pb-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-RubikDoodle font-semibold text-white tracking-widest text-shadow-violet">
          HAPPENINGS
        </h1>

        <div className="mt-10 flex-col flex items-center justify-center space-y-8 md:space-y-9">
          <button className="text-white font-semibold text-xl md:text-2xl lg:text-3xl px-6 py-3.5 border border-cse-violet rounded-lg shadow-glow shadow-glow-hover transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:cursor-default hover:bg-cse-violet hover:border-cse-cyan text-shadow">
            Technical Events
          </button>
          <button className="text-white font-semibold text-xl md:text-2xl lg:text-3xl px-6 py-3.5 border border-cse-violet rounded-lg shadow-glow shadow-glow-hover transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:cursor-default hover:bg-cse-violet hover:border-cse-cyan text-shadow">
            Non-Technical Events
          </button>
          <button className="text-white font-semibold text-xl md:text-2xl lg:text-3xl px-6 py-3.5 border border-cse-violet rounded-lg shadow-glow shadow-glow-hover transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:cursor-default hover:bg-cse-violet hover:border-cse-cyan text-shadow">
            Online Events
          </button>
        </div>
      </section>

      {/* Event details */}
      <section className="bg-[url('events-bg.png')] bg-cover bg-no-repeat bg-center flex justify-center m-0 p-0 overflow-hidden min-h-screen">
        <div className="bg-cse-main bg-opacity-50 w-full py-10">
          <h1 className="text-white font-bold text-4xl md:text-5xl text-shadow text-center">
            EVENTS
          </h1>

          <div className="container px-10 md:px-24 lg:px-32 mt-10">
            <h1 className="text-white text-center font-semibold text-3xl lg:text-4xl text-shadow">
              TECHNICAL EVENTS
            </h1>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-y-8 md:gap-y-7 md:gap-x-7 lg:gap-x-10 lg:gap-y-10">
              <Events
                name={"Code Debugging"}
                img={"/technical-event.png"}
                details={"Code debugging "}
              />

              <Events
                name={"Code Debugging"}
                img={"/technical-event.png"}
                details={"Code debugging "}
              />
              <Events
                name={"Code Debugging"}
                img={"/technical-event.png"}
                details={"Code debugging "}
              />

              <Events
                name={"Code Debugging"}
                img={"/technical-event.png"}
                details={"Code debugging "}
              />
            </div>

            <button className="mt-10 flex mx-auto">
              <a
                href="https://forms.gle/2LhNuqZ98DwFEnDe7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold px-6 py-3.5 text-white text-xl md:text-2xl lg:text-3xl border-2 border-cse-cyan hover:bg-cse-violet  transition-all hover:transition-all rounded-lg text-shadow shadow-glow-hover"
              >
                Register Now
              </a>
            </button>
          </div>

          <div className="container px-10 md:px-24 lg:px-32 mt-14">
            <h1 className="text-white text-center font-semibold text-3xl lg:text-4xl text-shadow">
              NON-TECHNICAL EVENTS
            </h1>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-y-8 md:gap-y-7 lg:gap-y-0 md:gap-x-7 lg:gap-x-10">
              <Events
                name={"Code Debugging"}
                img={"/technical-event.png"}
                details={"Code debugging "}
              />

              <Events
                name={"Code Debugging"}
                img={"/technical-event.png"}
                details={"Code debugging "}
              />
            </div>

            <button className="mt-10 flex mx-auto">
              <a
                href="https://forms.gle/2LhNuqZ98DwFEnDe7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold px-6 py-3.5 text-white text-xl md:text-2xl lg:text-3xl border-2 border-cse-cyan hover:bg-cse-violet  transition-all hover:transition-all rounded-lg text-shadow shadow-glow-hover"
              >
                Register Now
              </a>
            </button>
          </div>

          <div className="container px-10 md:px-24 lg:px-32 mt-14">
            <h1 className="text-white text-center font-semibold text-3xl lg:text-4xl text-shadow">
              ONLINE EVENTS
            </h1>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-y-8 md:gap-y-7 lg:gap-y-0 md:gap-x-7 lg:gap-x-10">
              <Events
                name={"Code Debugging"}
                img={"/technical-event.png"}
                details={"Code debugging "}
              />

              <Events
                name={"Code Debugging"}
                img={"/technical-event.png"}
                details={"Code debugging "}
              />
            </div>

            <button className="mt-10 flex mx-auto">
              <a
                href="https://forms.gle/2LhNuqZ98DwFEnDe7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold px-6 py-3.5 text-white text-xl md:text-2xl lg:text-3xl border-2 border-cse-cyan hover:bg-cse-violet  transition-all hover:transition-all rounded-lg text-shadow shadow-glow-hover"
              >
                Register Now
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
