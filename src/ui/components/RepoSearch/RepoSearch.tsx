import React from 'react'
import { connect } from 'react-redux'
import { Input } from 'antd'
import {
  loadRepos,
  setOrganizationName,
  ReposStateType,
} from '../../../ducks/repos-duck'
import { Typography } from 'antd'
import './styles.css'

const { Text } = Typography

const { Search } = Input

const mapStateToProps = (state: ReposStateType) => {
  return {
    error: state.error,
  }
}

const mapDispatchToProps = {
  loadRepos,
  setOrganizationName,
}

type RepoSearchProps = {
  error: string
  loadRepos: () => void
  setOrganizationName: (orgName: string) => void
}

const RepoSearchConnected: React.FC<RepoSearchProps> = ({
  error,
  loadRepos,
  setOrganizationName,
}) => {
  return (
    <div className="searchWrapper">
      <Search
        placeholder="Organization name"
        enterButton="Find repositories"
        size="large"
        onSearch={(value) => {
          setOrganizationName(value)
          loadRepos()
        }}
      />
      {error && (
        <Text type="danger">
          Error occured while fetching repositories: {error}
        </Text>
      )}
    </div>
  )
}

const RepoSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoSearchConnected)

export default RepoSearch
