import React from 'react'
// import { Menu } from 'antd';
import styled from 'styled-components'
// import { Image } from 'antd'
import Image from 'next/image'
// import Logo from '@/src/components/header/images'
import logo1 from '../../.././public/img/logoCr.png'
import SelectComponent from '@/src/components/header/select'
import InputComponent from '@/src/components/header/input'
import ButtonComponents from '@/src/components/header/button'
import DangNhapComponents from '@/src/components/header/link'
import SelectCountryComponent from '@/src/components/header/selectCountry'
import Banner from '@/src/components/banner/banner'

const StyedSelect = styled(SelectComponent)`
    padding-top: 10px;
    border-color: 'yellow';
    font-family: 'Gilroy';
    position: absolute;
`

const StyedSelectCountry = styled(SelectCountryComponent)`
    padding-top: 5px;
    padding-left: 30px
    border-color: 'yellow';
    font-family: 'Gilroy';
    position: absolute;
`

const StyledInput = styled(InputComponent)`
    padding-top: 5px;
    font-family: 'Gilroy';
    position: absolute;
`

const StyledButton = styled(ButtonComponents)`
    padding-top: -10px;
`

const StyledLink = styled(DangNhapComponents)`
    padding-top: 10px;
`

const StyledImg = styled(Image)``

export default function AppHeader() {
    return (
        <>
            <StyledImg src={logo1} alt="a" />
            <StyedSelect />
            <StyledInput />
            <StyledButton />
            <StyedSelectCountry />
            <StyledLink />
            <Banner />
        </>
    )
}
