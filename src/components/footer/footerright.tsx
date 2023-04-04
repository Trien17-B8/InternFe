import React from 'react'
import anh from '../../.././public/img/footer/image 2.png'
import Image from 'next/image'
import styled from 'styled-components'

const StyledContainer = styled.div`
    text-align: right;
`

export default function FooterRight() {
    return (
        <StyledContainer>
            <h4>Địa chỉ công ty</h4>
            <div>Công ty cổ phần Capichi</div>
            <div>
                Tầng 4, tòa nhà VietinBank, số 1 Lê Thái Tông, phường Cầu giấy,
                quận Cầu Giấy, Hà Nội
            </div>
            <div>
                Giấy CN ĐKDN số: 02264651313, do sở Kế hoạch và Đầu tư TP. Hà
                Nội cấp ngày 11/12/2020, sửa đổi lần thứ 21, ngày 01/02/2021
            </div>
            <div>Số điện thoại: 1900 1522</div>
            <div>Email: capichi@gmail.com</div>
            <Image src={anh} alt=""></Image>
        </StyledContainer>
    )
}
