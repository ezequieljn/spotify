import { applyMiddleware, createStore, Middleware, Reducer } from "redux";
import { AlbumAction, AlbumState } from "./modules/album/types";

export interface StoreState {
    album: AlbumState
}

export type StoreAction = AlbumAction;

export default (redurcers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
    const enhancer = applyMiddleware(...middlewares);
    return createStore(redurcers, enhancer)

}