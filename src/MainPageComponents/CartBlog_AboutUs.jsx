import React, { useContext, useEffect, useState } from 'react'
import { Carousel } from 'antd';
import { EditOutlined, CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
import '../assets/Styles/ComponentStyle/CartBlog_AboutUs.css'
import GroupImg from '../assets/images/Group-14035-min-1.png'
import pattern from '../assets/images/pattern-about.png'
import { useTranslation } from 'react-i18next';
import { ContextApiItem } from '../Context/Context';
import { MainPageImage, Product_MainPageCont, Users_BlogPost } from '../Services/http-request';
import { useNavigate } from 'react-router-dom';

const CartBlog_AboutUs = () => {
  const {ImgData} = useContext(ContextApiItem)
  const [DataItem , setDataItem] = useState([])
  const GetData = () => {
    Users_BlogPost("SinglePost" , {
      method:"GET"
    }).then(res => {setDataItem(res.data)} )

  }
  useEffect(() => {
    GetData()
    console.log(DataItem)
  } , [])
  const contentStyle = {
    height: '400px',
    color: '#9e9e9e',
  };
  const {t} = useTranslation()

  // const [dataPic , setDataPic] = useState([])
  // async function GetDataPic() {
  //   await Product_MainPageCont('MainPageContent' , {
  //     method:"GET"
  //   }).then(res => setDataPic(res.data) , console.log(res.data) )
  // }
  // useEffect(() => {
  //   GetDataPic()
  // },[])
  let MainPageAboutUsImage;
  ImgData.map(item => {
    MainPageAboutUsImage = item.MainPageAboutUsImage
  })
  const {SinglePostData , setSinglePostData} = useContext(ContextApiItem)
  let navigate = useNavigate()
  const ActionDataSinglePost = (product) => {
          setSinglePostData(product)
          navigate('/SinglePost')
    }
  return (
    <>
      <div className='AboutUsMainPage d-flex' >
      <div className="TextAboutUs d-flex">
        <div className="title d-flex">
          <div className="frame">
            <img src={pattern} width='25px' alt="" />
          </div>
          <div className="text">
            <p><span>{t("AboutUs.Title")} </span>{t("AboutUs.EndPointTitle")}</p>
            <small>{t("AboutUs.SubTitle")}</small>
          </div>
        </div>
        <div className="content">
          <p>{t("AboutUs.Content")}</p>
        </div>
      </div>
      <div className="AboutUsImg">
        <img src={MainPageAboutUsImage} width='550px' alt="" />
      </div>
    </div>
    <div className="BlogCart">
      <Carousel className='BlogSlider' autoplay>
        {
          DataItem.map(item => (  
          <>
            <div onClick={() => ActionDataSinglePost(item)} className='CardStyle d-flex' style={contentStyle}>
              <Card
        style={{
          width: 350,
          // direction:"rtl"
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            // src={DataItem.Images}
          />
        }
        actions={[
          <div className='footerBlogCart d-flex '>
          <div className="">
          <EditOutlined key="edit" />
          <span key="auther" >{item.Author}</span>
          </div>
          <div className="">
          <ClockCircleOutlined key="clock" />
          <span key="readTime" >{item.ReadTime} دقیقه</span>
          </div>
          <div className="">
          <CalendarOutlined key="calendar" />
          <span key="TimeAdd" >{item.DateAdd.split(0 , 14)[0]}</span>
          {/* { console.log(item.DateAdd.split(0 , 14)[0]) } */}
          </div>
          </div>
        ]}
      >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
          title={item.Main_Title}
          description={item.Summery}
        />
              </Card>
            </div>
          </>
          ))
        }
    </Carousel>
    </div>
    </>
  )
}

export default CartBlog_AboutUs