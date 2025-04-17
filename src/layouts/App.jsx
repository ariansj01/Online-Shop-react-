import React, { useEffect , useState } from 'react'
import Header from '../views/MainPage/Header'
import Footer from '../views/MainPage/Footer'
import MainPageContent from '../views/MainPage/MainPageContent'
import axios from 'axios'
import AppRouter from '../Routers/AppRouter'
import Blog from '../views/AnotherPage/Blog'
import InterestedProduct from '../views/AnotherPage/InterestedProduct'
import Comparison from '../views/AnotherPage/Comparison'
import UserSlide from './SlideBars/UserSlide'
import { ContextApiItem } from '../Context/Context'
import MainPageUS from './SlideBars/MainPageUS'
import MainDashboard from './Manager/MainDashboard'
import ProductPage from '../views/AnotherPage/ProductPage'
import { Product_MainPageCont } from '../Services/http-request'
// import { RouterProvider } from 'react-router-dom'

const App = () => {

  // const [APIdata , setAPIdata] = useState()
  const [HeadUserDash , setHeadUserDash] = useState('/Login')
  const [ProductIdIntrested , setProductIdIntrested] = useState([])
  const [ProductCpmparison, setProductCpmparison] = useState([])
  const [BasketProduct, setBasketProduct] = useState([])
  let [Tickets , setTickets] = useState(0);
  const [id , setId] = useState()
  const [methodPro , setMethod] = useState("POST")
  const [textSuccess , setTextSuccess] = useState("محصول با موفقیت اضافه شد ")
  const [IdPost , setIdPost] = useState()
  const [Postmethod , setPostMethod] = useState("POST")
  const [PostMsgSuccess , setPostMsgSuccess] = useState("پست شما با موفقیت درج شد")
  const [SinglePostData , setSinglePostData] = useState()
  const [BasketCount , setBasketCount] = useState(0)
  const [ContentPageProduct , setContentPageProduct] = useState([])
  const [UserTicketId , setUserTicketId] = useState()
  const [ProId , setProId] = useState()
  const [SellPro , setSellPro] = useState([])

  const [ImgData , setImgData] = useState([])
  async function GetData() {
    await Product_MainPageCont('MainPageContent' , {
      method:"GET"
    }).then(res => {
      setImgData(res.data)
      console.log(res.data)
    })
  }
  useEffect(() => {
    GetData()
    },[])
  console.log(ImgData)
  
  // async function FNGetData(){
  //   await axios("https://6638fd5e4253a866a24fe8c1.mockapi.io/MainPageImage", {
  //     method:"GET"
  //     // headers:"application"
  //   })
  //   .then(response => {setAPIdata(response.data[0])})
  // }
  
  // useEffect(() => {
  //   FNGetData()
  // },[])

  // return ( <RouterProvider router={RoutersApp} /> )

  return (
    <>
      {/* <RouterProvider router={AppRouter} /> */}
      {/* <Header Menus={APIdata.HeaderMenu} ContentLogo={APIdata.ContentLogo} Logo={APIdata.Logo} /> */}
      {/* <Blog/> */}
      {/* <InterestedProduct/> */}
      {/* <Comparison/> */}
      {/* <Header/> */}
      <ContextApiItem.Provider value={{ImgData: ImgData , setImgData:setImgData , SellPro:SellPro , setSellPro : setSellPro , ProId :ProId , setProId:setProId , UserTicketId:UserTicketId , setUserTicketId : setUserTicketId , setContentPageProduct : setContentPageProduct , ContentPageProduct: ContentPageProduct , BasketCount:BasketCount , setBasketCount:setBasketCount , BasketProduct : BasketProduct , setBasketProduct:setBasketProduct , SinglePostData:SinglePostData , setSinglePostData:setSinglePostData, PostMsgSuccess:PostMsgSuccess , setPostMsgSuccess:setPostMsgSuccess , IdPost:IdPost , setIdPost:setIdPost , Postmethod:Postmethod , setPostMethod:setPostMethod , setTextSuccess:setTextSuccess,textSuccess:textSuccess , setMethod : setMethod , methodPro : methodPro , id : id ,setId : setId , Tickets:Tickets , setTickets:setTickets , setProductCpmparison:setProductCpmparison  , ProductCpmparison:ProductCpmparison , ProductIdIntrested:ProductIdIntrested , setProductIdIntrested : setProductIdIntrested , HeadUserDash : HeadUserDash , setHeadUserDash : setHeadUserDash }}  >
      <AppRouter/>
      </ContextApiItem.Provider>
      {/* <ProductPage/> */}
      {/* <MainPageContent/> */}
      {/* <UserSlide/> */}
      {/* <Footer/> */}
       {/* <ContextApiItem.Provider value={{id: id , APIdata : APIdata , HeadUserDash : HeadUserDash , setHeadUserDash : setHeadUserDash }}  > */}
        {/* <MainDashboard/> */}
      {/* </ContextApiItem.Provider> */}
    </>
  )
}

export default App