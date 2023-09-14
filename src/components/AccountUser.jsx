import { Col, Row, Table, Input, message } from 'antd'
import { useEffect, useState } from 'react'
import { getAllAccount } from '../axiosConfig/accountUser'

const { Search } = Input


const columns = [
    {
        title: '#',
        dataIndex: "key",
        key: 'key',
    },
    {
        title: 'Uername',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'age',
    },
    {
        title: 'Phone Number',
        dataIndex: 'sodienthoai',
        key: 'phoneNumber',
    }
]


const AccountUser = () => {

    const [accounts, setAccounts] = useState([])
    const [accountSearch, setAccountSearch] = useState([])
    const [messageApi, contextHolder] = message.useMessage()

    const getAll = async () => {
        const response = await getAllAccount()
        if (response && response.data) {
            setAccounts(addKeyForData(response.data))
            setAccountSearch(addKeyForData(response.data))
        }
    }

    const addKeyForData = (data) => {
        if (!Array.isArray(data)) {
            return []
        }
        return data.map((value, i) => {
            return {
                ...value,
                key: i + 1
            }
        })
    }

    useEffect(() => {
        (async () => {
            await getAll()
        })()
    }, [])

    const onSearch = (value) => {
        const textSearch = value.trim().toLowerCase()
        const newAccounts = accounts.filter((accoount) => accoount.username.toLowerCase().includes(textSearch) ||
            accoount.email.toLowerCase().includes(textSearch) || accoount.sodienthoai.toLowerCase().includes(textSearch))
        setAccountSearch(newAccounts)
    }

    return (
        <div className='account w-100'>
            {contextHolder}

            <Row className='w-100 a-stretch'>
                <Col span={12}></Col>
                <Col span={12} style={{ textAlign: "end" }}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                        style={{ minWidth: 300, width: 300, maxWidth: 500 }}
                    />
                </Col>
            </Row>

            <br />

            <Row className='w-100'>
                <Table
                    columns={columns}
                    dataSource={accountSearch}
                    pagination={{ pageSize: 10 }}
                    className='w-100'
                    scroll={{ y: 500 }}
                />
            </Row>
        </div >
    )
}

export default AccountUser