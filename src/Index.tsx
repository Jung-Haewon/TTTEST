import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App.tsx";
import "@/index.css";

const container = document.getElementById("App") as HTMLElement;

if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  console.warn('문서에 "#App" 요소가 존재하지 않습니다.');
}
