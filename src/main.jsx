import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import QuestPage from "./pages/QuestPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainLayout>
      <QuestPage />
    </MainLayout>
  </StrictMode>
);
