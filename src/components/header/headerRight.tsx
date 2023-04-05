import React from 'react'
import { CaretDownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Dropdown, message, Space } from 'antd'
import Image from 'next/image'
import usa from '../../.././public/img/USA.png'
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

export default function HeaderRight() {
    return (
        <Container>
            <div>
                <Button
                    style={{
                        borderRadius: 10,
                        backgroundColor: 'orange',
                        fontWeight: 'bold',
                        fontSize: 12,
                        fontFamily: 'Gilroy',
                        color: 'white',
                        fontStyle: 'normal',
                        marginLeft: 90,
                        height: 36,
                    }}
                >
                    Order
                </Button>
            </div>
            <div>
                <Space wrap>
                    <Dropdown menu={menuProps}>
                        <Button
                            style={{
                                marginLeft: 30,
                                borderRadius: 10,
                                height: 36,
                                borderColor: 'yellow',
                                fontWeight: 'bold',
                            }}
                        >
                            <Space>
                                <Image src={usa} alt="" />
                                EN
                                <CaretDownOutlined
                                    style={{ color: 'orange' }}
                                />
                            </Space>
                        </Button>
                    </Dropdown>
                </Space>
            </div>
            <div>
                <Space wrap>
                    <Button style={{ marginLeft: 22 }} type="link">
                        Đăng Nhập
                    </Button>
                </Space>
            </div>
        </Container>
    )
}
