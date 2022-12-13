import React from 'react';
import { DownOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip, Item } from 'antd';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

function DefaultLayout({ children }) {
    const { Header, Footer, Sider, Content } = Layout;
    // function handleClick(e){
    // }
const items = [
    {
        label: (<Link to={`/`} style={{textDecoration:"none"}}>Home</Link>),
        key: '1',
        icon: <HomeOutlined />,
        path: `/`,
    },
    {
        label: (<Link to={`/login`} style={{textDecoration:"none"}} >Login</Link>),
        key: '2',
        icon: <UserOutlined />,
        path: `/login`,
    },
    {
        label: (<Link to={`/register`} style={{textDecoration:"none"}}>Register</Link>),
        key: '3',
        icon: <UserOutlined />,
        path: '/register'
    },
    {
        label: (<Link to={`/turf`} style={{textDecoration:"none"}}>Turfs</Link>),
        key: '4',
        icon: <UserOutlined />,
    },
];
const menuProps = {
    items,
};
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
                            Football Booking
                        </Dropdown.Button>
                    </Space>
                    
                </Header>
                <Content style={{
                       
                        width: '100%',
                        height:'90vh'
                    }}>{children}</Content>
                <Footer
                    
                ></Footer>
            </Layout>
        </>
    );
}

export default DefaultLayout;
