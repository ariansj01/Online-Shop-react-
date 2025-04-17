import React, { useState } from 'react'
import { NavLink , Outlet, useNavigate } from 'react-router-dom'
import  axios from 'axios'
import { Button, notification, Form, Input } from 'antd';
import '../assets/Styles/Auth/Login.css'

const Login = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'حساب کاربری با موفقیت ساخته شد',
    });
  }
  let navigate = useNavigate()
  async function onFinish(values) {
    let req =  await axios("https://6512bc96b8c6ce52b3961d8e.mockapi.io/Users" , {
       method: "POST",
      //  headers:{"Content-Type:" : "application/json"},
       data:{
         "UserName": values.username,
         "Name": values.name,
         "Email": values.email,
         "Phone": values.phone,
         "Password": values.password
       }
     })
     if (req.status === 201) {
     localStorage.setItem("Token" , req.data.Token)
     openNotificationWithIcon('success')
     navigate('/Dashboard_User')
     }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="LoginContainer">
    {contextHolder}
    
    <div className="starsMain">
    {/* <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'/> */}
    <div className='str' id='stars'></div>
    <div className='str' id='stars2'></div>
    <div className='str' id='stars3'></div>
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
      label="نام"
      name="name"
      rules={[
        {
          required: true,
          message: 'لطفا نام خود را وارد کنید!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="ایمیل"
      name="email"
      rules={[
        {
          required: true,
          message: 'لطفاایمیل خود را وارد کنید!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="تلفن همراه"
      name="phone"
      rules={[
        {
          required: true,
          message: 'لطفا شماره خود را وارد کنید!',
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
      <NavLink className='text-dark'  to="/Register" >اکانتی داری؟ پس وارد شو</NavLink>
      <Outlet/>
      </div>
    </div>
  )
}

export default Login