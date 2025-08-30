import React from 'react'
import Destination from './Destination'
import Services from './Services'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <>
    <div className='relative h-screen bg-cover' style={{backgroundImage:"url('image/hero.png')"}}>
        <div className='absolute bg-transparent flex flex-col items-center justify-center size-[100%]'>
            <h1 className='text-6xl text-white mb-3 font-bold'>Discover the world with us</h1>
            <h3 className='text-4xl text-white mb-3 font-semibold'>Let have a fun trip together</h3>
            <button className='px-2 py-3 bg-transparent font-semibold rounded-2xl text-white border-3 border-white cursor-not-allowed bg-black'>Get Starte</button>            
        </div>
    </div>
    <Destination/>
    <Services/>
    <Testimonial/>
    </>
  )
}

export default Home
