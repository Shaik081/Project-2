import React from 'react'

const Contact = () => {
  return (
    <section id='Contact'>
    <div className='grid grid-col-1 gap-2  justify-items-center'>
        
        <h1 className='text-xl font-bold uppercase'>Contact</h1>

        <div className='bg-gray-700 p-10 md:px-52 py-10 rounded-lg'>
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
                    <button type='submit' className='bg-green-600 p-2 mt-5 rounded-2xl text-white'>Submit</button>
                </form>
        </div>
            
        
    </div>
    </section>
  )
}

export default Contact