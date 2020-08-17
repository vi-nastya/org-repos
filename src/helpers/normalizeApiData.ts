import { RepoData, RepoDataApi } from '../ts/api-types'

export const normalizeApiData = (data: RepoDataApi): RepoData => {
  return {
    created: data.created_at,
    description: data.description,
    name: data.full_name,
    url: data.html_url,
    forks: data.forks_count,
    stargazers: data.stargazers_count,
    watchers: data.watchers_count,
  }
}
