'use client'
import React, { useState } from 'react';

const UnderNav = () => {
    // Track the active button
    const [activeBtn, setActiveBtn] = useState(null);

    // Define the buttons and their labels
    const buttons = [
        { label: 'Trip', id: 1 },
        { label: '%Deals', id: 2 },
        { label: 'Hotel', id: 3 },
        { label: 'Flight', id: 4 },
        { label: 'Apartment', id: 5 },
        { label: 'Camper', id: 6 },
    ];

    return (
        <div className=' ml-0 lg:ml-96   mt-12 mb-20'>
            {/* Map through each button */}
            {buttons.map((btn) => (
                <button
                    key={btn.id}
                    onClick={() => setActiveBtn(btn.id)} // Set active button id on click
                    className={`${activeBtn === btn.id ? "bg-[#07689F] text-[#FFFFFF] font-bold" : "bg-white"} 
                        p-2 w-[121.33px] h-[40px]  border border-[#A6A6A6] mb-[-3] lg:mb-0  gap-4`}
                        style={{
                            borderWidth: "1px",
                            borderStyle: "solid",
                            padding: "8px 16px",
                            margin: "0px 16px",
                            borderRadius: "20px",
                        }}
                >
                    {btn.label}
                </button>
            ))}
        </div>
    );
};

export default UnderNav;
