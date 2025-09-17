
import './index.css'
import LandingPage from './components/Landingpage'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Game from './components/Game'
import Dashboard from './components/Dashboard'
import { UserProvider } from "./contexts/UserContext";
import { FigureProvider } from "./contexts/Figures";

import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
    <FigureProvider>
    <UserProvider> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Game" element={<Game/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </UserProvider>
    </FigureProvider>
    </>
  )
}

export default App;
