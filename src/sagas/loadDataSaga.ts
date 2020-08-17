import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
  LOAD_REPOS_ERROR,
  LOAD_REPOS_LOADING,
  LOAD_REPOS_SUCCESS,
  StateType,
} from '../store/reducers'
import { fetchRepos } from '../api/api'
import { select } from 'redux-saga/effects'
import { REPOS_PER_PAGE } from '../constants'

const getNewPageNumber = (state: StateType) =>
  Math.ceil(state.data.length / REPOS_PER_PAGE)
const getOrgName = (state: StateType) => state.orgName

// worker saga
// @ts-ignore
function* fetchReposData(action) {
  try {
    const pageNumber = yield select(getNewPageNumber)
    const orgName = yield select(getOrgName)

    const repos = yield fetchRepos(orgName, pageNumber)
    yield put({ type: LOAD_REPOS_SUCCESS, data: repos })
  } catch (e) {
    yield put({ type: LOAD_REPOS_ERROR, error: e.message })
  }
}

export function* loadDataSaga() {
  // Allows concurrent fetches of repos
  yield takeEvery(LOAD_REPOS_LOADING, fetchReposData)
  // Does not allow concurrent fetches of repos
  // yield takeLatest(LOAD_REPOS_LOADING, fetchReposData);
}

export default loadDataSaga
