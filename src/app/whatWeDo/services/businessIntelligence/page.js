import Header from "@/components/Header/Header";
import React from "react";
import { DevicePhoneMobileIcon, ChartBarIcon, LifebuoyIcon } from "@heroicons/react/24/solid";
import { AcademicCapIcon, LightBulbIcon, CogIcon, BookOpenIcon, UsersIcon } from "@heroicons/react/24/solid";


const BusinessIntelligence = () => {
    const educationData = [
        { title: "Student Success and Retention", desc: "Identify struggling students early and provide targeted support.", icon: <AcademicCapIcon className="w-10 h-10 text-blue-500" /> },
        { title: "Enhanced Teaching Strategies", desc: "Analyze teaching effectiveness and refine approaches.", icon: <LightBulbIcon className="w-10 h-10 text-green-500" /> },
        { title: "Operational Efficiency", desc: "Streamline administrative tasks and optimize resource management.", icon: <CogIcon className="w-10 h-10 text-yellow-500" /> },
        { title: "Curriculum Development", desc: "Design and update curricula to align with industry trends.", icon: <BookOpenIcon className="w-10 h-10 text-purple-500" /> },
        { title: "Parental Engagement", desc: "Foster collaboration by sharing meaningful insights with parents.", icon: <UsersIcon className="w-10 h-10 text-pink-500" /> },
    ];

    return (
        <>

            <Header
                title=" Business Intelligence"
                description="Empowering businesses to unlock their full potential with Business Intelligence"
            />

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 md:p-6">
                <div className="max-w-7xl mx-auto">


                    <section className="mb-16 bg-gradient-to-br from-blue-50 to-white p-6 lg:p-12 rounded-3xl shadow-xl transform hover:scale-105 transition-all">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                            What is Business Intelligence in Education?
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg text-center max-w-3xl mx-auto mb-8">
                            Business Intelligence refers to the process of collecting, analyzing, and visualizing data to derive actionable insights. In the context of education, BI enables institutions to:
                        </p>
                        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            {[
                                { text: "Monitor academic performance.", icon: "📊" },
                                { text: "Optimize resource allocation.", icon: "📈" },
                                { text: "Enhance curriculum design.", icon: "📘" },
                                { text: "Personalize learning experiences.", icon: "🎓" },
                                { text: "Improve administrative efficiency.", icon: "⚙️" }
                            ].map((item, index) => (
                                <li key={index} className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                                    <div className="bg-gradient-to-r from-blue-300 to-blue-600 p-3 rounded-full">
                                        <span className="text-3xl text-white">{item.icon}</span>
                                    </div>
                                    <span className="text-gray-700 text-lg">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </section>



                    <section className="mb-16 p-6 ">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">
                            Our BI Features and Capabilities
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                "Comprehensive Data Analytics",
                                "Real-Time Dashboards",
                                "Predictive Analytics",
                                "Personalized Reporting",
                                "Integration with Learning Management Systems (LMS)",
                                "Data Security and Compliance",
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow border-t-4 border-blue-500"
                                >
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                        {feature}
                                    </h3>
                                    <p className="text-gray-600">
                                        Description of how this feature benefits educational institutions.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>



                    <section className="mb-16 bg-gradient-to-br from-blue-100 to-white p-6 lg:p-10 rounded-2xl shadow-xl">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                            How We Transform Education with BI
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {educationData.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 bg-white p-3 lg:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200"
                                >
                                    <div className="p-3 bg-gray-100 rounded-full">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                        <p className="text-gray-700">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>



                    <section className="mb-16 p-6 lg:p-10 bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                            Why Choose Our BI Solutions?
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                            {[
                                { title: "Education-Centric Approach", desc: "Tools tailored to educational needs.", icon: <AcademicCapIcon className="w-10 h-10 text-indigo-600" /> },
                                { title: "User-Friendly Interfaces", desc: "Intuitive platforms for non-technical users.", icon: <DevicePhoneMobileIcon className="w-10 h-10 text-blue-500" /> },
                                { title: "Scalability", desc: "Solutions that grow with your institution.", icon: <ChartBarIcon className="w-10 h-10 text-green-500" /> },
                                { title: "Expert Support", desc: "Dedicated support and training from our BI team.", icon: <LifebuoyIcon className="w-10 h-10 text-red-500" /> },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
                                >
                                    <div className="p-3 bg-gray-100 rounded-full">{item.icon}</div>
                                    <div>
                                        <strong className="text-lg text-gray-800">{item.title}:</strong>
                                        <p className="text-gray-700">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>


                    <section className="mb-16 p-4 lg:p-0">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Success Stories</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Boosting Academic Performance",
                                    content:
                                        "With our BI platform, [Institution Name] achieved a 20% improvement in academic performance within a year.",
                                },
                                {
                                    title: "Optimizing Resource Allocation",
                                    content:
                                        "Using predictive analytics, [Institution Name] reduced operational costs by 15%.",
                                },
                            ].map((story, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow border-t-4 border-green-500"
                                >
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                        {story.title}
                                    </h3>
                                    <p className="text-gray-600">{story.content}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <footer className="bg-blue-600 text-white text-center py-8 rounded-xl">
                        <h2 className="text-3xl font-bold mb-4">Join the Future of Education</h2>
                        <p className="text-lg mb-4">
                            Contact us today to learn how our Business Intelligence solutions can empower your institution.
                        </p>
                        <div className="text-lg">
                            <p>Email: contactus@mttf.in.com</p>
                            <p>Phone: +1-336-493-9643</p>
                            <p>Website: mttfhub.com</p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default BusinessIntelligence;
