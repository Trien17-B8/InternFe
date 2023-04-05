import { Card, Space } from 'antd'
import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import card from './assets//Rectangle 2029.png'
import vector from './assets//Vector.png'
import add from './assets/addres.png'
import close from './assets/close.png'
import phone from './assets/mobile app.png'

const PepoStyled = styled.h1`
    font-size: 2rem;
    margin-bottom: unset;
`

const AboutDiv = styled.div`
    display: flex;
    align-items: center;
`

const CardComponents: React.FC = () => (
    <Space direction="vertical" size={16}>
        <Card bordered={false} size="small" style={{ width: 300 }}>
            <Image style={{}} src={card} alt=""></Image>
            <PepoStyled>Peppo restaurant</PepoStyled>
            <AboutDiv>
                <Image style={{}} src={add} alt=""></Image>{' '}
                <h2
                    style={{
                        width: '260px',
                        fontSize: '0.8rem',
                        fontWeight: '350px',
                    }}
                >
                    12, Pham Ngoc Thach st, Dong Da dist, Ha Noi (0.3 km)
                </h2>
            </AboutDiv>
            <AboutDiv>
                <Image style={{}} src={close} alt=""></Image>{' '}
                <h2
                    style={{
                        fontSize: '1rem',
                        fontWeight: '400',
                        marginLeft: '1.3rem',
                        color: '#1DAC0E',
                    }}
                >
                    Đang mở cửa
                </h2>
            </AboutDiv>
            <AboutDiv>
                <Image style={{}} src={vector} alt=""></Image>
                <div>
                    <button
                        style={{
                            fontSize: '1rem',
                            background: '#d5e9ff',
                            border: 'none',
                            padding: '5px',
                            marginLeft: '1rem',
                            borderRadius: '20px',
                        }}
                    >
                        08:30 - 10:30
                    </button>
                    <button
                        style={{
                            fontSize: '1rem',
                            background: '#d2eecf',
                            border: 'none',
                            padding: '5px',
                            marginLeft: '2rem',
                            borderRadius: '20px',
                        }}
                    >
                        08:30 - 10:30
                    </button>
                </div>
            </AboutDiv>
            <div
                style={{
                    display: 'flex',
                    marginTop: '1rem',
                }}
            >
                <button
                    style={{
                        height: '35px',
                        width: '60px',
                        background: '#FF881D',
                        border: 'none',
                        borderRadius: '10px',
                        color: 'white',
                        // fontSize: '1rem',
                        boxShadow:
                            '0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)',
                    }}
                >
                    Delivery
                </button>
                <Image
                    style={{ marginBottom: '1rem', marginLeft: '9rem' }}
                    src={phone}
                    alt=""
                ></Image>
            </div>
        </Card>
    </Space>
)

export default CardComponents
