'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { BsCupHot } from "react-icons/bs";
import { IoIosWifi } from "react-icons/io";
import { LuCircleParking } from "react-icons/lu";
import { FaCat, FaCheck } from "react-icons/fa";
import { IoShirtOutline } from "react-icons/io5";
import { IoLogoNoSmoking } from "react-icons/io";
import { IoIosWoman } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { PiShoppingCartLight } from "react-icons/pi";
import { GiFamilyHouse } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBackup } from "react-icons/md";
import { MdBathroom } from "react-icons/md";
import { ImTv } from "react-icons/im";
import { FaCcAmazonPay } from "react-icons/fa";
import { RxDropdownMenu } from "react-icons/rx";
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdFlight } from "react-icons/md";
import { FaCarOn } from "react-icons/fa6";
import { CiClock1 } from "react-icons/ci";
import { FaClockRotateLeft } from "react-icons/fa6";
import { LuArrowUpDown } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import Link from 'next/link';
import { IoMdRadioButtonOff } from "react-icons/io";




const page = () => {
    const [isButton, setButton] = useState(false)
    const [isSecondButton, setIsSecondButton] = useState(false)
    return (
        <div className='container  w-full  max-w-[1410] flex flex-wrap gap-24 mx-auto mb-20'>
            {/* left side */}
            <div className='sm:ml-[91px]  md:ml-[180px] xl:ml-[270px] 2xl:ml-0 pl-2 lg:pl-0'>
                {/* first part */}
                <div className='flex    bg-[#FFFFFF] w-[330px] md:w-[480px] xl:w-[870px] 2xl:w-[580px] h-[980px] md:h-[780px]'>
                    {/* images */}
                    <div className='p-5'>
                        <Image className='mb-5 h-[140px]' alt='img-1' height={70} width={140} src={'/assets/images/payment-details/f-1.jpg'} />
                        <Image className='mb-5 h-[140px]' alt='img-1' height={120} width={140} src={'/assets/images/payment-details/f-2.jpg'} />
                        <Image className='mb-5 h-[140px]' alt='img-1' height={120} width={140} src={'/assets/images/payment-details/f-3.jpg'} />
                        <Image className='mb-5 h-[140px]' alt='img-1' height={120} width={140} src={'/assets/images/payment-details/f-5.jpg'} />

                    </div>
                    {/* texts */}
                    <div className='p-5'>
                        <p className='text-[#000000] font-bold text-xl' >First Hotel G</p>
                        <p className='text-sm mb-4'>Modern Hotel at Gothenburg Central Station</p>
                        <div>
                            <div className='flex gap-1 md:gap-12 mb-2'>
                                <p className='font-semibold flex gap-2'>More than 4,325 Review  <IoIosArrowDown className='mt-[6px]' /></p>
                                <p className='text-[#07689F] font-bold rounded-md w-7 border border-[#07689F]'>9,2</p>
                            </div>
                            <div className="w-[250] md:w-[290px] h-[5px] bg-[#A6A6A6] rounded-full relative overflow-hidden">
                                <div
                                    className="h-full w-[80%] bg-[#07689F] rounded-full"

                                ></div>
                            </div>
                        </div>
                        <p className='mt-10 mb-4 flex gap-2 text-xl font-bold'><ImLocation className='mt-1 text-[#07689F]' /> Location Information</p>

                        <ul class="list-disc pl-5 mb-8">
                            <li className="mb-2">0 m to City Centre
                            </li>
                            <li className="mb-2">24 km to Landvetter Airport
                            </li>
                            <li className="mb-2">2,5 km to Liseberg Amusment Park
                            </li>
                            <li className="mb-2">0 m to Gothenburg Central Station</li>
                        </ul>

                        <p className='text-lg mb-4 flex gap-2'><BsCupHot className='mt-1' /> Breakfast Included</p>
                        <p className='text-xl mb-4 flex gap-2'><IoIosWifi className='mt-1' />
                            Free WI-FI</p>
                        <p className='text-lg mb-4 flex gap-2'><LuCircleParking className='mt-1' />
                            Free Parking</p>
                        <p className='text-lg mb-4 flex gap-2'><FaCat className='mt-1' />
                            Pets are Welcome</p>
                        <p className='text-lg mb-4 flex gap-2'><IoShirtOutline className='mt-1' />
                            free laundry service </p>
                        <p className='text-lg mb-4 flex gap-2'><IoLogoNoSmoking className='mt-1' />
                            no smoking</p>
                        <p className='text-lg flex gap-2'><IoIosWoman className='mt-1' />
                            Free Entrance Exercise Centre</p>

                    </div>
                </div>

                {/* second part */}
                <div className='mt-10 bg-[#FFFFFF] w-[330px] md:w-[480px] xl:w-[870px] 2xl:w-[580px] h-[430] md:h-[370]'>
                    <div className='p-7'>
                        <p className='text-[#000000] text-xl font-bold '>Your Booking Deteiels</p>
                        <div className='flex gap-36 mt-12 mb-12'>
                            <div>
                                <p className='font-bold text-[#000000]'>Check - In </p>
                                <p>2 August 2023</p>
                            </div>

                            <div>
                                <p className='font-bold text-[#000000]' >Check -Out</p>
                                <p>6 August 2023</p>
                            </div>

                        </div>

                        <ul class="list-disc pl-5 mb-8">
                            <li className="mb-1 text-[#000000]">You Will Stay 4 Nights
                            </li>
                            <li className="mb-1 text-[#000000]">You Selected 2 Rooms For :
                            </li>
                            <li className="mb-1 text-[#000000]">2 Adults
                            </li>
                            <li className="mb-1 text-[#000000]">3 Children (12 ,7 and 5 Years Old)
                            </li>
                            <li className="mb-1 text-[#000000]">0 Infant</li>
                        </ul>

                    </div>

                </div>

                {/* third part */}
                <div className='mt-9 mb-9 bg-[#FFFFFF] w-[330px] md:w-[480px] xl:w-[870px] 2xl:w-[580px] h-[420px] md:h-[320px]'>
                    <div className='p-4'>
                        <p className='text-xl mb-4 text-[#000000] font-bold'>The Room : <span className='font-semibold'>Superior Twin Room</span></p>
                        <p className='font-bold mb-8 flex gap-[7px] text-[#000000] text-xl'> <GoPlus className='mt-1' />
                            Guest Number  <span className='font-semibold'>2 adult</span> </p>

                        <p className='flex gap-3 mb-8'><PiShoppingCartLight className='mt-[5px]' />
                            cleanliness rooms Rate    <span className='text-[#07689F] border border-[#07689F] font-bold'>8,9</span></p>
                        <div >

                            <div className='flex gap-1'>
                                <div className='h-[40px] w-[150px] bg-green-100 '>
                                    <p className='flex gap-2 p-2 ml-10 text-center'><GiFamilyHouse className='mt-1' />
                                        <span className='gap-1 font-bold'>18<sup>M2</sup></span></p>
                                </div>
                                <div className='h-[60px] md:h-[40px] w-[190px] bg-green-100 '>
                                    <p className='flex gap-2 p-2  text-center'><CiLocationOn className='mt-1' />

                                        City Center</p>
                                </div>
                                <div className='h-[90px] md:h-[40px] w-[190px] bg-green-100 '>
                                    <p className='flex gap-2 p-2  text-center'><MdOutlineBackup className='mt-1' />

                                        Next To Forest</p>
                                </div>
                            </div>
                            <div className='flex gap-1 mt-2'>
                                <div className='h-[90px] md:h-[40px] w-[240px] bg-green-100 '>
                                    <p className='flex gap-2 p-2 ml-10 text-center'><MdBathroom className='mt-1' />

                                        En-suite bath room</p>
                                </div>
                                <div className='h-[90px] md:h-[40px] w-[240px] bg-green-100 '>
                                    <p className='flex gap-2 p-2 ml-10 text-center'><ImTv className='mt-1' />

                                        Flat-screen TV</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* fouth part */}
                <div className='mb-12 bg-[#FFFFFF] w-[330px] md:w-[480px] xl:w-[870px] 2xl:w-[580px] h-[736px] md:h-[660px]'>
                    <div className='p-4'>
                        <p className='text-3xl text-[#000000] font-bold mb-9'>Payment  Information</p>
                        <p className='text-2xl text-[#000000] font-bold'>Your Price Summary</p>
                        <hr className='mt-1'></hr>

                        <div className='flex justify-between mt-6'>
                            <p className='text-[#000000] font-bold'>Original Price</p>
                            <p className='text-[#000000] font-bold flex gap-3'>$960    <span className='font-semibold text-[#565656]'>4 nights</span></p>
                        </div>
                        <hr className='mt-1'></hr>
                        <div className='flex justify-between mt-6'>
                            <p className='text-[#000000] '>EasySet24 Loyalty Discount 4 %</p>
                            <p className='text-[#E5062E] text-sm font-bold flex gap-3'>$100    <span className='font-semibold text-[#565656] '>Discount</span></p>
                        </div>
                        <hr className='mt-1'></hr>
                        <div className='flex justify-between mt-6'>
                            <p className='text-[#000000] font-bold'>Total Amount for Payment</p>
                            <p className='text-[#4C9839] text-2xl font-bold flex gap-3'>$860  </p>
                        </div>
                        <hr className='mt-3  h-5'></hr>

                        <p className='mt-3 mb-3 text-[#000000] font-bold text-xl'>Cancellation Policy </p>
                        <p className='text-[#000000] mb-4 font-bold flex gap-3'><FaCheck className='mt-1' />
                            Free Cancellation</p>
                        <p className='text-[#000000] mb-12'>Cancel /Rebook No Later Than 24 Hours Before, Otherwise You Pay 80% Of The Cost.</p>
                        <div className='  relative'>
                            <p className='text-2xl mb-4 text-[#000000] font-bold'>Pay part now, part later</p>
                            <button className='rounded-full  text-xl hidden sm:block absolute right-1 md:right-2 top-2'> <IoMdRadioButtonOff onClick={() => setButton(!isButton)} className={`${isButton ? "bg-[#07689F]" : "bg-white"} text-[#07689F] border border-3 border-[#07689F] rounded-full`} /></button>
                        </div>
                        <p>Pay $ 200 now, and the rest ($6,60) will be automatically charged to the same payment method on August 27, 2023. No extra fees.</p>
                    </div>
                </div>

                {/* fivth part */}
                <div className='mb-16 bg-[#FFFFFF] w-[330px] md:w-[480px] xl:w-[870px] 2xl:w-[580px] h-[165px] md:h-[145px]'>
                    <div className='p-5'>
                        <p className='text-3xl text-[#000000] font-bold' >Payment Methods </p>
                        <div className='mt-4 flex justify-between'>
                            <div className='flex gap-4 '>
                                <p className='font-bold text-[#000000]'>Payment<br /> Method</p>
                                <p className="h-[56px] w-[94px] border flex justify-between border-[#A6A6A6]">
                                    <p className='p-3'><FaCcAmazonPay className='text-xl' />
                                    </p>
                                    <p className='p-3'><RxDropdownMenu className='text-xl' />
                                    </p>
                                </p>
                            </div>
                            <div className='flex gap-5'>
                                <p className='font-bold text-xl text-[#000000]'>Booking For Work </p>
                                <button className='rounded-full  text-xl -mt-6'> <IoMdRadioButtonOff onClick={() => setButton(!isButton)} className={`${isButton ? "bg-[#07689F]" : "bg-white"} text-[#07689F] border border-3 border-black rounded-full`} /></button>
                            </div>


                        </div>
                    </div>
                </div>


            </div>


            {/* right side */}
            <div className='sm:ml-[91px]  md:ml-[180px] xl:ml-[270px] 2xl:ml-0 pl-2 lg:pl-0'>
                {/* first part */}
                <div className=' bg-[#FFFFFF] w-[330px] md:w-[480px] xl:w-[870px] 2xl:w-[720px] h-[420px] lg:h-[350px] mb-6'>
                    <div className='p-6'>
                        <div className='lg:flex gap-24 mb-9'>

                            <div className='flex gap-4'>
                                {/* avatar */}
                                <div>
                                    <div className="avatar">
                                        <div className="w-[60px] rounded-full">
                                            <Image height={60} width={60} alt='avatar' src={'/assets/images/payment-details/person.jpg'} />
                                        </div>
                                    </div>
                                </div>
                                {/* avatar text */}
                                <div>
                                    <p className='font-bold text-[#000000]'>Anna Carinna</p>
                                    <p>easyset24@gmail.com</p>
                                </div>
                            </div>
                            <div className='border border-[#07689F] h-[80] md:h-[48px] max-w-[350px] rounded-lg'>
                                <p className='text-xl text-center mt-2 text-[#07689F] flex gap-2 ml-3'>Check Your Booking History <IoIosArrowForward className='mt-1 text-[#333333]' />
                                </p>
                            </div>

                        </div>
                        <div className='lg:flex gap-3   mb-9  w-[700]'>
                            <p className='text-lg mb-2 md:mb-0 w-[260] font-bold text-[#000000]'>Who are you booking for?</p>
                            <div className='flex gap-2 mb-2 md:mb-0'>
                                <button className='rounded-full text-sm '> <IoMdRadioButtonOff onClick={() => setButton(!isButton)} className={`${isButton ? "bg-[#07689F]" : "bg-white"} text-[#07689F] text-2xl border border-3 border-black -mt-2 rounded-full`} /></button>
                                <p className='text-sm'>I am the main guest </p>
                            </div>
                            <div className='flex gap-2'>
                                <button className='rounded-full text-xl '> <IoMdRadioButtonOff onClick={() => setIsSecondButton(!isSecondButton)} className={`${isSecondButton ? "bg-[#07689F]" : "bg-white"} text-[#07689F] text-2xl -mt-2 border border-3 border-black rounded-full`} /></button>
                                <p className='text-sm'>Booking is for someone else
                                </p>
                            </div>


                        </div>


                        <div className='relative '>
                            <p className='text-2xl font-bold text-[#000000]'>Enter Your Information </p>
                            <p className='text-[#000000] mb-2'>Make Sure the Information that you Have already written in yoy Profile is Correct.</p>
                            <p className='text-[#07689F] absolute right-1 text-lg mt-3 flex lg:ml-[450px] gap-2'><FaPencilAlt className='mt-1' />
                                Edit Profile</p>
                        </div>
                    </div>
                </div>

                {/* second part */}
                <div className='bg-[#FFFFFF] w-[330px] md:w-[480px] xl:w-[870px] 2xl:w-[720px] h-[620px] lg:h-[410px] mb-8'>
                    <div className='p-5'>
                        <p className='text-[#000000] font-bold text-xl mb-4'>Full Name</p>
                        <div className='lg:flex gap-3 mb-6'>
                            <div>
                                <input className='h-[45px] w-[200px] border pl-4 border-[#565656]' placeholder='First name ' />
                            </div>
                            <div className='mt-3 lg:mt-0'>
                                <input className='h-[45px] w-[200px] border pl-4 border-[#565656]' placeholder='Middle name ' />
                            </div>
                            <div className='mt-3 lg:mt-0'>
                                <input className='h-[45px] w-[200px] border pl-4 border-[#565656]' placeholder='Last name ' />
                            </div>
                        </div>
                        <div className='lg:flex gap-3 mb-6'>
                            <div>
                                <p className='text-[#000000] text-xl'>Email Address</p>
                                <div className="relative">
                                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        <i className="fas fa-user"></i> <AiOutlineMail />

                                    </span>
                                    <input
                                        className="h-[45px] w-[240px] md:w-[415px] border border-[#565656] pl-[30px]"
                                        placeholder="..................."
                                    />
                                </div>
                            </div>
                            <div className='mt-3 lg:mt-0'>
                                <p className='text-[#000000] text-xl'>Phone Number</p>
                                <div className="relative">
                                    <Image alt="User Icon"
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                        src={'/assets/images/payment-details/SE.png'} height={16} width={16} />
                                    <input
                                        className="h-[45px] w-[200px] border border-[#565656] pl-[40px]"
                                        placeholder="764378888888"
                                    />
                                </div>



                            </div>

                        </div>
                        <p className='text-xl mb-1 text-[#000000] font-bold'>If You Need Assistance</p>
                        <p className='mb-6'>Choose An Option Based On Physical Disability Accordingly.</p>

                        <div className='flex relative'>
                            <div>
                                <p className='font-semibold'>Chose An Option</p>
                                <div className="relative w-[180px]">
                                    <input
                                        className="w-full h-[48px] p-4  border border-[#A6A6A6] pr-[40px]"
                                        placeholder="Not Provided"
                                    />
                                    <i
                                        className="fas fa-search absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    ><IoIosArrowDown />
                                    </i>
                                </div>



                            </div>
                            <div className='absolute right-16'>
                                <p className='font-semibold'>Region /Country</p>
                                <input placeholder='Country' className='w-[180px] h-[48px] border pl-4 border-[#A6A6A6] ' />

                            </div>
                        </div>
                    </div>
                </div>

                {/* third part */}
                <div className='bg-[#FFFFFF] w-[330px] md:w-[480px] xl:w-[870px] 2xl:w-[720px] h-[1900px] md:h-[1520px] lg:h-[1320px] mb-6'>
                    <div className='p-5'>
                        <p className='text-3xl font-bold text-[#000000] mb-11'>Add to your stay</p>
                        <div className='flex gap-5 mb-5'>
                            <input type="checkbox" className="h-[25] w-[25] mt-[2px] border border-[#333333]" />
                            <p className='text-xl font-semibold text-[#000000]'>I will need a flight for my trip</p>
                        </div>
                        <p className='flex gap-2 mb-2'><MdFlight className='mt-1' />
                            20% Special Offer If You Book A Flight
                        </p>
                        <p className='w-[280px] md:w-[440px] lg:w-[660px]  text-lg mb-2'>Flexible flight options from Stockholm to Turkiye from SLK 766/round trip. Fnnish booking </p>
                        <p className='w-[280px] md:w-[440px] lg:w-[581px] text-lg mb-9'>this stay to get flight recommendations that match your selected dates.</p>
                        <div className='flex gap-5 mb-9'>
                            <input type="checkbox" className="h-[25] w-[25] mt-[2px] border border-[#333333]" />
                            <p className='text-xl font-semibold text-[#000000]'>Want to book a taxi or shuttle ride in advance?</p>
                        </div>
                        <p className='flex gap-2 mb-2'><FaCarOn className='mt-1' />

                            10% Special Offer If You Rent A Taxi
                        </p>
                        <p className='w-[280px] md:w-[440px] lg:w-[650px] text-lg mb-2'>Avoid surprises_ get from the airport to your accommodation without a hitch.  </p>
                        <p className='w-[280px] md:w-[440px] lg:w-[581px] text-lg mb-16'>we will add taxi options to your booking confirmation.  </p>
                        <p className='text-xl text-[#000000] font-bold mb-9'>Special Requests</p>
                        <p className='mb-3 font-semibold text-[#000000]'>Special requests can not be guaranteed _ but the property will do its best to<br /> meet your needs. </p>
                        <p className='mb-6 font-semibold text-[#000000]'>you can always make a special request after your booking is complete!      </p>

                        <p className='text-[#000000] '>(optional)</p> <br />
                        <input className='w-[280px] md:w-[430px] lg:w-[613px] mb-6 h-[106px] border border-[#A6A6A6]' />
                        <div className='flex gap-3 mb-9'>
                            <input type="checkbox" className="h-[25]  w-[25] mt-[2px] border border-[#333333]" />
                            <p className='text-lg  text-[#000000]'>I would like rooms close to each other</p>
                        </div>
                        <p className='text-xl font-bold mb-7 text-[#000000]'>Your Arrival Time</p>
                        <p className='flex gap-2 mb-4 text-lg'><CiClock1 className='mt-2' /> your rooms will be ready for check_in between 15:00 and 23:00
                        </p>
                        <p className='flex gap-2 mb-8 text-lg'><FaClockRotateLeft className='mt-2' />
                            24-huor front desk_Help wherever you need it!
                        </p>
                        <p className='text-xl font-bold mb-8'> Add Your Estimated Arrival Time<span className='font-semibold'>(optional)</span></p>
                        <div className="relative mb-3 w-[244px]">
                            <input
                                className="h-[48px] w-full p-4 border border-[#A6A6A6] pr-[40px]"
                                placeholder="Not Provided"
                            />
                            <span
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                            >
                                <LuArrowUpDown />
                            </span>
                        </div>
                        <p className='font-semibold'>Time for <span className='font-bold'>CET</span>  time zone</p>


                    </div>
                </div>

                {/* fourth part */}
                <div className='bg-[#FFFFFF] w-[330px] md:w-[480px] xl:w-[870px] 2xl:w-[720px] h-[580px] md:h-[550px] lg:h-[275px] '>
                    <div className='p-4'>
                        <p className='font-bold text-3xl mb-5'>Bank Card Information</p>
                        <div className='lg:flex gap-6 '>
                            {/* child-1 */}
                            <div>
                                <p className='font-bold text-xl'>Full Name  The Card</p>
                                <input className='h-[48px] w-[210px] pl-3 border border-[#565656]' placeholder='Anna Carina  ' />

                            </div>
                            {/* child-2 */}
                            <div>
                                <p className='font-bold text-xl'>Card Number</p>
                                <div className="relative">
                                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        <i className="fas fa-user"></i> <AiOutlineMail />

                                    </span>
                                    <input
                                        className="h-[48px] w-[208px] border border-[#565656] pl-[30px]"
                                        placeholder="..................."
                                    />
                                </div>

                            </div>
                            {/* child-3 */}
                            <div>
                                <p className='font-bold text-xl'>EXP Date</p>
                                <input className='h-[48px] w-[100px] pl-3 border border-[#565656]' placeholder='**/**' />


                            </div>
                            {/* child-4 */}
                            <div>
                                <p className='font-bold text-xl'>CVC</p>
                                <input className='h-[48px] w-[80px] pl-3 border border-[#565656]' placeholder='***' />

                            </div>
                        </div>
                        <div className='lg:flex justify-between'>
                            <button className='mt-8 flex gap-3 btn btn-outline hover:btn-primary  text-center font-bold w-[277px] h-[48px] border border-[#07689F] text-[#07689F]'>Save in Shortcut <MdFavoriteBorder className='text-xl' />

                            </button>
                            <Link href={'/reservation'}><button className='mt-3 lg:mt-8  text-center font-bold w-[277px] h-[48px] btn btn-primary text-[#FFFFFF]'>Payment
                            </button></Link>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default page;