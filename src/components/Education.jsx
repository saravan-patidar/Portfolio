import React, { useState } from 'react'
import { educationData } from '../constant';

const Education = () => {
    const [card, setCard] = useState(0);

    return (
            <div className='max-w-screen-2xl mx-auto conatiner px-4 md:px-20 my-20'>
                <div className='mb-20 mx-auto '>
                    <h2 className='text-3xl md:text-4xl font-semibold '>Education</h2>
                    <div className=' my-10'>
                        <div className='md:w-4/5 mx-auto  flex flex-col sm:flex-row items-start  '>
                            {educationData && educationData.map((userDetail, i) =>
                            (<div onMouseEnter={() => setCard(i)} className={`${i == card ? 'w-full blur-none border-amber-400' : 'w-full h-10 sm:w-20 blur-[2px]'} text-center sm:pt-20  rounded-3xl space-y-2 bg-white border p-4 m-1 sm:p-6 shadow-lg  sm:h-80 overflow-hidden `}>
                                <h2 className='font-semibold text-xl sm:text-2xl md:text-4xl'>{userDetail.porfession}</h2>
                                <p className='sm:text-lg'>{userDetail.cname}</p>
                                <p>{userDetail.board}</p>
                                <p >{userDetail.year}</p>
                            </div>)
                            )}

                        </div>

                    </div>
                </div>
            <div className='bg-amber-200 w-full h-0.5'></div>
            </div>
    )
}

export default Education