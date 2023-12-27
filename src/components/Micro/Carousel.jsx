import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DataProduct } from '../Dummy/DataProduct';
import Card from './Card';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Carousel() {
  function getScreenSize() {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    return width;
  }

  const screenSize = getScreenSize();

  return (
    <div className="py-10 px-2">
      <Swiper
        spaceBetween={'5%'}
        // centeredSlides={true}
        slidesPerView={screenSize < 769 ? (screenSize < 426 ? 1 : 2) : 3}
        // loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        pagination={true}
        modules={[Navigation,Pagination]}
      >
        <div className='flex justify-center'>
          {DataProduct.map((data, _index) => (
            <SwiperSlide key={_index} className='h-full'>
              <Card product={data} id={_index + 1} key={_index} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
