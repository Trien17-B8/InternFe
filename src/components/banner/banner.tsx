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
    line-height: 22px; 
    color: black;
    width: 460px; 
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
                            // marginLeft: '2rem',
                            zIndex: -8,
                            position: 'absolute',
                        }}
                        src={anh1}
                        alt=""
                    />
                    <Image
                        style={{
                            fontSize: '251px',
                            // left: '882px',
                            // right: '50px',
                            // top: '22px',
                            // bottom: '625px',
                            zIndex: 10,
                            position: 'absolute',
                        }}
                        src={anh2}
                        alt=""
                    />
                    <Image
                        style={{
                            fontSize: '100%',
                            zIndex: 2,
                            position: 'absolute',
                            // left: '22.29%',
                            // right: '35.64%',
                            // top: '6.09%',
                            // bottom: '71.08%',
                            // transform: 'rotate(-7.53deg)',
                        }}
                        src={anh3}
                        alt=""
                    />
                    <Image
                        style={{
                            fontSize: '100%',
                            zIndex: 8,
                            position: 'absolute',
                            // transform: 'rotate(-8.56deg)',
                            // height: '242.06px',
                            // left: '908.25px',
                            // top: '261.61px',
                        }}
                        src={anh4}
                        alt=""
                    />
                    <Image
                        style={{
                            fontSize: '100%',
                            // left: '816px',
                            // top: '183px',
                            // borderRadius: '0px',
                            zIndex: 1,
                            position: 'relative',
                        }}
                        src={anh5}
                        alt=""
                    />
                    <Image
                        style={{
                            fontSize: '100%',
                            // height: '29px',
                            // width: '29px',
                            // left: '906px',
                            // top: '197px',
                            zIndex: 12,
                            position: 'absolute',
                        }}
                        src={anh6}
                        alt=""
                    />
                </StyledImg>
            </StyedContainer>
        </>
    )
}
