import React from 'react';
import { Breadcrumb } from 'antd';

export default function index() {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>
                    Dashboard
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    Support
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}
