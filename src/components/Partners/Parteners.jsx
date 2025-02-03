"use client";

import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import adiyitaCollege from "../../../public/assets/partners/aditya-college.jpg";
import bfgiLogo from "../../../public/assets/partners/BFGI-logo.jpg";
import ctUniversity from "../../../public/assets/partners/ct-university.png";
import dasmeshGirlsCollege from "../../../public/assets/partners/dasmesh-girls-college.jpg";
import mtuLogo from "../../../public/assets/partners/mtu-logo.png";
import NUm from "../../../public/assets/partners/NU.jpeg";
import sru from "../../../public/assets/partners/sru.png";
import poornima from "../../../public/assets/partners/poornima.png";
import Image from 'next/image';

function Partners() {



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1125,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const partnerImages = [adiyitaCollege, ctUniversity, dasmeshGirlsCollege, mtuLogo, NUm, sru, bfgiLogo, poornima];

    return (
        <>
            <div className='bg-gradient-to-r from-blue-50 via-white to-indigo-100 w-full '>

                <div className=''>
                    <h1 className="font-serif text-2xl lg:text-4xl mb-12 text-gray-700 text-center  pt-8">Our  Partners</h1>
                </div>
                <div className="w-full flex flex-wrap min-h-[300px] rounded-lg overflow-hidden shadow-lg">
                    
                    {/* Content Area */}
                    <div className="box1 w-full h-full">
                        <Slider {...settings}>
                            {partnerImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="flex justify-center items-center border-2 border-gray-200 p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow"
                                >
                                    <Image
                                        src={image}
                                        alt={`partner-${index}`}
                                        className="w-[150px] h-[150px] object-contain mx-auto"
                                    />
                                </div>
                            ))}

                        </Slider>

                    </div>

                </div>
            </div>


        </>
    );
}

export default Partners;

















// "use client";

// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import adiyitaCollege from "../../../public/assets/partners/aditya-college.jpg";
// import bfgiLogo from "../../../public/assets/partners/BFGI-logo.jpg";
// import ctUniversity from "../../../public/assets/partners/ct-university.png";
// import dasmeshGirlsCollege from "../../../public/assets/partners/dasmesh-girls-college.jpg";
// import mtuLogo from "../../../public/assets/partners/mtu-logo.png";
// import NUm from "../../../public/assets/partners/NU.jpeg";
// import sru from "../../../public/assets/partners/sru.png";
// import poornima from "../../../public/assets/partners/poornima.png";
// import Image from 'next/image';

// function Partners() {
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         responsive: [
//             {
//                 breakpoint: 1125,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 520,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     const partnerImages = [adiyitaCollege, ctUniversity, dasmeshGirlsCollege, mtuLogo, NUm, sru, bfgiLogo, poornima];

//     return (
//         <div className="bg-gradient-to-r bg-[#0A0F1A] w-full py-16">
//             <div className="text-center">
//                 <h1 className="text-white text-3xl lg:text-5xl font-extrabold mb-12 drop-shadow-lg">
//                     Our Partners
//                 </h1>
//             </div>

//             <div className="w-full px-6 lg:px-20">
//                 <Slider {...settings}>
//                     {partnerImages.map((image, index) => (
//                         <div
//                             key={index}
//                             className="flex justify-center items-center p-6 rounded-xl shadow-lg 
//                                 bg-white/10 hover:bg-white/20 transition-all duration-300 
//                                 hover:shadow-[0px_0px_20px_rgba(255,255,255,0.2)] backdrop-blur-lg"
//                         >
//                             <Image
//                                 src={image}
//                                 alt={`partner-${index}`}
//                                 className="w-[150px] h-[150px] object-contain mx-auto 
//                                     transition-transform duration-300 hover:scale-110"
//                             />
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     );
// }

// export default Partners;
