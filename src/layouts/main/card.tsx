import React from 'react'
import { Col, Row } from 'antd'
import CardComponents from '@/src/containers/card/cardComponents'
import styled from 'styled-components'
import { break_points } from '@/styles/resposive'

const CardDiv = styled.div`
    margin-right: 2rem;
    display: flex;
    ${break_points.phone_only} {
        width: 100%;
    }

    ${break_points.tablet_landscape_only} {
        width: 100%;
    }
    ${break_points.tablet_landscape_up} {
        width: 100%;
    }
    ${break_points.tablet_landscape_down} {
        width: 130%;
    }
    ${break_points.xxl} {
        width: 100%;
    }
`

const Card: React.FC = () => (
    <>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <CardDiv>
                <Col className="gutter-row">
                    <CardComponents />
                </Col>
            </CardDiv>
        </Row>
    </>
)

export default Card
