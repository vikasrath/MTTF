"use client";

import React from 'react';
import Header from '@/components/Header/Header';
import { useState } from 'react';
import { FaBullseye, FaHandshake } from "react-icons/fa";
import { leaders } from './leadersData';
import LeadershipCard from '@/components/LeadershipCard/LeadershipCard';

function GoverningBody() {

  const [selected, setSelected] = useState("leadership");

  const handleSelect = (role) => {
    setSelected(role);
  }

  const data = leaders[selected];

  return (
    <>


      <Header
        title="Our Leaders"
        description="Great leaders inspire growth, empower minds, and pave the way for innovation and excellence."
      />
      <div className="relative flex justify-center items-center mt-20 bg-gray-200 w-fit mx-auto rounded-2xl text-gray-700 overflow-hidden">
      {/* Sliding Background (Blue Part) */}
      <div
        className="absolute top-0 left-0 h-full w-1/2 bg-[#3784A8] transition-all duration-500"
        style={{
          transform: selected === "leadership" ? "translateX(0)" : "translateX(100%)",
        }}
      ></div>

      {/* Button Container */}
      <div className="flex relative z-10">
        {/* Leadership Button */}
        <div
          onClick={() => handleSelect("leadership")}
          className={`flex items-center justify-center gap-2 px-6 w-40 py-3 rounded-2xl font-semibold transition-all duration-300 focus:outline-hidden ${
            selected === "leadership"
              ? "bg-[#3784A8] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          <FaBullseye size={20} /> Leadership
        </div>

        {/* Advisors Button */}
        <div
          onClick={() => handleSelect("advisory")}
          className={`flex items-center justify-center gap-2 px-6 w-40 py-3 rounded-2xl font-semibold transition-all duration-300 ${
            selected === "advisory"
              ? "bg-[#3784A8] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          <FaHandshake size={20} /> Advisors
        </div>
      </div>
    </div>

      {/* leadership and advisorcomittee */}
      
      {data && (
        <div className="flex flex-col  md:p-0 pt-24">
          <div className="flex flex-wrap px-15 pb-16">
            {data.map((member) => (
              <div key={member.memberId} className=" w-full md:w-[50%] xl:w-1/3 mt-8 ">
                <LeadershipCard leader={member} />
              </div>
            ))}
          </div>
        </div>
      )}

    </>
  );
}

export default GoverningBody;
