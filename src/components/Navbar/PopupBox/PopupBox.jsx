import React from 'react';
import Link from 'next/link';


function PopupBox({ linkBox, closeIcon }) {
    return (
        <div className="absolute  w-full h-screen top-24 shadow-lg border-t-2 border-white z-10">
            <div className="bg-gradient-to-r px-4 lg:px-24 from-[#252a3d] to-[#3f4957] w-full h-full relative ">
                
                <button
                    className="absolute top-4 right-6 text-white text-[50px] font-bold hover:text-gray-300 transition duration-200"
                    onClick={() => closeIcon(null)}
                >
                    &times;
                </button>

                <div className="p-6 flex flex-wrap justify-center gap-8 max-w-6xl mx-auto ">
                    {linkBox.map((category, index) => (
                        <div key={index} className="flex-1 min-w-[200px] text-white  space-y-4">
                            {category.links && (
                                <h3 className="text-2xl font-semibold">{category.heading}</h3>
                            )}
                            
                            <ul className="space-y-2  ">
                                {category.links ? (
                                    category.links.map((link, linkIndex) => (
                                        <li key={linkIndex} className="   transition-transform duration-200">
                                            <Link
                                                href={link.path}
                                                className="block text-[17px]  text-white hover:bg-gray-800 p-2 rounded-md transition-colors duration-200"
                                                onClick={() => closeIcon(null)}
                                            >
                                                {link.linkName}
                                            </Link>
                                        </li>
                                    ))
                                ) : (
                                    <li className="transition-transform duration-200">
                                        <Link
                                            href={category.link}
                                            className="block text-white hover:bg-gray-800 p-2 rounded-md transition-colors duration-200"
                                            onClick={() => closeIcon({ whatWeDo: false, whatWeThink: false, whoWeAre: false })}
                                        >
                                            {category.heading}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PopupBox;
