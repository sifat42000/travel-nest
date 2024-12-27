import React from 'react';

const SpeacialOffers = () => {
    return (
        <div className='container mx-auto'>
            <p className='text-3xl ml-20  text-black font-bold mb-4'>Special offers</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ml-4 lg:ml-0 gap-4'>
                {/* card-one */}
                <div className="hero ml-16 lg:ml-[95px]  h-[300px]  max-w-[320px] bg-[url(/assets/images/speacial-offers/special-1.jpg)]">
                    <div className="hero-overlay bg-opacity-15"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <button className="text-xl btn btn-primary w-[225px] h-[18px] flex justify-center items-center gap-4 border border-solid rounded-md mt-48 mx-auto">
                                Loyalty Discounts
                            </button>
                        </div>
                    </div>
                </div>
                {/* card-two */}
                <div className="hero ml-16 lg:ml-0 h-[300px] max-w-[320px] lg:max-w-[600px] bg-[url(/assets/images/speacial-offers/special-2.jpg)]">
                    <div className="hero-overlay bg-opacity-15"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <button className="text-xl btn btn-primary w-72 h-4 flex justify-center items-center gap-4 mt-48 mx-auto border border-solid rounded-md">
                                Early Booking Discounts
                            </button>
                        </div>
                    </div>
                </div>
                {/* card-three */}
                <div className="hero ml-16 lg:ml-0  h-[300px]  max-w-[320px] bg-[url(/assets/images/speacial-offers/special-3.jpg)]">
                    <div className="hero-overlay bg-opacity-15"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <button className="text-xl btn btn-primary w-56 h-4 flex justify-center items-center gap-4 mt-48 mx-auto border border-solid rounded-md">
                                Last-Minute Deals
                            </button>
                        </div>
                    </div>
                </div>
                 {/* card-four */}
                 <div className="hero ml-16 lg:ml-[95px]  h-[300px] max-w-[320px] bg-[url(/assets/images/speacial-offers/special-4.jpg)]">
                    <div className="hero-overlay bg-opacity-15"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <button className="text-xl btn btn-primary w-56 h-4 flex justify-center items-center gap-4 mt-48 mx-auto border border-solid rounded-md">
                                Family Packages
                            </button>
                        </div>
                    </div>
                </div>
                {/* card-five */}
                <div className="hero ml-16 lg:ml-0  max-w-[320px] lg:max-w-[600px] h-[300px] bg-[url(/assets/images/speacial-offers/special-5.jpg)]">
                    <div className="hero-overlay bg-opacity-15"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <button className="text-xl btn btn-primary w-72 h-4 flex justify-center items-center gap-4 mt-48 mx-auto border border-solid rounded-md">
                                Birthday or Anniversary Specials
                            </button>
                        </div>
                    </div>
                </div>
                {/* card-six */}
                <div className="hero ml-16 lg:ml-0  bg-[url(/assets/images/speacial-offers/special-6.jpg)]  max-w-[320px] h-[300px]">
                    <div className="hero-overlay bg-opacity-15"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <button className="text-xl btn btn-primary w-56 h-4 flex justify-center items-center gap-4 mt-48 mx-auto border border-solid rounded-md">
                                Referral Programs
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default SpeacialOffers;
