
import React, { useContext, useEffect, useState } from 'react';
import { Tabs } from 'antd';
import '../assets/Styles/ComponentStyle/AjaxTab.css'
import { Product_MainPageCont } from '../Services/http-request';
import img from '../assets/images/banner-02.png'
import { LuArrowRightLeft } from 'react-icons/lu';
import { VscHeart } from 'react-icons/vsc';
import { SlBasket } from 'react-icons/sl';
import { ContextApiItem } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
const AjaxTab = () => {
  let [DataItem , setDataItem] = useState([])
  let [fillterData , setfillterData] = useState([])
  const {ContentPageProduct , setContentPageProduct , setBasketCount , BasketProduct , setBasketProduct , setProductIdIntrested , ProductIdIntrested , ProductCpmparison , setProductCpmparison} = useContext(ContextApiItem)
    const GetData = () => {
        Product_MainPageCont("Product").then(res => setDataItem(res.data))
    }
    useEffect(() => {
        GetData()
    } , [])
    const clickHandler = (e) => {
      setfillterData(DataItem.filter(item => item.Category === e.target.value))
    }

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
        }else{
          alert("محصول قبلا اضاف شده!")
        }
    }
    let navigate = useNavigate()
      const ProductPage = (product) => {
        if (!ContentPageProduct.includes(product)) { 
          setContentPageProduct([...ContentPageProduct , product])
          navigate('/ProductPage')
        }
      }
      
  return (
    <div className="AjaxTab">
      <div className="AjaxTabBtn">
          <button value='زنانه' onClick={(e) => clickHandler(e)} >زنانه</button>
          <button value='مردانه' onClick={(e) => clickHandler(e)} >مردانه</button>
          <button value='بچه گانه' onClick={(e) => clickHandler(e)} >بچه گانه</button>
      </div>
      <div className="AjaxContent">
      {
        fillterData.map(item => (
          <div className="AjaxCart">
            {/* <img src={img} alt="" /> */}
            <img src={item.Images[0]} alt="" />
            <div className="con">
              <p><b onClick={() => ProductPage(item)} >{item.Title}</b></p>
              <p>قیمت : {item.Price}</p>
              <p>{item.Introduction}</p>
              <div className="AjaxActionBtn">
                  <VscHeart onClick={() => ActionIntrestProduct(item)}/>
                  <LuArrowRightLeft onClick={() => ActionComparsionProduct(item)}/>
                  <SlBasket onClick={() => ActionBasket(item)}/>
                </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
};
export default AjaxTab;