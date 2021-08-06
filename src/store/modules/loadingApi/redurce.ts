import produce from "immer"

import { LoadingApiAction, LoadingApiState } from "./types";

const initialState: LoadingApiState = {
    api: false,
}
export default function album(state = initialState, action: LoadingApiAction): LoadingApiState {
    return produce(state, draft => {
        switch (action.type) {
            case '@loading/TRUE':
                draft.api = true;
                break
            case '@loading/FALSE':
                draft.api = false;
                break
            default:
                return state;
        }
    })
}