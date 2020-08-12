import React from 'react'
import { Input } from 'antd'

const { Search } = Input

export const RepoSearch = () => {
  return (
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={(value) => console.log(value)}
    />
  )
}
