import React from 'react'
import { RepoData } from '../../../ts/apiTypes'
import { Table, Row, Col, Button } from 'antd'
import { StarOutlined, ForkOutlined, EyeOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { ReposStateType } from '../../../ducks/repos-duck'
import { loadRepos } from '../../../ducks/repos-duck'
import './styles.css'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name: string, data: RepoData) => (
      <a href={data.url} target="_blank">
        {data.name}
      </a>
    ),
  },
  {
    title: 'Watchers',
    dataIndex: 'watchers',
    key: 'watchers',
    render: (watchers: number, data: RepoData) => (
      <>
        <EyeOutlined /> {data.watchers}
      </>
    ),
  },
  {
    title: 'Stargazers',
    dataIndex: 'stargazers',
    key: 'stargazers',
    render: (stargazers: number, data: RepoData) => (
      <>
        <StarOutlined /> {data.stargazers}
      </>
    ),
  },
  {
    title: 'Forks',
    dataIndex: 'forks',
    key: 'forks',
    render: (forks: number, data: RepoData) => (
      <>
        <ForkOutlined /> {data.forks}
      </>
    ),
  },
]

const mapStateToProps = (state: ReposStateType) => ({
  repos: state.data,
  isLoadingData: state.loading,
  hasLoadedAllRepos: state.loadedAll,
})

const mapDispatchToProps = {
  loadRepos,
}

type ReposListProps = {
  repos: RepoData[]
  isLoadingData: boolean
  hasLoadedAllRepos: boolean
  loadRepos: () => void
}

const ConnectedReposList: React.FC<ReposListProps> = ({
  repos,
  isLoadingData,
  hasLoadedAllRepos,
  loadRepos,
}) => (
  <>
    <Table columns={columns} dataSource={repos} pagination={false} />

    {repos.length > 0 && !hasLoadedAllRepos && (
      <Row justify="center" className="loadMoreButton">
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

const ReposList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedReposList)

export default ReposList
