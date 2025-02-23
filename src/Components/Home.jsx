import React from 'react'
import profile from '../Images/Shaik P2.jpeg'
import { FaDownload } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { easeIn, motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.section
    initial={{x: '-50vw'}}
    animate={{x: 0}}
    transition={{type:"spring",stiffness:50}}
    id='Home'>
      <div className='p-2 md:flex md:justify-between lg:flex lg:justify-between m-10 lg:m-20'>
          <div className='grid grid-cols-1 md:gap-5  gap-4  mb-5 md:w-[50%] md:mr-10'>
              <h1 className='text-3xl bg-gradient-to-r from-pink-600  via-orange-400 to-yellow-700   text-transparent bg-clip-text  font-extrabold uppercase animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white'>Shaik Masthan</h1>
              
                <div className='flex text-wrap'>
                  <p className='text-sky-400 text-3xl md:text-4xl animate-spin md:animate-none   mr-1'><IoLogoReact /></p>
                  <p className='font-bold text-xl md:text-3xl text-sky-500'>React Js Developer</p>
                </div>
                <p className='text-justify font-bold text-lg text-white'>Enthusiastic and detail-oriented React Developer with a solid foundation in JavaScript, HTML, and CSS. Proficient in building responsive and dynamic user interfaces using React.js.Adept at working with modern web development tools and frameworks, including Redux, Webpack, and Babel.</p>
                <div className='flex text-xl text-cyan-500 ml-20 py-2'>
               <a href='https://github.com/Shaik081'><FaGithub className='mr-4' /></a> 
               <a href="https://www.instagram.com/king___of___silence/"><FaInstagram className='mr-4'/></a>
               <a href="https://www.facebook.com/me/"><FaFacebook className='mr-4'/></a>
               <a href='https://www.linkedin.com/in/shaik-masthan-080a6a304'><FaLinkedin /></a>
                </div>
                <div className='flex ml-6'>
                  <a>
                  <button className='px-3 py-2  rounded-md  hover:bg-pink-700 transition-all ease-in font-bold hover:text-white mr-10 shadow-lg bg-neutral-100'>Download</button>
                  </a>
                  <a href='#Contact'><button className=' p-3 px-3 py-2 transition-all ease-in  hover:bg-orange-500 hover:text-white font-bold rounded-md bg-amber-400 shadow-lg'>Hire Me</button></a>

                </div>
          </div>
          <div>
              <img src={profile} className='rounded-3xl h-80'></img>
          </div>
      </div>
      
      </motion.section>
  )
}

export default Home