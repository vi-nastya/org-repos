import React from 'react'
import { Layout } from 'antd'
import Icon, { GithubFilled } from '@ant-design/icons'
import './styles.css'
import { Typography } from 'antd'

const { Title, Link, Text } = Typography

export const PageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { Header, Footer, Content } = Layout
  return (
    <Layout>
      <Header className="header">
        <Icon
          type="github"
          component={() => <GithubFilled style={{ fontSize: 28 }} />}
          style={{ color: 'white', marginRight: 16 }}
        />
        <Title style={{ color: 'white', fontSize: '28px', marginBottom: 0 }}>
          Organization repositories finder
        </Title>
      </Header>
      <Content>{children}</Content>
      <Footer className="footer">
        <Text>© Anastasia Videneeva</Text>
        <Link href="https://github.com/vi-nastya/org-repos" target="_blank">
          View source code
        </Link>
      </Footer>
    </Layout>
  )
}
