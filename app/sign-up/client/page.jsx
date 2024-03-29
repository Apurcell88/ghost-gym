"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ClientSignUpForm = ({ client }) => {
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password === formData.confirmPassword) {
      const res = await fetch("/api/Clients", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });

      if (!res.ok) {
        throw new Error("Failed to create client");
        // alert("Username already exists. Please enter a different one.");
      }

      if (formData.password === formData.confirmPassword && res.ok) {
        router.refresh();
        router.push("/"); // want to push to individual homepage. Must be customized with client's first and last name that's stored in the db
      }
    } else {
      alert("Password does not match");
    }

    // if (formData.password === formData.confirmPassword && res.ok) {
    //   router.refresh();
    //   router.push("/");
    // }
  };

  const clientSignUpData = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    age: 1,
    phoneNumber: "",
    email: "",
    fitnessGoals: "",
    restrictions: "",
  };

  const [formData, setFormData] = useState(clientSignUpData);

  return (
    <section className="bg-gray-800 h-full flex flex-col items-center">
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
            value={formData.firstName}
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
            value={formData.lastName}
          />
        </div>

        <div>
          <label htmlFor="username" className="sign-up-form--label">
            Username:{" "}
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="sign-up-form--input"
            required
            onChange={handleChange}
            value={formData.username}
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
            value={formData.password}
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
            value={formData.confirmPassword}
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
            value={formData.age}
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
            onChange={handleChange}
            value={formData.phoneNumber}
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
            value={formData.email}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="fitnessGoals" className="sign-up-form--label">
            What are your fitness goals?
          </label>
          <textarea
            className="sign-up-form--input"
            name="fitnessGoals"
            id="fitnessGoals"
            cols="10"
            rows="10"
            required
            onChange={handleChange}
            value={formData.fitnessGoals}
          ></textarea>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="restrictions" className="sign-up-form--label">
            Do you have any restrictions or medical needs?
          </label>
          <textarea
            className="sign-up-form--input"
            name="restrictions"
            id="restrictions"
            cols="10"
            rows="10"
            required
            onChange={handleChange}
            value={formData.restrictions}
          ></textarea>
        </div>

        <div>
          <label htmlFor="consent" className="sign-up-form--label">
            Consent:{" "}
          </label>
          <input type="checkbox" id="consent" name="consent" required />
          <span> By checking this box...</span>
        </div>

        <div className="self-center text-xl pb-5 hover:text-purple-400">
          <input type="submit" className="hover:cursor-pointer" />
        </div>
      </form>
    </section>
  );
};

export default ClientSignUpForm;
