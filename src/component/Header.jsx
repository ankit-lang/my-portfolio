import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
const Header = ({menu,setMenu}) => {
  return (
    <>
    <nav>
        <NavContent  />
        </nav>
        <button className='navbtn' onClick={()=>setMenu(!menu)}>
            <AiOutlineMenu/>
        </button>
        
   
    </>
  )
}

export const NavContent = () =>(
    <> 
        <h2>Ankit K.</h2>
        <div>
            <a  href="#home">home</a>
            <a  href="#work">Work</a>
            
            <a  href="#services">Services</a>
            <a  href="#testinomial">Testinomial</a>
            <a href="#contact">Contact</a>
           
        </div>
        <a href="mailto:rankit2883@gmail.com">
            <button>Email</button>
        </a>
    </>
)

export const NavPhone =({menu,setMenu})=>(
    <div className={`navphone ${menu ? 'navphonecomes':''}`}>
     <h2>Ankit K.</h2>
        <div>
      
            <a onClick={()=>setMenu(!menu)} href="#home">home</a>
            <a onClick={()=>setMenu(!menu)} href="#work">Work</a>
            
            <a onClick={()=>setMenu(!menu)} href="#services">Services</a>
            <a onClick={()=>setMenu(!menu)} href="#testinomial">Testinomial</a>
            <a onClick={()=>setMenu(!menu)} href="#contact">Contact</a>
           
        </div>
        <a href="mailto:rankit2883@gmail.com">
            <button>Email</button>
        </a>
    </div>
)

export default Header
