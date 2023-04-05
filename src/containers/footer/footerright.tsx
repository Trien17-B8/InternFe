import React from 'react'
import anh from './assets/image 2.png'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'

const StyledContainer = styled.div`
    text-align: right;
`

const StyledP = styled.p`
    font-family: 'Gilroy';
    font-size: 13pt;
    line-height: 1.3rem;
    text-align: right;
    a {
        text-decoration: none;
        color: '#17059e';
    }
`

export default function FooterRight() {
    return (
        <StyledContainer>
            <h3>Địa chỉ công ty</h3>
            <div>
                <StyledP>Công ty cổ phần Capichi</StyledP>
            </div>
            <div>
                <StyledP>
                    Tầng 4, tòa nhà VietinBank, số 1 Lê Thái Tông, phường Cầu
                    giấy, quận Cầu Giấy, Hà Nội
                </StyledP>
            </div>
            <div>
                <StyledP>
                    Giấy CN ĐKDN số: 02264651313, do sở Kế hoạch và Đầu tư TP.
                    Hà Nội cấp ngày 11/12/2020, sửa đổi lần thứ 21, ngày
                    01/02/2021
                </StyledP>
            </div>
            <div>
                <StyledP>
                    Số điện thoại:
                    <span style={{ color: 'red' }}>1900 1522</span>
                </StyledP>
            </div>
            <div>
                <StyledP>
                    Email: <Link href={''}>capichi@gmail.com</Link>
                </StyledP>
            </div>
            <Image src={anh} alt=""></Image>
        </StyledContainer>
    )
}
