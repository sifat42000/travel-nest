import React from 'react';

const Comprasion = () => {
    return (
        <div className="mb-28 mt-16 px-4 container mx-auto">
            <h2 className="text-2xl font-bold text-black text-center lg:text-left">Make a Comparison</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
                {/* 1st card */}
                <div
                    className="hero h-[420px] w-full bg-cover bg-center rounded-lg"
                    style={{
                        backgroundImage: "url('/assets/images/comprasion/comprasion-1.jpg')",
                    }}
                >
                    <div className="hero-overlay bg-black bg-opacity-30 rounded-lg"></div>
                    <div className="hero-content mt-[300px] p-4 text-neutral-content">
                        <p className="text-white font-bold">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
                {/* 2nd card */}
                <div
                    className="hero h-[420px] w-full bg-cover bg-center rounded-lg"
                    style={{
                        backgroundImage: "url('/assets/images/comprasion/comprasion-2.jpg')",
                    }}
                >
                    <div className="hero-overlay bg-black bg-opacity-30 rounded-lg"></div>
                    <div className="hero-content mt-[300px] p-4 text-neutral-content">
                        <p className="text-white font-bold">
                            Ring in the new year with iconic moments and unforgettable memories in New York City
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comprasion;
