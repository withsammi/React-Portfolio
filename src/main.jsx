import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Hero from "./components/Hero/Hero";
import Cv from "./components/Pages/Cv"; // Corrected the import path
import Bio from "./components/Bio/Bio";
import Qualification from "./components/Qualification/Qualification";
import Portfolio from "./components/Portfolio/Portfolio";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Hero />} />
      <Route path="cv" element={<Cv />} />
      <Route path="Bio" element={<Bio />} />
      <Route path="qualification" element={<Qualification />} />
      <Route path="Portfolio" element={<Portfolio />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
