import React, { useContext } from 'react'
import { Alert, Space } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import banner from '../../assets/images/banner-03.png'
import '../../assets/Styles/MainPageUS.css'
import { ContextApiItem } from '../../Context/Context';
const MainPageUS = ({Tickets}) => {
  const {ProductIdIntrested} = useContext(ContextApiItem)
  let navigate = useNavigate()
  return (
    <div>
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
      <p style={{cursor:"pointer"}} onClick={() => navigate('/Dashboard_User/Edit')} ><Alert message="اگر قصد ویرایش اطلاعات خود را دارید اینجا کلیک کنید." type="warning" /></p>
    </Space>
    <div className="UserState d-flex">
      <div className="box d-flex">
        <img src={banner} className='rounded-5' width='150px' alt="" />
        <div className="con">
          <p>علاقه مندی ها</p>
          <span>{ProductIdIntrested.length}</span>
        </div>
      </div>
      <div className="box d-flex">
        <img src={banner} className='rounded-5' width='150px' alt="" />
        <div className="con">
          <p>سفارش ها</p>
          <span>2</span>
        </div>
      </div>
      <div className="box d-flex">
        <img src={banner} className='rounded-5' width='150px' alt="" />
        <div className="con">
          <p>تیکت ها</p>
          <span>{Tickets}</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MainPageUS