import { takeLatest, call, put, all } from 'redux-saga/effects'
import { api } from '../../../services'
import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import { artistMainProps, artistAllProps } from './types'


interface responseProps {
    data: {
        artistMain: artistMainProps[],
        artistAll: artistAllProps[]
    }
}

export function* artistRequest({ payload }: ActionType<typeof actions.artistSearch>) {
    try {
        const { artist } = payload
        const { data: response }: responseProps = yield call(api.post, '/artist', { artist });
        yield put(actions.artistSearchSave(response))


    } catch (err) {

    }
}


export const artist = all([
    takeLatest('@album/REQUEST_API', artistRequest)
])