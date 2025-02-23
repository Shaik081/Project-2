import React from 'react'

const Contact = () => {
  return (
    <section
    data-aos='fade-up'
    data-aos-easing='ease-in'
    id='Contact'>
    <div className='grid grid-col-1 gap-2  justify-items-center'>
      <div className='flex items-center'>
      <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzZram1uMTNqaXQ0eDJoeTZuNHV5ZDdidjl2Znh6MDJwbDJxZndkdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/0feJGmZ2kha5ya8L3d/giphy.gif' className='h-16'></img>
      <h1 className='text-xl font-bold uppercase text-white'>Contact</h1>
      </div>
        

        <div className='bg-gray-900 p-10 px-28 md:px-52 py-10 rounded-lg'>
            <form className='grid grid-cols-1 gap-2'>
                    <h1 className='text-white'>Name</h1>
                    <input
                    
                    type='text'
                    placeholder='Name'
                    className='p-1'
                    required

                    />
                    <h1 className='text-white'>Email</h1>
                    <input

                    type='Email'
                    placeholder='Email'
                    className='p-1'
                    required

                    />
                    <h1  className='text-white'>Comment</h1>
                    <textarea
                        type='text'
                        placeholder='Comment'
                        className='p-1 w-48 h-28'
                    />
                    <button type='submit' className='bg-green-600 p-2 mt-5 rounded-2xl text-white hover:bg-green-700'>Send Message</button>
                </form>
        </div>
            
        
    </div>
    </section>
  )
}

export default Contact