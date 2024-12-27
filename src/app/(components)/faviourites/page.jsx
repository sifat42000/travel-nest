import React from 'react';
import { GrFavorite } from 'react-icons/gr';
import { IoLocationOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
const page = () => {
    return (
        <div className='container mx-auto mb-10'>
            <p className='text-[#000000] font-bold text-2xl mb-10'>Hotel Favourites </p>

            <div className='grid md:grid-cols-1  lg:grid-cols-3 gap-5'>
                {/* 1st card */}
                <div className='bg-[#FFFFFF]'>
                    <div className='flex flex-none lg:flex-col-2 gap-8 p-5'>
                        {/* //pic */}
                        <div
                            className="hero bg-[url(/assets/images/faviourite-hotels/hotel-1.jpg)] h-[270px] w-[220px]"
                           >

                            <div  className="hero-content mt-[180px] text-neutral-content">
                                <div className='mr-44 w-[50px] h-[50px]'>

                                    <GrFavorite className="h-[25px] w-[25px] -mt-48 inset-0 bg-[#07689F] rounded-full text-white" />

                                    <div className='border-white outline-rose-50'>
                                        <p className='text-[#FFFFFF] mt-52 ml-40'>8,2</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* //text */}
                        <div>
                            <p className='text-[#000000] font-bold text-2xl mb-2'>Radisson Blu</p>
                            <div className='flex gap-1'>
                            <IoLocationOutline className='mt-1'/>
                            <p className='mb-1 text-[#565656] font-semibold'>Located In Downton</p>
                            </div>
                            <div className='flex gap-10'>
                                <p className='text-2xl text-[##000000] font-bold '>$125</p>
                                <p className='text-xl text-[#E5062E] '>12% Off</p>
                            </div>
                            <p className='text-[#565656]'>Includes taxes and charges</p>
                            <p className='text-[#4C9839]'>trip Sustainable Level, 5</p>
                           <div className='flex gap-1'>
                           <MdErrorOutline  className='text-[#E5062E] h-[20px] w-[20px] mt-1' />
                           <p className='text-[#E5062E]'>We Have 8 Left at 12% off</p>
                           </div>
                            <button className='flex gap-2'>
                            <Link href={'/hoteldetails'}><p className='text-[#07689F] text-xl font-bold'>See Availability </p></Link>
                            <IoIosArrowForward className='mt-2 text-[#07689F]' /> 
                            </button>

                        </div>

                    </div>
                </div>
                {/* 2nd card */}
                <div className='bg-[#FFFFFF]'>
                    <div className='flex gap-8 p-5'>
                        {/* //pic */}
                        <div
                            className="hero h-[270px] w-[220px] bg-[url(/assets/images/faviourite-hotels/hotel-2.jpg)]"
                            >

                            <div  className="hero-content mt-[180px] text-neutral-content">
                                <div className='mr-44 w-[50px] h-[50px]' >

                                    <GrFavorite className="h-[25px] w-[25px] -mt-48 inset-0 bg-[#07689F] rounded-full text-white" />

                                    <div className='border-white outline-rose-50'>
                                        <p className='text-[#FFFFFF] mt-52 ml-40'>8,2</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* //text */}
                        <div>
                            <p className='text-[#000000] font-bold text-2xl mb-2'>Radisson Blu</p>
                            <div className='flex gap-1'>
                            <IoLocationOutline className='mt-1'/>
                            <p className='mb-1 text-[#565656] font-semibold'>Located In Downton</p>
                            </div>
                            <div className='flex gap-10'>
                                <p className='text-2xl text-[##000000] font-bold '>$125</p>
                                <p className='text-xl text-[#E5062E] '>12% Off</p>
                            </div>
                            <p className='text-[#565656]'>Includes taxes and charges</p>
                            <p className='text-[#4C9839]'>trip Sustainable Level, 5</p>
                           <div className='flex gap-1'>
                           <MdErrorOutline  className='text-[#E5062E] h-[20px] w-[20px] mt-1' />
                           <p className='text-[#E5062E]'>We Have 8 Left at 12% off</p>
                           </div>
                            <button className='flex gap-2'>
                            <p className='text-[#07689F] text-xl font-bold'>See Availability </p>
                            <IoIosArrowForward className='mt-2 text-[#07689F]' /> 
                            </button>

                        </div>

                    </div>
                </div>
                {/* 3rd card */}
                <div className='bg-[#FFFFFF]'>
                    <div className='flex gap-8 p-5'>
                        {/* //pic */}
                        <div
                            className="hero bg-[url(/assets/images/faviourite-hotels/hotel-3.jpg)] w-[220px] h-[270px]"
                            >

                            <div className="hero-content mt-[180px] text-neutral-content">
                                <div className='mr-44 h-[50px] w-[50px]' >

                                    <GrFavorite className="h-[25px] w-[25px] -mt-48 inset-0 bg-[#07689F] rounded-full text-white" />

                                    <div className='border-white outline-rose-50'>
                                        <p className='text-[#FFFFFF] mt-52 ml-40'>8,2</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* //text */}
                        <div>
                            <p className='text-[#000000] font-bold text-2xl mb-2'>Radisson Blu</p>
                            <div className='flex gap-1'>
                            <IoLocationOutline className='mt-1'/>
                            <p className='mb-1 text-[#565656] font-semibold'>Located In Downton</p>
                            </div>
                            <div className='flex gap-10'>
                                <p className='text-2xl text-[##000000] font-bold '>$125</p>
                                <p className='text-xl text-[#E5062E] '>12% Off</p>
                            </div>
                            <p className='text-[#565656]'>Includes taxes and charges</p>
                            <p className='text-[#4C9839]'>trip Sustainable Level, 5</p>
                           <div className='flex gap-1'>
                           <MdErrorOutline  className='text-[#E5062E] h-[20px] w-[20px] mt-1' />
                           <p className='text-[#E5062E]'>We Have 8 Left at 12% off</p>
                           </div>
                            <button className='flex gap-2'>
                            <p className='text-[#07689F] text-xl font-bold'>See Availability </p>
                            <IoIosArrowForward className='mt-2 text-[#07689F]' /> 
                            </button>

                        </div>

                    </div>
                </div>
                {/* 4rth card */}
                <div className='bg-[#FFFFFF]'>
                    <div className='flex gap-8 p-5'>
                        {/* //pic */}
                        <div
                            className="hero bg-[url(/assets/images/faviourite-hotels/hotel-4.jpg)] w-[220px] h-[270px]"
                           >

                            <div  className="hero-content mt-[180px] text-neutral-content">
                                <div className='mr-44 w-[50px] h-[50px]'   >

                                    <GrFavorite className="h-[25px] w-[25px] -mt-48 inset-0 bg-[#07689F] rounded-full text-white" />

                                    <div className='border-white outline-rose-50'>
                                        <p className='text-[#FFFFFF] mt-52 ml-40'>8,2</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* //text */}
                        <div>
                            <p className='text-[#000000] font-bold text-2xl mb-2'>Radisson Blu</p>
                            <div className='flex gap-1'>
                            <IoLocationOutline className='mt-1'/>
                            <p className='mb-1 text-[#565656] font-semibold'>Located In Downton</p>
                            </div>
                            <div className='flex gap-10'>
                                <p className='text-2xl text-[##000000] font-bold '>$125</p>
                                <p className='text-xl text-[#E5062E] '>12% Off</p>
                            </div>
                            <p className='text-[#565656]'>Includes taxes and charges</p>
                            <p className='text-[#4C9839]'>trip Sustainable Level, 5</p>
                           <div className='flex gap-1'>
                           <MdErrorOutline  className='text-[#E5062E] h-[20px] w-[20px] mt-1' />
                           <p className='text-[#E5062E]'>We Have 8 Left at 12% off</p>
                           </div>
                            <button className='flex gap-2'>
                            <p className='text-[#07689F] text-xl font-bold'>See Availability </p>
                            <IoIosArrowForward className='mt-2 text-[#07689F]' /> 
                            </button>

                        </div>

                    </div>
                </div>
                {/* 5th card */}
                <div className='bg-[#FFFFFF]'>
                    <div className='flex gap-8 p-5'>
                        {/* //pic */}
                        <div
                            className="hero bg-[url(/assets/images/faviourite-hotels/hotel-5.jpg)] w-[220px] h-[270px]"
                            >

                            <div  className="hero-content mt-[180px] text-neutral-content">
                                <div className='mr-44' style={{ width: '50px', height: '50px' }}  >

                                    <GrFavorite className="h-[25px] w-[25px] -mt-48 inset-0 bg-[#07689F] rounded-full text-white" />

                                    <div className='border-white outline-rose-50'>
                                        <p className='text-[#FFFFFF] mt-52 ml-40'>8,2</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* //text */}
                        <div>
                            <p className='text-[#000000] font-bold text-2xl mb-2'>Radisson Blu</p>
                            <div className='flex gap-1'>
                            <IoLocationOutline className='mt-1'/>
                            <p className='mb-1 text-[#565656] font-semibold'>Located In Downton</p>
                            </div>
                            <div className='flex gap-10'>
                                <p className='text-2xl text-[##000000] font-bold '>$125</p>
                                <p className='text-xl text-[#E5062E] '>12% Off</p>
                            </div>
                            <p className='text-[#565656]'>Includes taxes and charges</p>
                            <p className='text-[#4C9839]'>trip Sustainable Level, 5</p>
                           <div className='flex gap-1'>
                           <MdErrorOutline  className='text-[#E5062E] h-[20px] w-[20px] mt-1' />
                           <p className='text-[#E5062E]'>We Have 8 Left at 12% off</p>
                           </div>
                            <button className='flex gap-2'>
                            <p className='text-[#07689F] text-xl font-bold'>See Availability </p>
                            <IoIosArrowForward className='mt-2 text-[#07689F]' /> 
                            </button>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default page;