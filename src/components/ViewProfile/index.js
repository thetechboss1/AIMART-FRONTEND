import React from 'react';
import { Card, Typography } from 'antd';

const { Meta } = Card;


export default function index() {
    return (
        <div>
            <Card
            cover={<img alt="Profile" src=""/>}
            >
                <Meta title="Profile Name" description="User Type / Role"/>
                <Card.Grid>Refferred Realtors</Card.Grid>
                <Card.Grid>Refferred Customers</Card.Grid>
            </Card>
        </div>
    )
}
