import React from 'react'
import { MdFlight } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";
import { BiSolidDish } from "react-icons/bi";


const Services = () => {
    // ...existing code...
const services = [
  {
    icon: <MdFlight size={40} />,
    title: 'Flight Booking',
    description: 'Book flights to your favorite destinations with ease and convenience.',
  },
  {
    icon: <FaRegBuilding size={40} />,
    title: 'Hotel Stay',
    description: 'Find and reserve the best hotels for a comfortable stay.',
  },
  {
    icon: <FaUmbrellaBeach size={40} />,
    title: 'Beach Tours',
    description: 'Enjoy relaxing and adventurous beach tours at top locations.',
  },
  {
    icon: <BiSolidDish size={40} />,
    title: 'Local Cuisine',
    description: 'Taste delicious local dishes and experience culinary delights.',
  },
];
// ...existing code...
  return (
    <div className='mt-8 container mx-auto '>
      <div className=' flex items-center flex-col font-bold text-3xl justify-center gap-4'>
        <p >Our Services</p>
        <div className='grid grid-cols-4 gap-2 p-4'>
        {
            services.map((product)=>{
                return (
                    <div className='bg-white rounded-2xl border-2 border-slate-300 p-3'>
                        <div className='flex items-end justify-center h-[50px] max-h-[50px] '>{product.icon}</div>
                        <div className='mt-4 flex flex-col items-center'>
                            <p className='text-2xl '>{product.title}</p>
                            <p className='text-sm font-normal'>{product.description}</p>
                        </div>
                    </div>
                )
            })
        }
        </div>
        </div>
    </div>
  )
}

export default Services
