import { applyMiddleware, createStore, Middleware, Reducer } from "redux";
import { AlbumAction, AlbumState } from "./modules/album/types";
import { ArtistAction, ArtistState } from "./modules/artist/types";

export interface StoreState {
    album: AlbumState
    artist: ArtistState
}

export type StoreAction = AlbumAction | ArtistAction;

export default (redurcers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
    const enhancer = applyMiddleware(...middlewares);
    return createStore(redurcers, enhancer)

}