"use client";

const signUpForm = () => {
  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  const signUpData = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    personalTrainer: false,
    age: 1,
    phoneNumber: "",
    email: "",
  };

  return (
    <section className="bg-gray-800 h-screen flex flex-col items-center">
      <h1 className="text-center text-white text-3xl py-10">
        Sign Up For Ghost Gym
      </h1>
      <form className="flex flex-col gap-5 text-white">
        <div>
          <label htmlFor="firstName" className="sign-up-form--label">
            First Name:{" "}
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="sign-up-form--input"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="sign-up-form--label">
            Last Name:{" "}
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="sign-up-form--input"
            required
          />
        </div>

        <div>
          <label htmlFor="userName" className="sign-up-form--label">
            Username:{" "}
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="sign-up-form--input"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="sign-up-form--label">
            Password:{" "}
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="sign-up-form--input"
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="sign-up-form--label">
            Confirm Password:{" "}
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="sign-up-form--input"
            required
          />
        </div>

        <div>
          <label htmlFor="age" className="sign-up-form--label">
            Are you a personal trainer?{" "}
          </label>
          <select name="trainer" id="trainer" className="text-black">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div>
          <label htmlFor="age" className="sign-up-form--label">
            Age:{" "}
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className="sign-up-form--input"
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="sign-up-form--label">
            Phone Number:{" "}
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="sign-up-form--input"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="sign-up-form--label">
            Email:{" "}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="sign-up-form--input"
            required
          />
        </div>

        <div>
          <label htmlFor="consent" className="sign-up-form--label">
            Consent:{" "}
          </label>
          <input type="checkbox" id="consent" name="consent" required />
          <span> By checking this box...</span>
        </div>

        <div className="self-center text-lg">
          <input type="submit" className="hover:cursor-pointer" />
        </div>
      </form>
    </section>
  );
};

export default signUpForm;
