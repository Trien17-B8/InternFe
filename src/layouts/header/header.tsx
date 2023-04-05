import React from 'react'
import styled from 'styled-components'
import HeaderCenter from '@/src/containers/header/headerCenter'
import HeaderRight from '@/src/containers/header/headerRight'
import HeaderLeft from '@/src/containers/header/headerLeft'
import CarouselBanner from '@/src/containers/header/carousel'

const Header = styled.div`
    height: 50px;
    display: flex;
    margin-left: 4rem;
    margin-right: 4rem;
    margin-top: 2rem;
    position: relative;
`

const Left = styled.div`
    position: relative;
    width: 15%;
`

const Center = styled.div`
    position: relative;
    width: 55%;
`

const Right = styled.div`
    position: relative;
    width: 30%;
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
            <div>
                <CarouselBanner />
            </div>
        </>
    )
}
