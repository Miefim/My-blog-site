import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css"
import HomePage from "./pages/HomePage"
import ProjectListPage from "./pages/ProjectListPage"
import NotFoundPage from "./pages/NotFoundPage"

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/project-list" element={<ProjectListPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </>
))

function App() {
  return (

    <RouterProvider router={router} />

  );
}

export default App;
