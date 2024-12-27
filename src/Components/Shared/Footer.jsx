import Image from 'next/image';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { LuTwitter } from 'react-icons/lu';
import { MdCopyright, MdLocalPhone } from 'react-icons/md';

const Footer = () => {
    return (
        <footer  className='container mx-auto mt-[80px]'>
            <div >
                <div className='lg:flex justify-between ml-3 lg:ml-0'>
                    {/* 1st */}
                    <div>
                        <p className='text-[#07689F] mb-3 font-bold text-xl'>Go Further With The EasySet24 App</p>
                        <p className='text-[#000000] mb-2'>Enjoy savings on chosen hotels and flights when you book through the EasySet24 website.<br /> Additionally, earn One Key Cash for every booking made through the app.</p>
                        <p className='text-[#565656]'>Secured By Europe GTP</p>
                        <p></p>

                    </div>
                    {/* 2nd */}
                    <div className='grid grid-cols-2 gap-4 mt-4 lg:mt-0'>
                        <Image alt='pic1' height={40} width={120} src={'/assets/images/footer/appstore.gif'} />
                        <Image alt='pic1' height={41} width={40} src={'/assets/images/footer/QR Code.png'} />
                        <Image alt='pic1' height={40} width={120} src={'/assets/images/footer/play.gif'} />
                        <Image alt='pic1' height={41} width={40} src={'/assets/images/footer/QR Code.png'} />

                    </div>
                </div>
            </div>
            <hr className='mt-4' />
            <div className="footer  p-10">

                <nav>
                    <h6 className="font-bold text-[#000000]">About Us</h6>
                    <a className="link link-hover">Our Story</a>
                    <a className="link link-hover">Work with us</a>
                    <a className="link link-hover">Press & media</a>
                    <a className="link link-hover">Privacy & Security</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-[#000000]">We Offer</h6>
                    <a className="link link-hover">Trip Sponsorship</a>
                    <a className="link link-hover">Last Minutes Flights</a>
                    <a className="link link-hover">Best Deals</a>
                    <a className="link link-hover">AI-Driven Search </a>
                </nav>
                <nav>
                    <h6 className="font-bold text-[#000000]">Headquarters</h6>
                    <a className="link link-hover">England</a>
                    <a className="link link-hover">France</a>
                    <a className="link link-hover">Canada</a>
                    <a className="link link-hover">Iceland</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-[#000000]">Bali Travel Guide</h6>
                    <a className="link link-hover">Sri Travel Guide</a>
                    <a className="link link-hover">Peru Travel Guide</a>
                    <a className="link link-hover">Swiss Travel Guide</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-[#000000]">Tour Leading</h6>
                    <a className="link link-hover">Cruising & sailing</a>
                    <a className="link link-hover">Camping </a>
                    <a className="link link-hover">Kayaking</a>
                </nav>
                <nav>
                    <h6 className="font-bold text-[#000000]">Service</h6>
                    <a className="link link-hover">Report Error</a>
                    <a className="link link-hover">Ask online</a>
                    <a className="link link-hover">Travel insurance</a>
                </nav>
            </div>
            <div className='lg:flex justify-between ml-5 lg:ml-0'>
                {/* pic */}
                <div className='flex gap-3'>
                    <Image className='h-[48px]' alt='pic1' height={20} width={89} src={'/assets/images/footer/Visa Card.png'} />
                    <Image className='h-[48px]' alt='pic2' height={20} width={89} src={'/assets/images/footer/Amex.png'} />
                    <Image className='h-[48px]' alt='pic3' height={20} width={89} src={'/assets/images/footer/Master Card.png'} />
                    <Image className='h-[48px]' alt='pic4' height={20} width={89} src={'/assets/images/footer/Paypal.png'} />

                </div>
                {/* i-cons*/}
                <div  className='flex gap-3 mt-[25px] lg:mt-[15px]'>
                    <FaLinkedin className='text-3xl' />
                    <LuTwitter className='text-3xl' />
                    <FaFacebook className='text-3xl' />
                    <FaInstagram className='text-3xl' />






                </div>
                {/* input */}
                <div className='flex mt-[25px] lg:mt-0 mb-4 lg:mb-0'>
                    <div>
                        <p className='text-[#000000] '>Email </p>
                        <div className="relative">
                            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <i className="fas fa-user"></i> <AiOutlineMail className='mt-1' />

                            </span>
                            <input
                                className="h-[48px] w-[321px] border border-[#565656] pl-[30px]"
                                placeholder="enter your email"
                            />
                        </div>
                    </div>
                    {/* button */}
                    <div >
                        <div
                            
                            className="h-[48px] w-[94px] bg-[#07689F] flex justify-center mt-6 border border-[#A6A6A6]"
                        >
                            <button className="text-[#FFFFFF] font-bold">Search</button>
                        </div>
                    </div>
                </div>
            </div>


            <div
                
                className="lg:flex justify-between h-[160px] lg:h-[64px] ml-3 lg:ml-0 bg-[#D9D9D9]"
            >
                <div className="flex items-center mt-2 lg:mt-0">
                    <MdCopyright className="text-[#07689F] mt-1 " />
                    <p className="text-[#565656] text-sm">Copyright EasySet24</p>
                </div>
                <div className="flex gap-1 items-center mt-2 lg:mt-0">
                    <AiOutlineMail className="text-[#07689F]" />
                    <p className="text-[#565656] text-sm">easyset24@gmail.com</p>
                </div>
                <div className="flex items-center mt-2 lg:mt-0">
                    <p className="text-[#565656] font-bold">
                        "EasySet24: Seamless Journeys, Unrivalled Travel Wisdom!"
                    </p>
                </div>
                <div className="flex gap-1 items-center mt-2 lg:mt-0">
                    <CiLocationOn className="text-[#07689F]" />
                    <p className="text-[#565656] text-sm">+44 20 7123 4567</p>
                </div>
                <div className="flex gap-1 items-center mt-2 lg:mt-0">
                    <MdLocalPhone className="text-[#07689F]" />
                    <p className="text-[#565656] text-sm">+44 20 7123 4567</p>
                </div>
            </div>



        </footer>
    );
};

export default Footer;