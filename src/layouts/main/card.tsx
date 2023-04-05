import React from 'react'
import { Col, Divider, Row } from 'antd'
import CardComponents from '@/src/containers/card/cardComponents'

const style: React.CSSProperties = {}

const Card: React.FC = () => (
    <>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                    <CardComponents />
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                    {' '}
                    <CardComponents />
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                    {' '}
                    <CardComponents />
                </div>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                    <CardComponents />
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                    {' '}
                    <CardComponents />
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                    {' '}
                    <CardComponents />
                </div>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                    <CardComponents />
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                    {' '}
                    <CardComponents />
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                    {' '}
                    <CardComponents />
                </div>
            </Col>
        </Row>
    </>
)

export default Card
