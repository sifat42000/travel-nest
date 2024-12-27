import Image from 'next/image';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoMdPhotos } from "react-icons/io";
import { FaWifi } from "react-icons/fa6";
import { RiRestaurantLine } from "react-icons/ri";
import { MdOutlineBathroom } from "react-icons/md";
import { CiBacon } from "react-icons/ci";
import { FaCar } from "react-icons/fa6";
import { MdFitnessCenter } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { BsCupHot } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';

const page = () => {
    return (
        <div className='container  mx-auto mb-72'>
            {/* Room pictures */}
            <div className='flex-none lg:flex p-3 lg:p-0  gap-3 mb-20 '>
                {/* left side pic */}
                <div className='w-full lg:w-[601px] mb-3 lg:md-0'>
                    <Image className='h-[558px] w-full' alt='room-1' height={558} width={601} src={'/assets/images/hotel-details/room-1.jpg'} />
                </div>
                {/* right side pics */}
                <div className='grid grid-cols-2 gap-3 w-full lg:w-[calc(100%-601px)]'>
                    <Image className='w-full h-[247px]' alt='room-2' height={247} width={294} src={'/assets/images/hotel-details/room-2.jpg'} />
                    <Image className='w-full h-[247px]' alt='room-3' height={247} width={294} src={'/assets/images/hotel-details/room-3.jpg'} />
                    <Image className='w-full h-[300px]' alt='room-4' height={250} width={294} src={'/assets/images/hotel-details/room-4.jpg'} />
                    <div
                        className="hero bg-[url(/assets/images/hotel-details/room-5.jpg)] h-[300px]"
                    >
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-neutral-content">
                            <div>
                                <p className="mb-5 flex gap-2 text-[#FFFFFF] font-bold mt-auto">
                                    <IoMdPhotos className='mt-1' /> See More Photos <IoIosArrowForward className='mt-1' />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd part */}
            <div className='w-full lg:w-[1215px] '>
                <div className='p-7'>
                    <div className='flex gap-10 lg:gap-36 mb-7 flex-wrap'>
                        <button className='text-[#07689F] outline-none border-none btn btn-outline font-bold hover:text-xl transition-transform hover:scale-110 w-full lg:w-auto mb-4 lg:mb-0'>Place Details</button>
                        <button className='border-none text-[#07689F] btn btn-outline font-bold hover:text-xl transition-transform hover:scale-110 w-full lg:w-auto mb-4 lg:mb-0'>info & Prices</button>
                        <button className='border-none text-[#07689F] btn btn-outline font-bold hover:text-xl transition-transform hover:scale-110 w-full lg:w-auto mb-4 lg:mb-0'>Rooms & Beds</button>
                        <button className='border-none text-[#07689F] btn btn-outline font-bold hover:text-xl transition-transform hover:scale-110 w-full lg:w-auto'>Place Rules</button>
                    </div>
                    <div className='flex gap-5 flex-wrap lg:flex-nowrap w-full bg-white'>
                        {/* 1st part */}
                        <div className='p-5 pt-8 w-full lg:w-[50%]'>
                            <p className='text-black font-semibold mb-20'>This stylish and roomy family home is nestled in Stockholm's Kista district, just 14 km away from the Royal Swedish Opera, Museum of Medieval Stockholm, and Stureplan. Offering the convenience of free private parking, it's also a short 9 km drive from Friends Arena and 14 km from Sergels Torg Square.<br /><br />
                                Explore nearby attractions like the Army Museum, just 15 km away, and The Royal Palace, situated 15 km from this charming home. For convenience, Bromma Stockholm Airport is the closest airport, located just 8 km away from this stylish and spacious family retreat.</p>
                            <p className='text-xl text-black font-bold mb-7'>Amenities</p>
                            <div className='flex flex-wrap lg:flex-nowrap gap-5'>
                                <div>
                                    <p className='flex gap-3 mb-2'> <FaWifi className='mt-1' /> Free wifi</p>
                                    <p className='flex gap-3 mb-2'> <RiRestaurantLine className='mt-1' /> Restaurant</p>
                                    <p className='flex gap-3 mb-2'> <MdOutlineBathroom className='mt-1' /> Bathroom</p>
                                    <p className='flex gap-3'> <CiBacon className='mt-1' /> Air Conditioning</p>
                                </div>
                                <div>
                                    <p className='flex gap-3 mb-2'> <FaCar className='mt-1' /> Parking available</p>
                                    <p className='flex gap-3 mb-2'> <MdFitnessCenter className='mt-1' /> Fitness center</p>
                                    <p className='flex gap-3 mb-2'> <MdBedroomParent className='mt-1' /> Room service</p>
                                    <p className='flex gap-3'> <BsCupHot className='mt-1' /> Tea/coffee machine</p>
                                </div>
                            </div>
                        </div>
                        {/* 2nd part */}
                        <div className='p-5 pt-8 w-full lg:w-[50%]'>
                            <p className='text-black font-semibold mb-28'>Your stay at our hotel includes a complimentary breakfast to kickstart your day, and our rooms offer a cosy and comfortable retreat. Select rooms feature a relaxing bath tub for added luxury. <br /><br />
                                Our dedicated staff is at your service, ensuring a seamless and enjoyable experience throughout your stay. In addition to the inviting accommodations, indulge in extra leisure activities such as our fitness centre or pool. We've thoughtfully curated every aspect to make your stay special, promising a combination of comfort, convenience, and delightful extras.</p>

                            <p className='text-black font-bold'>2 Adults ,3 Children ,4 Nights | <span className='text-sm text-[#565656] '>Two Rooms ,Double Bed</span></p>
                            <p className='flex gap-2 mt-8'><FaLocationDot className='text-[#07689F] mt-1' /> Lärkvägen 22, Stockholm, Sweden</p>

                            <div className=' ml-0  lg:ml-80'>
                                <p className='text-[#4C9839] font-bold text-xl mb-4  lg:ml-0'>$240 <span className='text-sm font-bold text-[#353535]'>Per night</span></p>
                                <Link href={'/paymentdetails'}> <p className='flex gap-5 mt-4'><GrFavorite className='border-[#07689F] mt-2 h-[25px] w-[25px]' /> <button className='text-white btn btn-primary h-[48px] w-[200px]'>Book Now</button></p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3rd part */}
            <div className='mt-14'>
                <p className='text-xl font-bold ml-7 lg:ml-0 text-black mb-6'>The Most Frequented Questions Asked by Travellers</p>
                <div className='w-full lg:w-[1224px] h-[550px] bg-white'>
                    <div className='p-5'>
                        {/* Accordion elements */}
                        {['How and when do I pay?', 'Is there Anti-Allergic Meal?', 'Any Identification Documents Is Necessary', 'What are the check-in and check-out times?', 'Why was I charged?', 'Is there a spa?'].map((question, index) => (
                            <div className="collapse collapse-arrow bg-base-200 mb-4" key={index}>
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl text-black font-medium">{question}</div>
                                <div className="collapse-content">
                                    <p>Since This option is a non-refundable reservation and there is no cancellation opportunity, payment is usually processed at the time of booking or shortly thereafter.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4th part */}
            <div>
                <div className='mt-36 flex gap-4 flex-wrap'>
                    {/* Reviews */}
                    {['p-1', 'p-2', 'p-3', 'p-5', 'p-4'].map((image, index) => (
                        <div className='relative w-full lg:w-[240px] mb-8' key={index}>
                            <div className='flex justify-center'>
                                <div className="avatar mt-3 mb-[-25px] lg:mb-[-30px]"> {/* Increase mt value here */}
                                    <div className="w-24 rounded-full">
                                        <Image alt={`p-${index}`} height={117} width={120} src={`/assets/images/hotel-details/${image}.jpg`} />
                                    </div>
                                </div>
                            </div>

                            <div className='w-full h-[220px] bg-white'>
                                <div className='p-5 pt-14'>
                                    <div className='flex gap-3 mb-3'>
                                        <Image alt={`c-${index}`} height={14} width={24} src={`/assets/images/hotel-details/c-${index + 1}.png`} />
                                        <p className='text-xl text-black'>Sofia</p>
                                    </div>
                                    <p>"Our time at this hotel was marked by contemporary elegance and thoughtful amenities." <span className='text-[#07689F]'>Read More ...</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* 5th part */}
            <div className='mt-8 ml-9 lg:ml-0 w-full lg:w-[1124px]'>
                <p className='font-bold text-black text-2xl mb-6'>Review Rates:</p>
                <div className='grid grid-cols-2 lg:grid-cols-5 gap-20 '>
                    {['Staff Politeness', 'VIP Options', 'Free Wi-Fi Speed', 'Cleanliness', 'Access to City Center'].map((item, index) => (
                        <div key={index} className='w-full lg:w-[200px]'>
                            <p className='text-[#565656] text-xl flex gap-8'>{item} <span className='text-[#565656] font-bold text-sm mt-1'>{8 - index * 0.5}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;
