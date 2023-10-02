import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/layout";
import HomePage from "./pages/question";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/pages/question.js" element={<HomePage/>} />
      </Routes>
    </Router>
  );
};
export default App;
