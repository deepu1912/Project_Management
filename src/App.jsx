// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainBody from './Components/MainBody';
import AddProject from './Components/AddProject';

function App() {
  const appRouter= createBrowserRouter([
    {
      path:'/',
      element:<MainBody/>,
      children:[
        {
          path:'addProject',
          element:<AddProject/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
