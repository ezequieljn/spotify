import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type SongAction = ActionType<typeof actions>

export interface SongState {
    readonly data: songProps[];
}

export interface songProps {
    id: string;
    album_id: string;
    artist: string;
    name: string;
    image: string;
    minutes: string;
}

