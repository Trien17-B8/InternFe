import React from 'react'
import styled from 'styled-components'
import HeaderCenter from '@/src/containers/header/headerCenter'
import HeaderRight from '@/src/containers/header/headerRight'
import HeaderLeft from '@/src/containers/header/headerLeft'
import CarouselBanner from '@/src/containers/header/carousel'
import { break_points } from '@/styles/resposive'

const Header = styled.div`
    /* height: 50px; */
    display: flex;
    /* margin-top: 2rem; */
    /* position: relative; */
`

const Left = styled.div`
    position: relative;
    width: 10%;
`

const Center = styled.div`
    position: relative;
    width: 55%;
`

const Right = styled.div`
    position: relative;
    width: 30%;
`

const Carousel = styled.div`
    justify-content: center;
`

export default function AppHeader() {
    return (
        <>
            <Header>
                <Left>
                    <HeaderLeft />
                </Left>
                <Center>
                    <HeaderCenter />
                </Center>
                <Right>
                    <HeaderRight />
                </Right>
            </Header>
            <Carousel>
                <CarouselBanner />
            </Carousel>
        </>
    )
}
