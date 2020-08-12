import React, { useEffect } from 'react'
import { fetchRepos } from './api/api'
import { formatApiData } from './helpers/formatApiData'
import { PageLayout } from './ui/layout/Layout'
import { RepoSearch } from './ui/components/RepoSearch'

const App = () => {
  useEffect(() => {
    const fetchData = async (orgName: string) => {
      let res = null
      try {
        res = await fetchRepos(orgName)

        console.log(
          'formatted',
          res.map((el: any) => formatApiData(el))
        )
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
      </PageLayout>
    </div>
  )
}

export default App
