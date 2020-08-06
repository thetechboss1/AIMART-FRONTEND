import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../flux/actions/errorActions';

export default class index extends Component {
    state = {
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
                                message: 'Please input your Email!',
                            },
                            ]}
                        >
                            <Input id="email" prefix={<UserOutlined/>} placeholder="Email" onChange={this.handleChange}/>
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
                        <Form.Item>
                            <Form.Item valuePropName="checked" noStyle>
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
                            <p>Don't have an account?</p>
                            <Link to="/signup">Register now!</Link>
                        </Form.Item>
                        </Form>
                </Card>
            </div>
        )
    }
}
