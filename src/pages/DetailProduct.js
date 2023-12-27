import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { DataProduct } from '../components/Dummy/DataProduct';
import { NavbarDetail } from '../components/Navbar';
import Footer from '../components/Footer';
import CopyRight from "../components/Micro/CopyRight";
import WhatsApp from "../components/Micro/WhatsApp";

export default function DetailProduct() {
  const params = useParams();
  const { id } = params;
  const product = DataProduct.find((item) => item.id === parseInt(id));

  function cariAngkaSama(awal, akhir) {
    let tmp = 0;
    for (let i = awal; i <= 12; i++) {
      if (i !== akhir) {
        tmp++;
        if (i > 12) {
          i = 1; // Kembali ke 1 jika mencapai 12
        }
      }
    }
    return tmp;
  }

  const topRef = useRef(null);

  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []); 


  return (
    <>
      <div className='container mx-auto'>
      <div ref={topRef}></div>
        <NavbarDetail />
        <div className='mx-auto text-center lg:text-3xl text-lg font-bold pb-5'>
          Deskripsi Bibit
        </div>
        <div className='md:columns-2 px-3'>
          <div className='flex justify-center'>
            <img
              className='w-4/6 shadow-inner-thick lg:p-3 p-2'
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="md:text-xl mt-5 md:mt-0">
            <div className="md:pb-3 pb-1">
              <span className='font-bold'>Jenis : </span>
              {product?.type}
            </div>
            <div className="md:pb-3 pb-1">
              <span className='font-bold'>Harga : </span>
              {product?.price}
            </div>
            <div className="md:pb-3 pb-1">
              <span className='font-bold'>Waktu Panen : </span>
              {product?.harvest}
            </div>
            <div className="md:pb-3 pb-1">
              <span className='font-bold'>Deskripsi : </span>
              {product?.description}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsApp />
      <CopyRight/>
    </>
  );
}
