import { takeLatest, call, put, all } from 'redux-saga/effects'
import { api } from '../../../services'
import { ActionType } from 'typesafe-actions'
import * as actions from './action'
import { songProps, AlbumProps, artistAllProps, artistMainProps } from './types'
import * as actionsAlbum from '../album/actions'
import * as actionsArtist from '../artist/actions'
import * as actionsSong from '../song/actions'
import * as actionsLoading from '../loadingApi/actions'



interface artistsResponseProps {
    data: {
        artistAll: artistAllProps[],
        artistMain: artistMainProps[]
    }
}
interface songsResponseProps {
    data: songProps[],
}
interface albumsResponseProps {
    data: AlbumProps[],
}

export function* artist_album_songRequest({ payload }: ActionType<typeof actions.artistAlbumSongSearchApi>) {
    try {
        const { artist, page } = payload
        console.log("artist: ", artist)
        if (artist) {
            yield put(actionsLoading.loadingApiTrue())

            const { data: artists }: artistsResponseProps = yield call(api.post, 'artist', { artist });
            const { data: songs }: songsResponseProps = yield call(api.post, 'songs', { artist });
            const { data: albums }: albumsResponseProps = yield call(api.post, 'albums', { artist, page });

            yield put(actionsArtist.artistSearchSave(artists))
            yield put(actionsAlbum.albumSearchSave(albums))
            yield put(actionsSong.songSearchSave(songs))
            yield put(actionsLoading.loadingApiFalse())
        } else {
            yield put(actionsArtist.artistSearchSave({ artistAll: [], artistMain: [] }))
            yield put(actionsAlbum.albumSearchSave([]))
            yield put(actionsSong.songSearchSave([]))
            return
        }

    } catch (err) {
        console.log("React", err)
    }
}


export const artist_album_song = all([
    takeLatest('@artist_album_song/REQUEST_API', artist_album_songRequest)
])