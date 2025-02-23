import React from 'react'


const Skills = () => {
  return (
    <section
     data-aos='fade-right' data-aos-easing='ease-in-out'
     data-aos-duration='1000'
      id='Skills'>
       <div className='p-5'>
        <div className='grid justify-items-center font-bold uppercase text-xl text-white'>
        <div className='flex items-center'>
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXNndzllZnA3aHBwNTdzcW5ranp0MnYxaXhqMGl5OGd5a2pnMWs0dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/IauL6LvGNlT3ffhcqq/giphy.gif" alt="loading" className='h-16 mr-3'/> 
        <h1>Skills</h1>
        </div>
        
           
        </div>
        <marquee className='bg-black m-5 p-5 rounded-lg' direction='scroll' scrollamount='10'>
           <div className='grid grid-flow-col grid-rows-1 gap-2'>
           <img height={98} width={98} src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/> 
            <img height={98} width={98}  src="https://img.icons8.com/stickers/50/css3.png" alt="css3"/>
            <img height={98} width={98}  src="https://img.icons8.com/fluency/48/javascript.png" alt="javascript"/>
            <img width={98} height={98} src="https://img.icons8.com/color/48/react-native.png" alt="react-native"/>
            <img height={98} width={98}  src="https://img.icons8.com/color/48/tailwindcss.png" alt="tailwindcss"/>
            <img height={98} width={98}  src="https://img.icons8.com/color/48/git.png" alt="git"/>
            </div> 
        </marquee>
        <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-justify'>
            <div className='bg-gray-900 justify-items-center m-5 p-10 rounded-lg'>
            <img height={48} width={48}  src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
            <p>HTML, or Hypertext Markup Language, is the standard markup language used to create and design web pages. It defines the structure and layout of a web page by using a variety of tags and attributes. HTML is one of the core technologies of the web, alongside CSS and JavaScript</p> 
            </div>
            <div className='bg-gray-900 justify-items-center m-5 p-10 rounded-lg'>
            <img height={48} width={48}  src="https://img.icons8.com/stickers/50/css3.png" alt="css3"/>
            <p>CSS stands for Cascading style sheets. It describes to the user how to display HTML elements on the screen in a proper format. CSS is the language that is used to style HTML documents. In simple words, cascading style sheets are a language used to simplify the process of making a webpage.</p>
            </div>
            <div className='bg-gray-900 justify-items-center m-5 p-10 rounded-lg'>
            <img height={48} width={48}  src="https://img.icons8.com/fluency/48/javascript.png" alt="javascript"/>
            <p>JavaScript is a versatile, dynamically typed programming language used for interactive web applications, supporting both client-side and server-side development, and integrating seamlessly with HTML, CSS, and a rich standard library.</p>
            </div>
            <div className='bg-gray-900 justify-items-center m-5 p-10 rounded-lg'>
            <img width={48} height={48} src="https://img.icons8.com/color/48/react-native.png" alt="react-native"/>
            <p>React, also known as ReactJS, is a JavaScript library developed by Facebook for building user interfaces (UIs). It is widely used for creating dynamic and interactive web applications. React is a declarative, component-based library that allows developers to build reusable UI components.</p>
            </div>
            <div className='bg-gray-900 justify-items-center m-5 p-10 rounded-lg'>
            <img height={48} width={48}  src="https://img.icons8.com/color/48/tailwindcss.png" alt="tailwindcss"/>
            <p>Tailwind CSS is a utility-first CSS framework for designing websites by using its utility-first pre-defined classes. It is a low-level CSS framework that is easy to learn and maintain in your projects. Tailwind CSS has many built-in features and classes that can be directly used on HTML documents.</p>
            </div>
            <div className='bg-gray-900 justify-items-center m-5 p-10 rounded-lg'>
            <img height={48} width={48}  src="https://img.icons8.com/color/48/git.png" alt="git"/>
            <p>Git is a version control system that is widely used in the programming world. It is used for tracking changes in the source code during software development. It was developed in 2005 by Linus Torvalds, the creator of the Linux operating system kernel.</p>
            </div>
        </div>
    </div>
    </section>
   
  )
}

export default Skills