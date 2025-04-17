import React, { useContext, useEffect, useState } from 'react'
import { Button, Flex, Input, Drawer, Alert, Space } from 'antd';
import axios from 'axios';
const { TextArea } = Input;
// import { Alert,  } from 'antd';
import { ContextApiItem } from '../../Context/Context';
import { Ticket_BlogPageContent } from '../../Services/http-request';
import { json } from 'react-router-dom';
import '../../assets/Styles/TicketUser.css'
const TicketUser = () => {
  const {UserTicketId , setUserTicketId , Tickets,setTickets} = useContext(ContextApiItem)

  // let [ticketId , setTicketId] = useState()
  let [AnswerText , setAnswerText] = useState()
  let BaseURL = "https://6617a8b4ed6b8fa434835c65.mockapi.io/Ticket";
  const [title , setTitle] = useState()
  const [text , setText] = useState()
  const [Data , setData] = useState([])
  let UserId = +JSON.parse(localStorage.getItem("userId"))
    const ClickHandler = (e) => {
      axios(BaseURL, {
        method:"POST",
        data:{
          "Title": title,
          "Text": text,
          "UserId" : UserId
        }
      }).then(res => {
        if (res.status === 201) {
          alert("تیکت ارسال شد")
          setTickets(Tickets+1);
          // localStorage.setItem("ticketId" , JSON.stringify(res.data.id))
        }
      })
      
    };
    let fillterAnswer = []
    const GetData = async () => {
      await Ticket_BlogPageContent('Ticket' , {
        method:"GET"
      }).then(res => {
        res.data.map(item => fillterAnswer.push(item))
        // fillterAnswer.map(i => console.log(i.UserId))
        // setUserTicketId(11)
        // let id = localStorage.getItem('userId')
        // console.log(+JSON.parse(id))
        fillterAnswer = fillterAnswer.filter(i => i.UserId === UserId)
        setData(fillterAnswer)
      })
      // Data.map(item => {
      // })
  }
  useEffect(() => {
      GetData()
      console.log(UserTicketId)
      console.log(Data)
  } , [])

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    const onChange = (e) => {
      setPlacement(e.target.value);
    };
    // const handleFileSelected = (e) => {
    //   const files = Array.from(e.target.files)
    //   console.log("files:", e.target.files)
    // }
  return (
    <div>
      <>
      {/* <input type="file" onChange={(e) => handleFileSelected(e)} name="" id="" /> */}
        <Flex vertical gap={32}>
            <Input showCount maxLength={30} onChange={(e) => {setTitle(e.target.value)}} />
            <TextArea
            showCount
            maxLength={300}
            onChange={(e) => {setText(e.target.value)}}
            placeholder="متن خود را وارد کنید..."
            style={{
                height: 120,
                resize: 'none',
            }}
            />
        </Flex>
        <Button className='btnSub my-3' onClick={ClickHandler} type="primary">ثبت تیکت</Button>
        <Button style={{marginTop:"10px"}} type="primary" onClick={showDrawer}>مشاهده پاسخ تیکت ها</Button>
        <Drawer
          title="پاسخ تیکت"
          placement="bottom"
          closable={false}
          onClose={onClose}
          open={open}
          key="bottom"
        >
          {
            Data.map(item => (
              <Space
              direction="vertical"
              style={{
                width: '100%',
                marginBottom:"10px"
              }}
            >
              <Alert
                message={item.Title}
                description={item.Answer}
                type="success"
              />
              </Space>
            ))
          }
        </Drawer>
      </>
    </div>
  )
}

export default TicketUser