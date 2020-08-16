import React from 'react'
import { connect } from 'react-redux'
import { Input } from 'antd'
import { loadRepos } from '../../store/reducers'

const { Search } = Input

// @ts-ignore
const mapDispatchToProps = {
  getRepos: (orgName: string) => loadRepos(orgName),
}

// @ts-ignore
const RepoSearchConnected = ({ getRepos }) => {
  return (
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={(value) => getRepos(value)}
    />
  )
}

const RepoSearch = connect(null, mapDispatchToProps)(RepoSearchConnected)

export default RepoSearch
