import { Button, Card, Space } from 'antd'
import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import vector from './assets//Vector.png'
import add from './assets/addres.png'
import close from './assets/close.png'
import phone from './assets/mobile app.png'
import { Data } from './data'
import { break_points } from '@/styles/resposive'

const Container = styled.div`
    ${break_points.phone_only} {
        justify-content: center;
        margin-left: -100px;
        width: 100%;
    }

    ${break_points.tablet_landscape_only} {
        justify-content: center;
        width: 110%;
    }
    ${break_points.tablet_landscape_up} {
        width: 110%;

        justify-content: center;
    }
    ${break_points.tablet_landscape_down} {
        justify-content: center;
        width: 140%;
    }
`

const PepoStyled = styled.h1`
    font-size: 2rem;
    margin-bottom: unset;
`

const AboutDiv = styled.div`
    display: flex;
    align-items: center;
`

const StyledH2 = styled.h2`
    width: 260px;
    font-size: 0.8rem;
    font-weight: 350px;
`

const StyledH2T = styled.h2`
    font-size: 1rem;
    font-weight: 400;
    margin-left: 1.3rem;
    color: #1dac0e;
`

const StyledButton = styled(Button)`
    font-size: 1rem;
    background-color: #d5e9ff;
    border: none;
    padding: 5px;
    margin-left: 1rem;
    border-radius: 20px;
`

const StyledBtn = styled(Button)`
    font-size: 1rem;
    background-color: #d2eecf;
    border: none;
    padding: 5px;
    margin-left: 2rem;
    border-radius: 20px;
`

const Booking = styled.div`
    display: flex;
    margin-top: 1rem;
`

const Delivery = styled(Button)`
    height: 35px;
    width: 80px;
    background-color: #ff881d;
    border: none;
    border-radius: 10px;
    color: white;
    // fontSize: '1rem';
    box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
        0px 8px 16px rgba(96, 97, 112, 0.16);
`

const StyledBooking = styled(Image)`
    margin-bottom: 1rem;
    margin-left: 9rem;
`

export default function CardComponents() {
    return (
        <Container>
            {Data.map((data, index) => {
                return (
                    <Space key={index} direction="vertical" size={16}>
                        <Card
                            bordered={false}
                            size="small"
                            style={{ width: 300, marginLeft: '2rem' }}
                        >
                            <Image priority src={data.image} alt=""></Image>
                            <PepoStyled>Peppo restaurant</PepoStyled>
                            <AboutDiv>
                                <Image src={add} alt=""></Image>{' '}
                                <StyledH2>{data.address}</StyledH2>
                            </AboutDiv>
                            <AboutDiv>
                                <Image src={close} alt=""></Image>{' '}
                                <StyledH2T>{data.status}</StyledH2T>
                            </AboutDiv>
                            <AboutDiv>
                                <Image src={vector} alt=""></Image>
                                <div>
                                    <StyledButton>{data.open}</StyledButton>
                                    <StyledBtn>{data.open}</StyledBtn>
                                </div>
                            </AboutDiv>
                            <Booking>
                                <Delivery>Delivery</Delivery>
                                <StyledBooking src={phone} alt="" />
                            </Booking>
                        </Card>
                    </Space>
                )
            })}
        </Container>
    )
}
