import React from 'react'
import profile from '../Images/Shaik P2.jpeg'
import { FaDownload } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section id='/'>
      <div className='p-2 md:flex lg:flex m-10  lg:m-20'>
          <div className='grid grid-cols-1 md:gap-0 gap-2  mb-5 md:w-[50%] md:mr-10'>
              <h1 className='text-3xl bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text font-extrabold uppercase'>Shaik Masthan</h1>
              
                <div className='flex text-wrap'>
                  <p className='text-blue-500 text-3xl md:text-4xl animate-spin md:animate-none mr-1'><IoLogoReact /></p>
                  <p className='font-bold text-xl md:text-3xl text-blue-500'>React Js Developer</p>
                </div>
                <p className='text-justify font-bold text-lg text-'>Enthusiastic and detail-oriented React Developer with a solid foundation in JavaScript, HTML, and CSS. Proficient in building responsive and dynamic user interfaces using React.js.Adept at working with modern web development tools and frameworks, including Redux, Webpack, and Babel.</p>
                <div className='flex text-xl ml-20 py-2'>
               <a href='https://github.com/Shaik081'><FaGithub className='mr-4' /></a> 
               <a href="https://www.instagram.com/king___of___silence/"><FaInstagram className='mr-4'/></a>
               <a href="https://www.facebook.com/me/"><FaFacebook className='mr-4'/></a>
               <a href='https://www.linkedin.com/in/shaik-masthan-080a6a304'><FaLinkedin /></a>
                </div>
                <div className='flex ml-6'>
                  <button className='  px-3 py-2 rounded-md  hover:bg-blue-600 transition-all ease-in font-bold hover:text-white mr-10 shadow-lg bg-neutral-100 '>Download</button>
                  <button className=' p-3 px-3 py-2 transition-all ease-in  hover:bg-orange-500 hover:text-white font-bold rounded-md bg-amber-400 shadow-lg'>Hire Me</button>

                </div>
          </div>
          <div>
              <img src={profile} className='rounded-3xl'></img>
          </div>
      </div>
      </section>
  )
}

export default Home