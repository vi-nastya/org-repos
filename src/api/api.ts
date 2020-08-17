import axios from 'axios'
import { REPOS_PER_PAGE } from '../constants'
import { RepoDataApi } from '../ts/api-types'

const API_URL = 'https://api.github.com'

/*
  Other params:
  sort: created/updated/full_name
  direction: asc/desc
  per_page: max 100
  page type: all, public, private, forks, sources, member, internal (default ALL)
*/
export const fetchRepos = (organization: string, pageNumber = 0) => {
  return axios
    .get(
      `${API_URL}/orgs/${organization}/repos?per_page=${REPOS_PER_PAGE}&page=${pageNumber}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    )
    .then((response) => response.data as RepoDataApi[])
    .catch((e) => {
      throw new Error(e.response.statusText)
    })
}
