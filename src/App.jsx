import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddProject from "./Components/AddProject";
import CreateSpaceCard from "./Components/CreateSpaceCard";
import MainBody from "./Components/MainBody";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainBody />,
      children: [
        {
          path: "createSpace",
          element: <CreateSpaceCard />,
        },
        {
          path: "addProject",
          element: <AddProject />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
