import { action } from "typesafe-actions"
import { AlbumProps } from "./types"

export function albumSearchRequestApi(artist: string) {
    return action('@album/REQUEST_API', { artist })
}

// Save the data
export function albumSearchSave(data: AlbumProps[]) {
    return action('@album/SAVE', data)
}

