import React from 'react';
import { DownOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
function handleMenuClick(e,e1) {

};
const items = [
    {
        label: 'Home',
        key: '1',
        icon: <HomeOutlined />,
        url: `/register`,
    },
    {
        label: 'Login',
        key: '2',
        icon: <UserOutlined />,
        url: `/login`,
    },
    {
        label: 'Register',
        key: '3',
        icon: <UserOutlined />,
        url: '/register'
    },
];
const menuProps = {
    items,
    onClick: handleMenuClick(items.url,items.element),
};
function DefaultLayout({ children }) {
    return (
        <>
            <Layout>
                <Header
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                    }}
                >
                    <Space wrap>
                        <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
                            Home
                        </Dropdown.Button>
                    </Space>
                </Header>
                <Content>{children}</Content>
                <Footer
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                    }}
                >Footer</Footer>
            </Layout>
        </>
    );
}

export default DefaultLayout;
