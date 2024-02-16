"use client";

const trainerSignUpForm = () => {
  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  const signUpData = {
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    age: 1,
    sex: "",
    yearsExperience: 1,
    email: "",
    aboutMe: "",
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
          <label htmlFor="sex" className="sign-up-form--label">
            Sex:
          </label>
          <select name="sex" id="sex" className="sign-up-form--input">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label htmlFor="experience" className="sign-up-form--label">
            Years Experience:
          </label>
          <input
            type="number"
            id="experience"
            name="experience"
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

        <div className="flex flex-col gap-2">
          <label htmlFor="about" className="sign-up-form--label">
            About Me
          </label>
          <textarea
            className="sign-up-form--input"
            name="about"
            id="about"
            cols="10"
            rows="10"
          ></textarea>
        </div>

        <div>
          <label htmlFor="consent" className="sign-up-form--label">
            Consent:{" "}
          </label>
          <input type="checkbox" id="consent" name="consent" required />
          <span> By checking this box...</span>
        </div>

        <div className="self-center text-xl hover:text-purple-400">
          <input type="submit" className="hover:cursor-pointer" />
        </div>
      </form>
    </section>
  );
};

export default trainerSignUpForm;
