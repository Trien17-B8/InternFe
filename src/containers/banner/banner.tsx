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
    ${break_points.phone_only} {
        display: none;
    }
    ${break_points.xl} {
        display: none;
    }
    ${break_points.sm} {
        display: none;
    }
    ${break_points.nd} {
        display: none;
    }
    ${break_points.tablet_landscape_down} {
        display: none;
    }
    ${break_points.laptop_only} {
        display: flex;
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
    z-index: 4;
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
    padding-top: 50px 
    font-family: 'Tahoma';
    font-size: 14px;
    font-weight: 400;
    color: black;
    width: 390px; 
`

const SSS = styled(Button)`
    background-color: orange;
    color: white;
    margin-top: '1rem';
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
                    <SSS style={{}} type="primary">
                        VISIT NOW
                    </SSS>
                </StyledText>
                <StyledImg>
                    <Image
                        style={{
                            width: '56rem',
                            zIndex: -4,
                            position: 'absolute',
                        }}
                        src={anh1}
                        alt=""
                    />
                    <Image
                        style={{
                            fontSize: '251px',
                            zIndex: 10,
                            marginLeft: '8rem',
                            position: 'absolute',
                        }}
                        src={anh2}
                        alt=""
                    />
                    <Image
                        style={{
                            fontSize: '100%',
                            zIndex: 4,
                            position: 'absolute',
                            marginLeft: '-340px',
                            transform: 'rotate(-7.53deg)',
                        }}
                        src={anh3}
                        alt=""
                    />
                    <Image
                        style={{
                            fontSize: '100%',
                            zIndex: 3,
                            position: 'absolute',
                            transform: 'rotate(-8.56deg)',
                            marginTop: '80px',
                            marginLeft: '190px',
                        }}
                        src={anh4}
                        alt=""
                    />
                    <Image
                        style={{
                            fontSize: '100%',
                            position: 'absolute',
                            marginLeft: '125px',
                            marginTop: '115px',

                            zIndex: 1,
                        }}
                        src={anh5}
                        alt=""
                    />
                    <Image
                        style={{
                            fontSize: '100%',
                            marginTop: '165px',
                            marginLeft: '165px',
                            zIndex: 12,
                            position: 'relative',
                        }}
                        src={anh6}
                        alt=""
                    />
                </StyledImg>
            </StyedContainer>
        </>
    )
}
