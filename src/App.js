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
import ProjectListPage from "./pages/ProjectListPage"
import ProjectNasaApiPage from "./pages/ProjectNasaApiPage"
import ProjectQuoteGeneratorPage from "./pages/ProjectQuoteGeneratorPage"
import ProjectTestTaskReduxSagaPage from "./pages/ProjectTestTaskReduxSagaPage"
import AdminAutorizationPage from "./pages/AdminAutorizationPage"
import AdminAccountPage from "./pages/AdminAccountPage"
import GoldyStoreProjectPage from "./components/project/goldyStore/pages/GoldyStoreProjectPage";
import NotFoundPage from "./pages/NotFoundPage"
import ProjectMyBlogPage from "./pages/ProjectMyBlogPage";

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/blog_list" element={<BlogListPage />} />
    <Route path="/blog_list/:id" element={<BlogUnitPage />} />
    <Route exact path="/:id" element={<BlogUnitPage />} />
    <Route path="/project_list" element={<ProjectListPage />} />
    <Route path="/project_my_blog" element={<ProjectMyBlogPage />} />
    <Route path="/project_nasa_api" element={<ProjectNasaApiPage />} />
    <Route path="/project_quote_generator" element={<ProjectQuoteGeneratorPage />} />
    <Route path="/test_task_redux_saga" element={<ProjectTestTaskReduxSagaPage />} />
    <Route path="/goldy-store" element={<GoldyStoreProjectPage />} />
    <Route path="/admin" element={<AdminAutorizationPage />} />
    <Route path="/admin/account" element={<AdminAccountPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </>
))

function App() {
  return (
    
    <RouterProvider router={router} />
    
  );
}

export default App;
