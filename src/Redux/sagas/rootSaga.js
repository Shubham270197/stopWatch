import { takeEvery, takeLatest } from 'redux-saga/effects'

import content from '../actionType'
import getUserSaga from '../sagas/content'

export default function* watcherSaga() {
    yield takeLatest(content.GET_USER_DATA_INITIATE, getUserSaga)
}