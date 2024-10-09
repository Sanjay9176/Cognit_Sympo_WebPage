import { useEffect } from "react";
import BackToHome from "../../components/BackToHome";

const SympAi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="bg-[url('events-bg.png')] bg-cover bg-no-repeat bg-center flex justify-center min-h-screen px-3">
      <div className="bg-cse-main bg-opacity-50 w-full py-10 pb-16 lg:py-16">
        <div
          className="container px-4 md:px-5 lg:px-8 py-6 rounded-lg border border-cse-cyan bg-cse-main
shadow-[0px_0px_25px_rgba(255,46,255,0.9)] w-full md:w-3/4 lg:w-1/2"
        >
          <h1 className="text-shadow text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-5 text-center">
            SympAI 🤖
          </h1>

          <div className="mb-4">
            <img
              src="/sympai.png"
              alt="SympAI"
              className="w-full md:h-[400px] lg:h-[500px] object-cover rounded-lg border border-fuchsia-600"
            />
          </div>

          <p className="text-shadow text-white md:text-lg lg:text-xl">
            Symp AI, a cutting-edge technical challenge crafted for AI pioneers!
            Whether you're a tech virtuoso or a prompt engineering maestro, this
            is your moment to shine. Showcase your expertise in AI tools, from
            web generation to on-the-fly prompt creation, as you navigate
            dynamic, real-world tasks with bold creativity and precision.
          </p>

          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Round 1 : AI Image Generation
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Objective : Create an image based on a given topic using AI tools.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Prompt Limit : Participants are restricted to a specific number of
              prompts. Exceeding this limit results in disqualification.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Elimination : Off-topic or irrelevant outputs will lead to
              elimination.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Scoring : Creativity, relevance to the topic, and overall image
              quality.
            </li>
          </ul>

          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Round 2 : Web Page Design using AI
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Objective : Design a visually appealing web page with enhanced
              front-end functionality using specified AI tools.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Task Provided On the Spot : The design task will be revealed at
              the start of the round.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Scoring : Based on creativity, functionality, and design
              aesthetics.
            </li>
          </ul>

          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Round 3 : AI Challenge
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Objective : Solve an AI-based task based on a topic revealed
              during the event.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              On-the-Spot Task : Specific challenges will be presented, and
              participants must use AI tools to complete them.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Scoring : Efficiency and accuracy in solving the tasks.
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
              Participation : This is an individual event.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Submission : Only on-site, within-time work is accepted.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              AI Tools : Only specified tools can be used, revealed at the
              event.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Disqualification : Late submissions or rule violations result in
              disqualification.
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
              Creativity & Originality : How innovatively participants use AI
              tools.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Effectiveness : Efficient and proper use of AI tools.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Quality & Presentation : The overall quality, functionality, and
              presentation of the output.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Timeliness : Completing and submitting tasks within the given
              time.
            </li>
          </ul>
        </div>
        <BackToHome />
      </div>
    </div>
  );
};

export default SympAi;
