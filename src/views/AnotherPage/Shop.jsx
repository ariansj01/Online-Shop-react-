import React, { useContext, useEffect, useState } from 'react'
import { Product_MainPageCont } from '../../Services/http-request'
import Header from '../MainPage/Header'
import Footer from '../MainPage/Footer'
import { Modal , Select, Radio, Rate } from 'antd'
import { LuArrowRightLeft } from 'react-icons/lu'
import { SlBasket } from 'react-icons/sl'
import { VscHeart } from 'react-icons/vsc'
import { EyeOutlined } from '@ant-design/icons';
import { ContextApiItem } from '../../Context/Context'
import characters1 from '../..//assets/images/characters-01.png'
import '../../assets/Styles/Shop.css'

const Shop = () => {
  let [DataItem , setDataItem] = useState([])
  let [lengthProduct , setLengthProduct] = useState()
  
  const {setProductIdIntrested , ProductIdIntrested , ProductCpmparison , setProductCpmparison} = useContext(ContextApiItem)
  const GetData = () => {
    Product_MainPageCont("Product").then(res => setDataItem(res.data))
  setLengthProduct(DataItem.length)
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

  let FillterData = [];
    async function ChangeCategory(value){
    await Product_MainPageCont("Product").then(res => {
        res.data.map(item => FillterData.push(item))
        FillterData = FillterData.filter(item => item.Category.includes(value))
    })
    setDataItem(FillterData)
    };

    async function ChangePrice(value){
      await Product_MainPageCont("Product").then(res => {
          res.data.map(item => FillterData.push(item))
          if(value === 100){
            FillterData = FillterData.filter(item => item.Price <= value)
          }else{
            FillterData = FillterData.filter(item => item.Price >= value)
          }
      })
      setDataItem(FillterData)
    };

    async function ChangeOption(value) {
      await Product_MainPageCont("Product").then(res => {
        res.data.map(item => FillterData.push(item))
        if(value === 'cheap'){
        FillterData = item.Price.sort((a, b) => (a - b))
        }
        if (value == 'سایز کوچک') {
          FillterData = FillterData.filter(item => item.Specifications.map(i => i.OptionTitle.includes(value)))
        }
      })
      setDataItem(FillterData)
    }

    async function ChangeBrand(value){
      await Product_MainPageCont("Product").then(res => {
          res.data.map(item => FillterData.push(item))
          })
        FillterData = FillterData.filter(item => item.Brand === value)
        setDataItem(FillterData)
      DataItem.map(i => console.log(i.Brand))
      console.log(value)
    };

    async function ChangeCountProduct(e){
      await Product_MainPageCont("Product").then(res => {
        res.data.map(item => FillterData.push(item))
        FillterData = FillterData.filter(item => item.AvailableProduct === true)
    })
    setDataItem(FillterData)
    };
  return (
    <>
    <Header/>
    <div className='ShopContainer' >
    <div className="SlideBarShop">
    <Select
      defaultValue="برند"
      style={{
        width: 120,
      }}
      onChange={ChangeBrand}
      options={[
        {
          value: 'zara',
          label: 'zara',
        },
        {
          value: 'ferari',
          label: 'ferari',
        },
        {
          value: 'bmw',
          label: 'bmw',
        },
        {
          value: 'porsh',
          label: 'porsh',
        },
        {
          value: 'beneli',
          label: 'beneli',
        },
      ]}
    />
    <Radio onClick={(e) => ChangeCountProduct(e)} value={true}>فقط کالا های موجود</Radio>
    <Select
      defaultValue="دسته بندی ها"
style={{
  width: 120,
}}
onChange={ChangeCategory}
options={
  // DataItem
  [
  {
    value: 'مردانه',
    label: 'مردانه',
  },
  {
    value: 'زنانه',
    label: 'زنانه',
  },
  {
    value: 'بچه گانه',
    label: 'بچه گانه',
  },
      ]}
      />
      <Select
        defaultValue="قیمت"
        style={{
            width: 120,
        }}
        onChange={ChangePrice}
        options={[
            {
            value: 100,
            label: 'زیر 100 هزار تومان',
            },
            {
            value: 450,
            label: 'بالای 450 هزار تومان',
            },
        ]}
        />
          {/* <Select
        defaultValue="ویژگی ها"
        style={{
            width: 120,
        }}
        onChange={ChangeOption}
        options={[
          {
          value: 'cheap',
          label: 'کمترین قیمت',
          },
          {
          value: 'expensive',
          label: 'بالاترین قیمت',
          },
        ]}
        /> */}
            
    </div>
      <div>
        <div className="Fillters">
            <h4>فیلتر ها</h4>
            <div className="fillter">
              <button onClick={GetData}>بازگشت به حالت اولیه</button>
            <p>تعداد کل محصولات {lengthProduct} عدد</p>
            </div>
        </div>
        <div className="ProductShop">
        {
          DataItem.map(item => (
            <div className='ShopCard'>
                <img width='200px' src={item.Images} alt="" />
              <p>{item.Title}</p>
              <p>قیمت : {item.Price} تومان</p>
              <p>{item.Introduction}</p>
              <div className="actionBtnShop">
                <VscHeart onClick={() => ActionIntrestProduct(item)} />
                <LuArrowRightLeft onClick={() => ActionComparsionProduct(item)} />
                <SlBasket/>
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
            </div>
          ))
        }
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Shop