"use client";

import React from "react";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-slate-800 h-[90vh] flex flex-col justify-center">
      <h1 className="text-center text-3xl pb-8 text-white">Please Sign In</h1>
      <form className="flex flex-col items-center gap-5" onClick={handleSubmit}>
        <div>
          <label htmlFor="username" className="sign-up-form--label">
            Username:{" "}
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="sign-up-form--input"
          />
        </div>

        <div>
          <label htmlFor="password" className="sign-up-form--label">
            Password:{" "}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="sign-up-form--input"
          />
        </div>

        <div>
          <input
            type="submit"
            className="text-lg text-white hover:cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
