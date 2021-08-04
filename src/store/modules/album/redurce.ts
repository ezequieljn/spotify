import produce from "immer"

import { AlbumAction, AlbumState } from "./types";

const initialState: AlbumState = {
    data: [],
}
export default function album(state = initialState, action: AlbumAction): AlbumState {
    return produce(state, draft => {
        switch (action.type) {
            case '@album/SAVE':
                draft.data = action.payload;
                break
            default:
                return state;
        }
    })
}