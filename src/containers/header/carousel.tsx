import React from 'react'
import { Carousel } from 'antd'
import Image from 'next/image'
import anh1 from './assets/Group 54.png'
import anh2 from './assets/Group 58.png'
import anh3 from './assets/Group 60.png'
import styled from 'styled-components'
import { break_points } from '@/styles/resposive'

const contentStyle: React.CSSProperties = {
    borderRadius: '0.6rem',
}

const Respo = styled.div`
    ${break_points.phone_only} {
        margin-top: -5rem;
        margin-bottom: -5rem;
        width: 730px;
    }
    ${break_points.xs} {
        margin-top: -5rem;
        margin-bottom: -5rem;
        width: 700px;
    }
    ${break_points.sm} {
        margin-top: -3rem;
        margin-bottom: -3rem;
        width: 1200px;
    }
    ${break_points.nd} {
        width: 1000px;
    }
    ${break_points.Ig} {
        width: 1200px;
    }
    ${break_points.xl} {
        width: 100%;
    }
    ${break_points.xxl} {
        width: 100%;
    }
`

const Styled = styled(Image)`
    ${break_points.phone_only} {
        object-fit: scale-down;
        border-radius: 2.6rem;
    }
    ${break_points.xs} {
        object-fit: scale-down;
        border-radius: 2.6rem;
    }
    ${break_points.sm} {
        object-fit: scale-down;
        border-radius: 2.6rem;
    }
    ${break_points.nd} {
        object-fit: scale-down;
        border-radius: 2.6rem;
    }
`

const CarouselBanner: React.FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide)
    }

    return (
        <Respo>
            <Carousel afterChange={onChange}>
                <Styled src={anh1} alt="" />
                <Styled src={anh2} alt="" />
                <Styled src={anh3} alt="" />
            </Carousel>
        </Respo>
    )
}

export default CarouselBanner
