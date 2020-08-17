import React from 'react'
import { connect } from 'react-redux'
import { Input } from 'antd'
import { loadRepos, setOrganizationName } from '../../store/reducers'

const { Search } = Input

// @ts-ignore
const mapDispatchToProps = {
  loadRepos,
  setOrganizationName,
}

// @ts-ignore
const RepoSearchConnected = ({ loadRepos, setOrganizationName }) => {
  return (
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={(value) => {
        setOrganizationName(value)
        loadRepos()
      }}
    />
  )
}

const RepoSearch = connect(null, mapDispatchToProps)(RepoSearchConnected)

export default RepoSearch
