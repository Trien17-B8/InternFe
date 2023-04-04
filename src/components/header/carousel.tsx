import React from 'react'
import { Carousel } from 'antd'
import Banner from '../banner/banner'

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '496px',
    width: '100%',
    color: '#fff',
    textAlign: 'center',
    // backgroundColor: 'gray',
    borderRadius: '0.6rem',
}

const CarouselBanner: React.FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide)
    }

    return (
        <Carousel afterChange={onChange}>
            <div>
                <h3 style={contentStyle}>
                    <Banner />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
        </Carousel>
    )
}

export default CarouselBanner
