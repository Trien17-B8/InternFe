import React from 'react'
import Image from 'next/image'
import logo1 from '../../.././public/img/logoCr.png'

export default function HeaderLeft() {
    return (
        <div>
            <div>
                <Image src={logo1} alt="a" />
            </div>
        </div>
    )
}
