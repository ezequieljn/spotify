import { applyMiddleware, createStore, Middleware, Reducer } from "redux";
import { AlbumAction, AlbumState } from "./modules/album/types";
import { ArtistAction, ArtistState } from "./modules/artist/types";
import { SongAction, SongState } from "./modules/song/types";
import { composeWithDevTools } from 'redux-devtools-extension';

export interface StoreState {
    album: AlbumState;
    artist: ArtistState;
    song: SongState
}

export type StoreAction = AlbumAction | ArtistAction | SongAction;

export default (redurcers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
    const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
    return createStore(redurcers, enhancer)
}