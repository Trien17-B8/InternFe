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
    ${break_points.xs} {
        width: 100%;
        display: flex;
        text-align: center;
    }
    ${break_points.sm} {
    }
    ${break_points.nd} {
    }
    ${break_points.Ig} {
    }
    ${break_points.xl} {
    }
    ${break_points.xxl} {
    }
`

const StyledButton = styled(Button)`
    margin-left: 6rem;
    border-radius: 0.4rem;
    border-color: yellow;
    font-weight: normal;
    ${break_points.xs} {
        display: flex;
        text-align: center;
    }
`
const ContainerInput = styled.div`
    ${break_points.xs} {
        display: none;
    }
    ${break_points.sm} {
        display: none;
    }
    ${break_points.nd} {
        display: flex;
        width: 13rem;
    }
    ${break_points.Ig} {
        display: flex;
        width: 16rem;
    }
    ${break_points.xl} {
        display: flex;
        width: 70%;
    }
    ${break_points.xxl} {
        display: flex;
        width: 100%;
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

const Styled = styled(Input)`
    width: 500px;
    margin-left: 2.4rem;
    color: orange;
`

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
                        <StyledButton>
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
                <Styled
                    placeholder="Nhập từ khóa"
                    prefix={<SearchOutlined />}
                />
            </ContainerInput>
        </Container>
    )
}
