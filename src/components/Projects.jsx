import React from 'react'
import { MdPreview, MdCodeOff } from "react-icons/md";
import { projects } from '../constant';


const Projects = () => {
    return (
        <section name='Project' className='max-w-screen-2xl mx-auto conatiner sm:px-6 my-5 md:px-16 md:my-16'>
            <h2 className='text-3xl md:text-4xl p-3 font-semibold '>Projects</h2>
            <div className='my-5 sm:my-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {projects.map(({ image, title, desc,liveUrl ,githubUrl}) => (
                    <div className='max-w-96 border my-5 h-80 relative cursor-pointer group hover:shadow-2xl shadow-xl  hover:shadow-amber-600 rounded-3xl contain-content bg-slate-700 '>
                        <h2 className='text-center text-white font-bold text-2xl p-3 bg-slate-700'>{title}</h2>
                        <div className='relative  border-blue-500 w-full h-5/6  '>
                            <img src={image} alt="images" className='w-full h-full -z-20' />
                            <div className='bg-black absolute group-hover:top-0 top-full bottom-0 left-0 right-0 bg-opacity-70   transition-all duration-700 ease-in-out'></div>
                            <div className=' absolute bottom-0 group-hover:top-0 top-full left-0 right-0 p-4 z-20 text-white transition-all duration-700 ease-in-out'>
                                <div className='flex justify-center items-center space-x-2  '>

                                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className='hover:bg-black hover:text-white bg-white text-black rounded p-3'>
                                        <MdPreview size={24} />
                                    </a>
                                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className='hover:bg-black hover:text-white bg-white text-black rounded p-3'>
                                        <MdCodeOff size={24} />
                                    </a>
                                </div>
                                <div className='bg-blend-screen p-1 mb-3 break-words my-3 overflow-y-auto h-40 '>{desc}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='bg-amber-200 w-full h-0.5'></div>
        </section>
    )
}

export default Projects