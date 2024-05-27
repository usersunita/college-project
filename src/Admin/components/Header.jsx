import React from 'react'
import{Badge, Space,Typography} from "antd";
import{MailOutlined,BellFilled} from "@ant-design/icons"
function Header ()  {
  return (
    <div className='header'>
      <Typography.Title>Admin Dashboard</Typography.Title>
    <Space>
      <Badge count={3} dot>
    <MailOutlined style={{fontSize:24}}/>
    </Badge>
    <Badge count={2}>
    <BellFilled style={{fontSize:24}}/>
    </Badge>
    </Space>
    </div>
  )
}

export default Header