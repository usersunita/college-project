import { Typography } from 'antd'
import React from 'react'

function Footers ()  {
  return (
    <div className='footer'>
      <Typography.Link href='tel:01-199564'>01-199564</Typography.Link>
      <Typography.Link href='https://www.google.com' target={"_blank"}>Private Policy</Typography.Link>
      <Typography.Link href='https://www.google.com' target={"_blank"}>Terms of use</Typography.Link>
    </div>
  )
}

export default Footers