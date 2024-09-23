import React from 'react'
import { links } from '../constant';
const Footer = () => {


  return (
    <footer className='sm:p-3 bg-gray-50 '>
      <div className='sm:container mx-auto flex justify-center sm:justify-around flex-wrap items-center p-4 font-semibold text-gray-500 '>
        <div>Designed and Developed by Saravan Patidar</div>
        <div>Copyright @2024</div>
        <div className='flex space-x-3 text-2xl'>
          <ul className='flex space-x-4'>
            {links.map(({ url, icon }, index) => (
              <li key={index}><a href={url} className=' hover:scale-110 inline-block text-2xl'>{icon}</a></li>
            ))}
          </ul>
        </div>
      </div>


    </footer>
  )
}

export default Footer