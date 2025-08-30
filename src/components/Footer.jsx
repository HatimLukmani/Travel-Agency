import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-slate-900 py-8 px-40'>
      <div className='flex justify-between mb-3'>
        <div className='flex flex-col gap-3'>
            <p className='text-white font-bold text-[20px]'>Travel Agency</p>
            <p className='text-white  text-[14px] font-normal'>Zyan tours & travels for your service</p>
        </div>
        <div className='flex flex-col gap-2 items-start'>
            <p className='text-white font-bold text-[16px]'>Quick Links</p>
           <Link className='text-white font-normal text-[14px] cursor-pointer'>Home</Link>
           <Link className='text-white font-normal text-[14px]'>About</Link>
           <Link className='text-white font-normal text-[14px]'>Contact Us</Link>
           <Link className='text-white font-normal text-[14px]'>Gallery</Link>
        </div>
        <div>
            <p className='text-white font-bold text-[14px]'>Follow Us</p>
            <div className='mt-2 flex gap-1.5 '>
            <FaFacebook className='text-white font-bold text-[14px]'/>
            <FaInstagram className='text-white font-bold text-[14px]'/>
            <FaXTwitter className='text-white font-bold text-[14px]'/>
            </div>
        </div>
      </div>
      <div className='flex justify-between border-t-1 border-white pt-4'>
        <p className='text-white  text-[14px] font-normal'>@copy All Right Reserved by Zyan Tours</p>
        <p className='text-white  text-[14px] font-normal'>Read our terms</p>
        </div>
    </div>
  )
}

export default Footer
