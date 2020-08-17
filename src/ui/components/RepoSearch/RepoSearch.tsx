import React from 'react'
import { connect } from 'react-redux'
import { Input } from 'antd'
import { loadRepos, setOrganizationName } from '../../../store/reducers'
import './styles.css'

const { Search } = Input

const mapDispatchToProps = {
  loadRepos,
  setOrganizationName,
}

type RepoSearchProps = {
  loadRepos: () => void
  setOrganizationName: (orgName: string) => void
}

const RepoSearchConnected: React.FC<RepoSearchProps> = ({
  loadRepos,
  setOrganizationName,
}) => {
  return (
    <div className="searchWrapper">
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={(value) => {
          setOrganizationName(value)
          loadRepos()
        }}
      />
    </div>
  )
}

const RepoSearch = connect(null, mapDispatchToProps)(RepoSearchConnected)

export default RepoSearch
