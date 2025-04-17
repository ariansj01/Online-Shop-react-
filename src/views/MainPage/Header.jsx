import React, { useContext , useEffect, useState } from 'react'
import { NavLink , Outlet, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import '../../assets/Styles/Header.css'
import {useTranslation} from "react-i18next"
import { SlBasket } from "react-icons/sl";
import { VscHeart } from "react-icons/vsc";
import { LuArrowRightLeft , LuUserCircle } from "react-icons/lu";
import RoutersApp from '../../Routers/AppRouter';
import AppRouter from '../../Routers/AppRouter';
import { ContextApiItem } from '../../Context/Context';
import ChangeLang from '../../MainPageComponents/ChangeLang'
import { AudioOutlined } from '@ant-design/icons';
import { Product_MainPageCont } from '../../Services/http-request'
import { Input, Button, Modal } from 'antd';
import ChangeTheme from '../../MainPageComponents/ChangeTheme'
const { Search } = Input;

const Header = (props) => {
//   const {ContentPageProduct: ContentPageProduct , setContentPageProduct : setContentPageProduct , setBasketCount , BasketProduct , setBasketProduct , setProductIdIntrested , ProductIdIntrested , ProductCpmparison , setProductCpmparison} = useContext(ContextApiItem)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [SearchItem, setSearchItem] = useState([]);
    let FillterData = [];
    async function showModal(value){
        setIsModalOpen(true);
        console.log(value)
        await Product_MainPageCont("Product").then(res => {
            res.data.map(item => FillterData.push(item))
            FillterData = FillterData.filter(item => item.Title.includes(value))
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
    const {ContentPageProduct ,setContentPageProduct , setBasketCount , BasketCount  , HeadUserDash} = useContext(ContextApiItem)
    // console.log(BasketCount)
    // console.log(HeadUserDash)
    // useEffect(() => {
    // } , [])
    const {t} = useTranslation()
    let navigate = useNavigate()
      const ProductPage = (product) => {
        if (!ContentPageProduct.includes(product)) { 
          setContentPageProduct([...ContentPageProduct , product])
          navigate('/ProductPage')
        }
      }
  return (
    <header className='header row' id='header' >
        
        <div className="logo row col-md-12 col-xl-4 col-lg-12">
            <div className="logo col-4">
                <NavLink to='/' className=''>
                    <img src={logo} alt="" />
                    {/* {t("head.sub")} */}
                </NavLink>
            </div>
            <div className="content col-7">
                <b className='txt-header1 d-block' >{t("Header.Title")} <span className='text-primary '>{t("Header.EndPointTitle")}</span></b>
                <small className='txt-header2 text-secondary ' >{t("Header.subTitle")}</small>
            </div>
        </div>
        <div className="menus col-md-3 col-xl-5 col-lg-7 col-12">
            <nav class="navbar navbar-expand-lg bg-body-tertiary rounded-5">
                <div class="container-fluid">
                        <a class="navbar-brand" href="#"></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav d-flex">
                            <li class="nav-item dropdown bg-light">
                                <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   {t("Header.Menu.Categori")}
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            {/* <li class="nav-item">
                                <NavLink className="nav-link" to="#">{t("Header.Menu.Home")}</NavLink>
                            </li> */}
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/Shop">{t("Header.Menu.Shop")}</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="#">{t("Header.Menu.AboutUs")}</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="#">{t("Header.Menu.ContactUs")}</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/Blog">{t("Header.Menu.Blog")}</NavLink>
                            </li>
                        </ul>
                <Search
                className='searchBox searchBoxNavbarHead searchBoxMain'
                placeholder="نام محصول مورد نظر خودتون رو وارد کنید..."
                allowClear
                onSearch={showModal}
                style={{
                    // width: 550,
                }}
                />
                <div className="icons iconsNavHead col-md-4 col-xl-3 col-lg-5 col-sm-4 d-flex">

                    <div className="basket bg-primary text-light rounded-4">
                        <NavLink to='/Bsket' ><SlBasket/></NavLink>
                        <span>{BasketCount}</span>
                    </div>
                    <div className="like rounded-4">
                        <NavLink to='/Interest' className='text-light'><VscHeart/></NavLink>
                    </div>
                    <div className="arrow rounded-4">
                        <NavLink to='/Comparison' className=''><LuArrowRightLeft/></NavLink>
                    </div>
                    <div className="user rounded-4">
                        <NavLink to={HeadUserDash} className='text-light' ><LuUserCircle/></NavLink>
                        {/* <Outlet/> */}
                    </div>
                </div>
                
                </div>
                </div>
            </nav>
        <Search
            className='searchBox searchBoxHead searchBoxMain'
            placeholder="نام محصول مورد نظر خودتون رو وارد کنید..."
            allowClear
            onSearch={showModal}
            style={{
                // width: 550,
            }}
        />
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className="CartsFillterProduct">
            {
                SearchItem.map(item => (
                    <div className="CartFillterProduct">
                        <h2>{item.Title}</h2>
                        <p> توضیحات {item.Introduction}</p>
                        <p> قیمت {item.Price}</p>
                        <Button onClick={() => ProductPage(item)} type="primary">نمایش  محصول</Button>
                    </div>
                ))
            }
            </div>
        </Modal>
        </div>
        <div className="icons iconsHead col-md-4 col-xl-3 col-lg-5 col-sm-4 d-flex">

            <div className="basket bg-primary text-light rounded-4">
                <NavLink to='/Bsket' ><SlBasket/></NavLink>
                <span>{BasketCount}</span>
            </div>
            <div className="like rounded-4">
                <NavLink to='/Interest' className='text-light'><VscHeart/></NavLink>
            </div>
            <div className="arrow rounded-4">
                <NavLink to='/Comparison' className=''><LuArrowRightLeft/></NavLink>
            </div>
            <div className="user rounded-4">
                <NavLink to={HeadUserDash} className='text-light' ><LuUserCircle/></NavLink>
                {/* <Outlet/> */}
            </div>
        </div>
        <ChangeLang/>
        <ChangeTheme/>
        {/* <Outlet/> */}
        {/* <AppRouter/> */}
    </header>
  )
}

export default Header
