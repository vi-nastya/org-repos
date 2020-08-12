import React, { useState, useEffect } from 'react'
import { fetchRepos } from './api/api'
import { formatApiData } from './helpers/formatApiData'
import { PageLayout } from './ui/layout/Layout'
import { RepoSearch } from './ui/components/RepoSearch'
import { RepoData } from './ts/api-types'
import { ReposList } from './ui/components/ReposList'

const App = () => {
  const [repos, setRepos] = useState<RepoData[]>([])
  useEffect(() => {
    const fetchData = async (orgName: string) => {
      let res = null
      try {
        res = await fetchRepos(orgName)

        setRepos(res.map((el: any) => formatApiData(el)))
      } catch (error) {
        console.log(error)
      }
    }

    fetchData('facebook')
  }, [])

  return (
    <div className="App">
      <PageLayout>
        <RepoSearch />
        <ReposList repos={repos} />
      </PageLayout>
    </div>
  )
}

export default App
