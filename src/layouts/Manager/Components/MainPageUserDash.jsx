import React, { useEffect, useState } from 'react'
import { Alert, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import banner from '../../../assets/images/banner-03.png'
import { IoTicketOutline } from 'react-icons/io5';
import { FaUsers } from 'react-icons/fa';
import { SlBasketLoaded } from 'react-icons/sl';
import { MdOutlineKeyboardAlt } from 'react-icons/md';
import { Product_MainPageCont, Users_BlogPost, Users_SinglePost } from '../../../Services/http-request';

const MainPageUserDash = () => {
    let [users , setUsers] = useState(0)
    let [product , setProduct] = useState(0)
    let [post , setPost] = useState(0)
    let navigate = useNavigate()
    const DataHandler = async () => {
        await Users_SinglePost("Users").then(res => setUsers(res.data.length))
        await Users_BlogPost("SinglePost").then(res => setProduct(res.data.length))
        await Product_MainPageCont("Product").then(res => setPost(res.data.length))
    }
    useEffect(() => {
        DataHandler()
    } , [])
  return (
    <div>
        <Space
        direction="vertical"
        style={{
        width: '100%',
        }}
        >
        <Alert style={{cursor:"pointer"}} onClick={() => navigate("/Admin_Dashboard/searchUser")} message="برای اطلاع از وضعیت و مشخصات کاربران وبسایت خود کلیک کنید." type="info" />
        <div className="UserState d-flex">
        <div className="box">
            <IoTicketOutline />
            <div className="con">
                <Link onClick={() => navigate("/Admin_Dashboard/searchUser")} >مدیریت تیکت ها</Link>
            </div>
        </div>
      <div className="box d-flex">
        <FaUsers/>
        <div className="con">
          <span>تعداد کل کاربران : </span>
          <span>{users}</span>
        </div>
      </div>
      <div className="box d-flex">
        <SlBasketLoaded />
        <div className="con">
          <span>تعداد کل محصولات : </span>
          <span>{product}</span>
        </div>
      </div>
      <div className="box d-flex">
        <MdOutlineKeyboardAlt/>
        <div className="con">
          <span>تعداد کل پست ها : </span>
          <span>{post}</span>
        </div>
      </div>
    </div>
        <Alert style={{cursor:"pointer" , marginTop:"50px"}} onClick={() => navigate("/Admin_Dashboard/searchUser")} message="برای اطلاع از فروش محصولات خود و سود خود کلیک کنید." type="warning" />
    </Space>
    </div>
  )
}

export default MainPageUserDash