import { Space, Table, Typography } from 'antd'
function Tourist  () {
    /*const[loading,setLoading]=useState(false)
    const[dataSource,setDataSource]=useState([])

    useEffect(()=>{
        setLoading(true)
        getBooking().then(res=>{
            setDataSource(res.booking)
            setLoading(false);
        })

    })*/
  return (
    <div>
        <Space size={20} direction='vertical'>
    <Typography.Title level={4}>All Tourist Area</Typography.Title>
      <Table
      //loading={loading}
      columns={[
        {
          title:"Title",
          dataIndex:"title",  
        },
        {
            title:"Description",
            dataIndex:"description",  
          },
          {
            title:"City",
            dataIndex:"city",  
          },
          {
            title:"Country",
            dataIndex:"country",  
          },
          {
            title:"Status",
            dataIndex:"status",  
          },
          {
            title:"Image",
            dataIndex:"image",  
          },
          {
            title:"Created Date",
            dataIndex:"created date",  
          },
          {
            title:"Action",
            dataIndex:"action",  
          },
      ]}
      
      //dataSource={dataSource}
      >
      </Table>
      </Space>
    </div>
  )
}

export default Tourist 
