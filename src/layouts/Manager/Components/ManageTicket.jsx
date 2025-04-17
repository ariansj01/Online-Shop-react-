import React, { useEffect, useState } from 'react'
import {Button, Drawer, Input, Alert, Space } from 'antd';
const { TextArea } = Input;
import '../../../assets/Styles/ManageTicket.css'
import { Ticket_BlogPageContent } from '../../../Services/http-request';

const ManageTicket = () => {
    const [open, setOpen] = useState(false);
    const [Data, setData] = useState([]);
    const [TicketId, setTicketId] = useState();
    const [Answer, setAnswer] = useState();

    const GetData = () => {
        Ticket_BlogPageContent('Ticket' , {
            method:"GET"
        }).then(res => setData(res.data))
    }

    useEffect(() => {
        GetData()
    } , [])

    const showDrawer = (id) => {
        setOpen(true);
        setTicketId(id)
    };
    const onClose = () => {
        setOpen(false);
    };
    const SendTicket = () => {
        Ticket_BlogPageContent(`Ticket/${TicketId}` , {
        method:'PUT',
        data:{
            "Answer" : Answer
            }
        }).then(res => {
            if (res.status === 200) {
                alert("تیکت ارسال شد")
                setOpen(false);
            }
        })
    };

  return (
    <div>
        {
        Data.map(item => (
            <Space
                direction="vertical"
                style={{
                width: '45%',
                border:'1px solid gray',
                padding:'10px',
                borderRadius:'10px',
                margin:'5px'
                }}
                >
                <Alert
                message={item.Title}
                description={item.Text}
                type="info"
                />
                <Alert
                message= 'پاسخ'
                description={item.Answer}
                type="success"
                />
                <Button type="primary" onClick={() =>  showDrawer(item.id)}>پاسخ تیکت</Button>
            </Space>
        ))
    }

    <Drawer
    title="پاسخ تیکت"
    placement= "bottom"
    closable={false}
    onClose={onClose}
    open={open}
    key= "bottom"
    >
        <TextArea onChange={(e) => setAnswer(e.target.value)} style={{marginBottom:"10px"}} rows={6} />
        <Space>
            <Button type="primary" onClick={SendTicket}>ثبت</Button>
        </Space>
    </Drawer>
    </div>
  )
}

export default ManageTicket