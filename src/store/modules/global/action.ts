import { action } from "typesafe-actions"

export function artistAlbumSongSearchApi(artist: string, page: number) {
    return action('@artist_album_song/REQUEST_API', { artist, page })
}
