import { BrowserRouter, Route, Routes} from "react-router-dom"
import About from "./pages/about/About"
import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import {user } from "../src/constants/user"

const App = () => {
const {name,isUser,role} = user;
const Enum = {
  admin:"hi admin",
  user:"hi user how are you ?",
  customer:"hello customer"
}
  return (
   <>
{/*   
 <BrowserRouter>
  <Navbar />
  <Routes>
    
  <Route  path="/" element={<Home/>}
  />
  <Route  path="/about" element={<About/>}
  />
  <Route  path="/contact" element={<Contact/>}
  />

 </Routes>
 </BrowserRouter> */}
  <h2>This is you dashboard</h2>
   <p className={
    isUser?"text-green-500  bg-white":"text-red-600"
   }>Welcome, {isUser?name:"please login ta gara kumseykum"}</p>
  {!isUser && <button className="border p-4 text-center text-2xl rounded-lg shadow-fuchsia-500">Login</button>}

  {/* {
    role==="admin"?"hi admin":role=="user"?"hello user":role=="customer" && "Welcome customer"
  } */}
  {Enum[role]}
   </>
  )
}

export default App