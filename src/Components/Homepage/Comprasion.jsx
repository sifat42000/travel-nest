import React from 'react';

const Comprasion = () => {
    return (
        <div className="mb-72 md:mb-32 lg:mb-28 mt-16  px-4 max-w-[1250] container mx-auto">
            <h2 className="text-3xl font-bold text-black text-center lg:text-left">Make a Comparison</h2>
            <div className="mt-8 flex gap-4">
                {/* 1st card */}
                <div
                    className="hero bg-[url('/assets/images/comprasion/comprasion-1.jpg')] h-[400px] max-w-[573] bg-cover bg-center rounded-lg relative"
                   
                >
                    <div className="hero-overlay bg-black bg-opacity-30 rounded-lg "></div>
                    <div className="hero-content  p-4 text-neutral-content absolute bottom-0 left-0 max-w-[525px]">
                        <p className="text-white font-bold ">
                        The past offers with the highest reviews outshine others, standing as a testament to their exceptional quality.
                        </p>
                    </div>
                </div>
                {/* 2nd card */}
                <div
                    className="hero h-[400px] bg-[url('/assets/images/comprasion/comprasion-2.jpg')] max-w-[631px] bg-cover bg-center rounded-lg relative"
                   
                >
                    <div className="hero-overlay bg-black bg-opacity-30 rounded-lg"></div>
                    <div className="hero-content  p-4 text-neutral-content absolute bottom-0 left-0 max-w-[640px]">
                        <p className="text-white font-bold ">
                            Ring in the new year with iconic moments and unforgettable memories in New York City
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comprasion;
