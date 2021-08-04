import produce from "immer"

import { SongAction, SongState } from "./types";

const initialState: SongState = {
    data: []
}
export default function album(state = initialState, action: SongAction): SongState {
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