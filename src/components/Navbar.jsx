  import {Link} from 'react-router-dom';
import { HiOutlineHome } from "react-icons/hi";
  function Navbar(){
    return(
   <div className="flex flex-row my-5 justify-between">
        <h1 className="text-3xl font-bungee text-orange-100 ml-4">
          Alpha
          <span className="inline-block animate-bounce text-yellow-600">C</span>
          hase
        </h1>
        <Link to="/">
          <HiOutlineHome className="text-3xl cursor-pointer text-yellow-600 mr-6" />
        </Link>
      </div>
    );
   }
   export default Navbar;