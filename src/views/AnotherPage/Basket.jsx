import React, { useContext, useEffect, useState } from 'react'
import '../../assets/Styles/Basket.css'
import { ContextApiItem } from '../../Context/Context'
import { Button, message, Space } from 'antd';
import characters2 from '../../assets/images/characters-02.png'
const Basket = () => {
  let [disable , setdisable] = useState(false)
  let [totalPrice , setTotalPrice] = useState(0)
  let [qty , setQty] = useState(1)
// let total;

  const {setSellPro , BasketProduct , setBasketProduct} = useContext(ContextApiItem)
  
    const CounterQty = (op , id , Price) => {
        const cartState = [...BasketProduct]
        const proIndex = cartState.findIndex(item => item.id === id)
        cartState[proIndex].qty += op
        if(op === -1){
            if (cartState[proIndex].qty <= 1) {
                cartState[proIndex].qty = 1
                setdisable(true)
                }
            setTotalPrice( totalPrice - cartState[proIndex].Price )
            setBasketProduct(cartState)
        }else{
            setTotalPrice( totalPrice + cartState[proIndex].Price )
            // setQty( qty + cartState[proIndex].qty )
            setdisable(false)
        }
        
    }
    
    useEffect(() => {
        // console.log(BasketProduct)
        BasketProduct.map(item => setTotalPrice(totalPrice += (item.Price)))
    },[])
    const DeleteProduct = (product , price) => {
        const cartState = [...BasketProduct]
        // const proIndex = cartState.findIndex(item => item.id === id)
        const BasketProductState = [...BasketProduct]
        const ProdIndex = BasketProduct.findIndex(item => item.id === product.id)

        BasketProductState.splice(ProdIndex , 1)
        setBasketProduct(BasketProductState)
        setTotalPrice( totalPrice - cartState[ProdIndex].Price )
    }
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'محصول شما با موفقیت خریداری شد',
      });
      console.log(BasketProduct)
      setSellPro(BasketProduct)
    };
  return (
    <div className='BasketContainer'>
        {contextHolder}

        <div className="ProductsInBasket">
                {
                    BasketProduct.map(item => (
                        <div className="ProBS">
                            <img src={item.Images[0]} alt="" />
                            <div className="content">
                                <div className="aboutProduct">
                                    <h4 className='TitlePro' >{item.Title}</h4>
                                    <p className='PricePro' > قیمت :  {item.Price}</p>
                                </div>
                            <div className="counter">
                                <button className='btnCountPlus' onClick={() => CounterQty(+1 , item.id , item.Price)} >+</button>
                                <span>{item.qty}</span>
                                <button disabled={disable} className='btnCountMinus' onClick={() => CounterQty(-1 , item.id , item.Price)} >-</button>
                            <button className='deleteItem' onClick={() => DeleteProduct(item , item.Price)} >حذف</button>
                            </div>
                            </div>
                        </div>
                    ))
                }
        </div>
        <div className="resultProduct">
            <p>قیمت کل : {totalPrice} تومان</p>
            <Button onClick={success}>خرید</Button>
        </div>
    </div>
  )
}

export default Basket