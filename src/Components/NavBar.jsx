import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import Home from './Home';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [toggle,setToggle] = useState(false)

  return (
    <div className='relative'>
    <div className='flex justify-between p-2'>
        <div className='flex items-center'>
            <button onClick={()=>setToggle(!toggle)}><FaBarsStaggered className='mr-4 text-xl md:hidden'/></button>
            <h1 className='text-lg uppercase font-bold bg-yellow-200 p-3 text-orange-500 rounded-lg'>Shaik</h1>
        </div>
        <div className='hidden md:flex'>
            <ul className='flex mr-4 font-bold text-orange-600 text-lg'>
            <li className='mr-5'><a href='/' className='hover:border-b-4 hover:border-violet-500 transition-all ease-in'>Home</a> </li> <li className='mr-5'><a href='#Skills' className='hover:border-b-4 hover:border-violet-500 transition-all ease-in'>Skills</a></li> 
            <li className='mr-5'><a href='#Project' className='hover:border-b-4  hover:border-violet-500 transition-all ease-in'>Projects</a></li>
            <li className='mr-5'><a href='#Contact' className='hover:border-b-4 hover:border-violet-500 transition-all ease-in'>Contact</a></li>
            </ul>
        </div>
    </div>
    
    <Home/>
    
    <Skills/>
    <Project/>
    <Contact/>

    {toggle && <div className='absolute top-14 bg-violet-500 w-full ' onClick={()=>setToggle(!toggle)}>
      <ul className=' font-bold grid grid-cols-1 justify-items-center gap-3 p-4 text-white'>
      <li className='mr-5'><a href='/'>Home</a></li>  <li className='mr-5'><a href='#Skills'>Skills</a></li> 
             <li className='mr-5'><a href='#Project'>Projects</a></li>
               {/* <Link>   <li className='mr-5'>About</li></Link> */}
                <li className='mr-5'><a href='#Contact'>Contact</a></li>
            </ul>
      </div>}
    
    
    
    <footer>
      <div className='p-10  bg-black mt-5'>
      <div className='flex justify-center text-white mb-4'>
        <a href='https://github.com/Shaik081'><FaGithub className='mr-4' /></a> 
                      <a href="https://www.instagram.com/king___of___silence/"><FaInstagram className='mr-4'/></a>
                      <a href="https://www.facebook.com/me/"><FaFacebook className='mr-4'/></a>
                      <a href='https://www.linkedin.com/in/shaik-masthan-080a6a304'><FaLinkedin /></a>
      </div>
      <div className='text-white flex items-center justify-center'>
          <p><SiGmail className='mr-2'/></p>
          <h1>shaikmas128@gmail.com</h1>
      </div>
      </div>
      
      
    </footer>
    </div>
  )
}

export default NavBar