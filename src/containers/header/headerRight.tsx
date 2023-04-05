import React from 'react'
import { CaretDownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Dropdown, message, Space } from 'antd'
import Image from 'next/image'
import usa from './assets/USA.png'
import styled from 'styled-components'

const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.')
    console.log('click', e)
}

const items: MenuProps['items'] = [
    {
        label: 'EN',
        key: '1',
    },
    {
        label: 'VN',
        key: '2',
    },
]

const menuProps = {
    items,
    onClick: handleMenuClick,
}

const Container = styled.div`
    display: flex;
    position: relative;
`

const Order = styled(Button)`
    border-radius: 10;
    background-color: orange !important;
    font-weight: bold;
    font-size: 12;
    font-family: Gilroy;
    color: white;
    font-style: normal;
    height: 36;

    &.ant-btn {
        margin-left: 4rem;
    }
`

const Menu = styled(Button)`
    margin-left: 30;
    border-radius: 10;
    height: 36;
    border-color: yellow;
    font-weight: 'bold';

    &.ant-btn {
        margin-left: 4rem;
    }
`

export default function HeaderRight() {
    return (
        <Container>
            <div>
                <Order>Order</Order>
            </div>
            <div>
                <Space wrap>
                    <Dropdown menu={menuProps}>
                        <Menu>
                            <Space>
                                <Image src={usa} alt="" />
                                EN
                                <CaretDownOutlined
                                    style={{ color: 'orange' }}
                                />
                            </Space>
                        </Menu>
                    </Dropdown>
                </Space>
            </div>
            <div>
                <Space wrap>
                    <Button type="link">Đăng Nhập</Button>
                </Space>
            </div>
        </Container>
    )
}
