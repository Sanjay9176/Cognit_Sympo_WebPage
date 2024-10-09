import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackToHome from "../../components/BackToHome";

const PaperPresentation = () => {
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
            Paper Presentation 📃
          </h1>

          <div className="mb-4">
            <img
              src="/paperpresentation.png"
              alt="Paper Presentation"
              className="w-full md:h-[400px] lg:h-[500px] object-cover rounded-lg border border-fuchsia-600"
            />
          </div>

          <p className="text-shadow text-white md:text-lg lg:text-xl">
            An individual or team-based event where participants present their
            research or topics related to Computer Science in a PowerPoint
            format.
          </p>
          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Rounds :
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Objective : Present a paper on a Computer Science topic using
              PowerPoint.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Time Limit : Each team has 10 minutes to present their paper.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Format : The presentation must not exceed 15 slides.
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
              7 minutes for presentation + 3 minutes for Q&A.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Submit a paper (IEEE format) and a PPT about the paper.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              📝 No page limit for the IEEE paper, but PPT max 15 slides.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              <a
                href="mailto:tamilarasan_s.cse.44@gcetly.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="break-words"
              >
                Email submissions by Oct 15 to :
                tamilarasan_s.cse.44@gcetly.ac.in
              </a>
            </li>
            <h3 className="text-shadow">Email must include : </h3>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Subject : Your full name + college name
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Content : Name, mobile number, domain, paper title, Team name ,
              Team member details.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Attachments : IEEE paper as PDF and presentation as PPTX
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Those who register offline should bring the PPT and IEEE soft copy
              with them .
            </li>
          </ul>
          <h2 className="mt-2 text-white font-semibold text-lg text-shadow">
            Carry a soft copy on a pen drive or other storage device.
          </h2>

          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Judging & Evaluation :
          </h2>

          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              A panel of judges will evaluate the papers.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Evaluation criteria will be partly announced before the event.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Judge’s decision is final.
            </li>
          </ul>
        </div>
        <BackToHome />
      </div>
    </div>
  );
};

export default PaperPresentation;
