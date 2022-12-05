import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};
const items = [
    {
        label: '1st menu item',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: '2nd menu item',
        key: '2',
        icon: <UserOutlined />,
    },
    {
        label: '3rd menu item',
        key: '3',
        icon: <UserOutlined />,
    },
];
const menuProps = {
    items,
    onClick: handleMenuClick,
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
                            Dropdown
                        </Dropdown.Button>
                    </Space>
                </Header>
                <Content>{children}</Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
}

export default DefaultLayout;
