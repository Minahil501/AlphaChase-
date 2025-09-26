import { MdOutlineDarkMode } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import {FiguresContext } from "../contexts/Figures";
import { useState, useContext, useEffect } from "react";
import logo from "../assets/logo1.png";

function Dashboard() {
const {figure_data}= useContext(FiguresContext);
const { data } = useContext(UserContext);
const [bg, setBg] = useState({
    body: "#555654",
    rest: "black",
    text: "white",
  });
const [perfomance,setPerfomance]= useState({
  remarks:"",
  rank:""
});
useEffect(() => {
    const avr = (figure_data.win / figure_data.total) * 100;
    if (avr <= 30) {
      setPerfomance({ remarks: "BETTER LUCK NEXT TIME", rank: "ROOKIE" });
    } else if (avr > 30 && avr <= 60) {
      setPerfomance({ remarks: "GREAT EFFORT", rank: "WARRIOR" });
    } else {
      setPerfomance({ remarks: "OUTSTANDING PERFORMANCE", rank: "LEGEND" });
    }
  }, [figure_data]);

  // Theme toggle
  const toggle = () => {
    if (bg.body === "#555654") {
      setBg({ body: "black", rest: "#ca8a04", text: "#FFEDD5" });
    } else {
      setBg({ body: "#555654", rest: "black", text: "black" });
    }
  };
  let filledBars = 0;
if (perfomance.rank === "ROOKIE") filledBars = 1;
if (perfomance.rank === "WARRIOR") filledBars = 3;
if (perfomance.rank === "LEGEND") filledBars = 5;
const bars = [
      { h: "h-20", mt: "mt-24" },
      { h: "h-24", mt: "mt-20" },
      { h: "h-28", mt: "mt-16" },
      { h: "h-32", mt: "mt-12" },
      { h: "h-36", mt: "mt-8" },
    ];

  return (
  <div
  className="min-h-screen w-full transition-colors duration-300"
  style={{ backgroundColor: bg.body }}>
  {/* Header */}
  <div className="w-full flex items-center justify-between px-4 sm:px-8 py-4 sm:py-5">
    <h1 className="text-xl sm:text-3xl font-bungee text-orange-100">
      Alpha
      <span className="inline-block animate-bounce text-yellow-600">C</span>
      hase
    </h1>
    <div className="flex gap-2 sm:gap-4">
      <MdOutlineDarkMode
        style={{ color: bg.rest }}
        className="text-xl sm:text-3xl cursor-pointer"
        onClick={toggle}
      />
      <Link to="/Dashboard">
        <VscGraph style={{ color: bg.rest }} className="text-xl sm:text-3xl cursor-pointer" />
      </Link>
      <Link to="/">
        <HiOutlineHome style={{ color: bg.rest }} className="text-xl sm:text-3xl cursor-pointer" />
      </Link>
    </div>
  </div>

    {/* Profile Section */}
  <nav className="flex flex-col sm:flex-row justify-center items-center sm:gap-10 gap-6 mt-6">
    <div className="border-2 border-indigo-500 h-32 w-32 sm:h-48 sm:w-48 rounded-full">
      <img src={logo} alt="Logo" className="h-full w-full object-cover" />
    </div>
    <div className="text-center sm:text-left">
      <p className="text-2xl sm:text-4xl text-orange-100">
        {data.firstName} {data.lastName}
      </p>
      <p className="text-lg sm:text-2xl text-orange-100 break-words">
        {data.email}
      </p>
    </div>
  </nav>
    <main className="flex flex-col items-center justify-center gap-10 my-10">
  <div className="flex flex-col sm:flex-row justify-center gap-5 w-full max-w-6xl px-4">
  <div className="h-44 bg-yellow-600 rounded-3xl flex flex-col items-center justify-center border-b-4 border-r-4 border-orange-100">
    <p className="text-2xl sm:text-3xl font-bold text-orange-100">WINS</p>
    <p className="text-2xl sm:text-3xl text-orange-100">
      {figure_data.win} / {figure_data.total}
    </p>
  </div>
      
      <div className="h-44 bg-yellow-600 rounded-3xl flex flex-col items-center justify-center border-b-4 border-r-4 border-orange-100">
        <p className="text-2xl sm:text-3xl font-bold text-orange-100">LOSSES</p>
        <p className="text-2xl sm:text-3xl text-orange-100">
          {figure_data.losses} / {figure_data.total}
        </p>
      </div>

      <div className="h-44 bg-yellow-600 rounded-3xl flex flex-col items-center justify-center border-b-4 border-r-4 border-orange-100">
        <p className="text-2xl sm:text-3xl font-bold text-orange-100">
          AVERAGE TIME TAKEN
        </p>
        <p className="text-2xl sm:text-3xl text-orange-100">
          {figure_data.time} seconds
        </p>
      </div>
    </div>

    
    <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-32 justify-center">
      <div className="text-center sm:text-left">
        <p className="text-3xl sm:text-4xl font-bold bg-orange-100 bg-clip-text text-transparent">
          {data.firstName} The{" "}
          <span className="bg-gradient-to-r from-[#6587ED] via-[#E37EDF] to-[#675fbc] text-transparent bg-clip-text">
            {perfomance.rank}
          </span>
        </p>
        <p className="text-2xl sm:text-4xl italic bg-orange-100 mt-4 bg-clip-text text-transparent">
          {perfomance.remarks}
        </p>
      </div>

      <div className="text-3xl font-bold flex flex-row gap-1">
        <div className={`h-20 w-6 sm:w-8 mt-24 ${filledBars >= 1 ? "bg-orange-100" : "bg-gray-700"}`}></div>
        <div className={`h-24 w-6 sm:w-8 mt-20 ${filledBars >= 2 ? "bg-orange-100" : "bg-gray-700"}`}></div>
        <div className={`h-28 w-6 sm:w-8 mt-16 ${filledBars >= 3 ? "bg-orange-100" : "bg-gray-700"}`}></div>
        <div className={`h-32 w-6 sm:w-8 mt-12 ${filledBars >= 4 ? "bg-orange-100" : "bg-gray-700"}`}></div>
        <div className={`h-36 w-6 sm:w-8 mt-8  ${filledBars >= 5 ? "bg-orange-100" : "bg-gray-700"}`}></div>
      </div>
    </div>

    <Link
      to="/Game"
      className="w-full sm:w-96 text-center mb-44 py-3 sm:py-4 text-xl sm:text-2xl bg-yellow-600 text-orange-100 rounded-full hover:shadow-md hover:shadow-amber-100 hover:scale-105 transition"
    >
      Continue playing
    </Link>
  </main>
</div>

  );
}

export default Dashboard;
