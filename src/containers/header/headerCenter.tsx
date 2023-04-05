import React from 'react'
import { CaretDownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Dropdown, message, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import styled from 'styled-components'
import { break_points } from '@/styles/resposive'

const Container = styled.div`
    display: flex;
    position: relative;
    ${break_points.phone_only} {
        display: none;
    }
    ${break_points.tablet_landscape_down} {
        display: flex;
    }
`

const StyledButton = styled(Button)`
    margin-left: 6rem;
    border-radius: 0.4rem;
    border-color: yellow;
    font-weight: normal;
    ${break_points.phone_only} {
        display: none;
    }
    ${break_points.tablet_landscape_down} {
        display: none;
    }

    ${break_points.tablet_landscape_only} {
        display: none;
    }
`
const ContainerInput = styled.div`
    ${break_points.phone_only} {
        display: none;
    }
    ${break_points.tablet_landscape_down} {
        display: none;
    }

    ${break_points.tablet_landscape_only} {
        display: none;
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
                        <StyledButton style={{}}>
                            <Space>
                                Ha noi{' '}
                                <CaretDownOutlined
                                    style={{ color: 'orange' }}
                                />
                            </Space>
                        </StyledButton>
                    </Dropdown>
                </Space>
            </div>
            <ContainerInput>
                <Input
                    placeholder="Nhập từ khóa"
                    prefix={<SearchOutlined />}
                    style={{
                        width: 500,
                        marginLeft: '2.4rem',
                        color: 'orange',
                    }}
                />
            </ContainerInput>
        </Container>
    )
}
