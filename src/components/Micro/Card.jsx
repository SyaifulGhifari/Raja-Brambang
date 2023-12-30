import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ product, id }) {
  const [truncatedDescription, setTruncatedDescription] = useState(
    product.description
  );
  const maxLength = 50;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    if (product.description.length > maxLength) {
      setTruncatedDescription(product.description.slice(0, maxLength) + '...');
    } else {
      setTruncatedDescription(product.description);
    }
  }, [product.description]);

  return (
    <div className='shadow-inner-thick p-2 mb-10'>
      <div
        className=' overflow-hidden mx-1 rounded-lg cursor-pointer'
        onClick={handleClick}
      >
        <img className='w-full' src={product.image} alt={product.name} />
        <div className='px-6 py-2'>
          <div className='font-bold text-xl mb-2 text-center'>
            {product.title}
          </div>
        </div>
        <div className='px-6 py-2'>
          <div className='py-1 text-md font-semibold text-gray-700 mr-2'>
            Harga: Rp{product.price}
          </div>
          <div className='py-1 text-md font-semibold text-gray-700'>
            Waktu Panen: {product.harvest}
          </div>
          <div className="flex justify-center my-2">
            <div className='h-6 w-1/2 text-center shadow-all text-md font-semibold rounded-sm text-gray-700'>
              Deskripsi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
