"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBrain, FaChartBar, FaDna, FaBusinessTime, FaUserGraduate, FaUsers } from "react-icons/fa";

const servicesDetail = [
    {
        title: "AI & Machine Learning",
        description: "Explore AI and ML solutions, leveraging advanced algorithms to drive innovation and intelligent decision-making.",
        icon: <FaBrain className="text-6xl text-blue-500 drop-shadow-lg" />,
        path: "/whatWeDo/services/dataAndAi"
    },
    {
        title: "Data Analytics",
        description: "Utilize data-driven insights to make informed decisions, optimize processes, and improve business strategies.",
        icon: <FaChartBar className="text-6xl text-green-500 drop-shadow-lg" />,
        path: "/whatWeDo/services/dataanalytics"
    },
    {
        title: "Bioinformatics",
        description: "Integrate biological data with computational techniques to uncover insights in healthcare, genomics, and life sciences.",
        icon: <FaDna className="text-6xl text-purple-500 drop-shadow-lg" />,
        path: "/whatWeDo/services/bioinformatics"
    },
    {
        title: "Business Intelligence",
        description: "Enhance decision-making with BI tools, transforming raw data into actionable insights for better business strategies.",
        icon: <FaBusinessTime className="text-6xl text-yellow-500 drop-shadow-lg" />,
        path: "/whatWeDo/services/businessIntelligence"
    },
    {
        title: "Internship Opportunities",
        description: "Explore internship opportunities in fields like Web Development, Data Analysis, Digital Marketing, and more through AICTE-India.",
        icon: <FaUserGraduate className="text-6xl text-red-500 drop-shadow-lg" />,
        path: "/whatWeDo/services/internship"
    },
    {
        title: "Joint Event Collaborations",
        description: "Partner with MathTechGuru to organize collaborative programs and events, sharing expertise and increasing productivity.",
        icon: <FaUsers className="text-6xl text-indigo-500 drop-shadow-lg" />,
        path: "/whatWeDo/services/joint-events"
    },
];

const ServicesSection = () => {
    return (
        <section className="py-20 bg-gradient-to-br border-2 from-blue-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-6">Our Services</h2>
            <p className="text-gray-600 text-lg mb-12">
                Discover our innovative services designed to boost technology and career growth.
            </p>
    
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ root : true}}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2,duration:1 } }
                }}
            >
                {servicesDetail.map((service, index) => (
                    <Link href={service.path} key={index} passHref>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 100 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="relative bg-white/50 backdrop-blur-lg border border-gray-200 shadow-lg 
                                rounded-xl p-8 flex flex-col items-center text-center cursor-pointer 
                                hover:shadow-xl transition duration-300 group"
                        >
                            <div className="mb-5 transition duration-300 group-hover:scale-110">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition">{service.title}</h3>
                            <p className="text-gray-600 mt-3 leading-relaxed">{service.description}</p>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl"></div>
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
        </div>
    </section>
    
    );
};

export default ServicesSection;








// "use client";

// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { FaBrain, FaChartBar, FaDna, FaBusinessTime, FaUserGraduate, FaUsers } from "react-icons/fa";

// const servicesDetail = [
//     {
//         title: "AI & Machine Learning",
//         description: "Explore AI and ML solutions, leveraging advanced algorithms to drive innovation and intelligent decision-making.",
//         icon: <FaBrain className="text-6xl text-blue-500 drop-shadow-lg" />,
//         path: "/whatWeDo/services/dataAndAi"
//     },
//     {
//         title: "Data Analytics",
//         description: "Utilize data-driven insights to make informed decisions, optimize processes, and improve business strategies.",
//         icon: <FaChartBar className="text-6xl text-green-500 drop-shadow-lg" />,
//         path: "/whatWeDo/services/dataanalytics"
//     },
//     {
//         title: "Bioinformatics",
//         description: "Integrate biological data with computational techniques to uncover insights in healthcare, genomics, and life sciences.",
//         icon: <FaDna className="text-6xl text-purple-500 drop-shadow-lg" />,
//         path: "/whatWeDo/services/bioinformatics"
//     },
//     {
//         title: "Business Intelligence",
//         description: "Enhance decision-making with BI tools, transforming raw data into actionable insights for better business strategies.",
//         icon: <FaBusinessTime className="text-6xl text-yellow-500 drop-shadow-lg" />,
//         path: "/whatWeDo/services/businessIntelligence"
//     },
//     {
//         title: "Internship Opportunities",
//         description: "Explore internship opportunities in fields like Web Development, Data Analysis, Digital Marketing, and more through AICTE-India.",
//         icon: <FaUserGraduate className="text-6xl text-red-500 drop-shadow-lg" />,
//         path: "/whatWeDo/services/internship"
//     },
//     {
//         title: "Joint Event Collaborations",
//         description: "Partner with MathTechGuru to organize collaborative programs and events, sharing expertise and increasing productivity.",
//         icon: <FaUsers className="text-6xl text-indigo-500 drop-shadow-lg" />,
//         path: "/whatWeDo/services/joint-events"
//     },
// ];

// // const ServicesSection = () => {
// //     return (
// //         <section className="py-20 bg-[#0A0F1A]">
// //         <div className="max-w-6xl mx-auto px-6 text-center">
// //             <h2 className="text-5xl font-extrabold text-white mb-6">Our Services</h2>
// //             <p className="text-lg text-gray-300 mb-12">
// //                 Discover our innovative services designed to boost technology and career growth.
// //             </p>

// //             <motion.div
// //                 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 viewport={{ once: false }}
// //                 variants={{
// //                     hidden: { opacity: 0, y: 50 },
// //                     visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 1 } },
// //                 }}
// //             >
// //                 {servicesDetail.map((service, index) => (
// //                     <Link href={service.path} key={index} passHref>
// //                         <motion.div
// //                             variants={{
// //                                 hidden: { opacity: 0, y: 100 },
// //                                 visible: { opacity: 1, y: 0 },
// //                             }}
// //                             whileHover={{ scale: 1.05 }}
// //                             whileTap={{ scale: 0.97 }}
// //                             className="relative backdrop-blur-lg border border-gray-700 shadow-md
// //                                 rounded-xl p-8 flex flex-col items-center text-center cursor-pointer 
// //                                 hover:shadow-[0px_0px_15px_rgba(100,255,218,0.3)] transition duration-300 group"
// //                         >
// //                             <div className="mb-5 transition duration-300 group-hover:scale-110">
// //                                 {service.icon}
// //                             </div>
// //                             <h3 className="text-2xl font-bold group-hover:text-[#64ffda] transition text-white">
// //                                 {service.title}
// //                             </h3>
// //                             <p className="mt-3 leading-relaxed text-gray-300">{service.description}</p>
// //                             <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#64ffda]/20 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl"></div>
// //                         </motion.div>
// //                     </Link>
// //                 ))}
// //             </motion.div>
// //         </div>
// //     </section>
    
// //     );
// // };

// // export default ServicesSection;
