import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css"
import HomePage from "./pages/HomePage"
import BlogListPage from "./pages/BlogListPage"
import BlogUnitPage from "./pages/BlogUnitPage"
import CreateBlogPage from "./pages/CreateBlogPage"
import ProjectListPage from "./pages/ProjectListPage"
import ProjectNasaApiPage from "./pages/ProjectNasaApiPage"
import ProjectQuoteGeneratorPage from "./pages/ProjectQuoteGeneratorPage"
import AdminAutorizationPage from "./pages/AdminAutorizationPage"
import NotFoundPage from "./pages/NotFoundPage"

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/blog_list" element={<BlogListPage />} />
    <Route path="/blog_list/:id" element={<BlogUnitPage />} />
    <Route path="/:id" element={<BlogUnitPage />} />
    <Route path="/create_blog" element={<CreateBlogPage />} />
    <Route path="/project_list" element={<ProjectListPage />} />
    <Route path="/project_nasa_api" element={<ProjectNasaApiPage />} />
    <Route path="/project_quote_generator" element={<ProjectQuoteGeneratorPage />} />
    <Route path="/admin" element={<AdminAutorizationPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </>
))

function App() {
  return (
    
    <RouterProvider router={router} />
    
  );
}

export default App;
