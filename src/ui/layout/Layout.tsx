import React from 'react'
import { Layout } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

export const PageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { Header, Footer, Content } = Layout
  return (
    <Layout>
      <Header>
        <GithubOutlined />
        Header
      </Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}
