import Image from 'next/image';
import React from 'react';

const Banner2 = () => {
    return (
        <div
            className="hero container mx-auto mb-20 bg-[url(/assets/images/banner-2/f9cabc1ad07652d26b66eb9537ba0a6d.jpg)] w-[1300px] h-[1120px] lg:h-[700px]"
           >
            <div className="hero-overlay bg-opacity-60"></div>
           
            {/* first card */}
            <div  className="hero-content mr-[950px] lg:mr-[580px] mb-[400px] text-neutral-content text-center ">
                <div className="max-w-md">

                    <div  className=" bg-white h-[185px] w-[360px] -mt-64 lg:-mt-10 mr-20  shadow-xl flex gap-2">
                       <div className='p-3'>
                      
                            <Image  className='w-[140px] h-[160px]' alt='card-1' height={124} width={125} src={'/assets/images/banner-2/banner-1.jpg'} />
                       
                       </div>
                        <div className="mt-16">
                            <h2 className=" text-black text-left font-bold text-xl">Belgium</h2>
                            <p className='text-black'>Bruxelles Gare du Midi</p>
                            
                        </div>
                    </div>
                   
                </div>
            </div>


            {/* secound card */}
            <div  className="hero-content  mr-[800px] ml-[-150px] lg:ml-0 -mt-72 lg:mt-[400px] text-neutral-content text-center ">
                <div className="max-w-md">

                    <div className="h-[185px] w-[360px] bg-white -mt-10 mr-20   shadow-xl flex gap-2">
                       <div className='p-3'>
                      
                            <Image className='h-[160px] w-[140px]' alt='card-1' height={124} width={125} src={'/assets/images/banner-2/banner-2.jpg'} />
                       
                       </div>
                        <div className="mt-16">
                            <h2 className=" text-black text-left font-bold text-xl">New Jersey</h2>
                            <p className='text-black'>Windsor</p>
                            
                        </div>
                    </div>
                   
                </div>
            </div>
            

            {/* third card */}
            <div  className="ml-[-380px] lg:ml-[800px] lg:mb-[400px] mr-[575px] -mb-[110px] lg:mr-0 hero-content text-neutral-content text-center ">
                <div className="max-w-md">

                    <div  className=" bg-white -mt-10 mr-20  w-[360px] h-[185px] shadow-xl flex gap-2">
                       <div className='p-3'>
                      
                            <Image  className='h-[160px] w-[140px] ' alt='card-1' height={124} width={125} src={'/assets/images/banner-2/banner-5.jpg'} />
                       
                       </div>
                        <div className="mt-16">
                            <h2 className=" text-black text-left font-bold text-xl">Amsterdam</h2>
                            <p className='text-black'>Bunk</p>
                            
                        </div>
                    </div>
                   
                </div>
            </div>

            {/* fouth card */}
            <div  className="lg:ml-[760px] mt-[500px] hero-content -ml-[954px] text-neutral-content text-center ">
                <div className="max-w-md">

                    <div className=" bg-white -mt-10 mr-20  w-[360px] h-[185px] shadow-xl flex gap-2">
                       <div className='p-3'>
                      
                            <Image  className='h-[160px] w-[140px] '  alt='card-1' height={124} width={125} src={'/assets/images/banner-2/banner-4.jpg'} />
                       
                       </div>
                        <div className="mt-16">
                            <h2 className=" text-black text-left font-bold text-xl">Gothenburg</h2>
                            <p className='text-black'>First Hotel G</p>
                            
                        </div>
                    </div>
                   
                </div>
            </div>

            {/* fivth card */}
            <div   className="mt-[900px] mr-[950px] lg:mr-0 lg:mt-[120px] hero-content text-neutral-content text-center ">
                <div className="max-w-md">

                    <div  className=" bg-white -mt-10 mr-20 h-[185px] w-[360px]   shadow-xl flex gap-2">
                       <div className='p-3'>
                      
                            <Image  className='h-[160px] w-[140px] ' alt='card-1' height={124} width={125} src={'/assets/images/banner-2/banner-3.jpg'} />
                       
                       </div>
                        <div className="mt-16">
                            <h2 className=" text-black text-left font-bold text-xl">Nepal</h2>
                            <p className='text-black'>Hyatt Regency K</p>
                            
                        </div>
                    </div>
                   
                </div>
            </div>
            
        </div>
    );
};

export default Banner2;