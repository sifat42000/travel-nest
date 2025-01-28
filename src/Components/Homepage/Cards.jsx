import React from 'react';

const Cards = () => {
    return (
        <div className="mt-20 px-4 lg:px-0 container mx-auto max-w-[1202px]">
            {/* Grid container for cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-3">
                {/* 1st card */}
                <div className="hero bg-[url('/assets/images/carts/cart-1.jpg')] h-[346px] max-w-[600px] relative">
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content absolute bottom-0 left-0 p-4">
                        <p className="text-xl text-white font-bold">
                            Reserve Your Hotel, Pursue Your Team
                        </p>
                    </div>
                </div>
                {/* 2nd card */}
                <div className="hero bg-[url('/assets/images/carts/cart-2.jpg')] h-[346px] max-w-[600px] relative">
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content absolute bottom-0 left-0 p-4">
                        <p className="text-xl text-white font-bold">
                            Subscribe Our Newsletter
                        </p>
                    </div>
                </div>
                {/* 3rd card */}
                <div className="hero bg-[url('/assets/images/carts/cart-3.jpg')] h-[261px] max-w-[600px] relative">
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content absolute bottom-0 left-0 p-4">
                        <p className="text-xl text-white font-bold">
                            Review Hotel Services Worldwide
                        </p>
                    </div>
                </div>

                {/* 4th card */}
                <div
                    className="hero relative bg-[url('/assets/images/carts/cart-4.jpg')] h-[261px] max-w-[600px]"
                >
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content absolute bottom-0 left-0 p-4">
                        <p className="text-xl text-white font-bold">
                            Follow the Latest Tour News
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cards;
