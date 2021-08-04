import { takeLatest, call, put, all } from 'redux-saga/effects'
import { api } from '../../../services'
import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import { songProps } from './types'

interface responseProps {
    data: songProps[],
}

export function* songRequest({ payload }: ActionType<typeof actions.songSearchApi>) {
    try {
        const { artist } = payload
        const { data: response }: responseProps = yield call(api.post, '/songs', { artist });
        yield put(actions.songSearchSave(response))
    } catch (err) {

    }
}


export const song = all([
    takeLatest('@album/REQUEST_API', songRequest)
])