import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    Image: null,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("email", userData.email);
      formData.append("phone_number", userData.phone);
      formData.append("password", userData.password);
      formData.append("Image", userData.Image);
      const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}users/create-users/`,
          {
              method: "POST",
              body: formData,
            }
        );
      console.log(await response.json());
    } catch (error) {
      console.log(error);
    } finally {
      setUserData({
        name: "",
        email: "",
        phone: "",
        password: "",
        Image: null,
      });
      setLoading(false);
    }
  };
  return (
    <div className="w-screen  bg-gray-50 flex items-center justify-center">
      <div className="p-5 min-w-[300px] max-w-[500px] md:w-[400px] border-solid border rounded-lg border-gray-200 bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Register</h1>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              type="text"
              className="w-full border-solid border-[1px] border-gray-300 p-2 rounded outline-blue-500 "
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              type="email"
              className="w-full border-solid border-[1px] border-gray-300 p-2 rounded outline-blue-500 "
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
              type="text"
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
              type="password"
              className="w-full border-solid border-[1px] border-gray-300 p-2 rounded outline-blue-500 "
            />
          </div>
          <div className="mb-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 file:p-2 file:bg-blue-600 file:border-none file:text-white"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              accept="image/"
              multiple={false}
              onChange={(e) =>
                setUserData({ ...userData, Image: e.target.files[0] })
              }
            />
          </div>
          <div className="mt-2">
            <input
              type="submit"
              value={loading ? "Loading" : "Register"}
              className="w-full p-2 bg-blue-500 cursor-pointer hover:bg-blue-700 ease-linear duration-200 rounded  text-white"
            />
            <div className="flex justify-end items-center">
              <Link to='/login' className="text-blue-500">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
