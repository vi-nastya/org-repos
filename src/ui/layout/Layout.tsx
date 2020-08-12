import React from 'react'
import { Layout } from 'antd'

export const PageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { Header, Footer, Content } = Layout
  return (
    <Layout>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}
