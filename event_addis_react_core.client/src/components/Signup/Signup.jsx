import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex-1 md:max-w-sm">
      <div className="px-8 py-6 mt-4 text-left bg-white rounded-lg md:shadow-lg">
        <h1 className="text-2xl font-semibold mb-6  text-center ">Sign Up</h1>
        <form onSubmit={handleSubmit(props.onSubmit)}>
          <div className="mb-4">
            <label className="block text-black">User Name</label>
            <input
              type="text"
              id="username"
              name="userName"
              {...register("userName", {
                required: "* Required",
                maxLength: {
                  value: 30,
                  message: "* Maximum 30 characters allowed.",
                },
              })}
              className="w-full bg-white border border-gray-100 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            {errors.userName && (
              <span className="text-sm text-red-500">
                {errors.userName.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-black">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstName"
              {...register("firstName", {
                required: "* Required",
                maxLength: {
                  value: 30,
                  message: "* Maximum 30 characters allowed.",
                },
              })}
              className="w-full bg-white border border-gray-100 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            {errors.firstName && (
              <span className="text-sm text-red-500">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-black">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastName"
              {...register("lastName", {
                required: "* Required",
                maxLength: {
                  value: 30,
                  message: "* Maximum 30 characters allowed.",
                },
              })}
              className="w-full bg-white border border-gray-100 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            {errors.lastName && (
              <span className="text-sm text-red-500">
                {errors.lastName.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-black">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              {...register("email", {
                required: "* Required",
                pattern: {
                  value: /[a-zA-Z0-9._%+-]+@/,
                  message: "Invalid Email",
                },
              })}
              className="w-full bg-white border border-gray-100 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-black">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password", { required: "*Required" })}
              className="w-full bg-white border border-gray-100 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                // {...register("terms", {
                //   required: "Please accept the terms.",
                // })}
              />
              <span className="ml-2 text-gray-400">
                I agree to the{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Terms of Service
                </a>
              </span>
            </label>
            {errors.terms && (
              <span className="block text-sm text-red-500">
                {errors.terms.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-gray-400 text-center">
          Already have an account?{" "}
          <Link to="/user/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
