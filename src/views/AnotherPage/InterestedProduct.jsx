import React, { useContext, useEffect, useState } from 'react'
import Capture5 from '../../assets/images/characters-02.png'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { FaShoppingBasket } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import { Avatar, Card , Empty  } from 'antd';
import Header from '../MainPage/Header';
import Footer from '../MainPage/Footer';
import { ContextApiItem } from '../../Context/Context';
import { Product_MainPageCont } from '../../Services/http-request';
import '../../assets/Styles/interest.css'
const { Meta } = Card;
const InterestedProduct = () => {
  // const {ProductIdIntrested} = useContext(ContextApiItem)
  const {setBasketCount , BasketProduct , setBasketProduct , setProductIdIntrested , ProductIdIntrested , ProductCpmparison , setProductCpmparison} = useContext(ContextApiItem)

  const [IntrestDataItem , setIntrestDataItem] = useState([])

  console.log(ProductIdIntrested)
  //   async function GetData() {
  //     await Product_MainPageCont(`Product/${ProductIdIntrested}`).then(res => setIntrestDataItem(res.data))
  // }

  // useEffect(() => {
  //   GetData() 
  // } , [])
  const DeleteProduct = (product) => {
    const ProductIdIntrestedState = [...ProductIdIntrested]
    const ProdIndex = ProductIdIntrested.findIndex(item => item.id === product.id)
    ProductIdIntrestedState.splice(ProdIndex , 1)
    setProductIdIntrested(ProductIdIntrestedState)
  }

  const ActionComparsionProduct = (product) => {
    console.log(product)
    if (!ProductCpmparison.includes(product)) {
      setProductCpmparison([...ProductCpmparison , product])
    }
  }
  const ActionBasket = (product) => {
    // console.log(product)
    if (!BasketProduct.includes(product)) { 
      setBasketProduct([...BasketProduct , product])
    }
  }
 
  return (
    <>
      <Header/>
      <div className='ContainerIntrestedProduct row'>
        {
          ProductIdIntrested.map(item => (
            <div className="col">
              <Card
            style={{
              width: 300,
            }}
            cover={
              <img
                width='50px'
                alt="example"
                src={item.Images[0]}
              />
            }
            actions={[
              <BsArrowLeftRight onClick={() => ActionComparsionProduct(item)} key="moghayese" />,
              <FaShoppingBasket onClick={() => ActionBasket(item)} key="basket" />,
              <DeleteOutlined onClick={() => DeleteProduct(item)} key="delete" />,
              // <EyeOutlined onClick={(item) => ActionComparsionProduct(item)} key="showPro" />
            ]}
          >
            <Meta
              // avatar={<Avatar src= />}
              title={item.Title}
              description={item.Introduction}
            />
              </Card>
          </div>
         ))
        }
      </div>
      <Footer/>
    </>
  );
}

export default InterestedProduct