import { TiTick } from "react-icons/ti";
import {Link} from 'react-router-dom';
function Invalid(){
     return (
    <div className="bg-[#1e3a46] h-screen flex flex-col justify-center items-center">
      <TiTick className="text-green-700 text-8xl" />
      <div className="text-center">
        <h1 className="text-5xl text-yellow-600 font-bold">
          Invalid!
        </h1>
        <Link 
        to="/Login" 
        className="text-orange-100 mt-4 text-xl">Retry</Link>
      </div>
    </div>
  );
}