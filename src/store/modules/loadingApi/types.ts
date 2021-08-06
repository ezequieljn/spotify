import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type LoadingApiAction = ActionType<typeof actions>

export interface LoadingApiState {
    readonly api: boolean;
}
