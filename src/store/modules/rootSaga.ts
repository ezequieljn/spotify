import { all } from 'redux-saga/effects';
import { album } from './album/sagas';
import { artist } from './artist/sagas';
import { song } from './song/sagas';
import { artist_album_song } from './global/sagas';

export default function* rootSaga(): any {
    yield all([album, artist, song, artist_album_song])
}