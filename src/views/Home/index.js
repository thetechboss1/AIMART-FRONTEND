import React from 'react';
import { Card, Row, Col } from 'antd';
import styles from './index.module.css';
import HomeMain from '../../components/HomeMain';
import HomeAside from '../../components/HomeAside';
import { Breadcrumb } from 'antd';

export default function index() {

    return (
        <div className={styles.view}>
            <Breadcrumb>
                <Breadcrumb.item>
                    Dashboard
                </Breadcrumb.item>
                <Breadcrumb.item>
                    Home
                </Breadcrumb.item>
            </Breadcrumb>
            <Row>
                <Col span={18}><HomeMain/></Col>
                <Col span={6}><HomeAside/></Col>
            </Row>
        </div>
    )
}
