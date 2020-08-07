import React from 'react';
import { Breadcrumb, Row, Col} from 'antd';
import ViewProfile from '../../components/ViewProfile';
import EditProfile from '../../components/EditProfile';

export default function index() {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>
                    Dashboard
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    My Profile
                </Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col span={10}>
                    <ViewProfile/>
                </Col>
                <Col span={14}>
                    <EditProfile/>
                </Col>
            </Row>
        </div>
    )
}
