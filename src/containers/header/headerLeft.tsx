import React from 'react'
import Image from 'next/image'
import logo1 from './assets/logoCr.png'

export default function HeaderLeft() {
    return (
        <div>
            <div>
                <Image src={logo1} alt="a" />
            </div>
        </div>
    )
}
