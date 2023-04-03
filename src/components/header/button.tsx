import React from 'react'
import { Button, Space } from 'antd'
import styled from 'styled-components'

const StyledButton = styled(Button)`
        {
        border-radius: 10;
        background-color: 'orange';
        font-size: 12;
        font-family: 'Gilroy';
        color: 'white',
        font-style: 'normal',
        width: 84,
        height: 32,
        margin-top: 5,
        margin-left: 90;
        }`

const ButtonComponents: React.FC = () => (
    <Space wrap>
        <Button
            style={{
                borderRadius: 10,
                backgroundColor: 'orange',
                fontSize: 12,
                fontFamily: 'Gilroy',
                color: 'white',
                fontStyle: 'normal',
                width: 84,
                height: 34,
                marginLeft: 90,
            }}
        >
            Order
        </Button>
    </Space>
)

export default ButtonComponents
