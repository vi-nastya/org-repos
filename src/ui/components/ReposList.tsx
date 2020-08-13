import React, { useState } from 'react'
import { RepoData } from '../../ts/api-types'
import { Table, Space, Row, Col, Button } from 'antd'
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
    render: (count: number, data: RepoData) => (
      <>
        <EyeOutlined /> {data.watchers}
      </>
    ),
  },
  {
    title: 'Stargazers',
    dataIndex: 'stargazers',
    key: 'stargazers',
    render: (count: number, data: RepoData) => (
      <>
        <StarOutlined /> {data.stargazers}
      </>
    ),
  },
  {
    title: 'Forks',
    dataIndex: 'forks',
    key: 'forks',
    render: (count: number, data: RepoData) => (
      <>
        <ForkOutlined /> {data.forks}
      </>
    ),
  },
]

export const ReposList: React.FC<{ repos: RepoData[] }> = ({ repos }) => {
  const [loadings, setLoadings] = useState<boolean[]>([])

  const enterLoading = (index: number) => {
    const newLoadings = [...loadings]
    newLoadings[index] = true

    setLoadings(newLoadings)

    setTimeout(() => {
      const newLoadings = [...loadings]
      newLoadings[index] = false

      setLoadings(newLoadings)
    }, 2000)
  }
  return (
    <>
      <Row>
        <Col span={20} offset={2}>
          <Table columns={columns} dataSource={repos} pagination={false} />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={6}>
          <Button
            type="primary"
            loading={loadings[0]}
            size="large"
            block
            onClick={() => enterLoading(0)}
          >
            Load more
          </Button>
        </Col>
      </Row>
    </>
  )
}
