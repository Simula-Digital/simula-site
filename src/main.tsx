import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.min.css";

import i18n from "./translation";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { Styles } from "./styles/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <Styles />
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </I18nextProvider>
  </StrictMode>
);
