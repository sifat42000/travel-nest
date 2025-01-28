import React from 'react';
import { GrFavorite } from 'react-icons/gr';
import { IoLeafOutline, IoLocationOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import { BiLike } from 'react-icons/bi';
import { TbSunLow } from "react-icons/tb";

const page = () => {
    return (
        <div className='container mx-auto mb-10 px-4'>
            <p className='text-[#000000] font-bold text-2xl mb-10'>Hotel Favourites </p>

            <div className='grid md:grid-cols-1 lg:grid-cols-2    2xl:grid-cols-3 gap-5 mx-auto'>
                {/* 1st card */}
                <div className='bg-[#FFFFFF]   border border-[#D9D9D9] rounded-lg h-full max-h-[590px] md:max-h-[290px] lg:max-h-[290px]'>
                    <div className=' flex-none md:flex lg:flex gap-8 p-2'>
                        {/* //pic */}
                        <div
                            className="hero  bg-[url(/assets/images/faviourite-hotels/hotel-1.jpg)] relative max-w-full md:h-[270px] sm:w-[120px] md:w-[220px] lg:h-[270px] lg:w-[220px] "
                           >

                            <div  className="hero-content mt-[180px] text-neutral-content">
                                <div className='mr-44 w-[50px] h-[50px]'>

                                    <GrFavorite className="h-[25px] w-[25px] absolute top-3 left-3 inset-0 bg-[#07689F] rounded-full text-white border border-[#000000]" />

                                    <div className='bg-black absolute left-0  md:right-0 lg:right-0 bottom-0 bg-opacity-55 flex gap-[188px] md:gap-[69px]  lg:gap-[69px] py-2  '>
                                        <div className='flex text-[#FFFFFF] text-2xl '>
                                        <TbSunLow />
                                        <TbSunLow />
                                        <TbSunLow />
                                        <TbSunLow />

                                        </div>

                                       <div className='flex gap-2 '>
                                       <p className='text-[#FFFFFF] border border-white rounded first: '>8,2</p>
                                       <BiLike className='text-[#FFFFFF] text-2xl'/>
                                       </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* //text */}
                        <div className='mt-3 max-w-[500px] '>
                            <p className='text-[#000000] font-bold text-lg mb-2'>Radisson Blu</p>
                            <div className='flex gap-1'>
                            <IoLocationOutline className='mt-1'/>
                            <p className='mb-3 text-[#565656] font-semibold'>Located In Downton</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-2xl text-[##000000] font-bold '>$140</p>
                                <p className='text-sm mt-2 text-[#E5062E] '>16% Off</p>
                            </div>
                            <p className='text-[#565656] text-sm mb-2'>Includes taxes and charges</p>
                            <p className='text-[#4C9839] flex gap-2'><IoLeafOutline className='text-xl mt-[2px]' />trip Sustainable Level, 5</p>
                           <div className='flex gap-1 mb-8  w-56'>
                           <MdErrorOutline  className='text-[#E5062E] h-[20px] w-[20px] mt-1' />
                           <p className='text-[#E5062E] '>We Have 8 Left at 12% off</p>
                           </div>
                            <button className='flex gap-2'>
                            <Link href={'/hoteldetails'}><p className='text-[#07689F] text-xl font-bold'>See Availability </p></Link>
                            <IoIosArrowForward className='mt-2 text-[#07689F]' /> 
                            </button>

                        </div>

                    </div>
                </div>
                {/* 2nd card */}
                <div className='bg-[#FFFFFF]   border border-[#D9D9D9] rounded-lg h-full max-h-[590px] md:max-h-[290px] lg:max-h-[290px]'>
                    <div className=' flex-none md:flex lg:flex gap-8 p-2'>
                        {/* //pic */}
                        <div
                            className="hero  bg-[url(/assets/images/faviourite-hotels/hotel-2.jpg)] relative max-w-full md:h-[270px] sm:w-[120px] md:w-[220px] lg:h-[270px] lg:w-[220px] "
                           >

                            <div  className="hero-content mt-[180px] text-neutral-content">
                                <div className='mr-44 w-[50px] h-[50px]'>

                                    <GrFavorite className="h-[25px] w-[25px] absolute top-3 left-3 inset-0 bg-[#07689F] rounded-full text-white border border-[#000000]" />

                                    <div className='bg-black absolute left-0  md:right-0 lg:right-0 bottom-0 bg-opacity-55 flex gap-[188px] md:gap-[69px]  lg:gap-[69px] py-2  '>
                                        <div className='flex text-[#FFFFFF] text-2xl '>
                                        <TbSunLow />
                                        <TbSunLow />
                                        <TbSunLow />
                                        <TbSunLow />

                                        </div>

                                       <div className='flex gap-2 '>
                                       <p className='text-[#FFFFFF] border border-white rounded first: '>8,2</p>
                                       <BiLike className='text-[#FFFFFF] text-2xl'/>
                                       </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* //text */}
                        <div className='mt-3 max-w-[500px] '>
                            <p className='text-[#000000] font-bold text-lg mb-2'>Radisson Blu</p>
                            <div className='flex gap-1'>
                            <IoLocationOutline className='mt-1'/>
                            <p className='mb-3 text-[#565656] font-semibold'>Located In Downton</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-2xl text-[##000000] font-bold '>$135</p>
                                <p className='text-sm mt-2 text-[#E5062E] '>12% Off</p>
                            </div>
                            <p className='text-[#565656] text-sm mb-2'>Includes taxes and charges</p>
                            <p className='text-[#4C9839] flex gap-2'><IoLeafOutline className='text-xl mt-[2px]' />trip Sustainable Level, 5</p>
                           <div className='flex gap-1 mb-8  w-56'>
                           <MdErrorOutline  className='text-[#E5062E] h-[20px] w-[20px] mt-1' />
                           <p className='text-[#E5062E] '>We Have 8 Left at 12% off</p>
                           </div>
                            <button className='flex gap-2'>
                            <Link href={'/hoteldetails'}><p className='text-[#07689F] text-xl font-bold'>See Availability </p></Link>
                            <IoIosArrowForward className='mt-2 text-[#07689F]' /> 
                            </button>

                        </div>

                    </div>
                </div>
                {/* 3rd card */}
                <div className='bg-[#FFFFFF]   border border-[#D9D9D9] rounded-lg h-full max-h-[590px] md:max-h-[290px] lg:max-h-[290px]'>
                    <div className=' flex-none md:flex lg:flex gap-8 p-2'>
                        {/* //pic */}
                        <div
                            className="hero  bg-[url(/assets/images/faviourite-hotels/hotel-3.jpg)] relative max-w-full md:h-[270px] sm:w-[120px] md:w-[220px] lg:h-[270px] lg:w-[220px] "
                           >

                            <div  className="hero-content mt-[180px] text-neutral-content">
                                <div className='mr-44 w-[50px] h-[50px]'>

                                    <GrFavorite className="h-[25px] w-[25px] absolute top-3 left-3 inset-0 bg-[#07689F] rounded-full text-white border border-[#000000]" />

                                    <div className='bg-black absolute left-0  md:right-0 lg:right-0 bottom-0 bg-opacity-55 flex gap-[188px] md:gap-[69px]  lg:gap-[69px] py-2  '>
                                        <div className='flex text-[#FFFFFF] text-2xl '>
                                        <TbSunLow />
                                        <TbSunLow />
                                        <TbSunLow />
                                        <TbSunLow />

                                        </div>

                                       <div className='flex gap-2 '>
                                       <p className='text-[#FFFFFF] border border-white rounded first: '>8,2</p>
                                       <BiLike className='text-[#FFFFFF] text-2xl'/>
                                       </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* //text */}
                        <div className='mt-3 max-w-[500px] '>
                            <p className='text-[#000000] font-bold text-lg mb-2'>Radisson Blu</p>
                            <div className='flex gap-1'>
                            <IoLocationOutline className='mt-1'/>
                            <p className='mb-3 text-[#565656] font-semibold'>Located In Downton</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-2xl text-[##000000] font-bold '>$110</p>
                                <p className='text-sm mt-2 text-[#E5062E] '>12% Off</p>
                            </div>
                            <p className='text-[#565656] text-sm mb-2'>Includes taxes and charges</p>
                            <p className='text-[#4C9839] flex gap-2'><IoLeafOutline className='text-xl mt-[2px]' />trip Sustainable Level, 5</p>
                           <div className='flex gap-1 mb-8  w-56'>
                           <MdErrorOutline  className='text-[#E5062E] h-[20px] w-[20px] mt-1' />
                           <p className='text-[#E5062E] '>We Have 8 Left at 12% off</p>
                           </div>
                            <button className='flex gap-2'>
                            <Link href={'/hoteldetails'}><p className='text-[#07689F] text-xl font-bold'>See Availability </p></Link>
                            <IoIosArrowForward className='mt-2 text-[#07689F]' /> 
                            </button>

                        </div>

                    </div>
                </div>
                {/* 4th card */}
                <div className='bg-[#FFFFFF]   border border-[#D9D9D9] rounded-lg h-full max-h-[590px] md:max-h-[290px] lg:max-h-[290px]'>
                    <div className=' flex-none md:flex lg:flex gap-8 p-2'>
                        {/* //pic */}
                        <div
                            className="hero  bg-[url(/assets/images/faviourite-hotels/hotel-4.jpg)] relative max-w-full md:h-[270px] sm:w-[120px] md:w-[220px] lg:h-[270px] lg:w-[220px] "
                           >

                            <div  className="hero-content mt-[180px] text-neutral-content">
                                <div className='mr-44 w-[50px] h-[50px]'>

                                    <GrFavorite className="h-[25px] w-[25px] absolute top-3 left-3 inset-0 bg-[#07689F] rounded-full text-white border border-[#000000]" />

                                    <div className='bg-black absolute left-0  md:right-0 lg:right-0 bottom-0 bg-opacity-55 flex gap-[188px] md:gap-[69px]  lg:gap-[69px] py-2  '>
                                        <div className='flex text-[#FFFFFF] text-2xl '>
                                        <TbSunLow />
                                        <TbSunLow />
                                        <TbSunLow />
                                        <TbSunLow />

                                        </div>

                                       <div className='flex gap-2 '>
                                       <p className='text-[#FFFFFF] border border-white rounded first: '>8,2</p>
                                       <BiLike className='text-[#FFFFFF] text-2xl'/>
                                       </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* //text */}
                        <div className='mt-3 max-w-[500px] '>
                            <p className='text-[#000000] font-bold text-lg mb-2'>Radisson Blu</p>
                            <div className='flex gap-1'>
                            <IoLocationOutline className='mt-1'/>
                            <p className='mb-3 text-[#565656] font-semibold'>Located In Downton</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-2xl text-[##000000] font-bold '>$145</p>
                                <p className='text-sm mt-2 text-[#E5062E] '>12% Off</p>
                            </div>
                            <p className='text-[#565656] text-sm mb-2'>Includes taxes and charges</p>
                            <p className='text-[#4C9839] flex gap-2'><IoLeafOutline className='text-xl mt-[2px]' />trip Sustainable Level, 5</p>
                           <div className='flex gap-1 mb-8  w-56'>
                           <MdErrorOutline  className='text-[#E5062E] h-[20px] w-[20px] mt-1' />
                           <p className='text-[#E5062E] '>We Have 8 Left at 12% off</p>
                           </div>
                            <button className='flex gap-2'>
                            <Link href={'/hoteldetails'}><p className='text-[#07689F] text-xl font-bold'>See Availability </p></Link>
                            <IoIosArrowForward className='mt-2 text-[#07689F]' /> 
                            </button>

                        </div>

                    </div>
                </div>
                {/* 5th card */}
                <div className='bg-[#FFFFFF]   border border-[#D9D9D9] rounded-lg h-full max-h-[590px] md:max-h-[290px] lg:max-h-[290px]'>
                    <div className=' flex-none md:flex lg:flex gap-8 p-2'>
                        {/* //pic */}
                        <div
                            className="hero  bg-[url(/assets/images/faviourite-hotels/hotel-5.jpg)] relative max-w-full md:h-[270px] sm:w-[120px] md:w-[220px] lg:h-[270px] lg:w-[220px] "
                           >

                            <div  className="hero-content mt-[180px] text-neutral-content">
                                <div className='mr-44 w-[50px] h-[50px]'>

                                    <GrFavorite className="h-[25px] w-[25px] absolute top-3 left-3 inset-0 bg-[#07689F] rounded-full text-white border border-[#000000]" />

                                    <div className='bg-black absolute left-0  md:right-0 lg:right-0 bottom-0 bg-opacity-55 flex gap-[188px] md:gap-[69px]  lg:gap-[69px] py-2  '>
                                        <div className='flex text-[#FFFFFF] text-2xl '>
                                        <TbSunLow />
                                        <TbSunLow />
                                        <TbSunLow />
                                        <TbSunLow />

                                        </div>

                                       <div className='flex gap-2 '>
                                       <p className='text-[#FFFFFF] border border-white rounded first: '>8,2</p>
                                       <BiLike className='text-[#FFFFFF] text-2xl'/>
                                       </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* //text */}
                        <div className='mt-3 max-w-[500px] '>
                            <p className='text-[#000000] font-bold text-lg mb-2'>Radisson Blu</p>
                            <div className='flex gap-1'>
                            <IoLocationOutline className='mt-1'/>
                            <p className='mb-3 text-[#565656] font-semibold'>Located In Downton</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-2xl text-[##000000] font-bold '>$160</p>
                                <p className='text-sm mt-2 text-[#E5062E] '>12% Off</p>
                            </div>
                            <p className='text-[#565656] text-sm mb-2'>Includes taxes and charges</p>
                            <p className='text-[#4C9839] flex gap-2'><IoLeafOutline className='text-xl mt-[2px]' />trip Sustainable Level, 5</p>
                           <div className='flex gap-1 mb-8  w-56'>
                           <MdErrorOutline  className='text-[#E5062E] h-[20px] w-[20px] mt-1' />
                           <p className='text-[#E5062E] '>We Have 8 Left at 12% off</p>
                           </div>
                            <button className='flex gap-2'>
                            <Link href={'/hoteldetails'}><p className='text-[#07689F] text-xl font-bold'>See Availability </p></Link>
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