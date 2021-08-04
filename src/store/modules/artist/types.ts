import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type ArtistAction = ActionType<typeof actions>

export interface ArtistState {
    readonly artistMain: artistMainProps[];
    readonly artistAll: artistAllProps[];
}

export interface artistMainProps {
    id: string;
    artist: string;
    image: string
}

export interface artistAllProps {
    id: string;
    artist: string;
    image: string
}