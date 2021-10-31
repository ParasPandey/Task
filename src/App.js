import React, { useRef } from "react";
import "./App.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

const App = () => {
  const userName = useRef(null);
  const password = useRef(null);
  const history = useHistory();
  const logIn = async (e) => {
    e.preventDefault();
    console.log(userName.current.value);
    console.log(password.current.value);
    const res = await axios.post(
      "https://myphysio.digitaldarwin.in/api/login/",
      {
        uid: userName.current.value,
        password: password.current.value,
        // blocked: 0,
      }
    );
    if (res.status === 200) {
      history.push("/thankyou");
      console.log(res.data);
      const decode_token = jwt_decode(res.data.jwt);
      console.log(decode_token);
      localStorage.setItem("jwt", res.data.jwt);
      localStorage.setItem("user", JSON.stringify(res.data.basic_info));
    } else {
      history.push("/error");
    }
  };
  return (
    <div className="app">
      <div className="header">
        <h1>PHYSIOAI!</h1>
        <h2>Welcome Back!</h2>
      </div>
      <form>
        <div className="field">
          <p>
            <span>*</span> Username
          </p>
          <input type="text" ref={userName} />
        </div>
        <div className="field">
          <p>
            <span>*</span> Password
          </p>
          <input type="password" ref={password} />
        </div>
        <div className="field button">
          <button type="submit" onClick={logIn}>
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
