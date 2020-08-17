import React from 'react'
import { PageLayout } from './ui/layout/Layout'
import RepoSearch from './ui/components/RepoSearch/RepoSearch'
import ReposList from './ui/components/ReposList/ReposList'

const App = () => {
  return (
    <div className="App">
      <PageLayout>
        <RepoSearch />
        <ReposList />
      </PageLayout>
    </div>
  )
}

export default App
