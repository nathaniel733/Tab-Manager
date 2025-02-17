import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Initialize the popup when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error("Root container not found");
  }
});

// Event listeners for button actions
document.getElementById("closeAll")?.addEventListener("click", () => {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      if (tab.id) chrome.tabs.remove(tab.id);
    });
  });
});

document.getElementById("listTabs")?.addEventListener("click", () => {
  chrome.tabs.query({}, (tabs) => {
    console.log("Open Tabs:", tabs);
    alert(`Open Tabs: ${tabs.map(tab => tab.title).join(", ")}`);
  });
});
