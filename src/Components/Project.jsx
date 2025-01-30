import React from 'react'
import project1 from '../Images/Screenshot 2025-01-30 145107.png'
import project2 from '../Images/Screenshot 2025-01-30 145652.png'

const Project = () => {
  return (
    <section id='Project'>
    <div className=' p-5 text-white bg-pink-400'>
        <div className='text-center uppercase font-bold text-xl text-black mb-2'>
           <h1>Projects</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='bg-gray-700 p-5 rounded-lg'>
            <img src={project1}></img>
            <h1 className='font-bold uppercase text-xl'>Portfolio:</h1>
            <p> Build by using Html, CSS, Javascript, Reactjs, TailwindCSS.</p>
        </div>
        <div className='bg-gray-700 p-5 rounded-lg'>
        <img src={project2}></img>
            <p className='font-bold text-xl uppercase'>Mini-Ecommerce Website</p>
            <p>Build by Html, CSS, Javascript, React, TailwindCss, Redux.</p>
        </div>
        </div>
        
    </div>
    </section>
  )
}

export default Project