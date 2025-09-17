import { MdOutlinePerson2 } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import Navbar from './Navbar';
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function SignUp(){
    const navigate = useNavigate();
    const {data,setData}= useContext(UserContext);
    const filldata= (e)=>{
    setData({
        ...data,
        [e.target.name]: e.target.value
    });
    }
   const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate("/Login");
  };

    return(
        <form onSubmit={handleSubmit}>
        <div className="bg-black h-screen flex flex-col ">
            <Navbar />
            <div className=" flex flex-col bg-[#6d6d6d] justify-center items-center w-96 my-auto mx-auto rounded-lg shadow-lg shadow-black">
                <h1 className="font-bungee text-orange-100 text-5xl mt-4 px-10 py-6 text-center">Sign<span className="text-yellow-600">-</span>Up </h1>
                <div className="flex bg-orange-100 mx-10 px-2 my-2 w-80  border border-transparent rounded-full focus-within:border-2 focus-within:border-black">
                <MdOutlinePerson2 className="text-slate-800 mx-1 my-2 h-6 w-6"/>
                <input
                type="text"
                name="firstName"
                value={data.firstName} 
                className= " bg-transparent text-lg placeholder-slate-800 outline-none focus:bg-orange-100" 
                placeholder="First Name"
                onChange={filldata} 
                required />
                </div>

                 <div className="flex bg-orange-100 mx-10 px-2 my-2 w-80 border border-transparent rounded-full focus-within:border-2 focus-within:border-black">
                <MdOutlinePerson2 className="text-slate-800 mx-1 my-2 h-6 w-6"/>
                <input 
                type="text"
                name="lastName"
                value={data.lastName} 
                className= " bg-transparent text-lg placeholder-slate-800 outline-none" 
                placeholder="Last Name"
                onChange={filldata}
                required  />
                </div>

                 <div className="flex bg-orange-100 mx-10 px-2 my-2 w-80 border border-transparent rounded-full focus-within:border-2 focus-within:border-black">
                <MdOutlineMailOutline className="text-slate-800 mx-1 my-2 h-6 w-6"/>
                <input 
                type="email"
                name="email" 
                value={data.email} 
                className= "bg-transparent w-full text-lg placeholder-slate-800 outline-none" 
                placeholder="Email" 
                onChange={filldata} 
                required />
                </div>

                <div className="flex bg-orange-100 mx-10 px-2 my-2 w-80 border border-transparent rounded-full focus-within:border-2 focus-within:border-black">
                <MdLockOutline className="text-slate-800 mx-1 my-2 h-6 w-6"/>
                <input 
                type="password"
                name="password" 
                value={data.password}
                className= "bg-transparent text-lg placeholder-slate-800 outline-none " 
                placeholder="Password"
               onChange={filldata} 
                required />
                </div>
                
                <button type="submit"
                className="bg-[#0a0e14] opacity-80 hover:shadow-lg hover:shadow-[#1b3541] hover:scale-105 text-orange-100 mx-10 px-4 py-1 mt-4 mb-14 w-80 text-lg rounded-lg"
                 > Sign Up </button>
            </div>
        </div>
        </form>
        
    )

}
export default SignUp;