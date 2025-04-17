// import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
// import {  } from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { TbUserEdit } from "react-icons/tb";

import CartImg1 from '../../assets/images/restart-php-api.png'
import '../../assets/Styles/Blog.css'
import Header from '../MainPage/Header';
import Footer from '../MainPage/Footer';
import {Input, Button, Modal , Carousel} from 'antd';
import { Ticket_BlogPageContent, Users_SinglePost } from '../../Services/http-request';
import { ContextApiItem } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import Search from 'antd/es/transfer/search';
const { Search } = Input; 

const contentStyle = {
    height: '450px',
    // color: '#9e9e9e',
    background: '#fff',
    // marginTop:"80px"
};
const Blog = () =>{ 
    const {t} = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [SearchItem, setSearchItem] = useState([]);
    let FillterData = [];
    async function showModal(value){
        setIsModalOpen(true);
        console.log(value)
        await Users_SinglePost("SinglePost").then(res => {
            res.data.map(item => FillterData.push(item))
            FillterData = FillterData.filter(item => item.Main_Title.includes(value))
        })
        setSearchItem(FillterData)
        console.log(SearchItem)
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    let [DataItem , setDataItem] = useState([])
    let [ImageSlider , setImageSlider] = useState([])
    const GetData = () => {
        Users_SinglePost("SinglePost",{
            headers: {
          "Content-Type" : "application/json",
          "Access-Control-Allow-Origin" : "*"
        }
        }).then(res => setDataItem(res.data))
        Ticket_BlogPageContent("BlogPageContent",{
            headers: {
          "Content-Type" : "application/json",
          "Access-Control-Allow-Origin" : "*"
        }
        }).then(res => setImageSlider(res.data))
    }
    useEffect(() => {
        GetData()
    } , [])
    
    let FillterPost = []
    DataItem.map(item => {
        if (item.DateAdd.split(' ')[4].split(':')[2] > 20) {
            FillterPost.push(item)
        }
    })
    let FillterSlider = []
    DataItem.map(item => {
        if (item.DateAdd.split(' ')[4].split(':')[2] < 20) {
            FillterSlider.push(item)
        }
    })
    const {SinglePostData , setSinglePostData} = useContext(ContextApiItem)
    let navigate = useNavigate()
    const ActionDataSinglePost = (product) => {
        // if (!SinglePostData.includes(product)) {
            setSinglePostData(product)
            navigate('/SinglePost')
        // }
      }
    return(
    <>
    <Header/>
    <div className="BlogContainer">
        <div className="Head">
            <div className="SectionSearch d-flex">
                <h2 className='text-light' >{t("Blog.Title")}</h2>
                <p className='text-light' >{t("Blog.SubTitle")}</p>
                <div className="SearchBlog d-flex">
                    <Search
                    placeholder= {t("Blog.PlhSearch")}
                    allowClear
                    onSearch={showModal}
                    />
                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        {/* <div className="CartsFillterProduct"> */}
                        {
                            SearchItem.map(item => (
                                <div className="cartBlog d-flex ">
                                <img className='rounded-3' width='200px' src={CartImg1} alt="" />
                                <span className="Categori rounded-1 ">{item.Category}</span>
                                <div className="content">
                                    <div className="text">{item.Summery.split('.')[0]}</div>
                                    <div className="FooterCart">
                                        <button className="btn" >{t("Blog.PostBtn")}</button>
                                        <div className="aboutPost d-flex">
                                            <small className="author">
                                                <TbUserEdit/>
                                                {item.Author}
                                            </small>
                                            <small className="readTime">
                                                <IoMdTime/>
                                                {item.ReadTime} {t("blog.Time")}
                                            </small>
                                            <small className="dateAdd">
                                                <SlCalender/>
                                                {/* {item.DateAdd.split(' ')[3]} */}
                                                {item.DateAdd.split(' ')[4].split(':')[2]}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                // <div className="CartFillterProduct">
                                //     <h2>{item.Main_Title}</h2>
                                // </div>
                            ))
                        }
                        {/* </div> */}
                    </Modal>
                </div>
            </div>
        </div>
        <div className="ContainerBlog">
            <div className="NewPostBlogContainer">
                <div className="Head-NewPost">
                </div>
                <div className="Body-NewPost">   
                    <div className="title">
                    {/* <div className="bg"></div> */}
                    <p>{t("Blog.NewPostTitle")}</p>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                        >
                        {
                            FillterPost.map(item => (

                        <SwiperSlide>
                            <div className="cartBlog d-flex ">
                                <img className='rounded-3' src={item.Image} alt="" />
                                <span className="Categori rounded-1 ">{item.Category}</span>
                                <div className="content">
                                    <div className="text">{item.Summery.split('.')[0]}</div>
                                    <div className="FooterCart">
                                        <button className="btn" onClick={() => ActionDataSinglePost(item)} >{t("Blog.PostBtn")}</button>
                                        <div className="aboutPost d-flex">
                                            <small className="author">
                                                <TbUserEdit/>
                                                {item.Author}
                                            </small>
                                            <small className="readTime">
                                                <IoMdTime/>
                                                {item.ReadTime} {t("Blog.Time")}
                                            </small>
                                            <small className="dateAdd">
                                                <SlCalender/>
                                                {/* {item.DateAdd.split(' ')[3]} */}
                                                {item.DateAdd.split(' ')[4].split(':')[2]}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                            ))   
                        }
                    </Swiper>
                </div>
                <div className="SliderBanner">
                    <Carousel autoplay>
                        {
                            FillterSlider.map(item => (
                                <div>
                                    <div className='slideBannerItem d-flex' style={contentStyle}>
                                        <div className="content d-flex">
                                            <h3>{item.Main_Title}</h3>
                                            <p>{item.Summery.split('.')[0]}</p>
                                            <button onClick={() => ActionDataSinglePost(item)} className='btn btn-primary' >{t("Blog.CenterSliderBtn")}</button>
                                        </div>
                                        <img className='rounded-3' src={item.Image}  alt="" />
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>

                </div>
                <div className="MainBlogCart d-flex">
                    {
                        DataItem.map(item => (
                            <div className="cartBlog subMainBlogCart d-flex ">
                                <img className='rounded-3' src={item.Image} alt="" />
                                <span className="Categori rounded-1 ">{item.Category}</span>
                                <div className="content">
                                    <div className="text">
                                        {item.Summery.split('.')[0]}
                                    {/* زبان برنامه نویسی PHP نیازی به معرفی ندارد، تقریبا تمام مخاطبان وبسایت راکت با آن آشنایی دارند و می‌دانند که در دنیای توسعه وب چه اهمیت بالایی */}
                                    </div>
                                    <div className="FooterCart">
                                        <button className="btn" onClick={() => ActionDataSinglePost(item)} >{t("Blog.PostBtn")}</button>
                                        <div className="aboutPost d-flex">
                                            <small className="author">
                                                <TbUserEdit/>
                                                {item.Author}
                                            </small>
                                            <small className="readTime">
                                                <IoMdTime/>
                                                {item.ReadTime} {t("Blog.Time")}
                                            </small>
                                            <small className="dateAdd">
                                                <SlCalender/>
                                                {item.DateAdd.split(' ')[1]} {item.DateAdd.split(' ')[2]} {item.DateAdd.split(' ')[3]}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="BottomSlider">
                    <Carousel autoplay>
                        {
                            ImageSlider.map(item => (
                                item.SlideImage.map(i => (
                                    <div>
                                        <img className='rounded-3' src={i} width="100%"   alt="" />
                                    </div>
                                ))
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
  </>
);
}
export default Blog;