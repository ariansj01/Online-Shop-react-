import React, { useEffect, useState } from 'react'
import { MainPageImage } from '../../../Services/http-request'
import { Button, message, Space } from 'antd';
import '../../../assets/Styles/ManageImage.css'

const ManageImage = () => {
    let [data , setData] = useState([])
    async function GeaData() {
        await Product_MainPageCont("MainPageContent" , {
            method:"GET",
        }).then(response => {
            setData(response.data)
        })
    }
    useEffect(() => {
        GeaData()
        console.log(data)
      },[])
      let LeftSliderImage;
  let TopPageSecBottomRight;
  let TopPageSecBottomcenter;
  let TopPageSecBottomLeft;
  let BottomAmazingChoiseLeft;
  let BottomAmazingChoiseCenter;
  let BottomAmazingChoiseRight;
  let MainPageAboutUsImage;
  data.map(item => {
    LeftSliderImage = item.LeftSliderImage
    TopPageSecBottomRight = item.TopPageSecBottomRight
    TopPageSecBottomcenter = item.TopPageSecBottomcenter
    TopPageSecBottomLeft = item.TopPageSecBottomLeft
    BottomAmazingChoiseLeft = item.BottomAmazingChoiseLeft
    BottomAmazingChoiseCenter = item.BottomAmazingChoiseCenter
    BottomAmazingChoiseRight = item.BottomAmazingChoiseRight
    MainPageAboutUsImage = item.MainPageAboutUsImage
    // item.SliderImage.map(i => console.log(i))
  })
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'عکس های مورد نظر با موفقیت ویرایش شد.',
    });
  };

  const [image, setImage] = useState(LeftSliderImage)
  const onImageChange1 = (event) => {
   if (event.target.files && event.target.files[0]) {
     setImage(URL.createObjectURL(event.target.files[0]));
   }
  }
  const [image2, setImage2] = useState(TopPageSecBottomRight)
  const onImageChange2 = (event) => {
   if (event.target.files && event.target.files[0]) {
     setImage2(URL.createObjectURL(event.target.files[0]));
   }
  }
  const [image3, setImage3] = useState(TopPageSecBottomcenter)
  const onImageChange3 = (event) => {
   if (event.target.files && event.target.files[0]) {
     setImage3(URL.createObjectURL(event.target.files[0]));
   }
  }
  const [image4, setImage4] = useState(TopPageSecBottomLeft)
  const onImageChange4 = (event) => {
   if (event.target.files && event.target.files[0]) {
     setImage4(URL.createObjectURL(event.target.files[0]));
   }
  }
  const [image5, setImage5] = useState(BottomAmazingChoiseLeft)
  const onImageChange5 = (event) => {
   if (event.target.files && event.target.files[0]) {
     setImage5(URL.createObjectURL(event.target.files[0]));
   }
  }
  const [image6, setImage6] = useState(BottomAmazingChoiseCenter)
  const onImageChange6 = (event) => {
   if (event.target.files && event.target.files[0]) {
     setImage6(URL.createObjectURL(event.target.files[0]));
   }
  }
  const [image7, setImage7] = useState(BottomAmazingChoiseRight)
  const onImageChange7 = (event) => {
   if (event.target.files && event.target.files[0]) {
     setImage7(URL.createObjectURL(event.target.files[0]));
   }
  }
  const [image8, setImage8] = useState(MainPageAboutUsImage)
  const onImageChange8 = (event) => {
   if (event.target.files && event.target.files[0]) {
     setImage8(URL.createObjectURL(event.target.files[0]));
   }
  }
 
  const ClickHandler = async () => {
    await Product_MainPageCont("MainPageContent/1" , {
        method:"PUT",
        headers: {
            "Content-Type" : "application/json",
            "Access-Control-Allow-Origin" : "*"
        },
        data:{
            "LeftSliderImage": image,
            "TopPageSecBottomLeft": image2,
            "TopPageSecBottomcenter": image3,
            "TopPageSecBottomRight": image4,
            "BottomAmazingChoiseLeft": image5,
            "BottomAmazingChoiseCenter": image6,
            "BottomAmazingChoiseRight": image7,
            "MainPageAboutUsImage": image8,
        }
    }).then(response => {
        console.log(response)
        if (response.status === 200) {
            success()
          }
    })
  }
  return (
    <div>
        {contextHolder}
        <div className="MGimg">
            <div className="">
                <p>عکس جدید</p>
                <input onChange={onImageChange1} type="file" name="" id="" />
            </div>
            <div className="">
                <p>عکس فعلی</p>
                <img src={LeftSliderImage} alt="" />
            </div>
        </div>

        <div className="MGimg">
            <div className="">
                <p>عکس جدید</p>
                <input onChange={onImageChange2} type="file" name="" id="" />
            </div>
            <div className="">
                <p>عکس فعلی</p>
                <img src={TopPageSecBottomLeft} alt="" />
            </div>
        </div>

        <div className="MGimg">
            <div className="">
                <p>عکس جدید</p>
                <input onChange={onImageChange3} type="file" name="" id="" />
            </div>
            <div className="">
                <p>عکس فعلی</p>
                <img src={TopPageSecBottomcenter} alt="" />
            </div>
        </div>

        <div className="MGimg">
            <div className="">
                <p>عکس جدید</p>
                <input onChange={onImageChange4} type="file" name="" id="" />
            </div>
            <div className="">
                <p>عکس فعلی</p>
                <img src={TopPageSecBottomRight} alt="" />
            </div>
        </div>
        <div className="MGimg">
            <div className="">
                <p>عکس جدید</p>
                <input onChange={onImageChange5} type="file" name="" id="" />
            </div>
            <div className="">
                <p>عکس فعلی</p>
                <img src={BottomAmazingChoiseLeft} alt="" />
            </div>
        </div>
        <div className="MGimg">
            <div className="">
                <p>عکس جدید</p>
                <input onChange={onImageChange6} type="file" name="" id="" />
            </div>
            <div className="">
                <p>عکس فعلی</p>
                <img src={BottomAmazingChoiseCenter} alt="" />
            </div>
        </div>
        <div className="MGimg">
            <div className="">
                <p>عکس جدید</p>
                <input onChange={onImageChange7} type="file" name="" id="" />
            </div>
            <div className="">
                <p>عکس فعلی</p>
                <img src={BottomAmazingChoiseRight} alt="" />
            </div>
        </div>
        <div className="MGimg">
            <div className="">
                <p>عکس جدید</p>
                <input onChange={onImageChange8} type="file" name="" id="" />
            </div>
            <div className="">
                <p>عکس فعلی</p>
                <img src={MainPageAboutUsImage} alt="" />
            </div>
        </div>
        <button onClick={ClickHandler} >ثبت تغییرات</button>
    </div>
  )
}

export default ManageImage