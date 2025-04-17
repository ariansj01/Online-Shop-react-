import React, { useEffect, useState } from 'react'
import { Users_SinglePost } from '../../../Services/http-request'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { Button, Modal } from 'antd';
import { Alert } from 'antd';
import '../../../assets/Styles/SearchUser.css'
import { useNavigate } from 'react-router-dom';
const SearchUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Name, setName] = useState();
  const [UserName, setUserName] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [Password, setPassword] = useState();
  const [id, setId] = useState();
  const [alertStyle, setalertStyle] = useState('none');
  

  const showModal = (id) => {
    setIsModalOpen(true);
    // console.log(id)
    setId(id)
  };
  const handleOk = () => {
    Users_SinglePost(`Users/${id}` , {
          method:"PUT",
          headers: {
            "Content-Type" : "application/json",
            "Access-Control-Allow-Origin" : "*"
          },
          data:{
            "UserName": UserName,
            "Name": Name,
            "Email": Email,
            "Phone": Phone,
            "Password": Password
          }
      }).then(res => {
        setIsModalOpen(false);
        setalertStyle('block')
        if (res.status === 200 ) {
          setTimeout(() => {
            setalertStyle('none')
          }, 5000);
        }
      })
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
    let [DataItem , setDataItem] = useState([])
    let [loaderStyle , setLoaderStyle] = useState('none')
    useEffect(() => {
      Users_SinglePost("Users" , {
          method:"GET",
      }).then(response => {
          setDataItem(response.data)
      })
    },[])

    const DeleteHandler = (id) => {
      Users_SinglePost(`Users/${id}` , {
        method:"DELETE",
    }).then(res => console.log(res))
    setLoaderStyle('block')
      setTimeout(() => {
        setLoaderStyle('none')
        // useNavigate()
      }, 3000);
    }
  return (
    <div className='UserCarts'>
      <Alert style={{display:alertStyle}} className='alertUser' message={`${Name} عزیز با موفقیت انجام شد`} type="success" />
      <div className="ParentLoader" style={{display:loaderStyle}}>
      <div class="loader"></div>
      </div>
      {
        DataItem.map(item => (
            <div className="Usercart">
                <div className="avatar">
                <Space wrap size={16}>
                  <Avatar size={64} icon={<UserOutlined />} />
                </Space>
                </div>
                <div className="Content">
                    <h2>نام : {item.Name}</h2>
                    <p>نام کاربری : {item.UserName}</p>
                    <p>ایمیل : {item.Email}</p>
                    <p>تلفن : {item.Phone}</p>
                    <p>پسورد : {item.Password}</p>
                    <div className="btnUser">
                    <Button className='UserbtnEdit' type="primary" onClick={()=> showModal(item.id)}>ویرایش</Button>
                    <Modal title="ویرایش اطلاعات" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                      <div className="EditInput">
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder='نام' />
                        <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder='نام کاربری' />
                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='ایمیل' />
                        <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder='تلفن همراه' />
                        <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='پسورد' />
                      </div>
                    </Modal>
                      <button className='UserbtnDelete' onClick={() => DeleteHandler(item.id)} >حذف</button>
                    </div>
                </div>
                
            </div>
        ))
      }
    </div>
  );
};

export default SearchUser
