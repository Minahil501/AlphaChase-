import {Link} from 'react-router-dom'
function LandingPage(){
    return(
        <div className="bg-black h-screen w-full">         
        <div className="flex flex-col justify-center items-center text-center h-full text-orange-100 ">
          <h1 className="text-6xl font-bungee mb-2 transition-all duration-500 sm:text-7xl md:text-8xl">
                 Alpha
               <span className="inline-block animate-bounce text-yellow-600">C</span>
                 hase
             </h1>
               <h2 className="text-2xl italic mb-4">you're chasing the right alphabet</h2>
            
                 <div className="flex justify-center gap-2">
          <Link
            to="/SignUp"
            className="bg-gray-600 opacity-80 my-2 py-2 px-6 rounded-2xl hover:shadow-md hover:shadow-slate-400 hover:scale-105"
          >
            Sign-up
          </Link>
          <span className="text-yellow-600 text-4xl"></span>
          <Link
            to="/Game"
            className="bg-gray-600 opacity-80 my-2 py-2 px-6 rounded-2xl hover:shadow-md hover:shadow-slate-400 hover:scale-105"
          > Play now
          </Link>
        </div>
        <div
        className="text-yellow-600 text-md ">
           <span className="inline-block text-orange-100"> --</span> Get started <span className="inline-block text-orange-100"> --</span>
             </div>

         </div>
        </div>

    )

}
export default LandingPage;