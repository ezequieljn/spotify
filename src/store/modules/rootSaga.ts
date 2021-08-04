import { all } from 'redux-saga/effects';
import { album } from './album/sagas';
import { artist } from './artist/sagas';
import { song } from './song/sagas';

export default function* rootSaga(): any {
    yield all([album, artist, song])
}