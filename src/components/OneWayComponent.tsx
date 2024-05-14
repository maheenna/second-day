import React from 'react';
import Image from 'next/image';
import Formsfields from "./Formsfields"

// OneWayComponent as a functional component
const OneWayComponent: React.FC = () => {
  return (
    <div className='mt-10'>
      {/* Render multiple instances of FormField with different props */}
      <Formsfields imageSrc="/Vector2.svg" placeholderText="Flying from" />
      <Formsfields imageSrc="/departure.svg" placeholderText="Destination to" />
      <Formsfields imageSrc="/departuredate.svg" placeholderText="Departure Date" />
      <Formsfields imageSrc="/Person Icon.svg" placeholderText="3" />
      <Formsfields imageSrc="/Person Icon.svg" placeholderText="Economy" />
    </div>
  );
};

export default OneWayComponent;
