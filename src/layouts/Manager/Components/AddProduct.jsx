import React, { useContext, useEffect, useRef, useState } from 'react';
import { SmileOutlined, AppstoreAddOutlined , PlusOutlined  } from '@ant-design/icons';
import { Avatar, Button, Form, Input, InputNumber, Modal, Space, Typography , message  , Select , Image, Upload } from 'antd';
import '../../../assets/Styles/AddProduct.css'
import { Product_MainPageCont } from '../../../Services/http-request';
import { ContextApiItem } from '../../../Context/Context.js';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, open }) => {
  const prevOpenRef = useRef();
  useEffect(() => {
    prevOpenRef.current = open;
  }, [open]);
  const prevOpen = prevOpenRef.current;
  useEffect(() => {
    if (!open && prevOpen) {
      form.resetFields();
    }
  }, [form, prevOpen, open]);
};
const ModalForm = ({ open, onCancel }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    open,
  });
  const onOk = () => {
    form.submit();
  };
  let [imgg , setImgg] = useState()
  // setImgg(URL.createObjectURL(imgSrc))
  return (
    <Modal title="افزودن ویژگی" open={open} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical" name="userForm">
        <Form.Item
          name="OptionTitle"
          label="عنوان ویژگی"
          rules={[{required: true,},]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Option"
          label="ویژگی"
          rules={[{ required: true,},]}
          >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
const AddProduct = () => {
  const {setTextSuccess , setId , textSuccess , id , methodPro , setMethod} = useContext(ContextApiItem)
  const [open, setOpen] = useState(false);
  const showUserModal = () => {
    setOpen(true);
  };
  const hideUserModal = () => {
    setOpen(false);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const [image, setImage] = useState(null)
const onImageChange = (event) => {
 if (event.target.files && event.target.files[0]) {
   setImage(URL.createObjectURL(event.target.files[0]));
 }
}
  const success = () => {
    messageApi.open({
      type: 'success',
      content: textSuccess,
    });
    console.log(id)
  };
  const onFinish = (values) => {
    console.log('Finish:', values);
    if (methodPro === 'POST') {
      Product_MainPageCont(`Product` , {
        method: methodPro,
        headers: {
          "Content-Type" : "application/json",
          "Access-Control-Allow-Origin" : "*"
        },
        data:{
          "Title": values.ProName,
          "Price": values.Price,
          "Introduction": values.Introduction,
          "descriptions": values.descriptions,
          "Specifications": values.users,
          "Rate": values.rate,
          "Category": values.Categori,
          "Brand": values.Brand,
          "AvailableProduct": values.AvailableProduct,
          "Images" : image
        }
      }).then(res => {
        console.log(res)
        if (res.statusText === "OK") {
          success()
          setMethod("POST")
          setTextSuccess("محصول با موفقیت اضافه شد ")
        }
      })
    }else{
      Product_MainPageCont(`Product/${id}` , {
        method: methodPro,
        headers: {
          "Content-Type" : "application/json",
          "Access-Control-Allow-Origin" : "*"
        },
        data:{
          "Title": values.ProName,
          "Price": values.Price,
          "Introduction": values.Introduction,
          "descriptions": values.descriptions,
          "Specifications": values.users,
          "Rate": values.rate,
          "Category": values.Categori,
          "Brand": values.Brand,
          "AvailableProduct": values.AvailableProduct,
        }
      }).then(res => {
        console.log(res)
        if (res.statusText === "Created") {
          success()
          setMethod("POST")
          setTextSuccess("محصول با موفقیت اضافه شد ")
        }
      })
    }
  };
  return (
    <Form.Provider
      onFormFinish={(name, { values, forms }) => {
        if (name === 'userForm') {
          const { basicForm } = forms;
          const users = basicForm.getFieldValue('users') || [];
          basicForm.setFieldsValue({
            users: [...users, values],
          });
          setOpen(false);
        }
      }}
    >
      <Form
        {...layout}
        name="basicForm"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          label="نام محصول"
          name="ProName"
          
          rules={[{required: true, message: 'لطفا نام محصول را وارد کنید!' }]}
        >
        <Input defaultValue="" />
        </Form.Item>
        {contextHolder}
    <Form.Item
      label="قیمت"
      name="Price"
      rules={[{required: true, message: 'لطفا قیمت محصول را وارد کنید!' }]}
    >
      <InputNumber style={{ width: '100%' }} />
    </Form.Item>
    <input type="file" onChange={onImageChange} className="filetype" />
    <Form.Item
      label="معرفی کوتاه محصول"
      name="Introduction"
      // rules={[{ required: true, message: 'لطفا متن معرفی محطول را وارد کنید' }]}
    >
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      label="توضیحات"
      name="descriptions"
      rules={[{ required: true, message: 'لطفا توضیحات محصول را وارد کنید!' }]}
    >
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      label="دسته بندی"
      name="Categori"
      rules={[{ required: true, message: 'لطفا دسته بندی محصول را وارد کنید!' }]}
    >
      <Select
      style={{
        width: 120,
      }}
      options={[
        {
          value: 'مردانه',
          label: 'مردانه',
        },
        {
          value: 'زنانه',
          label: 'زنانه',
        },
        {
          value: 'بچه گانه',
          label: 'بچه گانه',
        },
      ]}
    />
      {/* <Input/> */}
    </Form.Item>
    <Form.Item
      label="وضعیت موجودی"
      name="AvailableProduct"
      rules={[{ required: true, message: 'لطغا موجودی محصول را مشخص کنید' }]}
    >

    <Select
      style={{
        width: 120,
      }}
      options={[
        {
          value: true,
          label: 'موجود',
        },
        {
          value: false,
          label: 'ناموجود',
        },
      ]}
    />
    </Form.Item>
    <Form.Item
      label="برند"
      name="Brand"
      rules={[{ required: true, message: 'لطفا برند محصول را وارد کنید!' }]}
    >
      <Select
      style={{
        width: 120,
      }}
      options={[
        {
          value: 'zara',
          label: 'zara',
        },
        {
          value: 'ferari',
          label: 'ferari',
        },
        {
          value: 'bmw',
          label: 'bmw',
        },
        {
          value: 'porsh',
          label: 'porsh',
        },
        {
          value: 'beneli',
          label: 'beneli',
        }
      ]}
    />
      {/* <Input/> */}
    </Form.Item>
    <Form.Item
      label="امتیاز محصول"
      name="rate"
      rules={[{ required: true, message: 'لطفا امتیاز محصول را وارد کنید!' }]}
    >
    <InputNumber min={1} max={5}  />
    </Form.Item>
        {/* Create a hidden field to make Form instance record this */}
        <Form.Item name="users" hidden />

        <Form.Item
          label="ویژگی ها"
          shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}
        >

          {({ getFieldValue }) => {
            const users = getFieldValue('users') || [];
            return users.length ? (
              <ul>
                {users.map((user) => (
                  <li key={user.name} className="user">
                    <Space>
                      <Avatar icon={<AppstoreAddOutlined />} />
                      {`${user.OptionTitle} - ${user.Option}`}
                    </Space>
                  </li>
                ))}
              </ul>
            ) : (
              <Typography.Text className="ant-form-text" type="secondary">
                (این محصول هنوز ویژگی نداره <SmileOutlined /> )
              </Typography.Text>
            );
          }}
        </Form.Item>
        <Form.Item {...tailLayout}>
        <Button
            htmlType="button"
            style={{
              margin: '0 8px',
            }}
            onClick={showUserModal}
          >
            افزودن ویژگی
          </Button>
          <Button className='btnSubAddPro' htmlType="submit" type="primary">
            ثبت مشخصات
          </Button>
        </Form.Item>
      </Form>

      <ModalForm open={open} onCancel={hideUserModal} />
    </Form.Provider>
  );
};
export default AddProduct;