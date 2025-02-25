import React from "react";
import Header from "@/components/Header/Header";
import { FaBookOpen, FaMicroscope, FaUserGraduate } from "react-icons/fa";
import { FaBook, FaChalkboardTeacher, FaUsers, FaBriefcase, FaGlobe, FaCertificate, FaInfinity, FaUniversalAccess, FaLightbulb } from "react-icons/fa";

const features = [
    { title: "Comprehensive Curriculum", icon: <FaBook className="text-4xl text-blue-700" /> },
    { title: "Interactive Learning", icon: <FaChalkboardTeacher className="text-4xl text-green-700" /> },
    { title: "Expert Mentorship", icon: <FaUsers className="text-4xl text-purple-700" /> },
    { title: "Career Support Services", icon: <FaBriefcase className="text-4xl text-orange-700" /> },
    { title: "Global Community", icon: <FaGlobe className="text-4xl text-teal-700" /> },
    { title: "Certifications", icon: <FaCertificate className="text-4xl text-yellow-600" /> },
    { title: "Lifetime Access", icon: <FaInfinity className="text-4xl text-red-600" /> },
    { title: "Accessibility", icon: <FaUniversalAccess className="text-4xl text-indigo-700" /> },
    { title: "Exclusive Insights", icon: <FaLightbulb className="text-4xl text-pink-700" /> },
];

function BioinformaticsPage() {

    const offers = [
        {
            title: "Expert-Led Courses",
            description: "Master genomics, protein structure, and machine learning in bioinformatics.",
            details: [
                "Genomics & Next-Gen Sequencing",
                "Protein Structure Prediction",
                "AI & Machine Learning in Bioinformatics",
                "Data Visualization & Interpretation",
            ],
            icon: <FaBookOpen className="text-purple-600 text-6xl mb-4" />,
            borderColor: "border-purple-500",
            bgColor: "bg-purple-100/40",
            titleColor: "text-purple-800",
            textColor: "text-purple-700",
        },
        {
            title: "Hands-On Training",
            description: "Gain practical experience with real-world bioinformatics projects.",
            details: [
                "Analyze DNA, RNA, & Protein Sequences",
                "Use Tools like BLAST, Biopython, & R",
                "Explore Public Datasets (GenBank, UniProt)",
            ],
            icon: <FaMicroscope className="text-blue-600 text-6xl mb-4" />,
            borderColor: "border-blue-500",
            bgColor: "bg-blue-100/40",
            titleColor: "text-blue-800",
            textColor: "text-blue-700",
        },
        {
            title: "Personalized Learning",
            description: "Custom learning paths for beginners to advanced learners.",
            details: [
                "Beginner: Intro to Essential Tools",
                "Intermediate: Genomics & Proteomics",
                "Advanced: AI-driven Bioinformatics",
            ],
            icon: <FaUserGraduate className="text-green-600 text-6xl mb-4" />,
            borderColor: "border-green-500",
            bgColor: "bg-green-100/40",
            titleColor: "text-green-800",
            textColor: "text-green-700",
        },
        {
            title: "Career Support",
            description: "Resume workshops, networking, and job placement guidance.",
            details: [],
            icon: <FaBriefcase className="text-yellow-600 text-6xl mb-4" />,
            borderColor: "border-yellow-500",
            bgColor: "bg-yellow-100/40",
            titleColor: "text-yellow-800",
            textColor: "text-yellow-700",
        },
    ]

    return (
        <>

            <Header
                title=" Bioinformatics"
                description="Unlock the potential of Bioinformatics: Learn to analyze biological data and drive innovations in genomics, healthcare, and research."
            />
            <div className="bg-gradient-to-b from-blue-50 via-white to-gray-100 text-gray-800 min-h-screen py-12">
                <div className=" w-full mx-auto">

                    {/* Why Learn Bioinformatics Section */}

                    <section className="relative py-16 bg-gradient-to-br from-blue-50 to-gray-100 flex justify-center items-center">
                        <div className="w-full mx-auto px-6">

                            <section className="text-center  bg-gradient-to-b from-blue-100 to-blue-50">
                                <h2 className="text-5xl font-extrabold text-gradient bg-clip-text text-transparent mb-6">
                                    Why Learn Bioinformatics?
                                </h2>
                                <p className="text-2xl font-serif italic text-gray-800 max-w-3xl mx-auto leading-relaxed">
                                    Bioinformatics is revolutionizing life sciences by integrating biology, computer science, and data analysis.
                                    It enables groundbreaking research in genomics, proteomics, and drug discovery, offering exciting career opportunities in healthcare, biotech, and academia.
                                </p>
                            </section>


                            {/* What We Offer Section */}
                            <div className="mt-12 bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-6">
                                <h2 className="text-5xl font-bold text-center text-blue-800 mb-12">
                                    What We Offer
                                </h2>
                                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
                                    {offers.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`p-8 shadow-lg rounded-xl text-center border-2 ${item.borderColor} ${item.bgColor} transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
                                        >
                                            <div className="flex justify-center mb-4">{item.icon}</div>
                                            <h3 className={`text-3xl font-semibold ${item.titleColor}`}>{item.title}</h3>
                                            <p className={`mt-4 text-lg ${item.textColor}`}>{item.description}</p>
                                            {item.details.length > 0 && (
                                                <ul className="mt-5 list-disc pl-8 space-y-2 text-gray-600 text-left">
                                                    {item.details.map((detail, idx) => (
                                                        <li key={idx}>{detail}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Key Features Section */}
                    <section className="mb-20 bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-6">
                        <h2 className="text-5xl font-bold text-center text-blue-900 mb-12">
                            Key Features of Our Platform
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                            {features.map((feature, index) => (
                                <div key={index} className="relative group">
                                    {/* Number Badge */}
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-white text-blue-700 text-xl font-bold flex items-center justify-center 
                        rounded-full shadow-lg border-2 border-blue-500 transform group-hover:scale-110 transition">
                                        {index + 1}
                                    </div>
                                    {/* Feature Card */}
                                    <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200 text-center flex flex-col items-center 
                        transform transition-all duration-300 hover:scale-105 hover:rotate-2 hover:shadow-2xl">
                                        {feature.icon}
                                        <h3 className="text-xl font-semibold text-gray-900 mt-4">{feature.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Join Us Section */}
                    <section className="text-center bg-gradient-to-b from-blue-100 to-blue-50 py-16 px-6 rounded-lg">
                        <h2 className="text-5xl font-bold text-blue-800 mb-6">
                            Join Us Today
                        </h2>
                        <p className="mb-8 text-xl text-gray-800 font-light max-w-2xl mx-auto">
                            Be part of the bioinformatics revolution! Enroll in our courses and start your journey to mastering the future of life sciences.
                        </p>
                        <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-20 py-5 rounded-lg font-semibold shadow-xl hover:from-blue-700 hover:to-blue-500 transform hover:scale-105 transition-all">
                            Get Started Now
                        </button>
                    </section>

                </div>
            </div>
        </>
    );
}

export default BioinformaticsPage;