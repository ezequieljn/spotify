import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type AlbumAction = ActionType<typeof actions>

export interface AlbumState {
    readonly data: responseProps[];
}


export interface responseProps {
    id: string,
    name: string,
    artist: string,
    created_at: string
}