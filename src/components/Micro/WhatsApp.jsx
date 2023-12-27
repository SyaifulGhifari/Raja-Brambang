import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsApp() {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  function getScreenSize() {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    return width;
  }

  const screenSize = getScreenSize();
  return (
    <div className='fixed bottom-5 right-3 z-50'>
      <FaWhatsapp
        fontSize={screenSize < 769 ? '3em' : '4em'}
        color='green'
        role='link'
        onClick={() => openInNewTab('https://wa.me/6288235910706?text=Apakah%20stoknya%20masih')}
      />
    </div>
  );
}
