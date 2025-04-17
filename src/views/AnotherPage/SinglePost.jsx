import React, { useContext, useEffect, useState } from 'react'
import { Users_SinglePost } from '../../Services/http-request'
import ronaldo from '../../assets/images/ronaldo.jpg'
import picPost from '../../assets/images/picPost.jpg'

import { IoCalendarOutline } from "react-icons/io5";
import { TbCategory , TbUserEdit } from "react-icons/tb";

import '../../assets/Styles/SinglePost.css'
import { ContextApiItem } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

const SinglePost = () => {
    let [DataItem , setDataItem] = useState([])
    const {SinglePostData , setSinglePostData} = useContext(ContextApiItem)
    let FillterPost = []
    async function GetData() {
      await Users_SinglePost("SinglePost").then(res => setDataItem(res.data))
    }
    useEffect(() => {
        GetData()
    } , [])
    console.log(DataItem)
    DataItem.map(item => {
    if (item.DateAdd.split(' ')[4].split(':')[2] > 20) {
        FillterPost.push(item)
    }
    })
    // console.log(SinglePostData)
    // console.log(DataItem.DateAdd.split(' ')[0])
    let navigate = useNavigate()
    const ActionBack = () => {
        navigate('/Blog')
    }
    const ActionDataSinglePost = (product) => {
            setSinglePostData(product)
            // navigate('/SinglePost')
      }
  return (
    <div className='Container'>
            {/* {
                DataItem.map(item => (
                    <div className="MainContent">
                        <div className="title">{item.Main_Title}</div>
                        <div className="pic"></div>
                        <div className="summery"></div>
                        <div className="text"></div>
                    </div>
                ))
            } */}
            
            <div className="MainContent">
                <div className="title">
                    <p>{SinglePostData.Main_Title}</p>
                    <button onClick={ActionBack}>بازگشت به صفحه بلاگ</button>
                </div>
                <div className="pic">
                    <img src={SinglePostData.Image} alt="" />
                    <div className="aboutPost">
                        <p><TbUserEdit/> توسط : {SinglePostData.Author}</p>
                        <p> <IoCalendarOutline/> تاریخ انتشار : {SinglePostData.DateAdd.split(' ')[1]} / {SinglePostData.DateAdd.split(' ')[2]} / {SinglePostData.DateAdd.split(' ')[3]} </p>
                        <p><TbCategory/> {SinglePostData.Category}</p>
                    </div>
                </div>
                <div className="summery">
                    <h3>چکیده مقاله</h3>
                    {SinglePostData.Summery}</div>
                    <br />

                    <img className='rounded-4 my-4' width='70%' src={SinglePostData.Image} alt="" />
                    <br />
                    <div className="text">{SinglePostData.Text}</div>
            </div>
            <div className="lastPost">
                <h5>پست های اخیر</h5>
                {
                    FillterPost.map(item => (
                        <div className="cartLastpost">
                            <div className="img">
                                <img src={item.Image} alt="" />
                            </div>
                            <div className="parentContentLastPost">
                            <div className="contentLastPost">
                                <p>{item.Main_Title}</p>
                                <div className="aboutPost">
                                <p><TbUserEdit/> توسط : {item.Author}</p>
                                <p> <IoCalendarOutline/> تاریخ انتشار : {item.DateAdd.split(' ')[1]} / {SinglePostData.DateAdd.split(' ')[2]} / {SinglePostData.DateAdd.split(' ')[3]} </p>
                                <p><TbCategory/> {item.Category}</p>
                                </div>
                                {/* <small> <IoCalendarOutline/> تاریخ انتشار : {DataItem.DateAdd.split(' ')[1]} / {DataItem.DateAdd.split(' ')[2]} / {DataItem.DateAdd.split(' ')[3]} </small> */}
                            </div>
                                <button className='btnShowPost' onClick={() => ActionDataSinglePost(item)} >مشاهده</button>
                            </div>
                        </div>
                    ))
                }
            </div>

    </div>
  )
}

export default SinglePost