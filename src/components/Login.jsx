import { MdOutlineMailOutline } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { UserContext } from "../contexts/UserContext";


function Login() {

  const { data } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(2);
  const [credentials, setCredentials] = useState({
    loginemail: "",
    loginpassword: "",
  });

  const filllogindata = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (
      credentials.loginemail === data.email &&
      credentials.loginpassword === data.password
    ) {
      setIsLoggedIn(1);
    } else {
      setIsLoggedIn(0);
    }
  };

  // ✅ Success screen
  if (isLoggedIn === 1) {
    return (
      <div className="bg-black h-screen flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-9xl text-yellow-600 font-bold">
            Login Successful!
          </h1>
          <p className="text-orange-100 my-6 text-7xl">
            Welcome {data.firstName} {data.lastName}
          </p>
            <Link to="/Game" 
            className="bg-[#6d6d6d] opacity-80 px-24 text-center py-2 text-bold text-2xl text-orange-100 rounded-full hover:shadow-md hover:shadow-slate-400 hover:scale-105">
            PLAY
  </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-black h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-col bg-[#6d6d6d] justify-center items-center w-96 my-auto mx-auto rounded-3xl shadow-lg shadow-black">
          <h1 className="font-bungee text-orange-100 text-5xl mt-4 px-10 py-6 text-center">
            Log<span className="text-yellow-600">-</span>In
          </h1>

          <div className="flex bg-orange-100 mx-10 px-2 my-2 w-80 border border-transparent rounded-full focus-within:border-2 focus-within:border-black">
            <MdOutlineMailOutline className="text-slate-800 mx-1 my-2 h-6 w-6" />
            <input
              type="email"
              name="loginemail"
              value={credentials.loginemail}
              className="bg-transparent w-full text-lg placeholder-slate-800 outline-none"
              placeholder="Email"
              onChange={filllogindata}
              required
            />
          </div>

          <div className="flex bg-orange-100 mx-10 px-2 my-2 w-80 border border-transparent rounded-full focus-within:border-2 focus-within:border-black">
            <MdLockOutline className="text-slate-800 mx-1 my-2 h-6 w-6" />
            <input
              type="password"
              name="loginpassword"
              value={credentials.loginpassword}
              className="bg-transparent text-lg placeholder-slate-800 outline-none"
              placeholder="Password"
              onChange={filllogindata}
              required
            />
          </div>

          {isLoggedIn === 0 && (
            <h3 className="text-red-900">Invalid username or password</h3>
          )}

          <button
            type="submit" 
            className="bg-[#0a0e14] opacity-80 hover:shadow-lg hover:scale-105 hover:shadow-[#1b3541] text-orange-100 mt-4 px-4 py-1 mb-2 w-80 text-lg rounded-lg"
          >
            Log In
          </button>
          <Link
            to="/Signup"
            className="bg-[#0a0e14] opacity-80 hover:shadow-lg text-center hover:scale-105 hover:shadow-[#1b3541] text-orange-100 mb-10 px-4 py-1 w-80 text-lg rounded-lg"
          >
            Go Back
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Login;
