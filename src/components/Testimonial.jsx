import React from 'react';
import { MdFlight } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";
import { BiSolidDish } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const services = [
    {
      image: "/image/me.png",
      name:"Hatim M. Lukmani",
      location: 'Surat , Gujarat',
      description: 'Nice Experience, I have been to many places with Zyan Tours & Travels. They provide best services and very good hospitality. I will definitely travel again with them.',
    },
    {
      image: "/image/me.png",
      name:"Hatim M. Lukmani",
      location: 'Surat , Gujarat',
      description: 'Nice Experience, I have been to many places with Zyan Tours & Travels. They provide best services and very good hospitality. I will definitely travel again with them.',
    },
    {
      image: "/image/me.png",
      name:"Hatim M. Lukmani",
      location: 'Surat , Gujarat',
      description: 'Nice Experience, I have been to many places with Zyan Tours & Travels. They provide best services and very good hospitality. I will definitely travel again with them.',
    },
    {
      image: "/image/me.png",
      name:"Hatim M. Lukmani",
      location: 'Surat , Gujarat',
      description: 'Nice Experience, I have been to many places with Zyan Tours & Travels. They provide best services and very good hospitality. I will definitely travel again with them.',
    },
  ];

  return (
    <div className="mt-8 container mx-auto">
      <div className="flex items-center flex-col font-bold text-3xl justify-center gap-4">
        <p>What Our Client Say</p>
        <div className="w-full px-2 max-w-full overflow-hidden h-[350px]">
          <Slider {...settings}>
            {services.map((product, index) => (
              <div key={index} className="p-3">
                <div className="bg-white rounded-2xl border-2 border-slate-300 p-5 flex flex-col items-center gap-3 shadow-md">
                  <img src={product.image} alt={product.name} className="h-24 w-24 rounded-full" />
                  <p className="text-[16px] font-semibold">{product.name}</p>
                  <p className="text-[14px] text-gray-600">{product.location}</p>
                  <p className="text-[14px] italic text-gray-600 text-center">{product.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
