'use client';

import React, { useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";


const Banner1 = () => {
    const [activeBtn, setActiveBtn] = useState(null);

    const buttons = [
        { label: 'Special offers', id: 1 },
        { label: 'Last Search', id: 2 },
        { label: 'Trending destinations', id: 3 },
        { label: 'Highest Reviewed', id: 4 },
        { label: 'Highest Reviewed', id: 5 },
    ];

    return (
        <div className="hero bg-[url('/assets/images/main-banner/banner1.jpg')] h-[820px] relative ">
            <div className="hero-overlay bg-black bg-opacity-20"></div>

            {/* Hero Content */}
            <div className="hero-content text-neutral-content text-center -mt-96">
                <div className="max-w-md">
                    <h1 className="mb-7 text-5xl font-bold text-black">Why Choose Us?</h1>
                    
                        <button className="ml-11  text-xl btn btn-primary w-[250px] h-[10px] flex justify-center items-center gap-4 border border-solid rounded-[6px]">
                            Explore More
                            <MdArrowForwardIos />

                        </button>
                    
                </div>
            </div>

            {/* Overlay Content */}
            <div className="absolute bottom-[340px] lg:bottom-[159px] w-full text-center">
                <h6 className="text-3xl md:text-5xl lg:text-7xl text-[#F9F9F9]">Exclusive Hotel Search!</h6>
            </div>

            {/* Buttons */}
            <div className="absolute bottom-0 left-0  flex flex-wrap justify-center lg:justify-start lg:gap-1 lg:absolute lg:left-[253px] lg:bottom-0">
                {buttons.map((btn) => (
                    <button
                        key={btn.id}
                        onClick={() => setActiveBtn(btn.id)}
                        className={`w-[275px]  h-[48px] font-bold border border-[#07689F] m-2 lg:m-0 ${
                            activeBtn === btn.id
                                ? 'bg-white text-[#07689F] text-xl '
                                : 'bg-[#D9D9D9] text-[#07689F]'
                        }`}
                    >
                        {btn.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Banner1;
