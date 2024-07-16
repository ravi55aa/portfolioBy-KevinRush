import React from 'react'
import logo from '../assets/kevinRushLogo.png';
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
const NavBar = () => {
  return (
    <div className='flex justify-between items-center mb-10 py-10'>
        <div className='LogoHolder flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt="logo" />
        </div>
        <div className='text-2xl m-2 flex justify-center items-center gap-4'>
        <FaLinkedin/>
        <FaTwitterSquare/>
        <FaInstagramSquare/>
        <FaWhatsapp/>
        </div>
    </div>
  )
}


export default NavBar