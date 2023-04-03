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
    height: 500px;
    position: relative;
    display: block;
`

const StyledImg = styled.div`
    width: 55%;
    height: 500px;
`

const StyedTitle = styled.div`
    font-size: 26px;
    color: green;
    font-weight: bold;
    font-family: 'Tahoma';
    margin-bottom: '15px';
`

const StyledButton = styled.div`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
`
export default function Banner() {
    return (
        <>
            <StyedContainer>
                <StyledText>
                    <StyedTitle>
                        Get your delivery done. Anytime, Anywhere!
                    </StyedTitle>
                    <StyledButton>
                        Apparently we had reached a great height in the
                        atmosphere, for the sky was a dead black, and the stars
                        had ceased to twinkle.
                    </StyledButton>

                    <Button
                        style={{ backgroundColor: 'orange', color: 'white' }}
                        type="primary"
                    >
                        VISIT NOW
                    </Button>
                </StyledText>
                <StyledImg>
                    <Image
                        style={{
                            width: 'full',
                            height: 'full',
                            zIndex: -2,
                            position: 'absolute',
                            float: 'right',
                        }}
                        src={anh1}
                        alt=""
                    />
                    <Image
                        style={{
                            fontSize: '251px',
                            left: '882px',
                            right: '50px',
                            top: '22px',
                            bottom: '625px',
                            zIndex: 2,
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
                            left: '22.29%',
                            right: '35.64%',
                            top: '6.09%',
                            bottom: '71.08%',
                            transform: 'rotate(-7.53deg)',
                        }}
                        src={anh3}
                        alt=""
                    />
                    <Image
                        style={{
                            fontSize: '100%',
                            zIndex: 2,
                            position: 'absolute',
                            transform: 'rotate(-8.56deg)',
                            height: '242.06px',
                            left: '908.25px',
                            top: '261.61px',
                        }}
                        src={anh4}
                        alt=""
                    />
                    <Image
                        style={{
                            fontSize: '100%',
                            left: '816px',
                            top: '183px',
                            borderRadius: '0px',
                            zIndex: 1,
                            position: 'absolute',
                        }}
                        src={anh5}
                        alt=""
                    />
                    <Image
                        style={{
                            fontSize: '100%',
                            height: '29px',
                            width: '29px',
                            left: '906px',
                            top: '197px',
                            zIndex: 1,
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
