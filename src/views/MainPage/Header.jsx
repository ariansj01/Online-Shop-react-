import React from 'react'
import logo from '../../assets/images/logo.svg'
import '../../assets/Styles/Header.css'
import { NavLink } from 'react-router-dom'
import { SlBasket } from "react-icons/sl";
import { VscHeart } from "react-icons/vsc";
import { LuArrowRightLeft , LuUserCircle } from "react-icons/lu";


const Header = () => {
  return (
    <header className='header row' >
        <div className="logo row col-md-12 col-xl-4 col-lg-12">
            <div className="logo col-4">
                <img src={logo} alt="" />
            </div>
            <div className="content col-7">
                <b className='txt-header1 d-block' >فروشگاه آنلاین <span className='text-primary '>کاوه</span></b>
                <small className='txt-header2 text-secondary ' >فروشگاهی از جنس تکنولوژی های بروز</small>
            </div>
        </div>

        <div className="menus col-md-3 col-xl-5 col-lg-7 col-3">
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
                                   دسته بندی ها
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="#">خانه</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="#">فروشگاه</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="#">درباره ما</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="#">تماس با ما</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="#">بلاگ</NavLink>
                            </li>
                        </ul>
                        </div>
                </div>
            </nav>
            <input className='searchBox searchBoxMain rounded-5' type="text" placeholder='جستجو کنید...' />
        </div>
        <div className="searchBoxConteiner col-9 col-sm-5">
            <input className='searchBox rounded-5' type="text" placeholder='جستجو کنید...' />
        </div>
        <div className="icons col-md-4 col-xl-3 col-lg-5 col-sm-4 d-flex">

            <div className="basket bg-primary text-light rounded-4">
                <SlBasket/>
                <span>0</span>
            </div>
            <div className="like rounded-4">
                <VscHeart/>
            </div>
            <div className="arrow rounded-4">
                <LuArrowRightLeft/>
            </div>
            <div className="user text-light rounded-4">
                <LuUserCircle/>
            </div>
            {/* <div className="user text-light rounded-4">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                La
                </button>

                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type="text" />
                    </div>
                    </div>
                </div>
                </div>
            </div> */}
        </div>
    </header>
  )
}

export default Header
