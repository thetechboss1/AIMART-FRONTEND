import React, { Component } from 'react';
import { Form, Input, Button, Upload, Card, DatePicker } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

export default class index extends Component {
    state = {
        firstname: '',
        lastname: '',
        phone_number: '',
        address: '',
        company: '',
        photo: '',
        referred_by: '',
        id_card: '',
        gender: '',
        country: '',
        state: '',
        marital_status: '',
        date_of_birth: '',
        editUserId: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = () => {
        console.log(this.state);
    }
    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      };
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
                                message: 'Please input your first name',
                            },
                            ]}
                        >
                            <Input id="firstname" prefix={<UserOutlined/>} placeholder="First name" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item
                            rules={[
                            {
                                required: true,
                                message: 'Please input your last name',
                            },
                            ]}
                        >
                            <Input id="lastname" prefix={<UserOutlined/>} placeholder="Last name" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item
                            rules={[
                            {
                                required: true,
                                message: 'Please input your phone number',
                            },
                            ]}
                        >
                            <Input id="phone_number" prefix={<LockOutlined/>} placeholder="Phone number" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item
                            rules={[
                            {
                                required: true,
                                message: 'Please input your address',
                            },
                            ]}
                        >
                            <Input id="address" prefix={<LockOutlined/>} placeholder="Address" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item
                            rules={[
                            {
                                required: true,
                                message: 'Please input your company',
                            },
                            ]}
                        >
                            <Input id="company" prefix={<LockOutlined/>} placeholder="Company" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item
                            label="Upload"
                            valuePropName="fileList"
                            getValueFromEvent={this.normFile}
                        >
                            <Upload id="photo" action="/upload.do" listType="picture">
                            <Button>
                                Click to upload photo
                            </Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item
                            rules={[
                            {
                                required: true,
                                message: 'Please input your referrer id',
                            },
                            ]}
                        >
                            <Input id="referred_by" prefix={<LockOutlined/>} placeholder="Referrer Id" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item
                            label="Upload"
                            valuePropName="fileList"
                            getValueFromEvent={this.normFile}
                        >
                            <Upload id="id_card" action="/upload.do" listType="picture">
                            <Button>
                                Click to upload id card
                            </Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item
                            rules={[
                            {
                                required: true,
                                message: 'Please input your gender',
                            },
                            ]}
                        >
                            <Input id="gender" prefix={<LockOutlined/>} placeholder="Gender" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item
                            rules={[
                            {
                                required: true,
                                message: 'Please input your country',
                            },
                            ]}
                        >
                            <Input id="country" prefix={<LockOutlined/>} placeholder="Country" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item
                            rules={[
                            {
                                required: true,
                                message: 'Please input your state',
                            },
                            ]}
                        >
                            <Input id="state" prefix={<LockOutlined/>} placeholder="State" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item
                            rules={[
                            {
                                required: true,
                                message: 'Please input your marital status',
                            },
                            ]}
                        >
                            <Input id="marital_status" prefix={<LockOutlined/>} placeholder="Marital status" onChange={this.handleChange}/>
                        </Form.Item>
                        <Form.Item 
                        name="date-picker" 
                        label="DatePicker" 
                        rules={[
                            {
                                required: true,
                                message: 'Please input your date of birth',
                            },
                            ]}
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                            Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
