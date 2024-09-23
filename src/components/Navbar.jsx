import React, { useState } from 'react'
import { GiTireIronCross } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";
import photo from '../assets/photo.avif';
import { Link } from 'react-scroll';
import { navItems } from '../constant';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>

            <nav className='max-w-screen-2xl z-20 bg-white mx-auto container px-2 md:px-20 h-16 shadow-md border fixed top-0 right-0 left-0'>
                <div className='flex justify-between h-16 items-center font-semibold '>
                    <div className='flex space-x-2'>
                        <img src={photo} alt="photo" className='w-12 h-12 rounded-full' />
                        <h2 className='cursor-pointer text-lg'>Sarava<span className='text-amber-500'>n</span>
                            <p className='text-sm'>Web Developer</p>
                        </h2>
                    </div>
                    <div>
                        <ul className='hidden md:flex space-x-8'>
                            {navItems.map((items) =>
                            (<li className='hover:scale-x-110 hover:border-b-2 border-amber-400' key={items.id}>
                                <Link to={items.text} smooth={true} duration={500} offset={-70} activeClass='active'> {items.text}</Link>
                            </li>)
                            )}
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden'>{menu ? <GiTireIronCross size={24} /> : <CgMenuGridO size={24} />}</div>
                    </div>
                </div>
                {menu && <div >
                    <ul className='md:hidden bg-white flex flex-col justify-center items-center h-screen -mt-16 font-semibold text-xl space-y-5 '>
                        {navItems.map((items) =>
                        (<li className='hover:scale-x-110' key={items.id}>
                            <Link to={items.text} onClick={() => setMenu(!menu)} smooth={true} duration={500} offset={-70} activeClass='active'> {items.text}</Link>
                        </li>)
                        )}
                    </ul>
                </div>}
            </nav>
        </>
    )
}

export default Navbar;