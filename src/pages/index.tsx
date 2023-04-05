import React from 'react'
import styled from 'styled-components'
import AppHeader from '../layouts/header/header'
import SlideBar from '../containers/menu/menu'
import Footers from '../layouts/footer/footer'
import Card from '../layouts/main/card'

const Header = styled.div``

const Footer = styled.div``

const Main = styled.div`
    display: flex;
    margin-left: 8rem;
    margin-right: 8rem;
`

const Slider = styled.div`
    width: 20%;
`

const Contents = styled.div`
    width: 80%;
    float: right;
    margin-left: 2rem;
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
