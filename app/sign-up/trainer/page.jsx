"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TrainerSignUpForm = () => {
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setTrainerData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (trainerData.password === trainerData.confirmPassword) {
      const res = await fetch("/api/Trainers", {
        method: "POST",
        body: JSON.stringify({ trainerData }),
        "content-type": "application/json",
      });

      if (!res.ok) {
        throw new Error("Failed to create trainer");
        // alert("Username already exists. Please enter a different one.");
      }

      if (trainerData.password === trainerData.confirmPassword && res.ok) {
        router.refresh();
        router.push("/"); // want to push to individual homepage. Must be customized with client's first and last name that's stored in the db
      }
    } else {
      alert("Password does not match");
    }
  };

  const trainerSignUpData = {
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

  const [trainerData, setTrainerData] = useState(trainerSignUpData);

  return (
    <section className="bg-gray-800 h-screen flex flex-col items-center">
      <h1 className="text-center text-white text-3xl py-10">
        Sign Up For Ghost Gym
      </h1>
      <form className="flex flex-col gap-5 text-white" onSubmit={handleSubmit}>
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
            onChange={handleChange}
            value={trainerData.firstName}
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
            onChange={handleChange}
            value={trainerData.lastName}
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
            onChange={handleChange}
            value={trainerData.password}
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
            onChange={handleChange}
            value={trainerData.confirmPassword}
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
            onChange={handleChange}
            value={trainerData.age}
          />
        </div>

        <div>
          <label htmlFor="sex" className="sign-up-form--label">
            Sex:
          </label>
          <select
            name="sex"
            id="sex"
            className="sign-up-form--input"
            onChange={handleChange}
            value={trainerData.sex}
          >
            <option value="Choose one">Pick sex</option>
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
            name="yearsExperience"
            className="sign-up-form--input"
            required
            onChange={handleChange}
            value={trainerData.yearsExperience}
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
            onChange={handleChange}
            value={trainerData.email}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="about" className="sign-up-form--label">
            About Me
          </label>
          <textarea
            className="sign-up-form--input"
            name="aboutMe"
            id="about"
            cols="10"
            rows="10"
            onChange={handleChange}
            value={trainerData.aboutMe}
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

export default TrainerSignUpForm;
