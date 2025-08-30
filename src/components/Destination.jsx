import React from 'react'

const Destination = () => {
    // ...existing code...
const destinations = [
  {
    image: 'image/gal1.jpg',
    title: 'Gal 1',
    description: 'Discover the beauty of Gal 1 with stunning landscapes and vibrant culture.',
  },
  {
    image: 'image/gal2.jpg',
    title: 'Gal 2',
    description: 'Experience the adventure in Gal 2, known for its exciting activities.',
  },
  {
    image: 'image/gal3.png',
    title: 'Gal 3',
    description: 'Relax in Gal 3, a perfect destination for peace and tranquility.',
  },
  {
    image: 'image/gal4.jpg',
    title: 'Gal 4',
    description: 'Explore the history and heritage of Gal 4, rich in tradition.',
  },
];
// ...existing code...
  return (
    <div className='mt-8 container mx-auto '>
      <div className=' flex items-center flex-col font-bold text-3xl justify-center gap-4'>
        <p >Popular Destinations</p>
        <div className='grid grid-cols-4 gap-2 p-4'>
        {
            destinations.map((product)=>{
                return (
                    <div className='bg-white rounded-2xl border-2 border-slate-300'>
                        <img src={product.image} height={"200px"} className='object-cover rounded-t-2xl max-h-[200px] min-h-[200px] w-full'/>
                        <div className='mt-2 p-3'>
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

export default Destination
