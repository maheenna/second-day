'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import flights from '/public/icons/flight.svg';
import hotel from '/public/icons/hotel.svg';
import cars from '/public/icons/cars.svg';
import accessories from '/public/icons/accessories.svg';

interface IProps {
  option: string
}

const NavMenu = () => {
  const [activeOption, setActiveOption] = useState<string>('flights');

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
  };

  return (
    <div className='mt-8 relative border-b border-[#EEEEEE] py-2'>
      <ul className='flex justify-evenly'>

        <li className={`items-center ${activeOption === 'flights' ? 'text-[#0071BC]' : 'text-[#7BA2E9]'}`} onClick={() => handleOptionClick('flights')}>
          <Link href={"#"} className='flex flex-col items-center text-center'>
            <Image src={flights} alt='flight' width={52.8} height={52.8} />
            <p className='text-[12px] font-bold text-center pt-1'>Flights</p>
            {activeOption === 'flights' && <div className="absolute bottom-0 transform h-0.5 w-12 bg-[#0071BC]"></div>}
          </Link>
        </li>

        <li className={`items-center ${activeOption === 'hotels' ? 'text-[#0071BC]' : 'text-[#7BA2E9]'}`} onClick={() => handleOptionClick('hotels')}>
          <Link href={"#"} className='flex flex-col items-center text-center'>
            <Image src={hotel} alt='hotel' width={52.8} height={52.8} />
            <p className='text-[12px] font-bold text-center pt-1'>Hotels</p>
            {activeOption === 'hotels' && <div className="absolute bottom-0 transform h-0.5 w-12 bg-[#0071BC]"></div>}
          </Link>
        </li>

        <li className={`items-center ${activeOption === 'cars' ? 'text-[#0071BC]' : 'text-[#7BA2E9]'}`} onClick={() => handleOptionClick('cars')}>
          <Link href={"#"} className='flex flex-col items-center text-center'>
            <Image src={cars} alt='cars' width={52.8} height={52.8} />
            <p className='text-[12px] font-bold text-center pt-1'>Cars</p>
            {activeOption === 'cars' && <div className="absolute bottom-0 transform h-0.5 w-12 bg-[#0071BC]"></div>}
          </Link>
        </li>

        <li className={`flex flex-col items-center text-center ${activeOption === 'accessories' ? 'text-[#0071BC]' : 'text-[#7BA2E9]'}`} onClick={() => handleOptionClick('accessories')}>
          <Link href={"#"} className='flex flex-col items-center text-center'>
            <Image src={accessories} alt='accessories' width={52.8} height={52.8} className='items-center' />
            <p className='text-[12px] font-bold pt-1'>Accessories</p>
            {activeOption === 'accessories' && <div className="absolute bottom-0 left-1/5 transform h-0.5 w-14 bg-[#0071BC]"></div>}
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default NavMenu;


