import React from 'react'
import { RepoData } from '../../ts/api-types'
import { RepoItem } from './RepoItem'
import { Table, Space, Row, Col } from 'antd'
import { StarOutlined, ForkOutlined, EyeOutlined } from '@ant-design/icons'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string, data: RepoData) => (
      <a href={data.url} target="_blank">
        {data.name}
      </a>
    ),
  },
  {
    title: 'Watchers',
    dataIndex: 'watchers',
    key: 'watchers',
  },
  {
    title: 'Stargazers',
    dataIndex: 'stargazers',
    key: 'stargazers',
  },
  {
    title: 'Forks',
    dataIndex: 'forks',
    key: 'forks',
  },
]

export const ReposList: React.FC<{ repos: RepoData[] }> = ({ repos }) => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Table columns={columns} dataSource={repos} />
      </Col>
    </Row>

    //     <Space direction="vertical">
    //      {repos.map((repo, index) => (
    //       <RepoItem repository={repo} key={`repo-${index}`} />
    //     ))}
    //   </Space>
  )
}
