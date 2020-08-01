import React from 'react';
import { Layout, Menu } from 'antd';
import styles from './index.module.css';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Dashboard from '../../views/DashboardHome';
import MyProfile from '../../views/MyProfile';
import Properties from '../../views/Properties';
import Reports from '../../views/Reports';
import Support from '../../views/Support';
import Logout from '../../views/Logout';

const { Header, Content, Footer, Sider } = Layout;

export default function index() {
    //Use one landing page
    //Use switch to test user type and render different views for each type
    return (
        <Router>
            <Layout>
                <Sider
                className={styles.sidebar}
                breakpoint="md"
                collapsedWidth="0"
                >
                    <div className={styles.logo}>Logo</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.ItemGroup key="g1" title="Personal">
                            <Menu.Item key="1">
                                <span>Dashboard</span>
                                <Link to="/" />
                            </Menu.Item>
                            <Menu.Item key="2">
                                <span>My Profile</span>
                                <Link to="/profile" />
                            </Menu.Item>
                            <Menu.Item key="3">
                                <span>Properties</span>
                                <Link to="/properties" />
                            </Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g2" title="Administration">
                            <Menu.Item key="4">
                                <span>Customers</span>
                                <Link to="/customers" />
                            </Menu.Item>
                            <Menu.Item key="5">
                                <span>Realtors</span>
                                <Link to="/realtors" />
                            </Menu.Item>
                            <Menu.Item key="6">
                                <span>Administrators</span>
                                <Link to="/administrators" />
                            </Menu.Item>
                        </Menu.ItemGroup>  
                        <Menu.ItemGroup key="g2" title="Others">
                            <Menu.Item key="7">
                                <span>Reports</span>
                                <Link to="/reports" />
                            </Menu.Item>
                            <Menu.Item key="8">
                                <span>Support</span>
                                <Link to="/support" />
                            </Menu.Item>
                            <Menu.Item key="9">
                                <span>Logout</span>
                                <Link to="/logout" />
                            </Menu.Item>
                        </Menu.ItemGroup> 
                    </Menu>
                </Sider>
                <Layout>
                    <Header/>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Switch>
                            <Route exact path="/" component={Dashboard}/>
                            <Route path="/profile" component={MyProfile}/>
                            <Route path="/properties" component={Properties}/>
                            <Route path="/reports" component={Reports}/>
                            <Route path="/support" component={Support}/>
                            <Route path="/logout" component={Logout}/>
                        </Switch>
                    </Content>
                    <Footer>Aimat Realtors</Footer>
                </Layout>
            </Layout>
        </Router>
        
    )
}
