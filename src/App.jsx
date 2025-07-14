import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddProject from "./Components/AddProject";
import CreateSpaceCard from "./Components/CreateSpaceCard";
import MainBody from "./Components/MainBody";
import Dashboard from "./Components/Dashboard";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainBody />,
      children: [
        {
          path:'dashboard',
          element: <Dashboard/>
        },
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
