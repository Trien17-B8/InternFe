import React from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import Image from 'next/image'
import all from '../../.././public/img/menu/all.png'
import chinese from '../../.././public/img/menu/chinese.png'
import coffee from '../../.././public/img/menu/coffee.png'
import fastfood from '../../.././public/img/menu/fastfood.png'
import freeship from '../../.././public/img/menu/freeship.png'
import gift from '../../.././public/img/menu/gift.png'
import japanese from '../../.././public/img/menu/japanese.png'
import milk from '../../.././public/img/menu/milk.png'
import packages from '../../.././public/img/menu/package.png'
import pizza from '../../.././public/img/menu/pizza.png'
import sweet from '../../.././public/img/menu/sweet.png'
import vergetarian2 from '../../.././public/img/menu/vergetarian2.png'
import styled from 'styled-components'
// import voucher from '../../.././public/img/menu/voucher.png'
type MenuItem = Required<MenuProps>['items'][number]

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem
}

const StyledColor = styled(Menu)`
    width: 256;
    height: 600;
    padding-left: 45px;
    .ant-menu-item-selected {
        background-color: orange;
    }
`

const items: MenuProps['items'] = [
    getItem('All', 'sub1', <Image src={all} alt="" />),
    getItem('Fast food', 'sub2', <Image src={fastfood} alt="" />),
    getItem('Take-away', 'sub3', <Image src={packages} alt="" />),
    getItem('Chinese food', 'sub4', <Image src={chinese} alt="" />),
    getItem('Japanese food', 'sub5', <Image src={japanese} alt="" />),
    getItem('Vegetarian', 'sub6', <Image src={vergetarian2} alt="" />),
    getItem('Coffee', 'sub7', <Image src={coffee} alt="" />),
    getItem('Pizza', 'sub8', <Image src={pizza} alt="" />),
    getItem('Gift', 'sub9', <Image src={gift} alt="" />),
    getItem('Sweet', 'sub10', <Image src={sweet} alt="" />),
    getItem('Milk', 'sub11', <Image src={milk} alt="" />),
    getItem('Freeship', 'sub12', <Image src={freeship} alt="" />),
]

const SlideBar: React.FC = () => {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e)
    }

    return (
        <StyledColor
            onClick={onClick}
            style={{}}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    )
}

export default SlideBar
