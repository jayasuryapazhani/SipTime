import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SiteApp from "./siteApp";
import "./site.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("SipTime website root element was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <SiteApp />
  </StrictMode>
);