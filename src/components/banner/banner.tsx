import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Button } from 'antd'

import anh1 from '../../.././public/img/banner/banner1.png'
import anh2 from '../../.././public/img/banner/Saly-1.png'
import anh3 from '../../.././public/img/banner/Saly-2.png'
import anh4 from '../../.././public/img/banner/Layer 1 1.png'
import anh5 from '../../.././public/img/banner/Ellipse 1.png'
import anh6 from '../../.././public/img/banner/Star 2.png'

const StyedContainer = styled.div`
    display: flex;
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
                    <Button
                        style={{
                            backgroundColor: 'orange',
                            color: 'white',
                            marginTop: '1rem',
                        }}
                        type="primary"
                    >
                        VISIT NOW
                    </Button>
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
