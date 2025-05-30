import { BrowserRouter, Route, Routes} from "react-router-dom"
import About from "./pages/about/About"
import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"


const App = () => {
  return (
   <>
  
 <BrowserRouter>
  <Navbar/>
  <Routes>
    
  <Route  path="/" element={<Home/>}
  />
  <Route  path="/about" element={<About/>}
  />
  <Route  path="/contact" element={<Contact/>}
  />

 </Routes>
 </BrowserRouter>


  
   </>
  )
}

export default App