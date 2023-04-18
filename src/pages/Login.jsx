import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import SocialMedia from "../components/SocialMedia";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="max-w-[450px] h-[450px]  my-0">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://res.cloudinary.com/doqmdeqem/image/upload/v1681800467/Movie_f3mklu.jpg"
        alt="streamit"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen rounded-lg"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded-xl">
          <div className="max-w-[320px] mx-auto py-16">
            <div>
              <img
                src="https://res.cloudinary.com/doqmdeqem/image/upload/v1681736943/logo_iii90q.png"
                alt="logo"
                className="h-[40px] w-[80px] -mt-5 mx-auto"
              />
            </div>
            <h1 className="text-3xl font-bold">Sign In</h1>
            {error ? (
              <small className="p-3 text-red-500 font-semibold my-2">
                {error}
              </small>
            ) : null}
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col py-4 -mt-3 "
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-700 rouded-md"
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
                Sign In
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">New to StreamIt?</span>{" "}
                <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
