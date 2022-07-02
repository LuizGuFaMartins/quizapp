import React from "react";
import "./initialPage.css";

import { Link } from "react-router-dom";

const InitialPage = () => {
  return (
    <div className="container_initial_page">
      <h1>QUIZ ACADÊMICO</h1>
      <Link to="/quiz">
        <button className="button">Jogar</button>
      </Link>
    </div>
  );
};

export default InitialPage;
