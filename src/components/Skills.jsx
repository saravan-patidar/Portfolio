import React from 'react'
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { SiJavascript, SiReact, SiPython, SiTailwindcss, SiGithub } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
    return (
            <section name='Skills' className='max-w-screen-2xl mx-auto conatiner px-4 md:px-20 md:my-20'>
                <h2 className='text-3xl md:text-4xl font-semibold '>Skills</h2>

                <div className='flex justify-center p-4 sm:p-10 flex-wrap gap-4 sm:gap-10'>
                    <div className='inline-block w-28  p-2 rounded-lg  border border-amber-300 shadow-lg shadow-amber-300'>
                        <ImHtmlFive className='text-5xl md:text-6xl mx-auto m-2  rounded-xl animate-spin-slow' />
                        <h5 className='text-center'>HTML</h5>
                    </div>
                    <div className='inline-block w-28 p-2 rounded-lg border border-amber-300 shadow-lg shadow-amber-300'>
                        <ImCss3 className='text-5xl md:text-6xl mx-auto m-2  rounded-xl animate-spin-slow' />
                        <h5 className=' text-center'>CSS</h5>
                    </div>
                    <div className='inline-block w-28  p-2 rounded-lg border border-amber-300 shadow-lg shadow-amber-300'>
                        <SiJavascript className='text-5xl md:text-6xl mx-auto m-2  rounded-xl animate-spin-slow' />
                        <h5 className='text-center'>JavaScript</h5>
                    </div>
                    <div className='inline-block w-28 p-2 rounded-lg border border-amber-300 shadow-lg shadow-amber-300'>
                        <SiReact className='text-5xl md:text-6xl m-2 mx-auto rounded-xl animate-spin-slow' />
                        <h5 className='text-center'>React Js</h5>
                    </div>
                    <div className='inline-block w-28  p-2 rounded-lg border border-amber-300 shadow-lg shadow-amber-300'>
                        <SiTailwindcss className='text-5xl md:text-6xl mx-auto m-2  rounded-xl animate-spin-slow' />
                        <h5 className='text-center'>Tailwindcss</h5>
                    </div>
                    <div className='inline-block w-28 p-2 rounded-lg border border-amber-300 shadow-lg shadow-amber-300'>
                        <SiPython className='text-5xl md:text-6xl mx-auto m-2  rounded-xl animate-spin-slow' />
                        <h5 className='text-center'>Python</h5>
                    </div>
                    <div className='inline-block w-28 p-2 rounded-lg border border-amber-300 shadow-lg shadow-amber-300'>
                        <TbSql className='text-5xl md:text-6xl mx-auto m-2  rounded-xl animate-spin-slow' />
                        <h5 className='text-center'>SQl</h5>
                    </div>

                </div>

                <div className='my-5 '>
                    <h5 className='capitalize text-center sm:text-3xl'> <span className="text-amber-300">Tool</span> i used</h5>
                    <div className='flex justify-center p-4 sm:p-10 flex-wrap gap-4 sm:gap-10'>
                        <div className='inline-block w-28  p-2 rounded-lg  border border-amber-300 shadow-lg shadow-amber-300'>
                            <VscVscode className='text-5xl md:text-6xl mx-auto m-2  rounded-xl animate-spin-slow' />
                            <h5 className='text-center'>VS Code</h5>
                        </div>
                        <div className='inline-block w-28  p-2 rounded-lg  border border-amber-300 shadow-lg shadow-amber-300'>
                            <SiGithub className='text-5xl md:text-6xl mx-auto m-2  rounded-xl animate-spin-slow' />
                            <h5 className='text-center'>VS Code</h5>
                        </div>
                    </div>
                </div>
                <div className='bg-amber-200 w-full h-0.5'></div>
            </section>
    )
}

export default Skills