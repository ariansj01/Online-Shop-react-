import React, { useEffect, useState } from 'react';
import { Select, Space } from 'antd';
import { CiLight , CiDark } from "react-icons/ci";
import '../assets/Styles/ChangeStyle.css'
const ChangeTheme = () => {
    let  [theme , setTheme] = useState("light")
    const handleChange = (value) => {
        if(value === 'light'){
            document.body.classList.remove('dark')
            document.body.classList.add('light')
        }else{
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        }
    setTheme(value === 'light' ? 'dark' : 'light' )
    };
    useEffect(() => {
        if(theme === 'light'){
            document.body.classList.remove('dark')
            document.body.classList.add('light')
        }else{
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        }
    } , [])

    return(
  <div className="SelectOP">
    <Space wrap>
        <Select
        className='SelectOPTChange SelectOPTChangeTheme'
        defaultValue="light"
        style={{
            
        }}
        onChange={handleChange}
        options={[
            {
            value: 'light',
            label: <CiLight/>,
            },
            {
            value: 'dark',
            label: <CiDark/>,
            },
        ]}
        />
    </Space>
  </div>
)};
export default ChangeTheme;
