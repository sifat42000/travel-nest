import Search from '@/Search/Search';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GrFavorite } from 'react-icons/gr';

const page = () => {
    return (
        <div className='container mx-auto mb-6'>
            <Search />
            <div className='flex-none lg:flex gap-6 mb-32 lg:mb-10 ml-8 lg:ml-0'>
                <Image src={'/assets/images/search-result/map.png'} height={200} width={270} alt='map' />
                <div>
                    <div className=' lg:w-[280px] h-[45px] bg-[#FFFFFF] items-center p-2 mb-3'>
                        <p className='text-xl text-[#565656] font-bold'>Sort By : <span className='text-sm'>Our top Picks For Families</span></p>

                    </div>
                    <h3 className='text-[#565656] text-2xl font-bold'>Gothenburg</h3>
                    <p className='text-[#000000] font-semibold mb-2'>120 Properties Found</p>
                    <p className=' w-[400px] lg:w-[648px] h-[81px]'>
                        Travel professionals dedicated to simplifying your travel experience by curating flight and accommodation services on a user-friendly platform. Committed to quality and assurance.
                        <span className='text-[#07689F] font-bold'> Find More Here ...</span>
                    </p>

                </div>
            </div>


            <div className='flex-none lg:flex gap-10'>
                {/* 1st part */}
                <div className='ml-16 lg:ml-0'>
                    <p className='text-2xl text-[#565656] font-bold mb-4'>Filter By</p>
                    <p className='font-semibold text-[#000000] mb-4'>Your Budget for per night </p>
                    <div className='flex gap-3 mb-5'>
                        <input placeholder='Min Price $' className='h-[40px] w-[105px] outline-none p-3' />
                        <input placeholder='Min Price $' className='h-[40px] w-[105px] outline-none p-3' />
                    </div>
                    {/* 1st cheakbox */}
                    <div className='mb-5'>
                        <p className='text-[#000000] text-xl font-semibold'>Popular Filters</p>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Breakfast included</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>All-inclusive</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Free Cancellation</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Pool</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Pet friendly</p>
                        </div>
                        <p className='text-[#07689F]'>Show More</p>
                    </div>
                    {/* 2nd cheakbox */}
                    <div className='mb-5'>
                        <p className='text-[#000000] text-xl font-semibold'>Room Facilities</p>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Own Bathroom</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Kitchen</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>See View</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Baby Bed</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Bathtub</p>
                        </div>
                        <p className='text-[#07689F]'>Show More</p>
                    </div>
                    {/* 3rd cheakbox */}
                    <div className='mb-5'>
                        <p className='text-[#000000] text-xl font-semibold'>Gusts Rating</p>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>All</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Outstanding 9+</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Very good 8+</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Good 7+</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Excellent</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Poor </p>
                        </div>
                        <p className='text-[#07689F]'>Show More</p>
                    </div>
                    {/* 4th cheakbox */}
                    <div className='mb-5'>
                        <p className='text-[#000000] text-xl font-semibold'>Bed Type</p>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Two Single Beds</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>King Beds</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Baby Cots</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Double Bed </p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Single Beds</p>
                        </div>
                        <p className='text-[#07689F]'>Show More</p>
                    </div>
                    {/* 5th cheakbox */}
                    <div className='mb-5'>
                        <p className='text-[#000000] text-xl font-semibold'>Leisure activities </p>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Sauna</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Fitness Centre</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Bar</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Steam Bath</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Yoga</p>
                        </div>
                        <p className='text-[#07689F]'>Show More</p>
                    </div>
                    {/* 6th cheakbox */}
                    <div className='mb-5'>
                        <p className='text-[#000000] text-xl font-semibold'>Travel Sustainability </p>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Level 2 and Above 1</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Level and Above 2</p>
                        </div>
                        <p className='text-[#07689F]'>Show More</p>
                    </div>
                    {/* 7th cheakbox */}
                    <div className='mb-5'>
                        <p className='text-[#000000] text-xl font-semibold'>Accommodation classification
                        </p>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>5 Stars</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>4 Stars</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>3 Stars</p>
                        </div>
                        <p className='text-[#07689F]'>Show More</p>
                    </div>
                    {/* 8th cheakbox */}
                    <div className='mb-5'>
                        <p className='text-[#000000] text-xl font-semibold'>Distance from the centre
                        </p>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Less Than 1 Km</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] border-none focus:ring-0 text-white rounded-sm checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Less Than 5 Km</p>
                        </div>
                        <div className='flex gap-2 '>
                            <input
                                type="checkbox"
                                className="h-4 w-4 mt-1 bg-[#07689F] rounded-full border-none focus:ring-0 text-white checked:bg-[#07689F] checked:border-[#07689F]"
                            />
                            <p>Less Than 15 Km</p>
                        </div>

                        <p className='text-[#07689F]'>Show More</p>
                    </div>



                </div>
                {/* 2nd part */}
                <div>
                    <div className='flex-none lg:flex gap-60 bg-[#FFFFFF] h-[550px] lg:h-[350px] mb-9'>
                        {/* 2nd 1 part */}
                        <div className=' flex gap-8 p-5'>
                            {/* //pic */}
                            <div
                                className="hero bg-[url(/assets/images/search-result/hotel-1.jpg)] w-[220px] h-[270px]"
                            >

                                <div className="hero-content mt-[180px] text-neutral-content">
                                    <div className='mr-44 w-[50px] h-[50px]'  >

                                        <GrFavorite className='h-[25px] w-[25px] -mt-48  inset-0   bg-black bg-opacity-30 rounded-full' />
                                        <div className='border-white outline-rose-50'>
                                            <p className='text-[#FFFFFF] mt-52 ml-40'>8,2</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* //text */}
                            <div>
                                <p className='text-[#000000] font-bold text-2xl mb-2'>Radisson Blu</p>
                                <p className='mb-1 text-[#565656] font-semibold'>Located In Downton, 500m Distance to Shore</p>
                                <p className='mb-1 text-[#565656] font-semibold'>Breakfast Included</p>
                                <p className='text-[#565656] font-semibold mb-5'>1 Adult,2 Children 4 Nights </p>
                                <p>Experience Unique Opportunity </p>
                                <p className='text-[#565656] font-semibold'>Standard rooms </p>
                                <p className='text-[#000000] font-bold text-xl'>Very Good <span className='text-[#565656] text-sm	 font-semibold'>, 2.259 Reviews</span></p>

                            </div>

                        </div>
                        {/* 2nd 2 part */}
                        <div className='p-5 mt-3 lg:mt-24'>
                            <div className='flex gap-10'>
                                <p className='text-xl text-[#E5062E] '>12% Off</p>
                                <p className='text-2xl text-[#4C9839] font-bold '>$125</p>
                            </div>
                            <p className='text-[#565656]'>Includes taxes and charges</p>
                            <p className='text-[#4C9839]'>trip Sustainable Level, 5</p>
                            <p className='text-[#E5062E]'>We Have 8 Left at 12% off</p>
                            <p className='text-[#07689F] text-xl font-bold'>See Availability </p>

                        </div>


                    </div>
                    <div className='flex-none lg:flex gap-60 bg-[#FFFFFF] h-[550px] lg:h-[350px] mb-9'>
                        {/* 2nd 1 part */}
                        <div className='flex gap-8 p-5'>
                            {/* //pic */}
                            <div
                                className="hero bg-[url(/assets/images/search-result/hotel-2.jpg)] w-[220px] h-[270px]"
                            >

                                <div className="hero-content mt-[180px] text-neutral-content">
                                    <div className='mr-44 w-[50px] h-[50px]'   >

                                        <GrFavorite className='h-[25px] w-[25px] -mt-48  inset-0   bg-black bg-opacity-30 rounded-full' />
                                        <div className='border-white outline-rose-50'>
                                            <p className='text-[#FFFFFF] mt-52 ml-40'>8,2</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* //text */}
                            <div>
                                <p className='text-[#000000] font-bold text-2xl mb-2'>Radisson Blu</p>
                                <p className='mb-1 text-[#565656] font-semibold'>Located In Downton, 500m Distance to Shore</p>
                                <p className='mb-1 text-[#565656] font-semibold'>Breakfast Included</p>
                                <p className='text-[#565656] font-semibold mb-5'>1 Adult,2 Children 4 Nights </p>
                                <p>Experience Unique Opportunity </p>
                                <p className='text-[#565656] font-semibold'>Standard rooms </p>
                                <p className='text-[#000000] font-bold text-xl'>Very Good <span className='text-[#565656] text-sm	 font-semibold'>, 2.259 Reviews</span></p>

                            </div>

                        </div>
                        {/* 2nd 2 part */}
                        <div className='p-5 mt-3 lg:mt-24'>
                            <div className='flex gap-10'>
                                <p className='text-xl text-[#E5062E] '>12% Off</p>
                                <p className='text-2xl text-[#4C9839] font-bold '>$125</p>
                            </div>
                            <p className='text-[#565656]'>Includes taxes and charges</p>
                            <p className='text-[#4C9839]'>trip Sustainable Level, 5</p>
                            <p className='text-[#E5062E]'>We Have 8 Left at 12% off</p>
                            <p className='text-[#07689F] text-xl font-bold'>See Availability </p>

                        </div>


                    </div>
                    <div className='flex-none lg:flex gap-60 bg-[#FFFFFF] h-[550px] lg:h-[350px] mb-9'>
                        {/* 2nd 1 part */}
                        <div className='flex gap-8 p-5'>
                            {/* //pic */}
                            <div
                                className="hero w-[220px] h-[270px] bg-[url(/assets/images/search-result/hotel-3.jpg)]"
                            >

                                <div className="hero-content mt-[180px] text-neutral-content">
                                    <div className='mr-44 h-[50px] w-[50px]'   >

                                        <GrFavorite className='h-[25px] w-[25px] -mt-48  inset-0   bg-black bg-opacity-30 rounded-full' />
                                        <div className='border-white outline-rose-50'>
                                            <p className='text-[#FFFFFF] mt-52 ml-40'>8,2</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* //text */}
                            <div>
                                <p className='text-[#000000] font-bold text-2xl mb-2'>Radisson Blu</p>
                                <p className='mb-1 text-[#565656] font-semibold'>Located In Downton, 500m Distance to Shore</p>
                                <p className='mb-1 text-[#565656] font-semibold'>Breakfast Included</p>
                                <p className='text-[#565656] font-semibold mb-5'>1 Adult,2 Children 4 Nights </p>
                                <p>Experience Unique Opportunity </p>
                                <p className='text-[#565656] font-semibold'>Standard rooms </p>
                                <p className='text-[#000000] font-bold text-xl'>Very Good <span className='text-[#565656] text-sm	 font-semibold'>, 2.259 Reviews</span></p>

                            </div>

                        </div>
                        {/* 2nd 2 part */}
                        <div className='p-5 mt-3 lg:mt-24'>
                            <div className='flex gap-10'>
                                <p className='text-xl text-[#E5062E] '>12% Off</p>
                                <p className='text-2xl text-[#4C9839] font-bold '>$125</p>
                            </div>
                            <p className='text-[#565656]'>Includes taxes and charges</p>
                            <p className='text-[#4C9839]'>trip Sustainable Level, 5</p>
                            <p className='text-[#E5062E]'>We Have 8 Left at 12% off</p>
                            <p className='text-[#07689F] text-xl font-bold'>See Availability </p>

                        </div>


                    </div>
                    <div className='flex-none lg:flex gap-60 bg-[#FFFFFF] h-[550px] lg:h-[350px] mb-9'>
                        {/* 2nd 1 part */}
                        <div className='flex gap-8 p-5'>
                            {/* //pic */}
                            <div
                                className="hero bg-[url(/assets/images/search-result/hotel-4.jpg)] w-[220px] h-[270px]"
                            >

                                <div className="hero-content mt-[180px] text-neutral-content">
                                    <div className='mr-44 w-[50px] h-[50px]'   >

                                        <GrFavorite className='h-[25px] w-[25px] -mt-48  inset-0   bg-black bg-opacity-30 rounded-full' />
                                        <div className='border-white outline-rose-50'>
                                            <p className='text-[#FFFFFF] mt-52 ml-40'>8,2</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* //text */}
                            <div>
                                <p className='text-[#000000] font-bold text-2xl mb-2'>Radisson Blu</p>
                                <p className='mb-1 text-[#565656] font-semibold'>Located In Downton, 500m Distance to Shore</p>
                                <p className='mb-1 text-[#565656] font-semibold'>Breakfast Included</p>
                                <p className='text-[#565656] font-semibold mb-5'>1 Adult,2 Children 4 Nights </p>
                                <p>Experience Unique Opportunity </p>
                                <p className='text-[#565656] font-semibold'>Standard rooms </p>
                                <p className='text-[#000000] font-bold text-xl'>Very Good <span className='text-[#565656] text-sm	 font-semibold'>, 2.259 Reviews</span></p>

                            </div>

                        </div>
                        {/* 2nd 2 part */}
                        <div className='p-5 mt-3 lg:mt-24'>
                            <div className='flex gap-10'>
                                <p className='text-xl text-[#E5062E] '>12% Off</p>
                                <p className='text-2xl text-[#4C9839] font-bold '>$125</p>
                            </div>
                            <p className='text-[#565656]'>Includes taxes and charges</p>
                            <p className='text-[#4C9839]'>trip Sustainable Level, 5</p>
                            <p className='text-[#E5062E]'>We Have 8 Left at 12% off</p>
                            <p className='text-[#07689F] text-xl font-bold'>See Availability </p>

                        </div>


                    </div>
                    <div className='flex-none lg:flex gap-60 bg-[#FFFFFF] h-[550px] lg:h-[350px] mb-9'>
                        {/* 2nd 1 part */}
                        <div className='flex gap-8 p-5'>
                            {/* //pic */}
                            <div
                                className="hero bg-[url(/assets/images/search-result/hotel-5.jpg)] w-[220px] h-[270px]"
                            >

                                <div className="hero-content mt-[180px] text-neutral-content">
                                    <div className='mr-44' style={{ width: '50px', height: '50px' }}  >

                                        <GrFavorite className='h-[25px] w-[25px] -mt-48  inset-0   bg-black bg-opacity-30 rounded-full' />
                                        <div className='border-white outline-rose-50'>
                                            <p className='text-[#FFFFFF] mt-52 ml-40'>8,2</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* //text */}
                            <div>
                                <p className='text-[#000000] font-bold text-2xl mb-2'>Radisson Blu</p>
                                <p className='mb-1 text-[#565656] font-semibold'>Located In Downton, 500m Distance to Shore</p>
                                <p className='mb-1 text-[#565656] font-semibold'>Breakfast Included</p>
                                <p className='text-[#565656] font-semibold mb-5'>1 Adult,2 Children 4 Nights </p>
                                <p>Experience Unique Opportunity </p>
                                <p className='text-[#565656] font-semibold'>Standard rooms </p>
                                <p className='text-[#000000] font-bold text-xl'>Very Good <span className='text-[#565656] text-sm	 font-semibold'>, 2.259 Reviews</span></p>

                            </div>

                        </div>
                        {/* 2nd 2 part */}
                        <div className='p-5 mt-3 lg:mt-24'>
                            <div className='flex gap-10'>
                                <p className='text-xl text-[#E5062E] '>12% Off</p>
                                <p className='text-2xl text-[#4C9839] font-bold '>$125</p>
                            </div>
                            <p className='text-[#565656]'>Includes taxes and charges</p>
                            <p className='text-[#4C9839]'>trip Sustainable Level, 5</p>
                            <p className='text-[#E5062E]'>We Have 8 Left at 12% off</p>
                            <p className='text-[#07689F] text-xl font-bold'>See Availability </p>

                        </div>


                    </div>
                    <div className='flex-none  lg:flex '>


                        <Link href={'/faviourites'}>
                            <button className='text-[#07689F] ml-3 lg:ml-0 border-[#07689F] btn btn-outline hover:btn-primary'>
                                <div className='flex gap-2'>
                                    <span className='mt-1'>List your Favourite Places</span>
                                    <GrFavorite className='h-[22px] w-[22px] rounded-full' />
                                </div>
                            </button>
                        </Link>

                        <button className='ml-6 lg:ml-[700px] btn btn-primary'>See More Search Results</button>
                    </div>


                </div>
            </div>



        </div>
    );
};



export default page;