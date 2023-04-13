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
    ${break_points.phone_only} {
        margin-left: 0;
        margin-right: 0;
        display: block !important;
        width: 100%;
    }
    ${break_points.tablet_portrait_only} {
        margin-left: 0;
        margin-right: 0;
        display: block !important;
        width: 100%;
    }
    ${break_points.tablet_landscape_only} {
        margin-left: 0;
        margin-right: 0;
        display: block !important;
        width: 100%;
    }
`

const Slider = styled.div`
    display: flex;
    width: 20%;
    ${break_points.phone_only} {
        display: inline-block !important;
        width: 400px;
        text-align: center;
    }
    @media only screen and (max-width: 380px) {
        width: 1000px;
        text-align: center;
    }

    @media only screen and (max-width: 910px) {
        width: 700px;
        margin-right: 25px;
        text-align: center;
    }

    ${break_points.tablet_portrait_only} {
        display: block;
        margin-left: 2rem;
        width: 900px;
        height: 20px;
        font-size: 28px;
    }
    ${break_points.tablet_landscape_only} {
        display: block;
        height: 20px;
        font-size: 28px;
        margin-left: 1rem;

        width: 100%;
        font-size: 15px;
    }
`

const Contents = styled.div`
    width: 80%;
    text-align: center;
    ${break_points.phone_only} {
        text-align: center;
        margin-left: 6rem;
        width: 150%;
    }
    ${break_points.Ig} {
        /* margin-left: 6rem; */
        width: 120%;
    }
    ${break_points.nd} {
        /* text-align: center;
        margin-left: 6rem;
        width: 150%; */
    }
    ${break_points.tablet_portrait_only} {
        margin-left: 8rem;
        display: inline-block;
        margin-top: 5rem;
        width: 70%;
        font-size: 15px;
    }
    ${break_points.tablet_landscape_only} {
        display: inline-block;
        margin-top: 10rem;
        margin-left: 5rem;
        width: 100%;
        font-size: 15px;
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
