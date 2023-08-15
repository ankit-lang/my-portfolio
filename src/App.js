import { Toaster } from "react-hot-toast";
import Contact from "./component/Contact";
import Header, { NavPhone } from "./component/Header";
import Home from "./component/Home";
// import Timeline from "./component/Timeline";
import Work from "./component/Work";
import Footer from "./component/Footer";
import {  useState } from "react";



function App() {
  const [menu,setMenu] = useState(false)
  


  return (
    <>
    <NavPhone menu={menu} setMenu={setMenu}/>
     <Header menu={menu} setMenu={setMenu}/>
     
     <Home/>
     <Work/>
     <Contact/>
     <Footer/>
 
     <Toaster/>
    
    </>
   ) 
}

export default App;
