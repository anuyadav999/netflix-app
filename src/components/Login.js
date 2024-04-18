import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "./utils/constants";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);

  const handleSignUp = () => {
    setSignInForm(!signInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="logo" />
      </div>
      <form className="w-full md:w-1/4 absolute p-12 mx-auto right-0 left-0 z-2 my-36 bg-black bg-opacity-80 text-white">
        <h3 className="w-full font-bold mb-3 text-3xl">
          {signInForm ? "Sign In" : "Sign Up"}
        </h3>
        <input
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
          className="p-3 my-3 w-full bg-gray-900 border-2 rounded border-white"
          placeholder="password"
        />
        <button className="w-full bg-red-700 p-2 rounded my-3">
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
