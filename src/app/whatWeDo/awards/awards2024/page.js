import React from 'react';
import Image from 'next/image';
import award2024 from '../../../../../public/assets/2024awards/EARG2024.jpg';
import img1 from '../../../../../public/assets/2024IEARG/IMG1.jpg';
import img2 from '../../../../../public/assets/2024IEARG/IMG2.jpg';
import img3 from '../../../../../public/assets/2024IEARG/IMG3.jpg';
import img4 from '../../../../../public/assets/2024IEARG/IMG4.jpg';
import img5 from '../../../../../public/assets/2024IEARG/IMG5.jpg';
import Header from '@/components/Header/Header';

function Award2024() {
  return (
    <>
      
        <Header
          title="IEARG Award 2024"
          description="The International EARG Awards 2024, organized by MTTF in association with Poornima Engineering College, Jaipur, took place on March 19, 2024, in Fazilka, India. Awards were presented across nine categories, including Lifetime Achievement in Academia and Research, Excellence in Academic Leadership, Research and Development, International Achievements, Innovation through Collaboration, Outstanding Faculty, Young Researcher, Young Entrepreneur, and Innovative Startup of the Year."
        />
     

      <section className="px-6 py-10 bg-gray-100">
        <div className="p-12">
          <Image src={award2024} alt="Award2024" className="shadow-md mb-5" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Gallery</h2>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

          <Image src={img2} alt="Image 2" className="w-full h-full object-cover md:p-8 rounded-md shadow-md" />
          <Image src={img3} alt="Image 3" className="w-full h-full object-cover md:p-8 rounded-md shadow-md" />
          <Image src={img4} alt="Image 4" className="w-full h-full object-cover md:p-8 rounded-md shadow-md" />
          <Image src={img5} alt="Image 5" className="w-full h-full object-cover md:p-8 rounded-md shadow-md" />
          <Image src={img1} alt="Image 1" className="w-full h-full object-cover md:p-8 rounded-md shadow-md" />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center items-center mt-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hky36VUXAUc?controls=1&modestbranding=1&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex justify-center items-center mt-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EeuSbtK8XsE?controls=1&modestbranding=1&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </section>
    </>
  );
}

export default Award2024;
