import React from 'react'
import { Layout } from 'antd'
import Icon, { GithubFilled } from '@ant-design/icons'

export const PageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { Header, Footer, Content } = Layout
  return (
    <Layout>
      <Header>
        <Icon
          type="github"
          component={() => <GithubFilled />}
          style={{ color: 'white' }}
        />
        Header
      </Header>
      <Content>{children}</Content>
      <Footer>© Anastasia Videneeva</Footer>
    </Layout>
  )
}
