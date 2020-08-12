import React from 'react'
import { RepoData } from '../../ts/api-types'
import { StarOutlined, ForkOutlined, EyeOutlined } from '@ant-design/icons'

export const RepoItem: React.FC<{ repository: RepoData }> = ({
  repository,
}) => {
  return (
    <>
      <span>{repository.name}</span>
      <StarOutlined />
      <ForkOutlined />
      <EyeOutlined />
    </>
  )
}
