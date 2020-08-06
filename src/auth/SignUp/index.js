import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

export default class index extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = () => {
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <Card hoverable className={styles.loginCard}>
                    
                    <Form
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.handleSubmit}
                    >
                        <Form.Item
                        rules={[
                        {
                            required: true,
                            message: 'Please input your First Name',
                        },
                        ]}
                        >
                            <Input id="firstName" prefix={<UserOutlined/>} placeholder="First Name" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Last Name',
                        },
                        ]}
                        >
                            <Input id="lastName" prefix={<UserOutlined/>} placeholder="Last Name" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item
                        rules={[
                        {
                            required: true,
                            message: 'Please input your email address',
                        },
                        ]}
                        >
                            <Input id="email" prefix={<UserOutlined/>} placeholder="Email Address" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                        ]}
                        >
                            <Input id="password" prefix={<LockOutlined/>} type="password" placeholder="Password" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item
                        rules={[
                        {
                            required: true,
                            message: 'Please confirm your password',
                        },
                        ]}
                        >
                            <Input id="confirmPassword" prefix={<LockOutlined/>} type="password" placeholder="Confirm Password" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                            Log in
                            </Button>
                            <p>Already have an account?</p>
                            <Link to="/">Sign In</Link>
                        </Form.Item>
                        </Form>
                </Card>
            </div>
        )
    }
}
