import React,{useEffect} from 'react'
import portfolio1 from "../assets/portfolio/portfolio1.jpg"
import shopeasy from "../assets/portfolio/shopeasy.png";
import crud from "../assets/portfolio/crud.jpeg";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: portfolio1,
      desc: "collection of work, that showcases a person's or entity's skills.",
      demo: "https://tiny-brigadeiros-8f0d4f.netlify.app",
      code: "https://github.com/ganeshgana46/Ganesh-Portfolio"
    },
    {
        id: 2,
        src: shopeasy,
        desc: "This Full-Stack Shop e-commerce website is made using ReactJS, Tailwind CSS, Firebase....",
        demo: "https://magnificent-pothos-32a169.netlify.app",
        code: "https://github.com/ganeshgana46/Redux-crud-app"
      },
      {
        id: 3,
        src: crud,
        desc: "A predictable state container to perform Create, Read, Update, and Delete operations on data.",
        demo: "https://luminous-bublanina-829e44.netlify.app",
        code: "https://github.com/ganeshgana46/shop-easy"
      },
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-3 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}>Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects
