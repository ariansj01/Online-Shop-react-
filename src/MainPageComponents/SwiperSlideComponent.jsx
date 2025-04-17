 import React, { useContext, useEffect, useRef, useState } from 'react';
 import { Carousel } from 'antd';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import '../assets/Styles/ComponentStyle/Swipper.css';
// import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import banner1 from '../assets/images/banner-01.png'
import banner2 from '../assets/images/banner-02.png'
import banner3 from '../assets/images/banner-03.png'
import banner4 from '../assets/images/banner-04.png'
import { ContextApiItem } from '../Context/Context';
import { MainPageImage, Product_MainPageCont } from '../Services/http-request';


const SwiperSlideComponent = () =>  {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const [dataItem , setDataItem] = useState([])
  async function GetData() {
    await Product_MainPageCont('MainPageContent' , {
      method:"GET"
    }).then(res => setDataItem(res.data))
  }

  useEffect(() => {
    GetData()
  },[])
  // dataItem.map(item => {
  //   // console.log(item.SliderImage)
  //   item.SliderImage.map(i => console.log(i))
  // })

  // {
  //   dataItem.map(item => (
  //     item.SliderImage.map(i => (
  //       <SwiperSlide><img src={i} alt="" /></SwiperSlide>
  //     ))
  //   ))
  // }
  return (
    <div className='SwiperSliderTop'>
     <Carousel className='subSwiperSliderTop' autoplay>
        {
          dataItem.map(item => (
            item.SliderImage.map(i => (
              <div style={contentStyle} >
                <img src={i} alt=""/>
              </div>      
            ))
          ))
        }
    </Carousel>

      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          dataItem.map(item => (
            item.SliderImage.map(i => (
              <SwiperSlide><img src={i} alt="" /></SwiperSlide>
            ))
          ))
        }

      </Swiper> */}
    </div>
  );
}
export default SwiperSlideComponent;