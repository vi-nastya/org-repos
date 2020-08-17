import { RepoData } from '../ts/apiTypes'

export const LOAD_REPOS_LOADING = 'LOAD_REPOS_LOADING'
export const LOAD_REPOS_SUCCESS = 'LOAD_REPOS_SUCCESS'
export const LOAD_REPOS_ERROR = 'LOAD_REPOS_ERROR'

export const SET_ORGANIZATION_NAME = 'SET_ORGANIZATION_NAME'

type ActionType = LoadReposActionType | SetOrganizationNameType

type LoadReposActionType =
  | LoadReposType
  | LoadReposSuccessType
  | LoadReposErrorType

type LoadReposType = {
  type: typeof LOAD_REPOS_LOADING
}

type LoadReposSuccessType = {
  type: typeof LOAD_REPOS_SUCCESS
  data: RepoData[]
}

type LoadReposErrorType = {
  type: typeof LOAD_REPOS_ERROR
  error: string
}

type SetOrganizationNameType = {
  type: typeof SET_ORGANIZATION_NAME
  payload: string
}

export const loadRepos = () => {
  return { type: LOAD_REPOS_LOADING }
}

export const setOrganizationName = (orgName: string) => {
  return { type: SET_ORGANIZATION_NAME, payload: orgName }
}

export type ReposStateType = {
  data: RepoData[]
  loading: boolean
  loadedAll: boolean
  error: string
  orgName: string | null
}

const initialState: ReposStateType = {
  data: [],
  loading: false,
  loadedAll: false,
  error: '',
  orgName: null,
}

const reposReducer = (state = initialState, action: ActionType) => {
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
        ...(action.data.length === 0 ? { loadedAll: true } : {}),
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
        loadedAll: false,
      }
    }
    default: {
      return state
    }
  }
}

export default reposReducer
