// import React from 'react'
import characters1 from '../assets/images/characters-01.png'
import labtop from '../assets/images/acer.png'
import iPhone from '../assets/images/iPhone.png'
import man from '../assets/images/man_prev_ui.png'
import woman from '../assets/images/woman_prev_ui.png'
import characters2 from '../assets/images/characters-02.png'
import characters3 from '../assets/images/characters-03.png'
import characters4 from '../assets/images/characters-04.png'
import characters5 from '../assets/images/characters-05.png'
import surprise from '../assets/images/imgbin_mens-expression-of-surprise-png.png'
import { VscHeart } from "react-icons/vsc";
import { LuArrowRightLeft } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import { EyeOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useRef, useState } from 'react';
// // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next'
import { ContextApiItem } from '../Context/Context'
import { MainPageImage, Product_MainPageCont } from '../Services/http-request'
import { Carousel, Modal, Rate } from 'antd'
import { useNavigate } from 'react-router-dom'
import '../assets/Styles/ComponentStyle/Categories.css';


const Categories = () => {
  const {t} = useTranslation()
  // const {ImgData} = useContext(ContextApiItem)
  const {ImgData , setProId , ContentPageProduct ,setContentPageProduct , setBasketCount , BasketProduct , setBasketProduct , setProductIdIntrested , ProductIdIntrested , ProductCpmparison , setProductCpmparison} = useContext(ContextApiItem)
  let [DataItem , setDataItem] = useState([])
  // const GetData = () => {
  //   Product_MainPageCont("Product").then(res => setDataItem(res.data))
  //   // 5000000
  //   DataItem = DataItem.filter(item => item.Price <= 5000000)
  // }
  let fillterData = []
    async function GetData(){
        await Product_MainPageCont("Product").then(res => {
        res.data.map(item => fillterData.push(item))
        fillterData = fillterData.filter(i => i.Price >= 10000)
        setDataItem(fillterData)
        })
      }
  useEffect(() => {
    GetData()
  } , [])

  const ActionIntrestProduct = (product) => {
    let fillterPR = ProductIdIntrested.filter(pro => pro.id === product.id)
    if (fillterPR.length === 0) {
      setProductIdIntrested([...ProductIdIntrested , product])
    }else{
      alert("محصول قبلا اضاف شده!")
    }
  }
  const ActionComparsionProduct = (product) => {
    let fillterPR = ProductCpmparison.filter(pro => pro.id === product.id)
    if (fillterPR.length === 0) {
      setProductCpmparison([...ProductCpmparison , product])
    }else{
      alert("محصول قبلا اضاف شده!")
    }
  }
  const ActionBasket = (product) => {
    let fillterPR = BasketProduct.filter(pro => pro.id === product.id)
    if (fillterPR.length === 0) {
      setBasketProduct([...BasketProduct , product])
      setBasketCount(BasketProduct.length)
    }else{
      alert("محصول قبلا اضاف شده!")
    }
  }
  let navigate = useNavigate()
  const ProductPage = (product , id) => {
    let fillterPR = ContentPageProduct.filter(pro => pro.id === product.id)
    if (fillterPR.length === 0) {
      setContentPageProduct([...ContentPageProduct , product])
      setProId(id)
      navigate('/ProductPage')
    }else{
      // alert("محصول قبلا اضاف شده!")
      navigate('/ProductPage')
    }
  }
  
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ProductModal, setProductModal] = useState([]);
  const showModal = (item) => {
    setIsModalOpen(true);
    setProductModal(item)
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // const [dataPic , setDataPic] = useState([])
  // async function GetDataPic() {
  //   await Product_MainPageCont('MainPageContent' , {
  //     method:"GET"
  //   }).then(res => setDataPic(res.data))
  // }
  // useEffect(() => {
  //   GetDataPic()
  // },[])
  let BottomAmazingChoiseLeft;
  let BottomAmazingChoiseCenter;
  let BottomAmazingChoiseRight;  
  ImgData.map(item => {
    BottomAmazingChoiseLeft = item.BottomAmazingChoiseLeft
    BottomAmazingChoiseCenter = item.BottomAmazingChoiseCenter
    BottomAmazingChoiseRight = item.BottomAmazingChoiseRight
  })
  // const contentStyle = {
  //   height: '160px',
  //   color: '#fff',
  //   lineHeight: '160px',
  //   textAlign: 'center',
  //   background: '#364d79',
  // };
  return (
    <>
    
    <div className='Categories row' >        
      <div className="SubCategory col-12 col-lg-2 col-md-4">
        <div className="bg-cate cate-1 ">
        <img width='100px' src={iPhone} alt="" />
          <b>{t("Categori.Mobile")}</b>
        </div>
      </div>
      <div className="SubCategory col-12 col-lg-2 col-md-4 ">
        <div className="bg-cate cate-2 ">
        <img src={characters2} alt="" />
            <b>{t("Categori.Gejet")}</b>
        </div>
      </div>
      <div className="SubCategory col-12 col-lg-2 col-md-4 ">
        <div className="bg-cate cate-3 ">
        <img src={characters3} alt="" />
            <b>{t("Categori.Console")}</b>
        </div>
      </div>
      <div className="SubCategory col-12 col-lg-2 col-md-4 ">
        <div className="bg-cate cate-4 ">
        <img src={characters4} alt="" />
            <b>{t("Categori.Digital")}</b>
        </div>
      </div>
      <div className="SubCategory col-12 col-lg-2 col-md-4 ">
        <div className="bg-cate cate-5 ">
        <img src={labtop} alt="" />
            <b>{t("Categori.LapTop")}</b>
        </div>
      </div>
    </div>

    <div className="OffProduct rounded-5 py-5">

      <div className="OffProductContent ">
        <div className="title text-dark h5 ">
          <p>{t("AmazingSugustion.Title")}</p>
        </div>
        {/* <div className="img m-4"> */}
          {/* <img className='rounded-2' src={surprise} width='150px' alt="" /> */}
        {/* </div> */}
        {/* <div className="button"> */}
          {/* <button className='btn btn-outline-primary' >{t("AmazingSugustion.btn")}</button> */}
        {/* </div> */}
      </div>
      <div className='SwiperParent'>
        <Carousel className=' subSwiperSliderAmazing' autoplay>
        {
          DataItem.map(item => (
              <div className='Slide-Amazing' >
              <img src={item.Images[0]} alt="" />
              <div dir='rtl' className="Content-Slide-Amazing">
              <p onClick={() => ProductPage(item , item.id)} style={{cursor:"pointer"}} >{item.Title}</p>
              <p>قیمت : {item.Price} تومان</p>
              <p>{item.Introduction}</p>
              <div className="actionBtn">
                <VscHeart onClick={() => ActionIntrestProduct(item)} />
                <LuArrowRightLeft onClick={() => ActionComparsionProduct(item)} />
                <SlBasket onClick={() => ActionBasket(item)} />
                <EyeOutlined onClick={() => showModal(item)} />
              </div>
                <Modal title="مشاهده سریع" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  {
                      <div className="ModalProductContent">
                        <div className="img">
                          <img width='200px' src={ProductModal.Images} alt="" />
                          {
                            // console.log(item.Images[0])
                          }
                        </div>
                            {/* <p><b>{ProductModal.Title}</b></p> */}
                        <div className="AboutProduct">
                            <h2>{ProductModal.Title}</h2>
                            <div className="subTitle1">
                                <Rate disabled defaultValue={ProductModal.Rate} />
                                <p>(4) دیدگاه</p>
                            </div>
                            <div className="subTitle2">
                                <ul>
                                  {
                                    // ProductModal.Specifications.map(i => (
                                    //   <li>{i.OptionTitle} : {i.Option}</li>
                                    // ))
                                  }
                                </ul>
                            </div>
                            <p className="Category">دسته بندی : {ProductModal.Category}</p>
                            <hr />
                            <div className="AddToCard">
                                <h3>قیمت {ProductModal.Price} تومان</h3>
                                <h6 style={{marginTop:"20px"}} >تعداد <span style={{color:'red'}} >10</span> عدد</h6>
                            </div>
                        </div>
                      </div>
                  }
                </Modal>
              </div>
              </div>
          ))
        }
      </Carousel>
      {/* </div> */}
      </div>

    </div>

    <div className="BestCategori">
      <div className="BestCategoriImgFrame1a2 d-flex">
      <img className='' src={BottomAmazingChoiseLeft} alt="" />
      <img className='' src={BottomAmazingChoiseCenter} alt="" />
      </div>
      <img className='' src={BottomAmazingChoiseRight} alt="" />
    </div>
    </>
  )
}

Categories.propTypes = {

}

export default Categories
