import produce from "immer"

import { ArtistAction, ArtistState } from "./types";

const initialState: ArtistState = {
    artistMain: [],
    artistAll: [],
}
export default function album(state = initialState, action: ArtistAction): ArtistState {
    return produce(state, draft => {
        switch (action.type) {
            case '@artist/SAVE':
                draft.artistMain = action.payload.data.artistMain;
                draft.artistAll = action.payload.data.artistAll;
                break
            default:
                return state;
        }
    })
}