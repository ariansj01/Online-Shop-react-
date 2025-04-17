import React, { useEffect, useState } from 'react';
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBlog  , FaRegUserCircle } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { FaRegImage } from "react-icons/fa6";
import { PiSlideshow } from "react-icons/pi";
import { LuUsers2 } from "react-icons/lu";
import { LiaUserEditSolid } from "react-icons/lia";
// import { AiOutlineProduct , AiOutlineFileSearch  } from "react-icons/ai";
import { LuPackageSearch } from "react-icons/lu";
import { MdOutlineAddChart , MdOutlinePostAdd } from "react-icons/md";
import { IoSettingsOutline , IoTicketOutline } from "react-icons/io5";
import { FcMoneyTransfer } from "react-icons/fc";
import { AiOutlineUserDelete } from "react-icons/ai";
import { GoInbox } from "react-icons/go";
import { TbReportSearch } from "react-icons/tb";
import { IoExitOutline } from "react-icons/io5";

import logo from '../../assets/images/characters-01.png'
import '../../assets/Styles/MainDashboard.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import AppRouter from '../../Routers/AppRouter';
import SearchUser from './Components/SearchUser';
import SliderImg from './Components/SliderImg';
import AddProduct from './Components/AddProduct';
import SearchProduct from './Components/SearchProduct';
import { ContextApiItem } from '../../Context/Context';
import AddBlogPost from "./Components/AddBlogPost";
import SearchBlogPost from './Components/SearchBlogPost';
let items = [
    {
        lable:'داشبورد',
        icon: <AiOutlineDashboard/>,
        link: '/Admin_Dashboard/Main',
        sub:[]
    },
    {
        lable:'کاربران',
        icon: <FaRegUserCircle/>,
        link: '/Admin_Dashboard/searchUser',
        sub:[]
    },
    {
        lable:'مدیریت فروش',
        icon: <FcMoneyTransfer/>,
        link: '/Admin_Dashboard/Sell',
        sub:[]
    },
    {
        lable:'مدیریت تیکت ها',
        icon: <IoTicketOutline/>,
        link: '/Admin_Dashboard/ManageTicket',
        sub:[]
    },
    {
        lable:'مدیریت صفحه اصلی',
        icon: <RiPagesLine/>,
        link: '#',
        sub:[
            {
                lable:'عکس ها',
                icon: <FaRegImage/>,
                link: '/Admin_Dashboard/ManageImage'
            }
        ]
    },
    {
        lable:'محصولات',
        icon: <GoInbox/>,
        link: '#',
        sub:[
            {
                lable:'اضافه کردن محصول',
                icon: <MdOutlineAddChart/>,
                link: '/Admin_Dashboard/addProduct'
            },          
            {
                lable:'جستجوی محصولات',
                icon: <LuPackageSearch/>,
                link: '/Admin_Dashboard/searchProduct'
            }
        ]
    },
    {
        lable:'وبلاگ',
        icon: <FaBlog/>,
        link: '#',
        sub:[
            {
                lable:'مدیریت صفحه وبلاگ',
                icon: <IoSettingsOutline/>,
                link: '/Admin_Dashboard/ManageBlog'
            },
            {
                lable:'اضافه کردن پست ',
                icon: <MdOutlinePostAdd/>,
                link: '/Admin_Dashboard/addBlog'
            },          
            {
                lable:'جستجوی پست ها',
                icon: <TbReportSearch />,
                link: '/Admin_Dashboard/searchBlog'
            }
        ]
    },
    {
        lable:'خروج',
        icon: <IoExitOutline/>,
        link: '/',
        sub:[]
    }

]


const MainDashboard = () => {
    // const [editId , setEditId] = useState()
    // const [msgSuccess , setMsgSuccess] = useState()
    
    let navigate = useNavigate()
    useEffect(() => {
        navigate("/Admin_Dashboard/Main")
    } , [])

  return (
    <main className='AdminDash'>
    <div className='Menu' >
        {
        items.map(i => (
            <div className='MenuItem'>
            <NavLink to={i.link}>
                {i.icon}
                <span>{i.lable}</span>
                
            </NavLink>
            <div className='subItem' >
                {
                    i.sub.map(item => (
                        <NavLink to={item.link}>
                            {item.icon}
                            <span>{item.lable}</span>
                        </NavLink>
                    ))
                }
            </div>
            </div>
        ))
        }
    </div>
    <div className="Content">
        <Outlet/>
        {/* <ContextApiItem.Provider value={{ }}  >
        <AppRouter/>
      </ContextApiItem.Provider> */}
        {/* <SearchUser/> */}
        {/* <SliderImg/> */}
        {/* <AddProduct/> */}
        {/* <SearchProduct/> */}
        {/* <AddBlogPost/> */}
        {/* <SearchBlogPost/> */}
    </div>
    </main>
  );
};
export default MainDashboard;



