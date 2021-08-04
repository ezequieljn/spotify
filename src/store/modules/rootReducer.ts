import { combineReducers } from 'redux';
import { StoreState } from '../createStore';

import album from './album/redurce'

export default combineReducers<StoreState>({
    album
})


