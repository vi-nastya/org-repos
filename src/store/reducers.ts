import { RepoData } from '../ts/api-types'

export const LOAD_REPOS_LOADING = 'REDUX_SAGA_LOAD_REPOS_LOADING'
export const LOAD_REPOS_SUCCESS = 'REDUX_SAGA_LOAD_REPOS_SUCCESS'
export const LOAD_REPOS_ERROR = 'REDUX_SAGA_LOAD_REPOS_ERROR'

// @ts-ignore
export const loadRepos = (orgName: string) => {
  return { type: LOAD_REPOS_LOADING, payload: orgName }
}

export type StateType = {
  data: RepoData[]
  loading: boolean
  error: string
}

const initialState: StateType = {
  data: [],
  loading: false,
  error: '',
}

// @ts-ignore
const reduxSagaReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REPOS_LOADING: {
      return {
        ...state,
        loading: true,
        error: '',
      }
    }
    case LOAD_REPOS_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false,
      }
    }
    case LOAD_REPOS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }
    default: {
      return state
    }
  }
}

export default reduxSagaReducer
