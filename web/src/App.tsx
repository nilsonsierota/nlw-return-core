import React from "react";
import { Auth } from "./components/Auth";
import Widget from "./components/Widget";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/widget" element={<Widget />} />
      </Routes>
    </Router>
  );
}
