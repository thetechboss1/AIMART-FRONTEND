import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.css';

export default class index extends Component {
    render() {
        return (
            <div>
                <Card hoverable className={styles.loginCard}>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        >
                        <Form.Item
                            name="email"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined/>} placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined/>}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a href="#">
                            Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                            Log in
                            </Button>
                            Or <a href="#">Register now!</a>
                        </Form.Item>
                        </Form>
                </Card>
            </div>
        )
    }
}
