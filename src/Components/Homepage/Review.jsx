import Image from 'next/image';
import React from 'react';

const Review = () => {
    return (
        <div
            className="hero h-[1200px] relative bg-cover bg-center lg:h-[820px] bg-[url('/assets/images/reviws/review-photo.jpg')]"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center px-6 lg:px-20 py-10">
                {/* Avatar-1 */}
                <div className="relative flex flex-col items-center">
                    <div className="avatar mb-[-40px] lg:mb-[-50px]">
                        <div className="w-32 rounded-full border-4 border-white">
                            <Image src={'/assets/images/reviws/review-1.jpg'} alt="avatar-1" height={120} width={120} />
                        </div>
                    </div>
                    <div className="bg-black bg-opacity-30 rounded-md w-full max-w-[310px] h-[260px] p-6 pt-16">
                        <div className="flex gap-3 items-center mb-4">
                            <div className="avatar">
                                <div className="bg-neutral text-neutral-content w-8 h-8 flex items-center justify-center">
                                    <Image alt="" src={'/assets/images/reviws/yt.png'} height={14} width={30} />
                                </div>
                            </div>
                            <p className="text-white text-2xl font-bold">Teacher Terece</p>
                        </div>
                        <p className="text-white font-semibold">
                            Returning to this hotel is always a delight – their loyalty program showers us with exclusive
                            discounts and amazing perks!
                        </p>
                    </div>
                </div>
                {/* Avatar-2 */}
                <div className="relative flex flex-col items-center">
                    <div className="avatar mb-[-40px] lg:mb-[-50px]">
                        <div className="w-32 rounded-full border-4 border-white">
                            <Image src={'/assets/images/reviws/review-2.jpg'} alt="avatar-2" height={120} width={120} />
                        </div>
                    </div>
                    <div className="bg-black bg-opacity-30 rounded-md w-full max-w-[310px] h-[260px] p-6 pt-16">
                        <div className="flex gap-3 items-center mb-4">
                            <div className="avatar">
                                <div className="bg-neutral text-neutral-content w-8 h-8 flex items-center justify-center">
                                    <Image alt="" src={'/assets/images/reviws/no.png'} height={14} width={30} />
                                </div>
                            </div>
                            <p className="text-white text-2xl font-bold">BEYU68£</p>
                        </div>
                        <p className="text-white font-semibold">
                            Accessing EasySet24 extraordinary special offers makes always our journey even more
                            unforgettable.
                        </p>
                    </div>
                </div>
                {/* Avatar-3 */}
                <div className="relative flex flex-col items-center">
                    <div className="avatar mb-[-40px] lg:mb-[-50px]">
                        <div className="w-32 rounded-full border-4 border-white">
                            <Image src={'/assets/images/reviws/review-3.jpg'} alt="avatar-3" height={120} width={120} />
                        </div>
                    </div>
                    <div className="bg-black bg-opacity-30 rounded-md w-full max-w-[310px] h-[260px] p-6 pt-16">
                        <div className="flex gap-3 items-center mb-4">
                            <div className="avatar">
                                <div className="bg-neutral text-neutral-content w-8 h-8 flex items-center justify-center">
                                    <Image alt="" src={'/assets/images/reviws/ca.png'} height={14} width={30} />
                                </div>
                            </div>
                            <p className="text-white text-2xl font-bold">Elina13ay</p>
                        </div>
                        <p className="text-white font-semibold">
                            Weekends here are pure bliss with their carefully crafted packages, and the extended stay
                            discounts make relaxation even more enticing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
