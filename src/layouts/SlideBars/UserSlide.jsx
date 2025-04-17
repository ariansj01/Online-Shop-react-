import React, { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { RiHome6Line, RiPagesLine } from "react-icons/ri";
import { GrBasket } from "react-icons/gr";
import { LuBell, LuPackageSearch } from "react-icons/lu";
import { BsBagHeart } from "react-icons/bs";
import { IoSettingsOutline, IoTicketOutline } from "react-icons/io5";
import { LiaUserEditSolid } from "react-icons/lia";
import { IoExitOutline } from "react-icons/io5";
import { Divider, Menu } from 'antd';
import UserSideRoute from '../../Routers/UserSideRoute'
import "../../assets/Styles/UserSlide.css";
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import MainPageUS from './MainPageUS';
import EditUser from './EditUser';
import TicketUser from './TicketUser';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaBlog, FaRegImage, FaRegUserCircle } from 'react-icons/fa';
import { FcMoneyTransfer } from 'react-icons/fc';
import { PiSlideshow } from 'react-icons/pi';
import { GoInbox } from 'react-icons/go';
import { MdOutlineAddChart, MdOutlinePostAdd } from 'react-icons/md';
import { TbReportSearch } from 'react-icons/tb';

const UserSlide = () => {
  // let [Tickets , setTickets] = useState(0);

  let items = [
    {
        lable:'داشبورد',
        icon: <AiOutlineDashboard/>,
        link: '/Dashboard_User/MainPage',
    },
    {
        lable:'سفارشات',
        icon: <FaRegUserCircle/>,
        link: '/Dashboard_User/Buying',
    },
    {
        lable:'علاقه مندی',
        icon: <FcMoneyTransfer/>,
        link: '/Dashboard_User/Intrest',
    },
    {
        lable:'تیکت',
        icon: <RiPagesLine/>,
        link: '/Dashboard_User/Ticket',
    },
    {
      lable:'ویرایش مشخصات',
      icon: <RiPagesLine/>,
      link: '/Dashboard_User/Edit',
  },
    {
        lable:'خروج',
        icon: <IoExitOutline/>,
        link: '/',
    }
]
let navigate = useNavigate()
useEffect(() => {
    navigate("/Dashboard_User/MainPage")
} , [])

  return (
    <div className='DasboardUser d-flex'>
      <div className='UserMenu' >
        {

        items.map(i => (
            <div className='UserMenuItem'>
            <NavLink to={i.link}>
              {i.icon}
              <span>{i.lable}</span>
            </NavLink>
            </div>
        ))
        }
      </div>
      <div className="dashContent">
      {/* <MainPageUS Tickets={Tickets}/> */}
      {/* <EditUser/> */}
      <Outlet/>
      {/* <TicketUser Tickets={Tickets} setTickets={setTickets} /> */}
      </div>
      {/* <UserSideRoute/> */}
    </div>
    
  );
};
export default UserSlide;