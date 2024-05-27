import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";
export default function LoginPopUp({ setShowLogin }) {
  const [currState, setCurrState] = useState("login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required name="" id="" />
          )}
          <input type="email" name="" placeholder="Your email" required id="" />
          <input
            type="password"
            name=""
            placeholder="Password"
            required
            id=""
          />
        </div>
        <button>{currState === "sigup" ? "Create account" : "login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" required id="" />
          <p>By Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "login" ? (
          <p>
            Create a new account? <span onClick={()=>setCurrState('signup')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account <span onClick={()=>setCurrState('login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}
