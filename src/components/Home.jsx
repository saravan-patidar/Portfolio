import React from 'react'
import { FaReact, FaJs, FaCss3, FaHtml5} from "react-icons/fa";
import { ReactTyped } from "react-typed";
import img from '../assets/photo.avif'
import { links } from '../constant';
import resume from '../assets/saravan_resume.pdf';

const Home = () => {
    return (
        <div name='Home' className='max-w-screen-2xl px-4 my-20 container mx-auto md:px-20 '>
            <div className='flex flex-col-reverse md:flex-row my-20'>
                <div className='md:w-1/2 space-y-2 mt-12 md:mt-24'>
                    <h3 className='text-lg'>Welcome in My Feed</h3>
                    <div className=' space-x-1 text-2xl md:text-4xl'>
                        <h1 className='font-semibold'>Hello, I'm <span className='text-amber-500'>Saravan Patidar</span></h1>
                        <div className='p-1'>
                            <ReactTyped
                                className='text-amber-500'
                                strings={[
                                    "Frontend Developer", 'Web Developer', 'Software Developer'
                                ]}
                                typeSpeed={100}
                                backSpeed={50}
                                loop
                            />
                        </div>
                    </div>
                    <br />
                    <p className=' sm:w-5/6 px-4 text-sm text-justify md:text-md'>I’m recent graduate with a strong foundation in front-end development using React.js, Tailwind CSS, and Redux. I’m eager to apply my skills and enthusiasm to real-world projects and contribute to innovative web solutions.</p>
                    <br />

                    {/* social-media */}
                    <div className='flex flex-wrap justify-between items-center flex-col md:flex-row gap-5 '>
                        <div className='space-y-2'>
                            <h2 className='font-semibold text-lg'>Available on</h2>
                            <ul className='flex space-x-4'>
                                {links.map(({ url, icon }, index) => (
                                    <li key={index}><a href={url} target="_blank" rel="noopener noreferrer" className=' hover:scale-110 inline-block text-4xl'>{icon}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className='space-y-2'>
                            <h2 className='font-semibold text-lg'>Currently Working on</h2>
                            <ul className='flex space-x-4 '>
                                <FaReact className='size-9 hover:scale-110 rounded-full duration-200 border-2  ' />
                                <FaJs className='size-9 hover:scale-110 rounded-full duration-200 border-2 ' />
                                <FaCss3 className='size-9 hover:scale-110 rounded-full duration-200 border-2 ' />
                                <FaHtml5 className='size-9 hover:scale-110 rounded-full duration-200 border-2 ' />
                            </ul>
                        </div>
                    </div>
                    <a href={resume} download className="mt-5 inline-block bg-amber-400 p-3 rounded-full hover:bg-amber-500 text-center text-white">
                Download Resume
            </a>
                </div>
                <div className='md:w-1/2  flex items-center justify-center'>
                    <img src={img} alt="home-img" className='shadow-md  shadow-black rounded-full md:w-[400px] md:h-[400px]' />
                </div>
            </div>
            <div className='bg-amber-200 w-full h-0.5'></div>
        </div>

    )
}

export default Home