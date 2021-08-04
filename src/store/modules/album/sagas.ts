import { takeLatest, call, put, all } from 'redux-saga/effects'
import { api } from '../../../services'
import { ActionType } from 'typesafe-actions'
import * as actions from './actions'


interface AlbumProps {
    id: string;
    name: string;
    artist: string;
    created_at: string;
    image: string
}
interface responseProps {
    data: AlbumProps[]
}

export function* albumRequest({ payload }: ActionType<typeof actions.albumSearchRequestApi>) {
    try {
        const { artist } = payload
        const { data: response }: responseProps = yield call(api.post, '/albums', { artist });
        yield put(actions.albumSearchSave(response))


    } catch (err) {

    }
}


export const album = all([
    takeLatest('@album/REQUEST_API', albumRequest)
])