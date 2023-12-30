import React from 'react';
import { AcmeLogo } from './Micro/AcmeLogo';
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  function getScreenSize() {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    return width;
  }

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  const screenSize = getScreenSize();
  return (
    <div
      id='footer'
      className='flex flex-col sm:flex-row sm:flex-wrap items-center justify-between md:p-10 p-2'
    >
      <div>

      <a
        href='/'
        className='w-full sm:w-auto flex justify-center lg:visible lg:w-auto'
        >
        <AcmeLogo />
      </a>
      <div className="lg:flex-none md:max-w-xs w-full text-center">"Beli bibit bawang merah dengan mudah hanya di Raja Brambang"</div>
      </div>
      <div className='flex items-center justify-around sm:w-1/3 w-full my-4 sm:mt-0'>
      <FaWhatsapp
        fontSize={screenSize < 769 ? '2em' : '3em'}
        color='green'
        role='link'
        onClick={() => openInNewTab('https://wa.me/6288235910706?text=Apakah%20stoknya%20masih')}
      />
      <FaFacebook
        fontSize={screenSize < 769 ? '2em' : '3em'}
        color='blue'
        role='link'
        onClick={() => openInNewTab('https://www.facebook.com/raja.brambang.45?mibextid=2JQ9oc')}
      />
      <FaInstagram
        fontSize={screenSize < 769 ? '2em' : '3em'}
        color='purple'
        role='link'
        // onClick={() => openInNewTab('https://wa.me/6288235910706?text=Apakah%20stoknya%20masih')}
      />
      </div>
      <div className='sm:w-full mt-4 sm:mt-0 md:w-auto flex justify-center'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977.5594426600455!2d111.83728290155351!3d-7.562014918916653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79b55e9ed5f1af%3A0x8b9a5985911e7007!2sMushola%20AL%20HIKAM!5e0!3m2!1sid!2sid!4v1697602598326!5m2!1sid!2sid" style={{ width: '100%', height: '100%', backgroundColor: 'lightgray' }}></iframe>
      </div>
    </div>
  );
}
