import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import androi from '../../.././public/img/footer/Group 62.png'
import iphone from '../../.././public/img/footer/Group 63.png'
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

function FooterLeft() {
    return (
        <Container>
            <ContainerFluit>
                <h4>Giới Thiệu</h4>
                <div>
                    <Link href={''}>Giới thiệu & liên hệ</Link>
                </div>

                <div>
                    <Link href={''}>Trung tâm trợ giúp</Link>
                </div>

                <div>
                    <Link href={''}>Quy chế</Link>
                </div>

                <div>
                    <Link href={''}>Điều khoản sử dụng</Link>
                </div>

                <div>
                    <Link href={''}>Bảo mật thông tin</Link>
                </div>

                <div>
                    <Link href={''}>Giải quyết khiếu nại</Link>
                </div>

                <div>
                    <Link href={''}>Hợp tác nhân viên giao nhận</Link>
                </div>

                <div>
                    <Link href={''}>Đăng ký quán</Link>
                </div>

                <div>
                    <Link href={''}>Ứng dụng Capichi</Link>
                </div>
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
