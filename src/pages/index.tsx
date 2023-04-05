import React from 'react'
import styled from 'styled-components'
import AppHeader from '../layouts/header/header'
import SlideBar from '../containers/menu/menu'
import Footers from '../layouts/footer/footer'
import Card from '../layouts/main/card'
import { break_points } from '@/styles/resposive'
const Header = styled.div``

const Footer = styled.div``

const Main = styled.div`
    display: flex;
    margin-left: 8rem;
    margin-right: 8rem;
    ${break_points.phone_only} {
        display: block;
        align-items: center;
    }
    ${break_points.tablet_landscape_down} {
    }

    ${break_points.tablet_landscape_only} {
    }
`

const Slider = styled.div`
    display: inline-block;
    ${break_points.phone_only} {
        width: 100%;
        align-items: center;
    }
    ${break_points.tablet_landscape_down} {
    }

    ${break_points.tablet_landscape_only} {
    }
`

const Contents = styled.div`
    width: 80%;
    float: right;
    margin-left: 2rem;
    ${break_points.phone_only} {
        width: 100%;
    }
    ${break_points.tablet_landscape_down} {
    }

    ${break_points.tablet_landscape_only} {
    }
`

export default function Home() {
    return (
        <>
            <Header>
                <AppHeader></AppHeader>
            </Header>
            <Main>
                <Slider>
                    <SlideBar />
                </Slider>
                <Contents>
                    <Card />
                </Contents>
            </Main>
            <Footer>
                <Footers />
            </Footer>
        </>
    )
}
