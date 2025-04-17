import React, { useContext, useState } from 'react';
import { Button, DatePicker, InputNumber , Form, Input, message } from 'antd';
import '../../../assets/Styles/AddBlogPost.css';
import { Users_BlogPost } from '../../../Services/http-request';
import { ContextApiItem } from '../../../Context/Context';
import { useNavigate } from 'react-router-dom';
const AddBlogPost = () => {
  let navigate = useNavigate()
  let {setPostMethod , Postmethod , IdPost , setIdPost , PostMsgSuccess , setPostMsgSuccess} = useContext(ContextApiItem)
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: PostMsgSuccess,
    });
  };
  const [ImageFile, setImage] = useState(null)
  const onImageChange = (event) => {
   if (event.target.files && event.target.files[0]) {
     setImage(URL.createObjectURL(event.target.files[0]));
   }
  }
  const onFinish = (values) => {
    console.log('Success:', values);
    console.log(Postmethod)
    if (Postmethod === 'POST') {
      Users_BlogPost('SinglePost' , {
        method: Postmethod,
        headers: {
          "Content-Type" : "application/json",
          "Access-Control-Allow-Origin" : "*"
        },
        data:{
          "Author": values.AuthorName,
          "Main_Title": values.title,
          "Text": values.text,
          "Summery": values.summery,
          "ReadTime": values.ReadTime,
          "DateAdd": Date(values.dateAdd),
          "Category": values.categori,
          "Image" : ImageFile
        }
    }).then(res => {
      if (res.status === 201) {
        console.log(res)
        success()
      }
    })
    }else{
      Users_BlogPost(`SinglePost/${IdPost}` , {
        method: Postmethod,
        headers: {
          "Content-Type" : "application/json",
          "Access-Control-Allow-Origin" : "*"
        },
        data:{
          "Author": values.AuthorName,
          "Main_Title": values.title,
          "Text": values.text,
          "Summery": values.summery,
          "ReadTime": values.ReadTime,
          "DateAdd": Date(values.dateAdd),
          "Category": values.categori,
          "Image" : ImageFile
        }
    }).then(res => {
      console.log(res)
      if (res.status === 200) {
        setPostMethod("POST")
        setIdPost('')
        success()
        setTimeout(() => {
          navigate("/Admin_Dashboard/EditPost")
        } , 3000)
      }
    })
    }
    
    // console.log('Success:', optValue.opt);
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return(
    <div className="formAddPost">
      {contextHolder}
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 700,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="نام نویسنده"
      name="AuthorName"
      rules={[
        {
          required: true,
          message: 'لطفا نام نویسنده را وارد کنید!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="عنوان پست"
      name="title"
      rules={[
        {
          required: true,
          message: 'لطفا عنوان مقاله را وارد کنید!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <input type="file" onChange={onImageChange} className="filetype" />
    <Form.Item
      label="خلاصه متن"
      name="summery"
      rules={[
        {
          required: true,
          message: 'لطفا خلاصه نوشته را وارد کنید!',
        },
      ]}
    >
    <Input.TextArea />
    </Form.Item>
    <Form.Item
      label="متن"
      name="text"
      rules={[
        {
          required: true,
          message: 'لطفا نوشته پست را وارد کنید!',
        },
      ]}
    >
    <Input.TextArea />
    </Form.Item>
    <Form.Item
      label="زمان خواندن پست"
      name="ReadTime"
      rules={[
        {
          required: true,
          message: 'زمان خواندن پست را مشخص کنید.',
        },
      ]}
    >
    <InputNumber style={{ width: '100%' }} />
    </Form.Item>
    <Form.Item
      label="تاریخ اضافه کردن پست"
      name="dateAdd"
      rules={[
        {
          required: true,
          message: 'لطفا تاریخی که پست خود را اضاف کردید وارد کنید',
        },
      ]}
    >
      <DatePicker style={{ width: '100%' }} />
    </Form.Item>
    <Form.Item
      label="دسته بندی"
      name="categori"
      rules={[
        {
          required: true,
          message: 'دسته بندی را وارد کنید',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">ثبت مشخصات</Button>
    </Form.Item>
  </Form>
    </div>
  );
}

export default AddBlogPost;