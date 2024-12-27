import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiDollar } from "react-icons/bi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";

const Nav = () => {
    return (
        <div className="navbar container mx-auto mt-4">
            <div className="flex justify-between items-center w-full">
                {/* Logo Section */}
                <div className="flex-shrink-0">
                    <Link href={'/'}>
                        <Image alt='logo' src={'/assets/logo/Logo.png'} height={66} width={91} />
                    </Link>
                </div>

                {/* Input Field */}
                <div className="flex-grow justify-center px-8 hidden lg:flex">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="color-white input input-bordered  lg:w-[700px]"
                       
                    />
                </div>


                {/* Icons + Avatar + Name */}
                <div className="flex items-center space-x-5 flex-shrink-0">
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
