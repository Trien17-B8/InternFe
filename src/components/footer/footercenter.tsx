import Image from 'next/image'
import logo from '../../.././public/img/logoCr.png'
import {
    FacebookOutlined,
    GooglePlusOutlined,
    InstagramOutlined,
} from '@ant-design/icons'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    display: block;
    margin-top: 5rem;
`
const Icon = styled.div`
    padding-left: 0.5rem;
`

export default function FooterCenter() {
    return (
        <Container>
            <div>
                <Image src={logo} alt=""></Image>
            </div>
            <p>@ Capichi 2021 - A Food Delivery Corporation</p>
            <Icon>
                <InstagramOutlined style={{ fontSize: '2rem' }} />
                <FacebookOutlined
                    style={{ marginLeft: '3rem', fontSize: '2rem' }}
                />
                <GooglePlusOutlined
                    style={{ marginLeft: '3rem', fontSize: '2rem' }}
                />
            </Icon>
        </Container>
    )
}
