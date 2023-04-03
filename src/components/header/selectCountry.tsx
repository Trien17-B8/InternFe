import React from 'react'
import { CaretDownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Dropdown, message, Space } from 'antd'
import Image from 'next/image'
import usa from '../../.././public/img/USA.png'

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

const SelectCountryComponent: React.FC = () => (
    <Space wrap>
        <Dropdown menu={menuProps}>
            <Button style={{ marginLeft: 45, fontSize: 16 }}>
                <Image
                    style={{ width: 28, height: 20 }}
                    src={usa}
                    alt=""
                ></Image>
                <Space>
                    Ha Noi <CaretDownOutlined style={{ color: 'orange' }} />
                </Space>
            </Button>
        </Dropdown>
    </Space>
)

export default SelectCountryComponent
