import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import SocialMedia from "../components/SocialMedia";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        {/* <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        /> */}
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen "></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded-xl">
            <div className="max-w-[320px] mx-auto py-16">
              <div>
                {/* <img
                  src="https://res.cloudinary.com/daxmjqsy2/image/upload/v1679232175/icons8-netflix-96_oli5wf.png"
                  alt="logo"
                  className="h-[144px] w-[144px] -mt-12 mx-auto"
                /> */}
              </div>
              <h1 className="text-3xl font-bold">Sign Up</h1>
              {error ? (
                <small className="p-3 text-red-500 font-semibold my-2">
                  {error}
                </small>
              ) : null}
              <form
                onSubmit={handleSubmit}
                className="w-full flex -mt-3 flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rouded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rouded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    Already subscribed to Netflix?
                  </span>{" "}
                  <Link to="/"> Sign In</Link>
                </p>
              </form>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
