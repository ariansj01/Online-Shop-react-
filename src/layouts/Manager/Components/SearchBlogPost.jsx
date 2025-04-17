import React, { useContext, useEffect, useState } from 'react'
import '../../../assets/Styles/SearchProduct.css'
import { Users_BlogPost } from '../../../Services/http-request'
import { useNavigate } from 'react-router-dom'
import { ContextApiItem } from '../../../Context/Context'
import { Button, Modal } from 'antd';
import '../../../assets/Styles/SearchBlogPost.css'
const SearchBlogPost = () => {
    let {setPostMethod  ,  setIdPost , setPostMsgSuccess} = useContext(ContextApiItem)
    let [data , setData] = useState([])
    let navigate = useNavigate()
    const {setTextSuccess , setId , setMethod} = useContext(ContextApiItem)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    function GeaData() {
        Users_BlogPost("SinglePost" , {
            method:"GET",
        }).then(response => {
            setData(response.data)
            console.log(data)
        })
    }
    useEffect(() => {
        GeaData()
      },[])

      const EditHandler = (id) => {
        setIdPost(id)
        setPostMethod("PUT")
        setPostMsgSuccess('پست شما باموفقیت ویرایش شد')
        navigate("/Admin_Dashboard/addBlog")
      }

      const DeleteHandler = (id) => {
        console.log(id)
        Users_BlogPost(`SinglePost/${id}` , {
            method:"DELETE",
        }).then(res => console.log(res))
      }
  return (
    <div>
        <div className="Postcards">
        {
            data.map(item => (
                <div class="Postcard">
                    <h2>{item.Main_Title}</h2>
                    <p>نویسنده : {item.Author}</p>
                    <div className="AboutPost">
                        <span>زمان مطالعه : {item.ReadTime}</span>
                        <span>تازیخ پست : {item.DateAdd}</span>
                        <span>دسته بندی : {item.Category}</span>
                    </div>
                    <Button type="primary" onClick={showModal}>نمایش متن پست</Button>
                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk}>
                        <p><b>خلاصه</b> : {item.Summery}</p>
                        <p><b>متن اصلی</b> : {item.Text}</p>
                    </Modal>
                <div className="Postbtn">
                    <button onClick={() => EditHandler(item.id)}  class="btn btn-primary">Edit</button>
                    <button onClick={() => DeleteHandler(item.id)} class="btn btn-danger">Delete</button>
                </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}
export default SearchBlogPost;