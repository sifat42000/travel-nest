import Link from 'next/link';
import React from 'react';
import { FaCcAmazonPay, FaRegBuilding } from 'react-icons/fa';
import { GrUserManager } from 'react-icons/gr';
import { MdOutlineDateRange } from 'react-icons/md';
import { RxDropdownMenu } from 'react-icons/rx';

const Search = () => {
    return (
        <div className='mb-20  container mx-auto  max-w-[1308px] px-3'>
            <p className='text-[#07689F] ml-8 lg:ml-0 text-2xl font-bold'>Where is your Next Dream Place?</p>
            <p className='text-[#07689F] ml-8 lg:ml-0 mb-9'>Find exclusive Genius rewards in every corner of the world!</p>

            <div className='flex-none lg:flex ml-8 lg:ml-0 '>
                <div className='flex-none xl:flex  gap-1 '>
                    {/* //Place */}
                    <div className='mb-6 lg:mb-0'>
                        <p className='text-[#000000] font-bold '>Place</p>
                        <div className="h-[56px] w-[264px] border    border-[#A6A6A6]">

                            <div className='flex gap-3 p-3'>
                                <p className=' '><FaRegBuilding className='text-2xl text-[#043E5F]' />

                                </p>
                                <p className=''>Gutenberg
                                </p>
                            </div>


                        </div>
                    </div>
                    {/* //VIP */}
                    <div className='mb-6 lg:mb-0'>
                        <p className='text-[#000000] font-bold'>VIP</p>
                        <div className="h-[56px] w-[175px]  border   border-[#A6A6A6]">
                            <div className='flex gap-6 p-3'>
                                <p >Long Lasting
                                </p>
                                <p ><RxDropdownMenu className='text-2xl text-[#043E5F]' />
                                </p>
                            </div>

                        </div>
                    </div>
                    {/* //Passengers - Room Condition */}
                    <div className='mb-6 lg:mb-0'>
                        <p className='text-[#000000] font-bold'>Passengers - Room Condition</p>
                        <div className="h-[70px] md:h-[56px] sm:w-[338px]  md:w-[390px] border  border-[#A6A6A6]">

                            <div className='flex gap-8 p-3'>
                                <p className=' flex gap-3'><GrUserManager className='text-2xl text-[#043E5F]' />

                                    2 Adults - 3 Children </p>
                                <p className=' flex gap-2'>Two Rooms<RxDropdownMenu className='text-2xl text-[#043E5F]' />
                                </p>
                            </div>


                        </div>
                    </div>
                    {/* //Check In  -Check Out */}
                    <div className='mb-2 lg:mb-0'>
                        <p className='text-[#000000] font-bold'>Check In  -Check Out</p>
                        <div className="h-[56px] w-[270px] border  border-[#A6A6A6]">

                            <p className='p-3 flex gap-2'><MdOutlineDateRange className='text-2xl text-[#043E5F]' />

                                18 Dec 2023 - 23 Dec 2023 </p>



                        </div>
                    </div>

                </div>

                {/* //button */}
                <Link href={'/searchresult'}>
                    <div

                        className="h-[56px] bg-[#07689F] w-[182px] flex justify-center mt-6"
                    >
                        <button className="text-[#FFFFFF] font-bold">Search</button>
                    </div></Link>
            </div>

        </div>
    );
};

export default Search;