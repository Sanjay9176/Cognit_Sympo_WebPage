import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PaperPresentation from "./Pages/Technical/PaperPresentation.jsx";
import Home from "./Pages/Home.jsx";
import CodeHunt from "./Pages/Technical/CodeHunt.jsx";
import Webcraft from "./Pages/Technical/Webcraft.jsx";
import SympAi from "./Pages/Technical/SympAi.jsx";

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
        path: "/paper-presentation",
        element: <PaperPresentation />,
      },

      {
        path: "/code-hunt",
        element: <CodeHunt />,
      },
      {
        path: "/webcraft",
        element: <Webcraft />,
      },
      {
        path: "/sympai",
        element: <SympAi />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />
);
