import React from 'react'
import FooterLeft from '@/src/containers/footer/footerleft'
import styled from 'styled-components'
import { break_points } from '@/styles/resposive'
import FooterCenter from '@/src/containers/footer/footercenter'
import FooterRight from '@/src/containers/footer/footerright'

const Conatainer = styled.div`
    display: flex;
    margin-left: 4rem;
    margin-right: 4rem;
    ${break_points.phone_only} {
        width: 100%;
        text-align: center;
        margin-left: 4rem;
    }
    ${break_points.sm} {
        width: 100%;
        text-align: center;
        margin-left: 4rem;
    }
    ${break_points.Ig} {
        width: 100%;
        margin-left: 4rem;
        text-align: center;
    }
    ${break_points.tablet_landscape_down} {
        width: 100%;
        margin-left: 4rem;
        text-align: center;
    }

    ${break_points.tablet_landscape_only} {
        width: 100%;
        margin-left: 4rem;
        text-align: center;
    }
`

const Left = styled.div`
    width: 35%;
    ${break_points.phone_only} {
        display: none;
    }
    ${break_points.tablet_landscape_down} {
        display: none;
    }

    ${break_points.tablet_landscape_only} {
        display: none;
    }
`
const Center = styled.div`
    width: 30%;
    ${break_points.phone_only} {
        width: 100%;
        text-align: center;
    }
    ${break_points.tablet_landscape_down} {
        width: 100%;
        text-align: center;
    }

    ${break_points.tablet_landscape_only} {
        width: 100%;
        text-align: center;
    }
`
const Right = styled.div`
    width: 35%;
    text-align: right;
    ${break_points.phone_only} {
        display: none;
    }
    ${break_points.tablet_landscape_down} {
        display: none;
    }

    ${break_points.tablet_landscape_only} {
        display: none;
    }
`

export default function Footers() {
    return (
        <>
            <Conatainer>
                <Left>
                    <FooterLeft />
                </Left>
                <Center>
                    <FooterCenter />
                </Center>
                <Right>
                    <FooterRight />
                </Right>
            </Conatainer>
        </>
    )
}
