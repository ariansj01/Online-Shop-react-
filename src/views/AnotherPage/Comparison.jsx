import React, { useContext, useState } from 'react';
import { Table } from 'antd';
import Header from '../MainPage/Header';
import Footer from '../MainPage/Footer';
import { ContextApiItem } from '../../Context/Context';
import '../../assets/Styles/Comparison.css'
const Comparison = () => {
  const {ProductCpmparison , setProductCpmparison} = useContext(ContextApiItem)
  // const [name , setName] = useState()
  console.log(ProductCpmparison)
  const DeleteProduct = (product) => {
    const ProductCpmparisonState = [...ProductCpmparison]
    const ProdIndex = ProductCpmparison.findIndex(item => item.id === product.id)
    ProductCpmparisonState.splice(ProdIndex , 1)
    setProductCpmparison(ProductCpmparisonState)
  }
  return(
  <>
  <Header/>
  <table class="table table-hover">
  <thead className='bg-secondary' >
    <tr>
      <th scope="col">تصویر محصول</th>
      <th scope="col">نام محصول</th>
      <th scope="col">قیمت</th>
      <th scope="col">ویژگی ها</th>
      <th scope="col">دسته بندی</th>
      <th scope="col">توضیح کوتاه</th>
      <th scope="col">توضیحات</th>
      <th scope="col">حذف</th>
    </tr>
  </thead>
  <tbody>
    {
        ProductCpmparison.map(item => (
        <tr>
          <td><img src={item.Images[0]} width='100px' alt="" /></td>
          <td>{item.Title}</td>
          <td>{item.Price}</td>
          <td>{item.Price}</td>
          {/* <td>{item.Specifications.map(i => i.OptionTitle , i.Option)}</td> */}
          <td>{item.Category}</td>
          <td>{item.Introduction}</td>
          <td>{item.descriptions}</td>
          <td><button onClick={() => DeleteProduct(item)} >حذف آیتم</button></td>
        </tr>
        ))
    }
  </tbody>
</table>
  <Footer/>
  </>
);
}
export default Comparison;