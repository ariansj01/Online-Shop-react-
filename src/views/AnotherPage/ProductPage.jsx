// import React, { useEffect, useState } from 'react'
import React, { useRef, useState , useEffect, useContext } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import Header from '../MainPage/Header'
import Footer from '../MainPage/Footer'
import banner01 from '../../assets/images/banner-01.png'
import banner02 from '../../assets/images/banner-02.png'
import banner03 from '../../assets/images/banner-03.png'
import wave2 from '../../assets/images/wave-haikei.svg'
import { Comment, Product_MainPageCont } from '../../Services/http-request'
import { Button, Flex, Input, Rate } from 'antd';
import '../../assets/Styles/ProductPage.css'
import { VscHeart } from 'react-icons/vsc'
import { LuArrowRightLeft, LuUserCircle } from 'react-icons/lu'
import { SlBasket } from 'react-icons/sl';
import { EyeOutlined } from '@ant-design/icons';
import { Modal } from 'antd'
import { ContextApiItem } from '../../Context/Context';
import TextArea from 'antd/es/input/TextArea';
import { Link } from 'react-router-dom';


const ProductPage = () => {
    const {ProId , setProId , ContentPageProduct ,  setBasketCount , BasketProduct , setBasketProduct , setProductIdIntrested , ProductIdIntrested , ProductCpmparison , setProductCpmparison} = useContext(ContextApiItem)
    let [DataItem , setDataItem] = useState([])
    let [ImageSlider , setImageSlider] = useState([])
    let [ProComment , setProComment] = useState([])
    let [StateFIllterDataFromCategory , setStateFIllterDataFromCategory] = useState([])

    let FIllterDataFromCategory = []
    let FilterComment = []
    const GetData = async () => {
        await Product_MainPageCont("Product").then(res => res.data.map(item => {FIllterDataFromCategory.push(item)}))
        ContentPageProduct.map(item => {
            
            FIllterDataFromCategory = FIllterDataFromCategory.filter(i => i.Category === item.Category)
            setStateFIllterDataFromCategory(FIllterDataFromCategory)
            console.log(FIllterDataFromCategory)

        })
        await Comment("Comment").then(res => res.data.map(item => FilterComment.push(item)))
        // FilterComment.map(item => console.log(item.ProId))
        // setProId(5)
        FilterComment = FilterComment.filter(i => i.ProId === (+ProId))
        setProComment(FilterComment)
        console.log("FilterComment" , FilterComment)
        console.log("ProId" , +ProId)
        }
    console.log(ProComment)
    useEffect(() => {
        GetData()
        } , [])
        console.log(DataItem)
        let [qty , setQty] = useState(1)
    const CountBtn = (op) => {

        setQty(qty+=op)
        if (qty < 1) {
            setQty(1)
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
  const [changeImg, setChangeImg] = useState(banner01);
  const ChangeSrc = (src) => {
    setChangeImg(src)
  }
  


const [AjaxDescriptionState , setAjaxDescriptionState] = useState("block")
const [AjaxSpecificationsState , setAjaxSpecificationsState] = useState("none")
const [AjaxCommentState , setAjaxCommentState] = useState("none")
  const AjaxTabButton = (e) => {
    if(e.target.value === 'descriptions'){
        setAjaxDescriptionState("block")
        setAjaxSpecificationsState("none")
        setAjaxCommentState("none")
    }
    if(e.target.value === 'Specifications'){
        setAjaxSpecificationsState("block")
        setAjaxDescriptionState("none")
        setAjaxCommentState("none")
        }
        if(e.target.value === 'Comment'){
            setAjaxCommentState("block")
            setAjaxSpecificationsState("none")
            setAjaxDescriptionState("none")
    }
  }
  const [text , setText] = useState()
    const ClickHandlerComment = () => {
        Comment('Comment', {
        method:"POST",
        data:{
          "Text" : text,
          "ProId" : +ProId
        }
      }).then(res => {
        console.log(res)
        if (res.status === 201) {
          alert("نظر شما با موفقیت درج شد")
        }
      })
      
    };

  return (
    <div className='MainContainer'>
        <Header/>
        <div className='ProductContainer' >
            <span className='tessst' ></span>
            {
                ContentPageProduct.map(item => (
                    <>
                        <div className="ImageProduct">
                            <div className='ProductImage'>
                                <div className="SideBarImage">
                                    {
                                        item.Images.map(i => (
                                            <img onClick={() => ChangeSrc(i)} className='' src={i} alt="" />
                                        ))
                                    }
                                    {/* <img src={item.Images} alt="" /> */}
                                    {/* <img onClick={() => ChangeSrc(banner02)} className='' src={banner02} alt="" /> */}
                                    {/* <img onClick={() => ChangeSrc(banner01)} className='' src={banner01} alt="" /> */}
                                </div>
                                <img className='MainImage' src={changeImg} alt="" />
                            </div>
                        </div>
                        <div className="AboutProduct">
                            <h2>{item.Title}</h2>
                            <div className="subTitle1">
                                <Rate disabled defaultValue={item.Rate} />
                                <p>(4) دیدگاه</p>
                                {/* <Link to='#Comment' >افزودن دیدگاه</Link> */}
                            </div>
                            <div className="subTitle2">
                                <ul>
                                <ul>
                                  {
                                    item.Specifications.map(i => (
                                      <li>{i.OptionTitle} : {i.Option}</li>
                                    ))
                                    // console.log(item.Specifications)
                                  }
                                </ul>
                                </ul>
                            </div>
                            <p className="Category">دسته بندی : {item.Category}{item.id}</p>
                            <hr />
                            <div className="AddToCard">
                                <h3>قیمت {item.Price} تومان</h3>
                                <h6 style={{marginTop:"20px"}} >تعداد <span style={{color:'red'}} >10</span> عدد</h6>
                                <div className="CounterAddBtn">
                                    {/* <div className="Counter">
                                        <button onClick={() => CountBtn(+1)}>+</button>
                                        <span>{qty}</span>
                                        <button onClick={() => CountBtn(-1)}>-</button>
                                    </div> */}
                                    <button onClick={() => ActionBasket(item)} className='addToCart' >افزودن به سبد خرید</button>
                                </div>
                            </div>
                            <div className="ComparisonIntrestBtn">
                                <button onClick={() => ActionIntrestProduct(item)}>
                                    <VscHeart style={{marginLeft:"5px"}} />
                                    افزودن به علاقه مندی
                                </button>
                                <button onClick={() => ActionComparsionProduct(item)}>
                                    <LuArrowRightLeft style={{marginLeft:"5px"}} />
                                    مقایسه
                                </button>

                            </div>
                        </div>
                    </>
                ))
            }

        </div>
        <div className="IntroductionProduct">
        {
            ContentPageProduct.map(item => (
                <p> معرفی کوتاه محصول : {item.Introduction}</p>
            ))
        }
        </div>
        <div className="ProductSlider">
            <div className="title">
                <h6>محصولات پیشنهادی</h6>
            </div>
            <Swiper
                id='SwiperPageProduct'
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    StateFIllterDataFromCategory.map(item => (
                    <SwiperSlide className='SwiperSlidePageProduct'>
                        <img src={item.Images[0]} alt="" />
                        <p>{item.Title}</p>
                        <p>قیمت : {item.Price} تومان</p>
                        <p>دسته بندی : {item.Category}</p>
                        <div className="actionBtnProduct">
                            <VscHeart onClick={() => ActionIntrestProduct(item)} />
                            <LuArrowRightLeft onClick={() => ActionComparsionProduct(item)} />
                            <SlBasket onClick={() => ActionBasket(item)} />
                            <EyeOutlined onClick={() => showModal(item)} />
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
                    </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
        <div className="AjaxProductTab">
            <div className="AjaxButton">
                <button onClick={(e) => AjaxTabButton(e)} value='descriptions' >توضیحات</button>
                <button onClick={(e) => AjaxTabButton(e)} value='Specifications' >مشخصات</button>
                <button onClick={(e) => AjaxTabButton(e)} value='Comment' >نظرات</button>
            </div>
            <div className="Content">
                <div className="AjaxDescription" style={{display: AjaxDescriptionState }}>
                {
                        ContentPageProduct.map(item => (
                            <p>{item.descriptions}</p>
                        ))
                    }
                </div>
                <div className="AjaxSpecifications" style={{display: AjaxSpecificationsState }}>
                    {
                        ContentPageProduct.map(item => (
                            item.Specifications.map(i => (
                                <div className='AjaxSpecificationsItem'>
                                <p className='OptionTitle' >{i.OptionTitle}</p>
                                <p>{i.Option}</p>
                                </div>
                            ))
                        ))
                    }
                </div>
                <div id='Comment' className="AjaxComment" style={{display: AjaxCommentState }}>
                {
                        ProComment.map(item => (     
                            <p className='Comment' >
                                <LuUserCircle style={{marginLeft:"20px"}} />
                                {item.Text}
                            </p>
                        ))
                }
                    <Flex vertical gap={32}>
                        <TextArea
                        showCount
                        maxLength={500}
                        onChange={(e) => {setText(e.target.value)}}
                        placeholder="متن خود را وارد کنید..."
                        style={{
                            height: 120,
                            resize: 'none',
                        }}
                        />
                    </Flex>
                    <Button className='btnSub my-3' onClick={ClickHandlerComment} type="primary">ثبت تیکت</Button>
                    {/* <Button className='btnSub my-3' onClick={ClickHandler} type="primary">ثبت تیکت</Button> */}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ProductPage