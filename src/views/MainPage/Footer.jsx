import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../assets/Styles/Footer.css'
import namad_1 from '../../assets/images/namad-01.png'
import namad_2 from '../../assets/images/namad-02.png'
import namad_3 from '../../assets/images/namad-03.png'
import namad_4 from '../../assets/images/namad-04.png'
import namad_5 from '../../assets/images/namad-05.png'
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { FaWhatsapp , FaInstagram , FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ContextApiItem } from '../../Context/Context'
import { useTranslation } from 'react-i18next'


const Footer = () => {
    const {APIdata} = useContext(ContextApiItem)
    // console.log(APIdata)
    // console.log(APIdata.DescriptionFooter)
    const {t} = useTranslation()
  return (
    
        <footer>
            <div className='Footer row' >
                <div className=" FooterMenu col-12 col-lg-3">
                    <div className="head"><small className='headStyle' >{t("FooterMenu.TitleMenu")}</small>{t("FooterMenu.EndPointTitleMenu")}</div>
                    <div className="menus d-flex">
                        <ul className='menu1'>
                            <li><NavLink>{t("FooterMenu.Menu1.Courses")}</NavLink></li>
                            <li><NavLink>{t("FooterMenu.Menu1.Mag")}</NavLink></li>
                            <li><NavLink>{t("FooterMenu.Menu1.SellInSite")}</NavLink></li>
                            <li><NavLink>{t("FooterMenu.Menu1.Jobs")}</NavLink></li>
                            <li><NavLink>{t("FooterMenu.Menu1.CallToUs")}</NavLink></li>
                        </ul>
                        <ul className='menu2'>
                            <li><NavLink>{t("FooterMenu.Menu2.Courses")}</NavLink></li>
                            <li><NavLink>{t("FooterMenu.Menu2.Mag")}</NavLink></li>
                            <li><NavLink>{t("FooterMenu.Menu2.SellInSite")}</NavLink></li>
                            <li><NavLink>{t("FooterMenu.Menu2.Jobs")}</NavLink></li>
                            <li><NavLink>{t("FooterMenu.Menu2.CallToUs")}</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="AboutUs rounded-4 col-12 col-lg-5">
                    <div className="head">{t("FooterAboutShop.Title")}</div>
                    <div className="content">
                    {t("FooterAboutShop.Content")}
                    <br />
                    <button className='btn btn-outline-secondary' >{t("FooterAboutShop.btn")}</button>
                    </div>
                </div>
                <div className="ContactUs d-flex col-12 col-lg-2">
                    <div className="adress">
                        <p className='title'><small className='headStyle' > {t("BottomFooter.Title")} </small>{t("BottomFooter.EndPointTitle")}</p>
                        <p>{t("BottomFooter.Address")}</p>
                        <button className='btnEmail'>{t("BottomFooter.Email")}</button>
                    </div>
                    <div className="phone">
                        <p> <span>051</span>123456789</p>
                        <p> <span>051</span>123456789</p>
                        <p className="subText text-secondary">{t("BottomFooter.QuikCall")}</p>
                    </div>
                </div>
            </div>
            <div className="subFooter d-flex">
                <div className="namadIMG d-flex">
                    <img src={namad_1} alt="" />
                    <img src={namad_2} alt="" />
                    <img src={namad_3} alt="" />
                    <img src={namad_4} alt="" />
                    <img src={namad_5} alt="" />
                </div>
            </div>
                <div className="contentButtom text-center row">
                    <div className="col-12 col-lg-5">{t("BottomFooter.MakerSite")}</div>
                    <div className="upBtn col-12 col-lg-3">
                        <a  className='text-light bg-primary rounded-5 p-1' href='#header'><RiArrowUpDoubleFill/></a>
                    </div>
                    <div className="col-12 col-lg-3 sotioalIcon d-flex">
                        <FaLinkedin/>
                        <FaInstagram/>
                        <FaWhatsapp/>
                        <FaXTwitter/>
                    </div>
                </div>
        </footer>
  )
}

export default Footer