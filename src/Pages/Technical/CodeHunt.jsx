import { useEffect } from "react";
import BackToHome from "../../components/BackToHome";

const CodeHunt = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="bg-[url('events-bg.png')] bg-cover bg-no-repeat bg-center flex justify-center min-h-screen">
      <div className="bg-cse-main bg-opacity-50 w-full px-3 py-10 pb-16 lg:py-16">
        <div
          className="container px-4 md:px-5 lg:px-8 py-6 rounded-lg border border-cse-cyan bg-cse-main
        shadow-[0px_0px_25px_rgba(255,46,255,0.9)] w-full md:w-3/4 lg:w-1/2"
        >
          <h1 className="text-shadow text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-5 text-center">
            Code Hunt 💻
          </h1>

          <div className="mb-4">
            <img
              src="/code-hunt.png"
              alt="code-hunt"
              className="w-full md:h-[400px] lg:h-[500px] object-cover rounded-lg border border-fuchsia-600"
            />
          </div>

          <p className="text-shadow text-white md:text-lg lg:text-xl">
            Code Hunt, an intense multi-round coding competition designed to
            test your programming, debugging, SQL, and typing skills! This event
            consists of four unique rounds where you'll tackle diverse coding
            challenges. All participants will compete in every round, with the
            final score based on cumulative performance—there are no
            eliminations.
          </p>

          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Rounds Overview :
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Speed Typing (10 mins) – Type a long paragraph accurately and
              quickly.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Computer Shortcut and Find the Output (20 mins) – Identify
              computer shortcuts and determine the output for provided code
              snippets.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Code Debugging (20 mins) – Debug 5 code snippets and fix issues.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Coding Challenge (20 mins) – Solve 2 programming tasks using any
              of the following programming languages: C, Java, or Python.
            </li>
          </ul>

          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Rules and Regulations :
          </h2>
          <h2 className="mt-2 text-white font-semibold text-lg lg:text-xl text-shadow">
            Duration :
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-1 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              90 minutes (split across rounds)..
            </li>
          </ul>

          <h2 className="mt-2 text-white font-semibold text-lg lg:text-xl text-shadow">
            Participation :
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-1 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Open to all students. Individual participation. Top performers
              receive certificates.
            </li>
          </ul>

          <h2 className="mt-2 text-white font-semibold text-lg lg:text-xl text-shadow">
            Submission Deadline :
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-1 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Complete all rounds within the event's timeframe.
            </li>
          </ul>

          <h2 className="mt-2 text-white font-semibold text-lg lg:text-xl text-shadow">
            Plagiarism :
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-1 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Any plagiarism or pre-written solutions will lead to
              disqualification.
            </li>
          </ul>

          <h2 className="mt-2 text-white font-semibold text-lg lg:text-xl text-shadow">
            Language :
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-1 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Use any of the following programming languages : C, Java, or
              Python.
            </li>
          </ul>

          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Judging Criteria :
          </h2>

          <h2 className="mt-2 text-white font-semibold text-lg lg:text-xl text-shadow">
            No eliminations :
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-1 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Every participant will take part in all four rounds.
            </li>
          </ul>

          <h2 className="mt-2 text-white font-semibold text-lg lg:text-xl text-shadow">
            Final score :
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-1 ml-1 md:ml-2 lg:ml-4 space-y-2">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              The overall score will be based on cumulative performance across
              all rounds. Each round is scored individually, and the
              participant's combined total score will determine the final
              ranking.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              The event will last 90 minutes, including switching time between
              rounds. Be prepared to showcase your coding skills across
              different challenges and platforms
            </li>
          </ul>
        </div>
        <BackToHome />
      </div>
    </div>
  );
};

export default CodeHunt;
