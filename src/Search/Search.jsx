import Link from 'next/link';
import React from 'react';
import { FaCcAmazonPay, FaRegBuilding } from 'react-icons/fa';
import { GrUserManager } from 'react-icons/gr';
import { MdOutlineDateRange } from 'react-icons/md';
import { RxDropdownMenu } from 'react-icons/rx';

const Search = () => {
    return (
        <div className='mb-20  container mx-auto '>
            <p className='text-[#07689F] ml-8 lg:ml-0 text-2xl font-bold'>Where is your Next Dream Place?</p>
            <p className='text-[#07689F] ml-8 lg:ml-0 mb-9'>Find exclusive Genius rewards in every corner of the world!</p>

            <div className='flex-none lg:flex ml-8 lg:ml-0'>
                <div className='flex-none lg:flex gap-3'>
                    {/* //Place */}
                    <div className='mb-6 lg:mb-0'>
                        <p className='text-[#000000] font-bold '>Place</p>
                        <div  className="h-[56px] w-[264px] border flex  border-[#A6A6A6]">

                            <p className='p-3'><FaRegBuilding className='text-2xl text-[#043E5F]' />

                            </p>
                            <p className='p-3 '>Gutenberg
                            </p>


                        </div>
                    </div>
                    {/* //VIP */}
                    <div className='mb-6 lg:mb-0'>
                        <p className='text-[#000000] font-bold'>VIP</p>
                        <div>
                            <p style={{ width: '175px' }} className="h-[56px]  border flex  border-[#A6A6A6]">
                                <p className='p-3'>Long Lasting
                                </p>
                                <p className='p-3'><RxDropdownMenu className='text-2xl text-[#043E5F]' />
                                </p>
                            </p>

                        </div>
                    </div>
                    {/* //Passengers - Room Condition */}
                    <div className='mb-6 lg:mb-0'>
                        <p className='text-[#000000] font-bold'>Passengers - Room Condition</p>
                        <div>
                            <p style={{ width: '350px' }} className="h-[56px] w-[94px] border flex justify-between border-[#A6A6A6]">
                                <p className='p-3 flex gap-3'><GrUserManager className='text-2xl text-[#043E5F]' />

                                2 Adults - 3 Children </p>
                                <p className='p-3 flex gap-2'>Two Rooms<RxDropdownMenu className='text-2xl text-[#043E5F]' />
                                </p>
                            </p>

                        </div>
                    </div>
                    {/* //Check In  -Check Out */}
                    <div className='mb-2 lg:mb-0'>
                        <p className='text-[#000000] font-bold'>Check In  -Check Out</p>
                        <div>
                            <p style={{ width: '253px' }} className="h-[56px] w-[94px] border  border-[#A6A6A6]">
                                <p className='p-3 flex gap-2'><MdOutlineDateRange className='text-2xl text-[#043E5F]' />

                                18 Dec 2023 - 23 Dec 2023 </p>
                                
                            </p>

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