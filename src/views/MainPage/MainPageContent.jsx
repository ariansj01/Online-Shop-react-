import React, { useContext, useEffect, useState } from 'react'
import SwiperSlideComponent from '../../MainPageComponents/SwiperSlideComponent'
import Product_BstProduct_MainPage from '../../MainPageComponents/Product_BstProduct_MainPage'
import AjaxTab from '../../MainPageComponents/AjaxTab'
import Categories from '../../MainPageComponents/Cate_chp-pro'
import BlogCart_AboutUs from '../../MainPageComponents/CartBlog_AboutUs'
import CartBlog_AboutUs from '../../MainPageComponents/CartBlog_AboutUs'

import banner1 from '../../assets/images/banner-01.png'
import banner2 from '../../assets/images/banner-02.png'
import banner3 from '../../assets/images/banner-03.png'
import banner4 from '../../assets/images/banner-04.png'
import '../../assets/Styles/MainPageComponent.css'
// import {GetData} from '../../Services/http-request'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'
import ChangeLang from '../../MainPageComponents/ChangeLang'
import { ContextApiItem } from '../../Context/Context'
import { MainPageImage, Product_MainPageCont } from '../../Services/http-request'
import ChangeTheme from '../../MainPageComponents/ChangeTheme'

const MainPageContent = () => {
  const {ImgData} = useContext(ContextApiItem)
  
  // const [dataItem , setDataItem] = useState([])
  // async function GetData() {
  //   await Product_MainPageCont('MainPageContent' , {
  //     method:"GET"
  //   }).then(res => setDataItem(res.data))
  // } 
  // useEffect(() => {
  //   GetData()
  // },[])
  let LeftSliderImage;
  let TopPageSecBottomRight;
  let TopPageSecBottomcenter;
  let TopPageSecBottomLeft;
  ImgData.map(item => {
    console.log(ImgData)
    LeftSliderImage = item.LeftSliderImage
    TopPageSecBottomRight = item.TopPageSecBottomRight
    TopPageSecBottomcenter = item.TopPageSecBottomcenter
    TopPageSecBottomLeft = item.TopPageSecBottomLeft
    // item.SliderImage.map(i => console.log(i))
  })
  console.log("LeftSliderImage" , LeftSliderImage)
  return (
    <main>
      {/* <RouterProvider router={RoutersApp} /> */}
      <Header/>
      <div className='Slider d-flex'>
      <div className="topSlides d-flex">
        <SwiperSlideComponent />
        <img className='img-top-left' src={LeftSliderImage} alt="" />
        {/* <img className='img-top-left' src={banner1} alt="" /> */}
      </div>
      <div className="bottomSlides d-flex ">
            <img className='' src={TopPageSecBottomRight} alt="" />
            <img className='' src={TopPageSecBottomcenter} alt="" />
            <img className='' src={TopPageSecBottomLeft} alt="" />
      </div>
    </div>
    {
      console.log(TopPageSecBottomRight)
    }
    
    

    <Categories/>
    <Product_BstProduct_MainPage />
    <AjaxTab/>
    <CartBlog_AboutUs/>
    <Footer/>
    </main>
  )
}

export default MainPageContent
