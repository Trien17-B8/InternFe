import React from 'react'
import { Col, Row } from 'antd'
import CardComponents from '@/src/containers/card/cardComponents'
import styled from 'styled-components'

const CardDiv = styled.div`
    margin-right: 2rem;
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
