import React from 'react'
// import { Routes , Route } from 'react-router-dom'
import { createBrowserRouter , Routes , Route } from 'react-router-dom'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import Header from '../views/MainPage/Header'
import App from '../layouts/App'
import Blog from '../views/AnotherPage/Blog'
import MainPageContent from '../views/MainPage/MainPageContent'
import Comparison from '../views/AnotherPage/Comparison'
import InterestedProduct from '../views/AnotherPage/InterestedProduct'
import UserSlide from '../layouts/SlideBars/UserSlide'
import MainDashboard from '../layouts/Manager/MainDashboard'
import SearchUser from '../layouts/Manager/Components/SearchUser'
import AddProduct from '../layouts/Manager/Components/AddProduct'
import SearchProduct from '../layouts/Manager/Components/SearchProduct'
import AddBlogPost from '../layouts/Manager/Components/AddBlogPost'
import SearchBlogPost from '../layouts/Manager/Components/SearchBlogPost'
import Shop from '../views/AnotherPage/Shop'
import EditUser from '../layouts/SlideBars/EditUser'
import TicketUser from '../layouts/SlideBars/TicketUser'
import MainPageUS from '../layouts/SlideBars/MainPageUS'
import IntrestUserProduct from '../layouts/SlideBars/IntrestUserProduct'
import SinglePost from '../views/AnotherPage/SinglePost'
import Basket from '../views/AnotherPage/Basket'
import ProductPage from '../views/AnotherPage/ProductPage'
import MainPageUserDash from '../layouts/Manager/Components/MainPageUserDash'
import ManageTicket from '../layouts/Manager/Components/ManageTicket'
import SellPro from '../layouts/Manager/Components/SellPro'
import ManageImage from '../layouts/Manager/Components/ManageImage'
import ManageBlogPage from '../layouts/Manager/Components/ManageBlogPage'
import Page404 from '../views/AnotherPage/Page404'
// const AppRouter = createBrowserRouter([
//   {
//     path : '/',
//     element : <Header/>,
//     children : [
//       {
//         path : '/Login',
//         element : <Login/>
//       },
//       {
//         path : '/Register',
//         element : <Register/>
//       },
//     ]
//   }
// ])

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPageContent/>} />
      <Route path='*' element={<Page404/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/Blog' element={<Blog/>} />
      <Route path='/Bsket' element={<Basket/>} />
      <Route path='/SinglePost' element={<SinglePost/>} />
      <Route path='/Comparison' element={<Comparison/>} />
      <Route path='/Interest' element={<InterestedProduct/>}/>
      <Route path='/Shop' element={<Shop/>} />
      <Route path='/ProductPage' element={<ProductPage/>} />
      <Route path='/Dashboard_User' element={<UserSlide/>} >
        <Route path='MainPage' element={<MainPageUS/>} />
        <Route path='Intrest' element={<IntrestUserProduct/>} />
        <Route path='Buying' element={<MainPageUS/>} />
        <Route path='Edit' element={<EditUser/>} />
        <Route path='Ticket' element={<TicketUser/>} />
      </Route>
      <Route path='/Admin_Dashboard' element={<MainDashboard/>} >
        <Route path='Main' element={<MainPageUserDash/>} />
        <Route path='Sell' element={<SellPro/>} />
        <Route path='ManageImage' element={<ManageImage/>} />
        <Route path='ManageTicket' element={<ManageTicket/>} />
        <Route path='addBlog' element={<AddBlogPost/>} />
        <Route path='addProduct' element={<AddProduct/>} />
        <Route path='searchBlog' element={<SearchBlogPost/>} />
        <Route path='ManageBlog' element={<ManageBlogPage/>} />
        <Route path='searchProduct' element={<SearchProduct/>} />
        <Route path='searchUser' element={<SearchUser/>} />
        <Route path='slideImg' element={<SearchUser/>} />
      </Route>
    </Routes>
  )
}

export default AppRouter