import { useEffect } from "react";
import BackToHome from "../../components/BackToHome";
import RegisterBtn from "../../components/RegisterBtn";

const ShutterStories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="bg-[url('/events-bg.png')] bg-cover bg-no-repeat bg-center flex justify-center min-h-screen">
      <div className="bg-cse-main bg-opacity-50 w-full px-3 py-10 pb-16 lg:py-16">
        <div
          className="container px-4 md:px-5 lg:px-8 py-6 rounded-lg border border-cse-cyan bg-cse-main
shadow-[0px_0px_25px_rgba(255,46,255,0.9)] w-full md:w-3/4 lg:w-1/2"
        >
          <h1 className="text-shadow text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-5 text-center">
            Shutter Stories 📸
          </h1>

          <div className="mb-4">
            <img
              src="/shutter-stories.png"
              alt="Shutter Stories"
              className="w-full md:h-[400px] lg:h-[500px] object-cover rounded-lg border border-fuchsia-600"
            />
          </div>

          <p className="text-shadow text-white md:text-lg lg:text-xl">
            An individual photography competition where participants capture
            images based on a given theme. The event is divided into two rounds:
            online submission and an on-campus shoot for selected participants.
          </p>

          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Round 1 : Online Submission
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Topic : "Portrait of Passion"
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Objective : Submit original photographs with no editing or
              alterations allowed.
            </li>
          </ul>

          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Submission Details :
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Submit via email to{" "}
              <a
                href="mailto:shutterstories2024@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
                className="font-bold"
              >
                shutterstories2024@gmail.com
              </a>{" "}
              by October 14.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Include a brief description explaining the story or inspiration
              behind the photograph.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Provide the following details in the email :
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              <span className="font-bold">
                {" "}
                Name, College Name, Phone Number, Email ID
              </span>
            </li>
          </ul>

          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Round 2 : On-Campus
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Topic : Provided on-site during the event.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Objective : Only those selected from Round 1 will participate in
              this round, where they will be given a new topic and shoot on
              campus.
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
              Photographs can be taken using a phone camera. No professional
              cameras are required.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Ensure the photograph is free from any digital enhancements or
              modifications.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Late submissions or failure to comply with the rules will result
              in disqualification.
            </li>
          </ul>

          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow mb-2">
            Judging Criteria :
          </h2>
          <p className="text-shadow text-white text-lg">
            Submissions will be evaluated based on the following :
          </p>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Creativity and originality.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Alignment with the given theme.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Composition and visual appeal.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Impact and story conveyed through the photograph and description.
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

export default ShutterStories;
