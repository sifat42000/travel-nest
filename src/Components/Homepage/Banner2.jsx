import Image from 'next/image';
import React from 'react';

const Banner2 = () => {
  const cards = [
    { top: 375, left: 33, country: 'New Jersey', place: 'Windsor' },
    { top: 59, left: 255, country: 'Belgium', place: 'Bruxelles Gare du Midi' },
    { top: 300, left: 455, country: 'Nepal', place: 'Hyatt Regency K' },
    { top: 100, left: 910, country: 'Amsterdam', place: 'Bunk' },
    { top: 400, left: 830, country: 'Gothenburg', place: 'First Hotel G' },
  ];

  return (
    <div className="relative mx-auto max-w-[1395px] h-[840px] mb-14  md:h-[600px] bg-[url(/assets/images/banner-2/f9cabc1ad07652d26b66eb9537ba0a6d.jpg)] bg-cover bg-center">
      {/* লিনিয়ার গ্রেডিয়েন্ট */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      {/* কার্ডস */}
      <div className="absolute inset-0 xl:block hidden pr-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className="absolute flex items-center gap-1 w-[350px] h-[177px] bg-white shadow-lg rounded-lg"
            style={{
              top: card.top,
              left: card.left,
            }}
          >
            <Image className='absolute top-[-10] left-[-6] w-[70] h-[60]' src={`/assets/images/banner-2/banner-6.png`} alt='pic' height={55} width={55} />

            <p className="text-[#EFEFEF] font-light opacity-80 absolute top-[8px] left-[-1px] [font-size:0.5rem] rotate-[-40deg]">
  Best Deals
</p>

            {/* ইমেজ */}
            <Image
              src={`/assets/images/banner-2/banner-${index + 1}.jpg`}
              alt={`Card ${index + 1}`}
              height={140}
              width={140}
              className="w-[180px] h-[175px] p-2 object-cover rounded-lg"
            />
            {/* টেক্সট */}
            <div className="flex flex-col">
              <span className="text-black font-bold">{card.country}</span>
              <span className="text-black text-sm">{card.place}</span>
            </div>

          </div>

        ))}



      </div>

      {/* ছোট ডিভাইসের জন্য ফ্লেক্সবক্স লেআউট */}
      <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-4 px-4 xl:hidden">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex items-center gap-4 w-[90%] sm:w-[70%] md:w-[35%] h-[140px] bg-white shadow-lg rounded-lg"
          >
            {/* ইমেজ */}
            <Image
              src={`/assets/images/banner-2/banner-${index + 1}.jpg`}
              alt={`Card ${index + 1}`}
              height={140}
              width={140}
              className="w-[125px] h-[124px] p-3 object-cover rounded-lg"
            />
            {/* টেক্সট */}
            <div className="flex flex-col">
              <span className="text-black font-bold">{card.country}</span>
              <span className="text-black text-sm">{card.place}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner2;
