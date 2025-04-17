import React from 'react';
import { Select, Space } from 'antd';
import i18n from '../Services/i18n';
import '../assets/Styles/ChangeStyle.css'
const handleChange = (value) => {
  let language = value
  i18n.changeLanguage(language)
  document.dir = language === "fa" ? "rtl" : "ltr"
};

const ChangeLang = () => (
  <div className="SelectOP">
    <Space wrap>
        <Select
        className='SelectOPTChange SelectOPTChangeFA'
        defaultValue="fa"
        style={{
           
        }}
        onChange={handleChange}
        options={[
            {
            value: 'fa',
            label: 'fa',
            },
            {
            value: 'en',
            label: 'en',
            },
        ]}
        />
    </Space>
  </div>
);
export default ChangeLang;
