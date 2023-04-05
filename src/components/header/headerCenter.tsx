import React from 'react'
import { CaretDownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Dropdown, message, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import styled from 'styled-components'

const Container = styled.div`
    @media only screen and (min-width: 360px) {
        display: none;
    }
    @media all screen and (min-width: 411px) {
        display: none;
    }

    @media only screen and (min-width: 768px) {
        display: none;
    }
    @media only screen and (min-width: 1024px) {
        display: none;
    }
    @media only screen and (min-width: 1280px) {
        display: flex;
        position: relative;
    }
`

const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.')
    console.log('click', e)
}

const items: MenuProps['items'] = [
    {
        label: 'Ha noi',
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
                                fontWeight: 'normal',
                            }}
                        >
                            <Space>
                                Ha noi{' '}
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
        </Container>
    )
}
