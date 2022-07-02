import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import InitialPage from "../components/initial-page/InitialPage";
import Question from "../components/question/Question";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="quiz" element={<Question />} />        
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
