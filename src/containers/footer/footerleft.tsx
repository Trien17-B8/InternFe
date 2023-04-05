import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import androi from './assets/Group 62.png'
import iphone from './assets/Group 63.png'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const ContainerFluit = styled.div`
    display: block;
`

const AppIcon = styled.div`
    display: block;
    margin-left: 3rem;
`

const StyledLink = styled.div`
    padding-top: 0.6rem;
    a {
        text-decoration: none;
        color: #2e92ff;
        font-size: 13pt;
    }
`

function FooterLeft() {
    return (
        <Container>
            <ContainerFluit>
                <h3>Giới Thiệu</h3>
                <StyledLink>
                    <Link href={''}>Giới thiệu & liên hệ</Link>
                </StyledLink>

                <StyledLink>
                    <Link href={''}>Trung tâm trợ giúp</Link>
                </StyledLink>

                <StyledLink>
                    <Link href={''}>Quy chế</Link>
                </StyledLink>

                <StyledLink>
                    <Link href={''}>Điều khoản sử dụng</Link>
                </StyledLink>

                <StyledLink>
                    <Link href={''}>Bảo mật thông tin</Link>
                </StyledLink>

                <StyledLink>
                    <Link href={''}>Giải quyết khiếu nại</Link>
                </StyledLink>

                <StyledLink>
                    <Link href={''}>Hợp tác nhân viên giao nhận</Link>
                </StyledLink>

                <StyledLink>
                    <Link href={''}>Đăng ký quán</Link>
                </StyledLink>

                <StyledLink>
                    <Link href={''}>Ứng dụng Capichi</Link>
                </StyledLink>
            </ContainerFluit>
            <AppIcon>
                <h4>App Capichi</h4>
                <div>
                    <Image src={androi} alt="" />
                </div>
                <div>
                    <Image src={iphone} alt="" />
                </div>
            </AppIcon>
        </Container>
    )
}

export default FooterLeft
