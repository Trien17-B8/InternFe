import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Button } from 'antd'
import { break_points } from '@/styles/resposive'
import anh1 from './assets/banner1.png'
import anh2 from './assets/Saly-1.png'
import anh3 from './assets/Saly-2.png'
import anh4 from './assets/Layer 1 1.png'
import anh5 from './assets/Ellipse 1.png'
import anh6 from './assets//Star 2.png'

const StyedContainer = styled.div`
    display: flex;
    ${break_points.tablet_portrait_only} {
        display: none !important;
    }
    ${break_points.phone_only} {
        display: none !important;
    }
    ${break_points.tablet_landscape_only} {
        display: none !important;
    }
`

const StyledText = styled.div`
    width: 45%;
    position: relative;
    display: block;
    text-align: left;
    margin-top: 5rem;
    margin-left: 11rem;
`

const StyledImg = styled.div`
    width: 55%;
    height: 500px;
    z-index: -4;
    float: right;
`

const StyedTitle = styled.div`
    font-size: 42px;
    color: green;
    font-weight: bold;
    font-family: 'Tahoma';
    text-align: left;
    width: 490px;
    .textColor {
        color: orange;
    }
`

const StyledInfo = styled.div`
    text-align: left;
    padding-top: 50px;
    font-family: 'Tahoma';
    font-size: 14px;
    font-weight: 400;
    color: black;
    width: 390px;
`

const Visited = styled(Button)`
    background-color: orange;
    color: white;
    margin-top: '1rem';
`

const Anh1 = styled(Image)`
    width: 48rem;
    z-index: -4;
    position: absolute;
`
const Anh2 = styled(Image)`
    font-size: 251px;
    z-index: 2;
    margin-left: 8rem;
    position: absolute;
`

const Anh3 = styled(Image)`
    font-size: 100%;
    z-index: 4;
    position: absolute;
    margin-left: -340px;
    transform: rotate(-7.53deg);
`
const Anh4 = styled(Image)`
    font-size: 100%;
    z-index: 3;
    position: absolute;
    transform: rotate(-8.56deg);
    margin-top: 80px;
    margin-left: 190px;
`
const Anh5 = styled(Image)`
    font-size: 100%;
    position: absolute;
    margin-left: 125px;
    margin-top: 115px;
`
const Anh6 = styled(Image)`
    font-size: 100%;
    margin-top: 165px;
    margin-left: 165px;
    z-index: 12;
    position: relative;
`

export default function Banner() {
    return (
        <>
            <StyedContainer>
                <StyledText>
                    <StyedTitle>
                        Get your delivery done.
                        <label className="textColor"> Anytime, Anywhere!</label>
                    </StyedTitle>
                    <StyledInfo>
                        Apparently we had reached a great height in the
                        atmosphere, for the sky was a dead black, and the stars
                        had ceased to twinkle.
                    </StyledInfo>
                    <Visited type="primary">VISIT NOW</Visited>
                </StyledText>
                <StyledImg>
                    <Anh1 src={anh1} alt="" />
                    <Anh2 src={anh2} alt="" />
                    <Anh3 src={anh3} alt="" />
                    <Anh4 src={anh4} alt="" />
                    <Anh5 src={anh5} alt="" />
                    <Anh6 src={anh6} alt="" />
                </StyledImg>
            </StyedContainer>
        </>
    )
}
