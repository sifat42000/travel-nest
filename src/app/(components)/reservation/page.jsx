import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className="container mx-auto px-4 mb-10">
      {/* Heading */}
      <div className="bg-[#FFFFFF] max-w-[1200px] mx-auto p-6 md:p-10 rounded-lg shadow-md">
        <div className="mb-4">
          <p className="text-lg md:text-xl text-[#000000] font-bold">
            Your hotel reservation{" "}
            <span className="font-bold text-xl md:text-2xl text-[#07689F]"> Confirmed </span>
          </p>
          <p className="text-[#112211] text-sm md:text-base">
            Contact EasySet24 If you Need to Change in Basic Information with{" "}
            <span className="font-bold">1385 </span>Booking Number.
          </p>
        </div>

        {/* Banner */}
        <div className="bg-[#D9D9D9] rounded-md overflow-hidden">
          <div className="relative h-[200px] md:h-[330px] w-full">
            {/* Image */}
            <Image
              className="h-full w-full object-cover"
              src="/assets/images/reservation/i-1.jpg"
              alt="img-1"
              layout="fill"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Text Content */}
            <div className="absolute top-4 left-4 text-white">
              <h2 className="text-lg md:text-2xl font-bold text-[#000000]">Booking No. 1385 Details</h2>
              <p className="text-sm md:text-base text-[#000000] font-bold">Check your Information Here!</p>
            </div>

            <div className="absolute bottom-4 right-4 text-white text-right">
              <p className="text-xs md:text-sm font-medium">Secure By EasySet24 Policy-2024</p>
            </div>

            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-sm md:text-lg font-bold">Hotel Roles</h2>
              <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                <p className="text-xs md:text-sm font-bold">Check-In At 14:00 Every Day</p>
                <p className="text-xs md:text-sm font-bold">Check-Out At 12:00, Every Day</p>
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: "Stays", value: "5 Nights" },
            { label: "Check-In", value: "25 Jan 2024" },
            { label: "Check-Out", value: "30 Jan 2024" },
            { label: "Quantity", value: "Room Type" },
            { label: "Double", value: "Room Type" },
            { label: "Bed Type", value: "Two Twin" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#A6A6A6] py-3 rounded-t-md">
                <p className="text-sm md:text-xl font-bold text-white">{item.label}</p>
              </div>
              <div className="bg-white py-3 rounded-b-md">
                <p className="text-sm md:text-lg font-bold text-black">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4 text-sm md:text-base">
          <p className="text-[#000000] font-bold">Adults 2, Children 3, Infant 0</p>
          <p className="text-[#000000] font-bold">
            Additional services quantity <span className="text-[#112211] font-semibold">None</span>
          </p>
          <p className="text-[#000000] font-bold">
            Meal Plan <span className="text-[#112211] font-semibold">Allergic</span>
          </p>
        </div>

        {/* Cancellation Policy */}
        <div className="mt-6">
          <p className="text-[#112211] text-lg md:text-2xl font-bold">Cancellation Policy</p>
          <p className="text-[#112211] mb-2">Pay attention</p>
          <p className="text-[#112211]">
            This booking represents the conclusive step in the hotel reservation process. It is considered final and may
            only be canceled by the hotel in the event of unforeseen circumstances or natural disasters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
