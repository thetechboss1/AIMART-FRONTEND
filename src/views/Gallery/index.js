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
                    Gallery
                </Breadcrumb.Item>
            </Breadcrumb>
            
        </div>
    )
}
