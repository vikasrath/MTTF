import React from 'react';
import Header from "@/components/Header/Header";
import { SparklesIcon, UserGroupIcon, CpuChipIcon, AcademicCapIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import { LightBulbIcon } from '@heroicons/react/24/solid';
import { TbCertificate, TbWriting, TbBriefcase } from "react-icons/tb";
import { FaChalkboardTeacher, FaTools, FaDatabase, FaUserTie, FaClock, FaAward } from "react-icons/fa";
import { FaMicroscope, FaRobot, FaChartLine, FaBalanceScale } from "react-icons/fa";





const DataAndAiPage = () => {

    const guidanceData = [
        {
            title: "Portfolio Development",
            description: "Showcase your AI projects effectively.",
            icon: <TbCertificate className="text-yellow-500 text-5xl mb-4" />,
        },
        {
            title: "Resume Writing",
            description: "Highlight your AI skills to attract top employers.",
            icon: <TbWriting className="text-green-500 text-5xl mb-4" />,
        },
        {
            title: "Job Placements",
            description:
                "Assistance in landing roles like Data Scientist, AI Engineer, or Research Scientist.",
            icon: <TbBriefcase className="text-blue-500 text-5xl mb-4" />,
        },
    ];
    const features = [
        { icon: <FaChalkboardTeacher className="text-blue-600 text-3xl" />, text: "Interactive Learning: Tutorials, quizzes, and collaborative forums." },
        { icon: <FaTools className="text-green-600 text-3xl" />, text: "State-of-the-Art Tools: Access to TensorFlow, PyTorch, and other AI frameworks." },
        { icon: <FaDatabase className="text-indigo-600 text-3xl" />, text: "Real-World Datasets: Work on datasets from Kaggle, OpenAI, and more." },
        { icon: <FaUserTie className="text-purple-600 text-3xl" />, text: "Expert Mentorship: Guidance from AI professionals and researchers." },
        { icon: <FaClock className="text-yellow-600 text-3xl" />, text: "Flexible Schedules: Learn at your own pace with 24/7 access." },
        { icon: <FaAward className="text-red-600 text-3xl" />, text: "Certification: Earn industry-recognized credentials to boost your career." },
      ];
      const courses = [
        { icon: <FaMicroscope className="text-blue-600 text-3xl" />, text: "AI in Healthcare: Revolutionizing diagnostics and personalized medicine." },
        { icon: <FaRobot className="text-green-600 text-3xl" />, text: "Robotics and AI: Build intelligent robotic systems." },
        { icon: <FaChartLine className="text-indigo-600 text-3xl" />, text: "AI for Business: Strategies to enhance decision-making and customer experience." },
        { icon: <FaBalanceScale className="text-red-600 text-3xl" />, text: "Ethics in AI: Understanding the societal impact of AI technologies." },
      ];
    return (

        <>

            <Header
                title=" Data Science and AI"
                description="Data and AI are revolutionizing industries through automation and smart analytics. Our platform equips you with hands-on AI skills, from machine learning to NLP, opening new career opportunities."

            />

            <div className="bg-gray-50 text-gray-800 p-6 md:p-12">
                <section className="relative text-center mb-16 px-6 py-12 bg-gradient-to-br from-indigo-900 to-indigo-700 text-white rounded-xl shadow-lg overflow-hidden">
                    {/* Floating Sparkles for a Futuristic Look */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>

                    <div className="max-w-3xl mx-auto relative z-10">
                        {/* Title with Icons */}
                        <div className="flex items-center justify-center gap-3">
                            <SparklesIcon className="w-10 h-10 text-yellow-400 animate-pulse" />
                            <h1 className="text-4xl font-extrabold tracking-tight">Explore the World of AI</h1>
                            <CpuChipIcon className="w-10 h-10 text-cyan-400 animate-bounce" />
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-200 mt-6 px-4">
                            At <strong className="text-yellow-300">MathTech Thinking Foundation</strong>, we provide hands-on training, tools, and expert knowledge in{" "}
                            <strong className="text-cyan-300">Artificial Intelligence (AI)</strong>. Whether you're a student, developer, or industry professional, our platform helps you master AI and transform ideas into reality.
                        </p>

                        {/* Features Section */}
                        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
                            <FeatureCard icon={<UserGroupIcon className="w-8 h-8 text-pink-400" />} title="Community Learning" />
                            <FeatureCard icon={<CpuChipIcon className="w-8 h-8 text-green-400" />} title="AI Expertise" />
                            <FeatureCard icon={<AcademicCapIcon className="w-8 h-8 text-yellow-400" />} title="Innovative Insights" />
                        </div>
                    </div>
                </section>

                {/* Why Learn AI Section */}

                {/* What We Offer Section */}

                <section className="mb-16">
                    {/* Section Title */}
                    <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                        What We Offer
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {/* AI Courses List */}
                        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow border-t-4 border-indigo-500">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <AcademicCapIcon className="w-8 h-8 text-indigo-600" /> Comprehensive AI Courses
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Introduction to AI and Machine Learning</li>
                                <li>• Neural Networks and Deep Learning</li>
                                <li>• Computer Vision and Image Recognition</li>
                                <li>• Natural Language Processing (NLP)</li>
                                <li>• Reinforcement Learning and AI Ethics</li>
                            </ul>
                        </div>

                        {/* Hands-On Projects List */}
                        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow border-t-4 border-indigo-500">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <CodeBracketIcon className="w-8 h-8 text-indigo-600" /> Hands-On Projects
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Predictive analytics models</li>
                                <li>• Chatbots and virtual assistants</li>
                                <li>• Image classification and face recognition systems</li>
                                <li>• Sentiment analysis for text data</li>
                            </ul>
                        </div>
                    </div>
                </section>



                {/* Learning Paths Section */}


                <section className="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 rounded-xl shadow-lg mb-16">
                    <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
                        Personalized Learning Paths
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Beginner Level */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                            <div className="flex items-center gap-4 mb-4">
                                <LightBulbIcon className="w-10 h-10 text-indigo-700 p-2 bg-yellow-300 rounded-full shadow-md" />
                                <h3 className="text-2xl font-semibold text-indigo-800">Beginner Level</h3>
                            </div>
                            <p className="text-lg text-gray-700">Basics of AI, Python programming, and simple ML algorithms.</p>
                        </div>

                        {/* Intermediate Level */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                            <div className="flex items-center gap-4 mb-4">
                                <CpuChipIcon className="w-10 h-10 text-indigo-700 p-2 bg-yellow-300 rounded-full shadow-md" />
                                <h3 className="text-2xl font-semibold text-indigo-800">Intermediate Level</h3>
                            </div>
                            <p className="text-lg text-gray-700">Neural networks, NLP, and unsupervised learning.</p>
                        </div>

                        {/* Advanced Level */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                            <div className="flex items-center gap-4 mb-4">
                                <AcademicCapIcon className="w-10 h-10 text-indigo-700 p-2 bg-yellow-300 rounded-full shadow-md" />
                                <h3 className="text-2xl font-semibold text-indigo-800">Advanced Level</h3>
                            </div>
                            <p className="text-lg text-gray-700">Deep learning, GANs, and cutting-edge AI research.</p>
                        </div>
                    </div>
                </section>



                {/* Career Guidance Section */}
                <section className="mb-16 bg-gradient-to-br from-purple-50 to-blue-100 py-16 px-6">
                    <h2 className="text-4xl font-bold text-indigo-900 text-center mb-12 drop-shadow-lg">
                        🚀 Career Guidance
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        {guidanceData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-300 flex flex-col items-center text-center"
                            >
                                {item.icon}
                                <h3 className="text-2xl font-semibold text-indigo-800 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-lg text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>


                {/* Key Features Section */}
               <section className="bg-gradient-to-br from-gray-100 to-gray-200 p-10 rounded-2xl shadow-xl max-w-5xl mx-auto mb-16">
      <h2 className="text-4xl font-bold text-indigo-900 mb-8 text-center drop-shadow-lg">
        🚀 Key Features of Our Platform
      </h2>
      <ul className="space-y-6 text-lg text-gray-700">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
            <div className="mr-4">{feature.icon}</div>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
    </section>
                
              
                 <div className="mb-16">
      {/* Upcoming Courses and Events */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 p-10 rounded-2xl shadow-xl max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-indigo-900 text-center mb-8 drop-shadow-lg">
          📅 Upcoming Courses & Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="flex items-center bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
              <div className="mr-4">{course.icon}</div>
              <span className="text-lg text-gray-700">{course.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white py-12 px-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">🚀 Join Us Today</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
          Embark on your journey to mastering Artificial Intelligence! Whether you aim to build AI-powered applications, conduct research, or innovate in the tech world, <strong className="text-yellow-300">MathTech Thinking Foundation</strong> is your trusted partner.
        </p>
        <button className="bg-yellow-400 text-indigo-900 py-3 px-8 rounded-lg text-xl font-semibold hover:bg-yellow-500 transition duration-300 shadow-md">
          Get Started Now
        </button>
      </section>
    </div>
            </div>
        </>

    );
};

export default DataAndAiPage;



// Feature Card Component
const FeatureCard = ({ icon, title }) => (
    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl shadow-md transform hover:scale-105 transition duration-300">
        {icon}
        <span className="text-lg font-medium">{title}</span>
    </div>
);
