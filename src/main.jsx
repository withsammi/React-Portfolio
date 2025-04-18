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
import Cv from "./components/Pages/Cv"; 
import Bio from "./components/Bio/Bio";
import Qualification from "./components/Qualification/Qualification";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Links from "./components/Links/Links";
import Certificate from "./components/Certificate/Certificate";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Hero />} />
      <Route path="cv" element={<Cv />} />
      <Route path="Bio" element={<Bio />} />
      <Route path="qualification" element={<Qualification />} />
      <Route path="projects" element={<Projects />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Links" element={<Links />} />
      <Route path="Certificate" element={<Certificate />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
