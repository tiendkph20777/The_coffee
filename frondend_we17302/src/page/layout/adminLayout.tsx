import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    WindowsOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const AdminLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ padding: 10, minHeight: 685 }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['2']}
                    items={[
                        {
                            key: '1',
                            icon: <WindowsOutlined />,
                            label: <Link to={'/'}>Back To Home Page</Link>,
                        },
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: <Link to={'/admin/products'}>Admin </Link>,
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: <Link to={'/admin/products'}>Products</Link>,
                        },
                        {
                            key: '4',
                            icon: <UploadOutlined />,
                            label: <Link to={'/admin/category'}>Categpry</Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ paddingLeft: 20, background: colorBgContainer }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <main><Outlet /></main>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;