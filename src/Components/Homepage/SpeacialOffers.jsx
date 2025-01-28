import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';

const SpeacialOffers = () => {
    return (
        <div>
            <div className="container  mx-auto px-4  sm:max-w-[370px]  md:max-w-[730px]  lg:max-w-[1345px]">
                <p className="text-3xl text-black font-bold mb-6">Special Offers</p>

                <div className=" sm:flex-none px-0 md:flex lg:flex flex-wrap gap-y-3 gap-x-3 gap-4">
                    {/* card-one */}
                    <div className="relative mb-3 md:mb-0 lg:mb-0 h-[300px] w-[340px] bg-[url(/assets/images/speacial-offers/special-1.jpg)] bg-cover bg-center">
                        <div className="absolute inset-0 bg-black bg-opacity-15"></div>
                        <button className="text-lg md:text-xl btn btn-primary flex gap-2 border border-solid rounded-md absolute bottom-4 left-4">
                            Loyalty Discounts
                            <IoMdArrowRoundForward />
                        </button>
                    </div>
                    {/* card-two */}
                    <div className="relative mb-3 md:mb-0 lg:mb-0 h-[300px] w-[340px] lg:w-[600px] bg-[url(/assets/images/speacial-offers/special-2.jpg)] bg-cover bg-center">
                        <div className="absolute inset-0 bg-black bg-opacity-15"></div>
                        <button className="text-lg md:text-xl btn btn-primary flex gap-2 border border-solid rounded-md absolute bottom-4 left-4">
                            Early Booking Discounts
                            <IoMdArrowRoundForward />
                        </button>
                    </div>
                    {/* card-three */}
                    <div className="relative mb-3 md:mb-0 lg:mb-0 h-[300px] w-[340px] bg-[url(/assets/images/speacial-offers/special-3.jpg)] bg-cover bg-center">
                        <div className="absolute inset-0 bg-black bg-opacity-15"></div>
                        <button className="text-lg md:text-xl btn btn-primary flex gap-2 border border-solid rounded-md absolute bottom-4 left-4">
                            Last-Minute Deals
                            <IoMdArrowRoundForward />
                        </button>
                    </div>
                    {/* card-four */}
                    <div className="relative mb-3 md:mb-0 lg:mb-0 h-[300px] w-[340px] bg-[url(/assets/images/speacial-offers/special-4.jpg)] bg-cover bg-center">
                        <div className="absolute inset-0 bg-black bg-opacity-15"></div>
                        <button className="text-lg md:text-xl btn btn-primary flex gap-2 border border-solid rounded-md absolute bottom-4 left-4">
                            Family Packages
                            <IoMdArrowRoundForward />
                        </button>
                    </div>
                    {/* card-five */}
                    <div className="relative mb-3 md:mb-0 lg:mb-0 h-[300px] w-[340px] lg:w-[600px] bg-[url(/assets/images/speacial-offers/special-5.jpg)] bg-cover bg-center">
                        <div className="absolute inset-0 bg-black bg-opacity-15"></div>
                        <button className="text-lg md:text-xl btn btn-primary flex gap-2 border border-solid rounded-md absolute bottom-4 left-4">
                            Birthday or Anniversary
                            <IoMdArrowRoundForward />
                        </button>
                    </div>
                    {/* card-six */}
                    <div className="relative h-[300px] w-[340px] bg-[url(/assets/images/speacial-offers/special-6.jpg)] bg-cover bg-center">
                        <div className="absolute inset-0 bg-black bg-opacity-15"></div>
                        <button className="text-lg md:text-xl btn btn-primary flex gap-2 border border-solid rounded-md absolute bottom-4 left-4">
                            Referral Programs
                            <IoMdArrowRoundForward />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeacialOffers;
