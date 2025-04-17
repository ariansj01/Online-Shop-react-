import axios from "axios";

// const FNGetData = () => {
//   axios.get("https://66101a360640280f219c4b1b.mockapi.io/MainPageContent")
//   .then(response => {response.data.map(i => console.log(i.Images)) })
//   // let res = GetData()
// }

// useEffect(() => {
//   FNGetData()
// },[])


// export const GetData = (TableName) => {
//   axios("https://66101a360640280f219c4b1b.mockapi.io/MainPageContent")
//     // .then(response => {response.data.map(i => i.{TableName}) })
// }

export const GetData = axios.create({
  baseURL:"https://66101a360640280f219c4b1b.mockapi.io/MainPageContent"
})
export const Users_SinglePost = axios.create({
  baseURL:"https://6512bc96b8c6ce52b3961d8e.mockapi.io/"
})
export const Product_MainPageCont = axios.create({
  baseURL:"https://66101a360640280f219c4b1b.mockapi.io/"
})
export const Users_BlogPost = axios.create({
  baseURL:"https://6512bc96b8c6ce52b3961d8e.mockapi.io/"
})
export const Ticket_BlogPageContent = axios.create({
  baseURL:"https://6617a8b4ed6b8fa434835c65.mockapi.io/"
})
export const MainPageImage = axios.create({
  baseURL:"https://6638fd5e4253a866a24fe8c1.mockapi.io/"
})
export const Comment = axios.create({
  baseURL:"https://66706d580900b5f8724a9e98.mockapi.io/"
})


