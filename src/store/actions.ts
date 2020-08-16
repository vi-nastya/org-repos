export const LOAD_REPOS_LOADING = 'REDUX_SAGA_LOAD_REPOS_LOADING'
export const LOAD_REPOS_SUCCESS = 'REDUX_SAGA_LOAD_REPOS_SUCCESS'
export const LOAD_REPOS_ERROR = 'REDUX_SAGA_LOAD_REPOS_ERROR'

// @ts-ignore
export const loadRepos = () => (dispatch) => {
  dispatch({ type: LOAD_REPOS_LOADING })
}
