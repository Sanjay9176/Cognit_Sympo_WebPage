import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import GlitchHunt from "./Pages/Technical/GlitchHunt.jsx";
import Home from "./Pages/Home.jsx";
import Hackescape from "./Pages/Technical/Hackescape.jsx";
import TechtonicTrivia from "./Pages/Technical/TechtonicTrivia.jsx";
import PaperPresentation from "./Pages/Technical/Paper-Presentation.jsx";
import Connectrix from "./Pages/Technical/Connectrix.jsx";
import CodeCanvas from "./Pages/Technical/CodeCanvas.jsx";
import DebateFloor from "./Pages/Technical/DebateFloor.jsx";
import TuneTopia from "./Pages/Non-Technical/TuneTopia.jsx";
import Freefire from "./Pages/Non-Technical/Freefire.jsx";
import BrainTeaser from "./Pages/Non-Technical/BrainTeaser.jsx";
import BoxCricket from "./Pages/Non-Technical/BoxCricket.jsx";
import Bgmi from "./Pages/Non-Technical/Bgmi.jsx";
import TreasureHunt from "./Pages/Non-Technical/TreasureHunt.jsx";
import ConneXplosion from "./Pages/Non-Technical/ConneXplosion.jsx";

const route = createBrowserRouter([
  {
    paths: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/Glitch-Hunt",
        element: <GlitchHunt />,
      },

      {
        path: "/Hackescape",
        element: <Hackescape />,
      },
      {
        path: "/Techtonic-Trivia",
        element: <TechtonicTrivia />,
      },
      {
        path: "/Paper-Presentation",
        element: <PaperPresentation />,
      },
      {
        path: "/Connectrix",
        element: <Connectrix />,
      },
      {
        path: "/CodeCanvas",
        element: <CodeCanvas />,
      },
      {
        path: "/Debate-Floor",
        element: <DebateFloor />,
      },
      {
        path: "/TuneTopia",
        element: <TuneTopia />,
      },
      {
        path: "/FreeFire",
        element: <Freefire />,
      },
      {
        path: "/BrainTeaser",
        element: <BrainTeaser />,
      },
      {
        path: "/Box-Cricket",
        element: <BoxCricket />,
      },
      {
        path: "/BattleRoyaleShowdown",
        element: <Bgmi />,
      },
      {
        path: "/Treasure-Hunt",
        element: <TreasureHunt />,
      },
      {
        path: "/ConneXplosion",
        element: <ConneXplosion />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />
);
