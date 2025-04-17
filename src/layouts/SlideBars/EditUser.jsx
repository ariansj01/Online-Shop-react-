import React from 'react'
import '../../assets/Styles/EditUser.css'
import { Button, Form, Input} from 'antd';

import axios from 'axios';
const EditUser = () => {

    const onFinish = (values) => {
        axios('https://6512bc96b8c6ce52b3961d8e.mockapi.io/Users/4' , {
            method:"PUT",
            // headers:{"Content-Type:" : "application/json"},
            data:{
                "UserName": values.username,
                "Name": values.name,
                "Email": values.email,
                "Phone": values.phone,
                "Password": values.password,
            }
            })
            alert("کاربر با موفقیت ادیت شد")
            // if (data.status === 200) {
            //     console.log('Success:', values.name);
            // }else{
            //     console.log('object')
            // }
        };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  return (
    <div>
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
      label="رمز عبور"
      name="password"
      rules={[
        {
          required: true,
          message: 'لطفا رمز خود را وارد کنید!',
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
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
        </Form>
    </div>
  )
}
export default EditUser