import { useEffect } from "react";
import BackToHome from "../../components/BackToHome";
import RegisterBtn from "../../components/RegisterBtn";

const Connectrix = () => {
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
             CONNECTRIX 🌐
          </h1>

          <div className="mb-4">
            <img
              src="/connectrixevent.jpg"
              alt=" CONNECTRIX 🌐"
              className="w-full md:h-[400px] lg:h-[500px] object-cover rounded-lg border border-fuchsia-600"
            />
          </div>

          <p className="text-shadow text-white md:text-lg lg:text-xl">
          The images are provided in the PowerPoint slides and display. 
          The participants can discuss with their team and come out with the actual technical term (answer).

          </p>
          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Rounds 1:
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              1.	TOTAL NO OF QUESTIONS = 15.
            </li>
            <li className="relative pl-4">
              2.	HALF OF THE TEAMS WILL BE SELECTED BASED ON HIGHEST POINTS.
            </li>
          </ul>
          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Rounds 2:
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              1.	TOTAL NO OF QUESTIONS =10.
            </li>
            <li className="relative pl-4">
              2.	TOP 2 TEAMS WILL BE SELECTED.
            </li>
          </ul>
          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Rounds 3:
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              1.	TOTAL NO OF QUESTIONS=10.
            </li>
            <li className="relative pl-4">
              2.	THE WINNER AND THE RUNNER IS DECLARED IN THIS ROUND.
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
              1.	The team should contain only two participants.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              2.	Only one participant from each team should raise their hand.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              3.	The first team to raise their hand will be given a chance to answer.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              4.	If the answer is correct, they will be awarded +1 point.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              5.	Answering without raising a hand will result in a warning. If repeated, the team will be disqualified.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              6.	No vulgarity is allowed.
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

export default Connectrix;
