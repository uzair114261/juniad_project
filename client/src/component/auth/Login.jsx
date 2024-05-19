import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("email", userData.email);
      formData.append("password", userData.password);
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}users/login/`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      localStorage.setItem("refresh", data.refresh);
      localStorage.setItem("access", data.access);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setUserData({
        email: "",
        password: "",
      });
      setLoading(false);
    }
  };
  return (
    <div className="w-screen h-screen  bg-gray-50 flex items-center justify-center">
      <div className="p-5 min-w-[300px] max-w-[500px] md:w-[400px] border-solid border rounded-lg border-gray-200 bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Login</h1>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              type="email"
              id="email"
              className="w-full border-solid border-[1px] border-gray-300 p-2 rounded outline-blue-500 "
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              id="password"
              type="password"
              className="w-full border-solid border-[1px] border-gray-300 p-2 rounded outline-blue-500 "
            />
          </div>

          <div className="mt-2">
            <button className="w-full p-2 bg-blue-500 cursor-pointer hover:bg-blue-700 ease-linear duration-200 rounded  text-white">
              Login
            </button>
            <div className="flex justify-end items-center">
              <Link to="/signup" className="text-blue-500">
                Create Account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
