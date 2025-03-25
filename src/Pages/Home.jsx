import "../fonts/stylesheet.css";
import { useState, useEffect, useMemo } from "react";

import { Link as Scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Modal from "react-modal";

import EventsCard from "../components/EventsCard";
import ConfettiEl from "../util/Confetti";

Modal.setAppElement("#root");

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = useMemo(() => new Date("2025-03-14T09:00:00"), []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(
    () => {
      const hasSeenModal = localStorage.getItem("hasSeenModal");

      if (!hasSeenModal) {
        setIsModalOpen(true);
        setShowConfetti(true);

        localStorage.setItem("hasSeenModal", "true");
      }

      const interval = setInterval(() => {
        const now = new Date();
        const distance = targetDate - now;

        if (distance < 0) {
          clearInterval(interval);
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          alert(`🎉 Event Completed Successfully! 🎉

Thank you all for your incredible support and participation in Cognit'25! Your enthusiasm and energy made this event a grand success. We truly appreciate your contributions and look forward to seeing you again next time!

Stay inspired, stay curious! 🚀💡`);
        } else {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          setTimeLeft({ days, hours, minutes, seconds });
        }
      }, 1000);

      return () => clearInterval(interval);
    },
    [targetDate],
    []
  );

  // Clear the modal flag when the component unmounts or the window is closed
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("hasSeenModal");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const splitDigits = (num) => String(num).padStart(2, "0").split("");

  const dayDigits = splitDigits(timeLeft.days);
  const hourDigits = splitDigits(timeLeft.hours);
  const minuteDigits = splitDigits(timeLeft.minutes);
  const secondDigits = splitDigits(timeLeft.seconds);

  return (
    <div className="">
      {/* Banner */}
      {showConfetti && <ConfettiEl />}

      <section className="relative min-h-screen flex justify-center items-center text-center px-3 pb-5 md:pb-10 overflow-hidden">
        <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/home-bgm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10">
    <div className="flex items-center justify-center space-x-4">
      <img src="logo-cognit.png" alt="Cognit 25 Logo" className="w-16 md:w-24 lg:w-32" />
      <h1 className="text-6xl md:text-7xl lg:text-8xl jersey-10-regular tracking-wider text-shadow-violet">
        Cognit’25
      </h1>
    </div>

    <h2
      className="text-white text-xl md:text-3xl lg:text-4xl mb-7 md:mb-12"
      style={{
        fontFamily: "Porter Sans Block",
      }}
    >
      LET’S VIBE WITH US
    </h2>
    <h3 className="text-white text-xl md:text-4xl font-bold tracking-widest text-shadow ">
      THE GREAT EVENTS STARTS IN
    </h3>

          {/* TIME LEFT */}
          <div className="mt-5 md:mt-10 flex items-center justify-center space-x-4 md:space-x-10">
            <div className="text-center">
              <label
                htmlFor="days"
                className="text-white font-semibold text-lg md:text-3xl lg:text-3xl text-shadow"
              >
                DAYS
              </label>
              <div className="flex justify-center items-center space-x-1 md:space-x-3 mt-1.5 md:mt-3">
                {dayDigits.map((digit, index) => (
                  <input
                    key={`day-${index}`}
                    type="number"
                    disabled
                    className="outline-none w-8 h-12 md:w-14 md:h-20 lg:w-16 lg:h-24 bg-white shadow-lg shadow-cse-cyan rounded-lg text-center text-xl md:text-4xl lg:text-5xl"
                    value={digit}
                    style={{ MozAppearance: "textfield" }}
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <label
                htmlFor="hrs"
                className="text-white font-semibold text-lg md:text-3xl lg:text-3xl text-shadow "
              >
                HRS
              </label>
              <div className="flex justify-center items-center space-x-1 md:space-x-3 mt-1.5 md:mt-3">
                {hourDigits.map((digit, index) => (
                  <input
                    key={`hour-${index}`}
                    type="number"
                    disabled
                    className="outline-none w-8 h-12 md:w-14 md:h-20 lg:w-16 lg:h-24 bg-white shadow-lg shadow-cse-cyan rounded-lg text-center text-xl md:text-4xl lg:text-5xl"
                    value={digit}
                    style={{ MozAppearance: "textfield" }}
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <label
                htmlFor="mins"
                className="text-white font-semibold text-lg md:text-3xl lg:text-3xl text-shadow "
              >
                MINS
              </label>
              <div className="flex justify-center items-center space-x-1 md:space-x-3 mt-1.5 md:mt-3">
                {minuteDigits.map((digit, index) => (
                  <input
                    key={`minute-${index}`}
                    type="number"
                    disabled
                    className="outline-none w-8 h-12 md:w-14 md:h-20 lg:w-16 lg:h-24 bg-white shadow-lg shadow-cse-cyan rounded-lg text-center text-xl md:text-4xl lg:text-5xl"
                    value={digit}
                    style={{ MozAppearance: "textfield" }}
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <label
                htmlFor="secs"
                className="text-white font-semibold text-lg md:text-3xl lg:text-3xl text-shadow "
              >
                SECS
              </label>
              <div className="flex justify-center items-center space-x-1 md:space-x-3 mt-1.5 md:mt-3">
                {secondDigits.map((digit, index) => (
                  <input
                    key={`second-${index}`}
                    type="number"
                    disabled
                    className="outline-none w-8 h-12 md:w-14 md:h-20 lg:w-16 lg:h-24 bg-white shadow-lg shadow-cse-cyan rounded-lg text-center text-xl md:text-4xl lg:text-5xl"
                    value={digit}
                    style={{ MozAppearance: "textfield" }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-20 flex items-center justify-center space-x-4 md:space-x-10">
            <div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScgulYk7h3hglD8-vO8EpvtcKXMeSVwvIvvpNHNZGRLksDFuA/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="font-bold px-5 py-2.5 md:px-6 md:py-3.5 text-white md:text-2xl lg:text-2xl border-2 border-cse-cyan hover:bg-cse-violet transition-all hover:transition-all rounded-lg text-shadow shadow-glow-hover">
                  Register Now
                </button>
              </a>
            </div>
            <Scroll 
            to="footer" 
            spy={true}
            smooth={true}
            duration={500}
            >
              <button className="font-bold px-5 py-2.5 md:px-6 md:py-3.5 text-white md:text-2xl lg:text-2xl border-2 border-cse-cyan hover:bg-cse-violet over:shadow-glow transition-all hover:transition-all rounded-lg text-shadow shadow-glow-hover">
                Contact Us
                </button>
            </Scroll>
          </div>

          <div className="mt-20">
            <h1 className="text-white text-shadow-dark-cyan text-stroke-1-cse-dark-cyan text-lg md:text-3xl font-semibold mb-2">
              Win Exciting Cash Prices
            </h1>
            <h2 className="text-white text-shadow-dark-cyan text-stroke-1-cse-dark-cyan text-lg md:text-3xl font-semibold mb-4">
              Food & Accommodation Available
            </h2>
            <h3 className="text-white text-shadow-dark-violet text-stroke-0-cse-violet font-semibold md:text-xl">
              Guaranteed Participant Certificate
            </h3>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        className="relative w-11/12 md:w-2/3 lg:w-2/5 mx-auto my-10 bg-[url('/sympo_img3.jpg')] bg-cover bg-no-repeat bg-center bg-white px-5 py-6 md:py-8 lg:py-10 rounded-lg shadow-lg border border-cse-cyan outline-none text-center z-50"
      >
        <span
          className="absolute -right-3 -top-3.5 bg-cse-violet rounded-full p-0.5 hover:cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
            className="fill-current text-white"
          >
            <path d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"></path>
          </svg>
        </span>

        <h1 className="text-white text-shadow-dark-cyan text-stroke-1-cse-dark-cyan text-xl md:text-3xl font-semibold mb-2">
          💸 Win Exciting Cash Prices 💸
        </h1>
        <h2 className="text-white text-shadow-dark-cyan text-stroke-1-cse-dark-cyan text-lg md:text-2xl font-semibold mb-4">
          Food & Accommodation Available
        </h2>
        <h3 className="text-white text-shadow-dark-violet text-stroke-0-cse-violet font-semibold md:text-xl">
          Guaranteed Participant Certificate
        </h3>
        <h3 className="text-white text-shadow-dark-violet text-stroke-0-cse-violet font-semibold md:text-xl">
          Transportation Facilities Provided 
        </h3>
        <button
          onClick={() => setIsModalOpen(false)}
          className="mt-5 text-white text-shadow px-5 py-1.5 rounded border border-cse-cyan font-semibold hover:bg-cse-violet transition-all hover:transition-all"
        >
          Close
        </button>
      </Modal>

      {/* College Name */}
      <section className="bg-[url('/sympo_img7.avif')] bg-cse-main bg-cover bg-no-repeat bg-center">
        <div className="space-y-6 md:space-y-12 px-1 text-center py-16 md:py-20 lg:py-20">
          <div className="space-y-3 md:space-y-5">
            <h3 className="text-white text-lg md:text-3xl lg:text-4xl font-bold text-stroke-1-cse-cyan tracking-wide">
              Department of
            </h3>
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-stroke-1-cse-cyan tracking-wide">
              Computer Science & Engineering
            </h1>
            <h2 className="text-white text-lg md:text-3xl lg:text-4xl font-bold text-stroke-1-cse-cyan tracking-wide">
              Misrimal Navajee Munoth Jain Engineering College ,Thoraipakkam
            </h2>
          </div>

          <div className="space-y-3">
            <h1 className="text-white text-3xl md:text-3xl lg:text-4xl font-bold text-stroke-1-cse-cyan tracking-wide">
              Proudly Presents
            </h1>
            <div className="flex items-center justify-center space-x-4">
              <img src="/logo-cognit.png" alt="Cognit 25 Logo" className="w-16 md:w-24 lg:w-32" />
              <h1 className="text-6xl md:text-7xl lg:text-8xl jersey-10-regular tracking-wider text-shadow-red">
                Cognit’25
                </h1>
            </div>

          </div>
        </div>
      </section>

      {/* Events */}
      <section className="bg-[url('/23964.jpg')] bg-cover bg-no-repeat bg-center bg-cse-main py-10 md:pt-10 md:pb-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-RubikDoodle text-white tracking-widest text-shadow-red">
          HAPPENINGS
        </h1>

        <div className="mt-10 flex-col flex items-center justify-center space-y-8 md:space-y-9">
          <Scroll to="technical-events" spy={true} smooth={true} duration={500}>
            <button className="happenings-btns">Technical Events</button>
          </Scroll>
          <Scroll
            to="non-technical-events"
            spy={true}
            smooth={true}
            duration={500}
          >
            <button className="happenings-btns">Non-Technical Events</button>
          </Scroll>
        </div>
      </section>

      {/* Event details */}
      <section className="bg-[url('/sympo_img7.avif')] bg-cover bg-no-repeat bg-center flex justify-center min-h-screen">
        <div className="bg-cse-main bg-opacity-50 w-full py-16">
          <h1 className="text-white font-bold text-4xl md:text-5xl text-shadow text-center text-shadow-red tracking-wider">
            EVENTS
          </h1>

          <div
            id="technical-events"
            className="container px-7 md:px-12 lg:px-32 mt-10"
          >
            <h1 className="text-white text-center font-semibold text-3xl lg:text-4xl text-shadow">
              TECHNICAL EVENTS
            </h1>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-y-12 md:gap-y-7 md:gap-x-7 lg:gap-x-10 lg:gap-y-10">


              <RouterLink to="/Hackescape">
                <EventsCard
                  name={"HackEscape🧙🏻‍♀️"}
                  img={"/hackspace.jpg"}
                  details={
                    "Hackscape is a cybersecurity race challenging participants to conquer five levels and reach the Grand Master Level."
                  }
                />
              </RouterLink>

              <RouterLink to="/Glitch-Hunt">
                <EventsCard
                  name={"GLITCH-HUNT 🐞"}
                  img={"/Glitch-hunt.jpg"}
                  details={
                    " Glitch-Hunt,an intense multi-round coding competition designed to test your programming"
                  }
                />
              </RouterLink>

              <RouterLink to="/Techtonic-Trivia">
                <EventsCard
                  name={"TechtonicTrivia💻"}
                  img={"/Techtonic Trivia-TECH Quiz.jpg"}
                  details={
                    "A Tech Quiz is a competitive event that tests participants' knowledge across various technology domains"
                  }
                />
              </RouterLink>

              <RouterLink to={"/Paper-Presentation"}>
                <EventsCard
                  name={"PAPER PRESENTATION 📝"}
                  img={"paper-presentation.jpeg"}
                  details={
                    "NexGen Research Meet: Showcase innovations, share ideas, and explore future technologies with experts."
                  }
                />
              </RouterLink>

              <RouterLink to={"/CodeCanvas"}>
                <EventsCard
                  name={"Code-Canvas 👨‍💻"}
                  img={"/FronEnd.jpeg"}
                  details={
                    "Frontend challenges participants to build responsive, interactive UIs using modern web technologies."
                  }
                />
              </RouterLink>

              <RouterLink to={"/Connectrix"}>
                <EventsCard
                  name={" CONNECTRIX 🌐"}
                  img={"/Connectrix.jpeg"}
                  details={
                    "Participants analyze images from PowerPoint slides, discuss with their team, and determine the correct technical term."
                  }
                />
              </RouterLink>

              <RouterLink to={"/Debate-Floor"}>
                <EventsCard
                  name={" Debate Floor 🗣📢👥"}
                  img={"/debateroom.jpg"}
                  details={
                    "SDebate Floor is a dynamic STEM debate event where students showcase communication, critical thinking, and persuasive skills."
                  }
                />
              </RouterLink>

            </div>
          </div>

          <div
            id="non-technical-events"
            className="container px-7 md:px-12 lg:px-32 mt-14"
          >
            <h1 className="text-white text-center font-semibold text-3xl lg:text-4xl text-shadow">
              NON-TECHNICAL EVENTS
            </h1>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-y-12 md:gap-y-7 md:gap-x-7 lg:gap-x-10 lg:gap-y-10">
              <RouterLink to={"/TuneTopia"}>
                <EventsCard
                  name={"TuneTopia 🎭"}
                  img={"/Tunetopia.jpg"}
                  details={
                    "A vibrant event celebrating music’s cultural essence—find the sound, feel unlimited!"
                  }
                />
              </RouterLink>

              <RouterLink to={"/FreeFire"}>
                <EventsCard
                  name={"FREE-FIRE🔫"}
                  img={"/freefire.jpg"}
                  details={
                    "Garena Free Fire is a fast-paced battle royale where players fight, scavenge, and survive—last one standing wins!"
                  }
                />
              </RouterLink>

              <RouterLink to={"/BrainTeaser"}>
                <EventsCard
                  name={"BRAIN TEASER 🧩"}
                  img={"/brain.jpg"}
                  details={
                    "Brain Teaser is a fun puzzle game that tests logic, creativity, and problem-solving with tricky scenarios and riddles."
                  }
                />
              </RouterLink>

              <RouterLink to={"/Box-Cricket"}>
                <EventsCard
                  name={"Box Cricket 🏏 "}
                  img={"/boxcricket.jpg"}
                  details={
                    "Box Cricket is a fast-paced, enclosed-space version of cricket, offering a fun and accessible play experience."
                  }
                />
              </RouterLink>

              <RouterLink to={"/BattleRoyaleShowdown"}>
                <EventsCard
                  name={"BGMI GAME🎮🔫"}
                  img={"/bgmi.jpg"}
                  details={
                    "Battle Royale Showdown – A high-stakes BGMI tournament testing skill, strategy, and teamwork!"
                  }
                />
              </RouterLink>
              <RouterLink to={"/Treasure-Hunt"}>
                <EventsCard
                  name={"TREASURE-HUNT📜💰"}
                  img={"/Treasure.jpg"}
                  details={
                    "TREASURE HUNT – Let the Adventure Begin!Solve clues, race teams, and uncover the ultimate prize!"
                  }
                />
              </RouterLink>
              <RouterLink to={"/ConneXplosion"}>
                <EventsCard
                  name={"ConneXplosion 🔌"}
                  img={"/connection.png"}
                  details={
                    "Guess the Word – Decode pictures to find the word or sentence! Team up (max 2) for this engaging symposium challenge."
                  }
                />
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
