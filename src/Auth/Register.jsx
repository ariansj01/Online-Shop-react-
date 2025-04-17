import React, { useContext, useState } from 'react'
import { NavLink , Outlet, useNavigate } from 'react-router-dom'
import  axios from 'axios'
import {ContextApiItem} from '../Context/Context'
import { Button, notification, Form, Input } from 'antd';
import '../assets/Styles/Auth/Login.css'
import '../assets/Styles/Auth/Register.css'

const Register = () => {
  let navigate = useNavigate()
  let [loaderStyle , setLoaderStyle] = useState('none')
  const {setUserTicketId , setHeadUserDash , HeadUserDash} = useContext(ContextApiItem)
  let userId;
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'ورود، خوش آمدید',
    });
  }
  async function onFinish(values) {
    if (values.username === 'admin' && values.password === '1234') {
      navigate('/Admin_Dashboard')
    }
    let statusUser = false
    let DataItem =  await axios("https://6512bc96b8c6ce52b3961d8e.mockapi.io/Users")
    DataItem.data.forEach(item => {
      if (values.username === item.UserName && values.password === item.Password) {
        localStorage.setItem("userId" , JSON.stringify(item.id))
        userId = item.Token
        statusUser = true
        // setUserTicketId(item.id)
      }
    });
    // && localStorage.getItem('Token') === userId
    if (statusUser === true) {
      // console.log(DataItem)
      openNotificationWithIcon('success')
      navigate('/Dashboard_User')
      setHeadUserDash('/Dashboard_User')
      console.log(JSON.parse(userId))
      setUserTicketId(JSON.parse(userId))
      console.log(HeadUserDash)
      setLoaderStyle('block')
      {
      // setTimeout(() => {
      //     navigate('/Dashboard_User')
      //     console.log('koddddddddsssssss')
      //   }, 3000);
      }
        
      }else{
        alert("مشخصات شما اشتباه است")
      }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="LoginContainer">
      <div className="LoaderCon" style={{display: loaderStyle}}>
        <div class="loader"></div>
      </div>
    {contextHolder}

    <div className="starsMain">
    <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'/>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    </div>
    
    <div class='wrapper'>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
    </div>
      <div className="formContainer">
      <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="نام کاربری"
      name="username"
      rules={[
        {
          required: true,
          message: 'لطفا نام کاربری خود را وارد کنید!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="پسورد"
      name="password"
      rules={[
        {
          required: true,
          message: 'لطفا نام کاربری خود را وارد کنید!',
        },
      ]}
      >
      <Input.Password />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">ورود</Button>
    </Form.Item>
      </Form>
      <NavLink className='text-dark' to='/Login'>هنوز ثبت نام نکردی؟</NavLink>
      <Outlet/>
      </div>
    </div>
  )
}

export default Register



