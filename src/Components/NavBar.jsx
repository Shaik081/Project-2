import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import Home from './Home';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from 'framer-motion'
import { MdOutlineClose } from "react-icons/md";



const NavBar = () => {

  const [toggle,setToggle] = useState(false)
  const [sideBar,setSideBar] = useState(<FaBars />)
  function Toggle(){
    setToggle(!toggle)

    if(toggle){
      setSideBar(<FaBars />)
    }
    else{
      setSideBar(<MdOutlineClose/>)
    }
    }
  

  return (
    <div className='relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-600 via-violet-800 to-indigo-900'>
    <div
    className='sticky top-0 z-10'> 
      <div className='flex justify-between p-2'>
          <div className='flex items-center'>
              <motion.button
              whileTap={{rotateZ: 90}}
              onClick={Toggle} className='mr-5 text-2xl text-white md:hidden'>{sideBar}</motion.button>
              <h1 className='text-lg uppercase font-bold text-orange-500'>Shaik</h1>
          </div>
          <div className='hidden md:flex'>
              <ul className='flex mr-5 font-bold text-white text-lg'>
              <li className='mr-20'><a href='#Home' className='hover:border-b-4 hover:border-orange-500 transition-all ease-in'>Home</a> </li> <li className='mr-20'><a href='#Skills' className='hover:border-b-4 hover:border-orange-500 transition-all ease-in'>Skills</a></li> 
              <li className='mr-20'><a href='#Project' className='hover:border-b-4  hover:border-orange-500 transition-all ease-in'>Projects</a></li>
              <li className='mr-5'><a href='#Contact' className='hover:border-b-4 hover:border-orange-500 transition-all ease-in'>Contact</a></li>
              </ul>   
          </div>
          
      </div>
      <div>
          {toggle && <motion.div  
        initial={{y: '-50vh'}}
        animate={{y: 0}}
        transition={{ ease:'easeIn',type: 'spring', stiffness:40}}  
        className='absolute px-80 z-10 backdrop-blur-lg m-5 py-5 rounded-2xl shadow-2xl shadow-black' onClick={Toggle}>
          <ul 
          className=' font-bold grid grid-cols-1 justify-items-center gap-5 p-4 text-white text-lg'>
          <motion.li 
          whileHover={{scale: 1.3}}
          transition={{ ease:'easeInOut'}} 
          className='mr-5'><a href='#Home'>Home</a></motion.li>  <motion.li
          whileHover={{scale: 1.3}}
          transition={{ ease:'easeInOut'}} className='mr-5'><a href='#Skills'>Skills</a></motion.li> 
         <motion.li
          whileHover={{scale: 1.3}}
          transition={{ ease:'easeInOut'}} className='mr-5'><a href='#Project'>Projects</a></motion.li>
         <motion.li 
          whileHover={{scale: 1.3}}
          transition={{ ease:'easeInOut'}}  className='mr-5'><a href='#Contact'>Contact</a></motion.li>
         </ul>
         </motion.div>}
        </div> 
      </div>


    <Home/> 
    <Skills/>
    <Project/>
    <Contact/>
    
    
    
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