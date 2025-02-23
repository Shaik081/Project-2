import React from 'react'
import project1 from '../Images/Screenshot 2025-01-30 145107.png'
import project2 from '../Images/Screenshot 2025-01-30 145652.png'

const Project = () => {
  return (
    <section 
    data-aos='zoom-out'
    data-aos-easing='ease-in'
    data-aos-duration='500'
    id='Project'>
    <div className=' p-5 text-white'>
        <div className='text-center uppercase font-bold text-xl text-white mb-2 flex justify-center items-center'>
          <img src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmg0d3h4MmN5eG53bWVpZ2QzN2Vyb2xxZ283dG56ZzY4eTU0d3ZjNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VdoIFLsMIlwzfKD520/giphy.gif' className='h-12 mr-4'></img>
           <h1>Projects</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='bg-gray-900 p-5 rounded-lg'>
            <img src={project1}></img>
            <h1 className='font-bold uppercase text-xl'>Portfolio:</h1>
            <p> Build by using Html, CSS, Javascript, Reactjs, TailwindCSS.</p>
        </div>
        <div className='bg-gray-900 p-5 rounded-lg'>
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