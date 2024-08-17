"use client";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

// create schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field!")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required field!")
    .min(8, "Password must be at least 8 charactres"),
});
const Login_V2 = () => {
  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="bg-neutral-300 mx-32 mt-4 py-10 rounded-md">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col justify-center items-center"
            >
              <span className="font-bold text-2xl mb-2">Login</span>
              <div className="flex flex-col w-full px-10 gap-2">
                <div className="h-[60px]">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Enter id / username"
                    className="outline-none p-2 rounded-md w-full"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.email && touched.email && errors.email}
                  </p>
                </div>
                <div className="h-[60px]">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Enter password..."
                    className="outline-none p-2 rounded-md  w-full"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.password && touched.password && errors.password}
                  </p>
                </div>
                <button type="submit" className="bg-indigo-500 p-2 rounded-md text-white font-bold">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login_V2;

// yarn add formik yup
