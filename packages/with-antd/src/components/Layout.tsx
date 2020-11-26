import React, { useState } from 'react';
import { Layout as AntLayout, Menu, Skeleton } from 'antd';
import { HomeOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = AntLayout;

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <AntLayout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '15px 0' }}>
          <Skeleton.Avatar active={false} size={60} shape="circle" />
        </div>
        {/* <div className="logo" /> */}
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
        </Menu>
      </Sider>
      <AntLayout className="site-layout">
        <Header className="site-layout-background" style={{ padding: '0 16px' }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </AntLayout>
    </AntLayout>
  );
};
