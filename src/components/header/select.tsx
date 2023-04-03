import React from 'react'
import { CaretDownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Dropdown, message, Space } from 'antd'

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

const SelectComponent: React.FC = () => (
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
                    Ha Noi <CaretDownOutlined style={{ color: 'orange' }} />
                </Space>
            </Button>
        </Dropdown>
    </Space>
)

export default SelectComponent
