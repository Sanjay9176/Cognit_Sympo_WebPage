import { useEffect } from "react";
import BackToHome from "../../components/BackToHome";
import RegisterBtn from "../../components/RegisterBtn";

const Adzap = () => {
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
            Adzap 🎭
          </h1>

          <div className="mb-4">
            <img
              src="/adzap.png"
              alt="Adzap"
              className="w-full md:h-[400px] lg:h-[500px] object-cover rounded-lg border border-fuchsia-600"
            />
          </div>

          <p className="text-shadow text-white md:text-lg lg:text-xl">
            A fun and creative team-based event where participants create
            humorous advertisements for fictional products. Teams will showcase
            their spontaneity, creativity, and humour to impress the judges.
          </p>

          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Rounds :
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Teams will create an advertisement for a product of their choice,
              with complete freedom to choose the theme.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Teams are allowed to bring props relevant to their product and
              theme.
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
              Each team must have a minimum of 3 members. There is no specified
              maximum team size, but teams should ensure all members contribute
              effectively to the performance.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Maximum time limit: 5 minutes.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Vulgar or inappropriate content is strictly prohibited and may
              result in disqualification.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Performances should focus on being spontaneous, humorous, and
              creative.
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
              Originality : Uniqueness of the advertisement concept.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Relevance : How well the ad aligns with the product.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Use of Props : Effective and creative use of props.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Creativity & Humor : Engaging the audience with innovative and
              entertaining ideas.
            </li>
          </ul>

          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow mb-2">
            Special Prize :
          </h2>
          <p className="text-shadow text-white text-lg">
            A lucky draw prize will be awarded to one team at the end of the
            event.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center space-x-5">
          <BackToHome />
          <RegisterBtn />
        </div>
      </div>
    </div>
  );
};

export default Adzap;
