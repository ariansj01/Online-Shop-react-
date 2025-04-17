import React, { useContext, useEffect, useState } from 'react'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { FaShoppingBasket } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import { Avatar, Card , Empty  } from 'antd';
// import { Product_MainPageCont } from '../../Services/http-request';
import '../../assets/Styles/interest.css'
import { ContextApiItem } from '../../Context/Context';
const { Meta } = Card;
const IntrestUserProduct = () => {
  const {ProductIdIntrested} = useContext(ContextApiItem)
  const [IntrestDataItem , setIntrestDataItem] = useState([])

  console.log(ProductIdIntrested)
  //   async function GetData() {
  //     await Product_MainPageCont(`Product/${ProductIdIntrested}`).then(res => setIntrestDataItem(res.data))
  // }

  // useEffect(() => {
  //   GetData() 
  // } , [])
 
  return (
    <>
      {
        // <Empty/>
      }
      <div className='ContainerIntrestedProduct row'>
        {
          ProductIdIntrested.map(item => (
            <div className="col">
              <Card
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <BsArrowLeftRight key="moghayese" />,
              <FaShoppingBasket key="basket" />,
              <DeleteOutlined key="delete" />,
              <EyeOutlined key="showPro" />
              
            ]}
          >
            <Meta
              // avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
              title={item.Title}
              description={item.Introduction}
            />
              </Card>
          </div>
         ))
        }
        {
        }
      </div>
    </>
  );
}

export default IntrestUserProduct