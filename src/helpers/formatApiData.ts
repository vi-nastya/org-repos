import { RepoData, RepoDataApi } from '../ts/api-types'

export const formatApiData = (dataFromApi: RepoDataApi): RepoData => {
  return {
    created: dataFromApi.created_at,
    description: dataFromApi.description,
    name: dataFromApi.full_name,
    url: dataFromApi.html_url,
    forks: dataFromApi.forks_count,
    stargazers: dataFromApi.stargazers_count,
    watchers: dataFromApi.watchers_count,
  }
}
