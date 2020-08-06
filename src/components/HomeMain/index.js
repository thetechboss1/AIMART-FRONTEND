import React from 'react';
import { Card, Row, Col } from 'antd';
import styles from './index.module.css';
import Charts from '../Charts'
import AvailableProperties from '../AvailableProperties'

export default function index() {

    return (
        <div className={styles.view}>
            <Row>
                <Col>
                    <Card hoverable title="Properties">
                        <p>Properties</p>
                    </Card>
                </Col>
                <Col>
                    <Card hoverable title="Realtors">
                        <p>Realtors</p>
                    </Card>
                </Col>
                <Col>
                    <Card hoverable title="Customers">
                        <p>Customers</p>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Charts/>
            <br/>
            <AvailableProperties/>
        </div>
    )
}
