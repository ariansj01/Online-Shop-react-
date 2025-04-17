import React, { useContext, useEffect, useState } from 'react'
import '../../../assets/Styles/SearchProduct.css'
import { Product_MainPageCont } from '../../../Services/http-request'
import { useNavigate } from 'react-router-dom'
import { ContextApiItem } from '../../../Context/Context'

const SearchProduct = () => {
    let [data , setData] = useState([])
    let navigate = useNavigate()
    const {setTextSuccess , setId , setMethod} = useContext(ContextApiItem)
    function GeaData() {
        Product_MainPageCont("Product" , {
            method:"GET",
        }).then(response => {
            setData(response.data)
        })
    }
    useEffect(() => {
        GeaData()
      },[GeaData()])

      const EditHandler = (id) => {
        setId(id)
        setMethod("PUT")
        setTextSuccess("محصول مورد نظر با موفقیت ویرایش شد.")
        navigate("/Admin_Dashboard/AddProduct")
      }

      const DeleteHandler = (id) => {
        console.log(id)
        Product_MainPageCont(`Product/${id}` , {
            method:"DELETE",
        }).then(res => console.log(res))
      }
  return (
    <div>
        <div className="cards">
        {
            data.map(item => (
                <div class="card">
                    <h3>عنوان:  {item.Title}</h3>
                    <p>معرفی کوتاه محصول : {item.Introduction}</p>
                    <p>توضیحات : {item.descriptions}</p>
                    <p>قیمت : {item.Price} تومان</p>
                    <div className="Options">
                        {
                            item.Specifications.map(i => (
                                <div className='OptionPro'>
                                <p>عنوان ویژگی : {i.OptionTitle}</p>
                                <p>ویژگی : {i.Option}</p>
                                </div>
                            ))
                        }
                </div>
                <div className="btnSP">
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

export default SearchProduct