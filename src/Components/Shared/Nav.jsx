import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiDollar } from "react-icons/bi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { IoSearch } from 'react-icons/io5';
import { LuPhoneCall } from "react-icons/lu";

const Nav = () => {
    return (
        <div className="navbar container mx-auto mt-4">
            <div className="flex flex-wrap justify-between items-center w-full">
                {/* Logo Section */}
                <div className="flex-shrink-0">
                    <Link href={'/'}>
                        <Image alt='logo' src={'/assets/logo/Logo.png'} height={66} width={91} />
                    </Link>
                </div>

                {/* Input Field */}
                <div className="flex-grow justify-center px-8 hidden xl:flex relative">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="color-white input input-bordered lg:w-[700px] pr-10"
                    />
                    {/* Search Icon */}
                    <IoSearch
                        className="absolute xl:right-20 2xl:right-[190px] text-2xl top-1/2 transform -translate-y-1/2 text-gray-500"
                        size={20} // Adjust icon size here
                    />
                </div>

                {/* Icons + Avatar + Name */}
                <div className="flex items-center space-x-5 flex-shrink-0">
                    <div className="avatar hidden sm:block">
                        <div className="w-6 rounded-full">
                            <img src="/assets/images/avatars/fc71449c73829a67d58b01b72b310b30.png" />
                        </div>
                    </div>
                    <BiDollar className='text-2xl text-blue-900 font-bold' />
                    <FaRegQuestionCircle className='text-2xl text-blue-900 font-bold' />
                    <GrFavorite className='text-2xl text-blue-900 font-bold' />
                    <LuPhoneCall className='text-2xl text-blue-900 font-bold' />
                    <div className='flex items-center gap-2'>
                        <div className="avatar">
                            <div className="w-14 rounded-full">
                                <Image src={'/assets/images/avatars/00d1b149146b7a360430e9a7cfb04a7d.jpg'} alt='avatar-2' height={50} width={50} />
                            </div>
                        </div>
                        <div>
                            <p className='text-blue-900 font-bold'>Your Account</p>
                            <p className='text-blue-900'>Anna Carinna</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
