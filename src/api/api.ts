import axios from 'axios'

const API_URL = 'https://api.github.com'

/*
Other params:
sort: created/updated/full_name
direction: asc/desc
per_page: max 100
page
type: all, public, private, forks, sources, member, internal (default ALL)
*/
export const fetchRepos = (organization: string) => {
  return axios
    .get(`${API_URL}/orgs/${organization}/repos?per_page=10&page=0`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    })
    .then((response) => {
      console.log(response.data)
      return response.data
    })
}
