import React from 'react';
import Ball from '../assets/ball.png';
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='fixed pb-[64px] w-full h-auto'>
       <div className='flex justify-between items-center py-6 px-8 bg-slate-400 w-[90vw] m-auto'>
          <div className='flex items-center'>
              <img className='w-[50px] h-[50px]' src={Ball} alt="Icono" />
              <h1 className='px-6 uppercase'>Plaza Italia Basquet</h1>
          </div>
          <nav>
              <ul className='flex list-none'>
                <li className='px-8'><a title='Home' href="#">Home</a></li>
                <li className='px-8'><a title='Nosotros' href="#">Nosotros</a></li>
                <li className='px-8'><a title='Torneos' href="#">Torneos</a></li>
                <li className='px-8'><a title='Contacto' href="#">Contacto</a></li>  
              </ul>
          </nav>
          <div>
            <AiOutlineMenu size={20}/>
          </div>
          <nav>
              <ul className='fixed left-0 top-0 w-[50%]'>
                <li className='px-8'><a title='Home' href="#">Home</a></li>
                <li className='px-8'><a title='Nosotros' href="#">Nosotros</a></li>
                <li className='px-8'><a title='Torneos' href="#">Torneos</a></li>
                <li className='px-8'><a title='Contacto' href="#">Contacto</a></li>  
              </ul>
          </nav>
        </div>   
    </div>
  )
}

export default Navbar