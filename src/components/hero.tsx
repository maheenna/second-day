'use client'
import React, { useState, useEffect } from 'react';
import OneWayComponent from './OneWayComponent';
import RoundTripComponent from './Roundtrip';
import FormField from './Formsfields';

const Hero = () => {
  // State to manage which component to display
  const [displayComponent, setDisplayComponent] = useState('oneWay');

  return (
    <div className='border-b mt-8 pb-10 overflow-hidden'>
      <div className="pl-2">
        <div>
          <h1 className="text-[#0071BC] mt-8 text-[24px] font-bold">Let’s Book your next trip!</h1>
          <p className="text-[15px] mt-4 font-semibold text-[#10294D]">choose best deals over 1.5 million travel services</p>
        </div>

        <div className='border-b'>
          <div>


            <div className="flex gap-6 mt-8 border-b relative">
              {/* One-way component */}
              <p
                onClick={() => setDisplayComponent('oneWay')}
                className={`cursor-pointer ${displayComponent === 'oneWay' ? 'text-[#0071BC] font-semibold' : 'text-[#000]'} pb-3`}
              >
                One-way
              </p>

              {/* Round-trip component */}
              <p
                onClick={() => setDisplayComponent('roundTrip')}
                className={`cursor-pointer ${displayComponent === 'roundTrip' ? 'text-[#0071BC] font-semibold' : 'text-[#000]'} pb-3 `}
              >
                Round-trip
              </p>

              {/* Blue underline effect */}
              {displayComponent === 'oneWay' && (
                <div className="absolute bottom-0 left-0 md:w-[5.5%] w-1/5 h-1 bg-[#0071BC] transition-all  duration-300"></div>
              )}
              {displayComponent === 'roundTrip' && (
                <div className="absolute bottom-0 md:left-[6.3%] left-[25%] md:w-[7.4%] w-[23%] right-1/2 h-1 bg-[#0071BC] transition-all duration-300"></div>
              )}
            </div>

            {/* Conditionally render One-way or Round-trip component based on state */}
            {displayComponent === 'oneWay' && <OneWayComponent />}
            {displayComponent === 'roundTrip' && <RoundTripComponent />}
          </div>
          <button className='w-[98%] bg-[#0071BC] rounded-lg mt-12 py-3 mr-3 text-white'>Search Flights</button>
        </div>



      </div>
    </div>
  );
};

export default Hero;
