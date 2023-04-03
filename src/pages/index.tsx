import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'
import AppHeader from '../layouts/header/header'

const { Header } = Layout

// const StyledHeader = styled.header`
//     width: '1440px';
//     height: '80px';
//     background-color: white;
// `

// const StyedHeader = styled(Header)`
//     background-color: white;
//     width: 100%;
//     height: 80px;
// `

export default function Home() {
    return (
        <>
            <Layout>
                <Header style={{ backgroundColor: 'white' }}>
                    <AppHeader></AppHeader>
                </Header>
                {/* <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer> */}
            </Layout>
        </>
    )
}
