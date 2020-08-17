import { RepoData } from '../ts/api-types'

export const LOAD_REPOS_LOADING = 'REDUX_SAGA_LOAD_REPOS_LOADING'
export const LOAD_REPOS_SUCCESS = 'REDUX_SAGA_LOAD_REPOS_SUCCESS'
export const LOAD_REPOS_ERROR = 'REDUX_SAGA_LOAD_REPOS_ERROR'

export const SET_ORGANIZATION_NAME = 'SET_ORGANIZATION_NAME'
export const CLEAR_ORGANIZATION_NAME = 'CLEAR_ORGANIZATION_NAME'

// @ts-ignore
export const loadRepos = () => {
  return { type: LOAD_REPOS_LOADING }
}

export const setOrganizationName = (orgName: string) => {
  return { type: SET_ORGANIZATION_NAME, payload: orgName }
}

export type StateType = {
  data: RepoData[]
  loading: boolean
  error: string
  orgName: string | null
}

const initialState: StateType = {
  data: [],
  loading: false,
  error: '',
  orgName: null,
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
        data: [...state.data, ...action.data],
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
    case SET_ORGANIZATION_NAME: {
      return {
        ...state,
        data: [],
        error: '',
        orgName: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default reduxSagaReducer
