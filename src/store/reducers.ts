import {
  LOAD_REPOS_ERROR,
  LOAD_REPOS_LOADING,
  LOAD_REPOS_SUCCESS,
} from './actions'
import { RepoData } from '../ts/api-types'

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
