import produce from "immer"

import { SongAction, SongState } from "./types";

const initialState: SongState = {
    data: []
}
export default function album(state = initialState, action: SongAction): SongState {
    if (action) {
        if (action.payload) {
            console.log("reducer song", action.payload)
        }
    }
    return produce(state, draft => {
        switch (action.type) {
            case '@song/SAVE':
                draft.data = action.payload.data;
                break
            default:
                return state;
        }
    })
}