import React from "react";
import { useHistory } from "react-router-dom";
import "./App.css";

const ThankU = () => {
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <div className="Thanku">
      Thank You!!
      <div className="logout_btn">
        <button onClick={logout}>Sign Out</button>
      </div>
    </div>
  );
};

export default ThankU;
