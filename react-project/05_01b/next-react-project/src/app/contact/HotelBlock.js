'use client';
import Image from 'next/image';

export default function HotelBlock({ name, capacity, id }) {
  const imageLoader = ({ src }) => `./hotels/${src}.jpeg`;
  return (
    <div>
      <h2>{name}</h2>
      <p>Capacity: {capacity}</p>
      <Image src={id} alt="btc" width={300} height={300} loader={imageLoader} />
    </div>
  );
}
