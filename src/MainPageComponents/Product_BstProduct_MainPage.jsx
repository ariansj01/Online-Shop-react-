import React, { useContext, useEffect, useState } from 'react';
import { Carousel, Rate } from 'antd';
const contentStyle = {
  // height: '300px',
  // display:'flex',
  // background: '#364d79',
};
import characters2 from '../assets/images/characters-02.png'
import characters3 from '../assets/images/characters-03.png'
import characters4 from '../assets/images/characters-04.png'
import characters5 from '../assets/images/characters-05.png'
import '../assets/Styles/ComponentStyle/Product_BstProduct_MainPage.css'
import { FaLongArrowAltDown } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { Product_MainPageCont } from '../Services/http-request';
import { VscHeart } from 'react-icons/vsc';
import { LuArrowRightLeft } from 'react-icons/lu';
import { SlBasket } from 'react-icons/sl';
import { EyeOutlined } from '@ant-design/icons';
import { Modal } from 'antd'
import { ContextApiItem } from '../Context/Context';
import { useNavigate } from 'react-router-dom';


const Product_BstProduct_MainPage = () => {
    const {t} = useTranslation()
    const {APIitem , setProductIdIntrested , ProductIdIntrested , ProductCpmparison , setProductCpmparison , ContentPageProduct , setContentPageProduct} = useContext(ContextApiItem)
    let [DataItem , setDataItem] = useState([])
    let fillterData = []
    async function GetData(){
        await Product_MainPageCont("Product").then(res => {
        res.data.map(item => fillterData.push(item))
        fillterData = fillterData.filter(i => i.Category === 'مردانه')
        setDataItem(fillterData)
        })
      }
      useEffect(() => {
        GetData()
    } , [GetData])
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
      let navigate = useNavigate()
      const ProductPage = (product) => {
        let fillterPR = ContentPageProduct.filter(pro => pro.id === product.id)
        if (fillterPR.length === 0) {
          setContentPageProduct([...ContentPageProduct , product])
          navigate('/ProductPage')
        }else{
          alert("محصول قبلا اضاف شده!")
        }
      }
  return (
    <div>
        <div className="BestSellerProduct d-flex">
          <div className="title d-flex text-center">
            <b className='h4' >{t("BestSell.Title")}</b>
            <small className='text-secondary '>{t("BestSell.subTitle")}</small>
                <div className="icon">
                    <FaLongArrowAltDown/>
                </div>
        </div>
        <div className="bg"></div>
        <div className="product">
          <Carousel autoplay>
            {
                DataItem.map(item => (
                  <div>
                    <div style={contentStyle} className='CardAmazingProduct'>
                    <img src={item.Images[0]} alt="" />
                      <div className="content">
                      <h2 onClick={() => ProductPage(item)} >{item.Title}</h2>
                        <div className='options' >
                          {item.Specifications.map(item => (
                            <ul>
                            <li>{item.OptionTitle} : {item.Option}</li>
                          </ul>
                          ))}
                        </div>
                        <p className='category' >دسته بندی : {item.Category}</p>
                        <p className='price' >قیمت : {item.Price} تومان</p>
                      <div className="actionButton">
                        <VscHeart onClick={() => ActionIntrestProduct(item)} />
                        <LuArrowRightLeft onClick={() => ActionComparsionProduct(item)} />
                        <SlBasket/>
                        <EyeOutlined onClick={() => showModal(item)} />
                      </div>
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
                    {/* </div> */}
                  </div>
                ))
              }
          </Carousel>
        </div>
        </div>
    </div>
  )
}

export default Product_BstProduct_MainPage