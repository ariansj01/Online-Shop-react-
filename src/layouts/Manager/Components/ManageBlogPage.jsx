import React, { useState } from 'react'

const ManageBlogPage = () => {
    const [ImageFile, setImage] = useState([])
  const onImageChange = (event) => {
   if (event.target.files && event.target.files[0]) {
     setImage(URL.createObjectURL(event.target.files[0]));
     console.log(URL.createObjectURL(event.target.files));
   }
  }
  console.log(ImageFile)
//   Users_BlogPost('SinglePost/1' , {
//     method: Postmethod,
//     headers: {
//       "Content-Type" : "application/json",
//       "Access-Control-Allow-Origin" : "*"
//     },
//     data:{
//       "BottomSlideImg" : ImageFile
//     }
// }).then(res => {
//   if (res.status === 201) {
//     alert("عکس ها با موفقیت بارگذاری شدند")
//   }
// })
  return (
    <div>
        <h2>اسلایدر پایین صفحه</h2>
        <input onChange={onImageChange} type="file" multiple="multiple"  className="filetype" />
    </div>
  )
}

export default ManageBlogPage