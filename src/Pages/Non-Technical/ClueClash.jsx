import { useEffect } from "react";
import BackToHome from "../../components/BackToHome";
import RegisterBtn from "../../components/RegisterBtn";

const ClueClash = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="bg-[url('/events-bg.png')] bg-cover bg-no-repeat bg-center flex justify-center min-h-screen">
      <div className="bg-cse-main bg-opacity-50 w-full py-10 pb-16 px-3 lg:py-16">
        <div
          className="container px-4 md:px-5 lg:px-8 py-6 rounded-lg border border-cse-cyan bg-cse-main
shadow-[0px_0px_25px_rgba(255,46,255,0.9)] w-full md:w-3/4 lg:w-1/2"
        >
          <h1 className="text-shadow text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-5 text-center">
            Clue Clash 🧩
          </h1>

          <div className="mb-4">
            <img
              src="/clue-clash.png"
              alt="Clue Clash"
              className="w-full md:h-[400px] lg:h-[500px] object-cover rounded-lg border border-fuchsia-600"
            />
          </div>

          <p className="text-shadow text-white md:text-lg lg:text-xl">
            Clue Clash is an exciting two-round competition designed to test
            participants' problem-solving, decoding, and quick-thinking skills.
            It is a team-based event where only two participants per team are
            allowed, and the event will challenge participants through word
            games and a thrilling treasure hunt.
          </p>

          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Round 1 : Guess the Word
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Objective : Teams receive clues and must guess the correct word.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Clues can be descriptions, synonyms, antonyms, or hidden meanings.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Teams collaborate to brainstorm answers.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Elimination : The lowest-scoring teams in this round will be
              eliminated.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Scoring : Points awarded for correct guesses; bonus for speed.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Time Limit : 30 minutes to solve as many clues as possible.
            </li>
          </ul>

          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Round 2 : Treasure Hunt
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Objective : Teams solve a series of clues leading to hidden
              locations or objects, then decode a final answer.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Teams follow clues in a designated area to find words or objects.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Clues unlock stages, leading to a final output that needs
              decoding.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Scoring: Points based on how quickly and accurately teams complete
              the hunt.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Scoring : Points awarded for correct guesses; bonus for speed.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Time Limit : 30 minutes to solve as many clues as possible.
            </li>
          </ul>

          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Rules and Regulations :
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Team Composition : 2 participants per team.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              No External Help : Teams cannot use external resources or devices
              (unless allowed).
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Timing : Answers must be submitted within the time limit.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Fair Play : Cheating leads to disqualification.
            </li>
          </ul>

          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Judging Criteria :
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Scoring : Cumulative points from both rounds.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Bonus Points : Awarded for faster responses and accurate decoding.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Final Ranking : Based on total points across both rounds.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Elimination : Teams eliminated in Round 1 will not
              advance to Round 2.
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

export default ClueClash;
