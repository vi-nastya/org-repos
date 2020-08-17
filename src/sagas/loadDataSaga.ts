import { put, takeEvery } from 'redux-saga/effects'
import {
  LOAD_REPOS_ERROR,
  LOAD_REPOS_LOADING,
  LOAD_REPOS_SUCCESS,
  ReposStateType,
} from '../ducks/repos-duck'
import { fetchRepos } from '../api/api'
import { select } from 'redux-saga/effects'
import { REPOS_PER_PAGE } from '../constants'
import { normalizeApiData } from '../helpers/normalizeApiData'

const getNewPageNumber = (state: ReposStateType) =>
  Math.ceil(state.data.length / REPOS_PER_PAGE)

const getOrgName = (state: ReposStateType) => state.orgName

// worker saga
function* fetchReposData() {
  try {
    const pageNumber = yield select(getNewPageNumber)
    const orgName = yield select(getOrgName)

    const repos = yield fetchRepos(orgName, pageNumber)
    yield put({ type: LOAD_REPOS_SUCCESS, data: repos.map(normalizeApiData) })
  } catch (e) {
    yield put({ type: LOAD_REPOS_ERROR, error: e.message })
  }
}

export function* loadReposSaga() {
  yield takeEvery(LOAD_REPOS_LOADING, fetchReposData)
}

export default loadReposSaga
