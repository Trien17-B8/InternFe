import React from 'react'
import { CaretDownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Dropdown, message, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    position: relative;
`

const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.')
    console.log('click', e)
}

const items: MenuProps['items'] = [
    {
        label: 'Ha Noi',
        key: '1',
    },
    {
        label: 'Ho Chi Minh',
        key: '2',
    },
]

const menuProps = {
    items,
    onClick: handleMenuClick,
}
export default function HeaderCenter() {
    return (
        <Container>
            <div>
                <Space wrap>
                    <Dropdown menu={menuProps}>
                        <Button
                            style={{
                                marginLeft: 120,
                                borderRadius: 10,
                                borderColor: 'yellow',
                            }}
                        >
                            <Space>
                                Ha Noi{' '}
                                <CaretDownOutlined
                                    style={{ color: 'orange' }}
                                />
                            </Space>
                        </Button>
                    </Dropdown>
                </Space>
            </div>
            <div>
                <Input
                    placeholder="Nhập từ khóa"
                    prefix={<SearchOutlined />}
                    style={{ width: 500, marginLeft: 37, color: 'orange' }}
                />
            </div>
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
        </Container>
    )
}
