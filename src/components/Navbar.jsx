import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <div className='fixed inset-0 m-3    z-50'>
    <div className='flex items-center justify-between px-4 py-3 border-2 border-slate-300  bg-white rounded-xl'>
        <h1 className='font-bold text-'>Zyan Tours & Travels</h1>
        <div className='flex gap-5 items-center justify-between'>
        <Link to={"/"} className='text-black font-bold'>Home</Link>
        <Link to="/gallery" className='text-black font-bold'>Gallery</Link>
        <Link to="/about" className='text-black font-bold'>About</Link>
        <Link to="/contact" className='text-black font-bold'>Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar
