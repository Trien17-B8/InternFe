import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

const InputComponent: React.FC = () => (
    <>
        <Input
            placeholder="Nhập từ khóa"
            prefix={<SearchOutlined />}
            style={{ width: 500, marginLeft: 37, color: 'orange' }}
        />
    </>
)

export default InputComponent
