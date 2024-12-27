import React from 'react';

const Cards = () => {
    return (
        <div className="mt-20 px-4 lg:px-0 container mx-auto">
            {/* Grid container for cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-4">
                {/* 1st card */}
                <div className="hero bg-[url('/assets/images/carts/cart-1.jpg')] h-[420px]">
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-neutral-content lg:mt-[310px]">
                        <p className="mb-5 text-white font-bold  lg:text-left">
                            Reserve Your Hotel, Pursue Your Team
                        </p>
                    </div>
                </div>
                {/* 2nd card */}
                <div className="hero bg-[url('/assets/images/carts/cart-2.jpg')] h-[420px]">
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-neutral-content lg:mt-[340px]">
                        <p className="mb-5 text-white font-bold text-center lg:text-left">
                            Subscribe Our Newsletter
                        </p>
                    </div>
                </div>
                {/* 3rd card */}
                <div className="hero bg-[url('/assets/images/carts/cart-3.jpg')] h-[420px]">
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-neutral-content lg:mt-[310px]">
                        <p className="mb-5 text-white font-bold text-center lg:text-left">
                            Review Hotel Services Worldwide
                        </p>
                    </div>
                </div>
                {/* 4th card */}
                <div className="hero bg-[url('/assets/images/carts/cart-4.jpg')] h-[420px]">
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-neutral-content lg:mt-[340px]">
                        <p className="mb-5 text-white font-bold text-center lg:text-left">
                            Follow the Latest Tour News
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
