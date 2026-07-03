import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import Homepage from "./pages/homepage/Homepage";
import Workpage from "./pages/workpage/Workpage";
import Mainlayout from "./layout/Mainlayout";
import Timeline from "./pages/timeline/Timeline";
import Stats from "./pages/stats/Stats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/workpage",
        element: <Workpage />,
      },

      {
        path: "/timeline",
        element: <Timeline />,
      },

           {
  path: "/stats",
  element: <Stats />,
}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
