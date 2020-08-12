import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { fetchRepos } from './api/api'
import { RepoData } from './ts/api-types'
import { formatApiData } from './helpers/formatApiData'

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
