"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function ServicesCard({ title, discription, logoStatic, logoGif, path }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={path}
            className="relative w-96 rounded-xl border border-gray-700 bg-[#121826] text-white shadow-lg p-8 space-y-4 
                flex flex-col items-center justify-center overflow-hidden transition-transform duration-300 
                hover:scale-105 hover:shadow-[0px_0px_15px_rgba(100,255,218,0.3)]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Neon Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#64ffda]/20 opacity-0 
                transition-opacity duration-500 group-hover:opacity-100 rounded-xl"></div>

            {/* Image with hover transition */}
            <div className="w-24 transition-transform duration-300 group-hover:scale-110">
                <Image src={isHovered ? logoGif : logoStatic} alt="service logo" className="h-full w-full" />
            </div>

            {/* Title with Glow Effect */}
            <h1 className="font-extrabold text-2xl text-[#64ffda] transition duration-300 group-hover:text-white">
                {title}
            </h1>

            {/* Description */}
            <p className="text-sm leading-6 text-gray-300 text-center">
                {discription}
            </p>
        </Link>
    );
}

export default ServicesCard;
