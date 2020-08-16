import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
  LOAD_REPOS_ERROR,
  LOAD_REPOS_LOADING,
  LOAD_REPOS_SUCCESS,
} from '../store/actions'
import { fetchRepos } from '../api/api'

function* fetchReposData() {
  try {
    // TODO: add param from input
    const repos = yield fetchRepos('facebook')
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
