import { useEffect } from "react";
import BackToHome from "../../components/BackToHome";
import RegisterBtn from "../../components/RegisterBtn";

const BrainTeaser = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="bg-[url('/sympo_img3.jpg')] bg-cover bg-no-repeat bg-center flex justify-center min-h-screen">
      <div className="bg-cse-main bg-opacity-50 w-full px-3 py-10 pb-16 lg:py-16">
        <div
          className="container px-4 md:px-5 lg:px-8 py-6 rounded-lg border border-cse-cyan bg-cse-main
        shadow-[0px_0px_25px_rgba(255,46,255,0.9)] w-full md:w-3/4 lg:w-1/2"
        >
          <h1 className="text-shadow text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-5 text-center">
             BRAIN TEASER 🧩
          </h1>

          <div className="mb-4">
            <img
              src="/brainteaser.png"
              alt="BrainTeaser "
              className="w-full md:h-[400px] lg:h-[500px] object-cover rounded-lg border border-fuchsia-600"
            />
          </div>

          <p className="text-shadow text-white md:text-lg lg:text-xl">
          A Brain Teaser game is a fun and challenging puzzle that tests your problem-solving skills, logic, and creativity. 
          It encourages critical thinking and sharpens your mind through tricky scenarios and riddles. 
          The images are provided in the PowerPoint slides and display.

          </p>
          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Rounds 1:
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              From each team, one player should participate and write the given words in the correct order.
            </li>
          </ul>
          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Rounds 2:
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              A different player (not the one from Round 1) should participate and name the objects shown in the pictures.
            </li>
          </ul>
          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Rounds 3: Final Round
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Both players should participate, memorize the items from a slide, and recall them one by one.
            </li>
          </ul>

          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Rules and Guidelines :
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              1. It is a team game, and each team must have two members.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              2. The game consists of three rounds.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              3. In the first round, one member from each team must participate.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              4. In the second round, the team member who did not participate in the first round must play.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              5. For the first two rounds, only one player from each team can participate at a time.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              6. The final round will be played by both team members together.
            </li>
          </ul>
        </div>
        <div className="mt-10 flex-col-reverse gap-y-5 md:flex-row flex items-center justify-center md:gap-y-0 md:space-x-5">
          <BackToHome />
          <RegisterBtn />
        </div>
      </div>
    </div>
  );
};

export default BrainTeaser;
