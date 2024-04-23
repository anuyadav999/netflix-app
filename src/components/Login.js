import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "./utils/constants";
import { useRef } from "react";
import { validateFields } from "./utils/validate";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = () => {
    setSignInForm(!signInForm);
  };

  const email = useRef(null);
  const password = useRef(null);

  const handleValidation = () => {
    const isFieldValid = validateFields(
      email.current.value,
      password.current.value
    );
    setErrorMessage(isFieldValid);
    if (!errorMessage) navigate("/browse");
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="logo" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full md:w-1/4 absolute p-12 mx-auto right-0 left-0 z-2 my-36 bg-black bg-opacity-80 text-white"
      >
        <h3 className="w-full font-bold mb-3 text-3xl">
          {signInForm ? "Sign In" : "Sign Up"}
        </h3>
        <input
          ref={email}
          className="p-3 my-3 w-full bg-gray-900 border-2 rounded border-white"
          placeholder="Email address"
        />
        {!signInForm && (
          <input
            className="p-3 my-3 w-full bg-gray-900 border-2 rounded border-white"
            placeholder="Full Name"
          />
        )}
        <input
          ref={password}
          className="p-3 my-3 w-full bg-gray-900 border-2 rounded border-white"
          placeholder="password"
        />
        <p className="text-red-500 text-lg py-2">{errorMessage}</p>
        <button
          className="w-full bg-red-700 p-2 rounded my-3"
          onClick={handleValidation}
        >
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={handleSignUp}>
          {signInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
