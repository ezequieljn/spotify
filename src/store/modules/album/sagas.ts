import { takeLatest, call, put, all } from 'redux-saga/effects'
import { api } from '../../../services'

interface responseProps {
    id: string,
    name: string,
    artist: string,
    created_at: string
}
interface dataProps {
    data: responseProps[]
}

export function* album() {
    try {

        const { data: response }: dataProps = yield call(api.get, '/albums');

    } catch (err) {

    }
}


export const albums = all([
    takeLatest('@album/REQUEST_APIdasdas', album)
])