import React, { useState } from 'react'
import { RepoData } from '../../ts/api-types'
import { Table, Space, Row, Col, Button } from 'antd'
import { StarOutlined, ForkOutlined, EyeOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { StateType } from '../../store/reducers'
import { loadRepos } from '../../store/reducers'

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

const mapStateToProps = (state: StateType) => {
  return { repos: state.data, isLoadingData: state.loading }
}

// @ts-ignore
const mapDispatchToProps = {
  loadRepos,
}

const ConnectedReposList: React.FC<{
  repos: RepoData[]
  isLoadingData: boolean
  loadRepos: () => void
}> = ({ repos, isLoadingData, loadRepos }) => {
  return (
    <>
      <Row>
        <Col span={20} offset={2}>
          <Table columns={columns} dataSource={repos} pagination={false} />
        </Col>
      </Row>
      {repos.length > 0 && (
        <Row justify="center">
          <Col span={6}>
            <Button
              type="primary"
              loading={isLoadingData}
              size="large"
              block
              onClick={() => loadRepos()}
            >
              Load more
            </Button>
          </Col>
        </Row>
      )}
    </>
  )
}

const ReposList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedReposList)

export default ReposList
