import { useEffect } from "react";
import BackToHome from "../../components/BackToHome";
import RegisterBtn from "../../components/RegisterBtn";

const TuneTopia = () => {
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
             TuneTopia 🎭
          </h1>

          <div className="mb-4">
            <img
              src="/TuneTopia_beat.jpg"
              alt="TuneTopia"
              className="w-full md:h-[400px] lg:h-[500px] object-cover rounded-lg border border-fuchsia-600"
            />
          </div>

          <p className="text-shadow text-white md:text-lg lg:text-xl">
          Music is something that is embedded in people's hearts. It is a fun-filled event with tastes & cultural aspects in music. 
          Find the sound, feel unlimited.

          </p>
          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Rounds 1:
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              என்னைப் பாடச்சொல்லாதே, two person will be acting and one person will guess the song.
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
              sound track, find the bgm which will be played.
            </li>
          </ul>
          <h2 className="mt-4 text-white font-semibold text-xl lg:text-2xl text-shadow">
            Final Rounds :Third Round
          </h2>
          <ul className="text-shadow md:text-lg text-white list-none mt-2 ml-1 md:ml-2 lg:ml-4 space-y-1">
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              Guess the lyrics, find the missing lyrics which will be displayed. 
              " The team which has the maximum score will be selected for the next Round"
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
              1. 3 members can participate as a team.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              2. The event consists of 3 rounds.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              3. First Round: Two persons will act, and one person will guess the song (using a headset).
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              4. Second Round: Soundtrack – Find the film from which the sound is played.
            </li>
            <li className="relative pl-4">
              <span className="absolute left-0 top-0.5 list-disc list-inside">
                •
              </span>
              5. Third Round: Guess the Lyrics – Find the missing lyrics, which will be displayed.
              "The team that has the maximum score will be selected for the next round."
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

export default TuneTopia;
