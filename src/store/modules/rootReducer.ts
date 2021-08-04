import { combineReducers } from 'redux';
import { StoreState } from '../createStore';

import album from './album/redurce'
import artist from './artist/redurce'

export default combineReducers<StoreState>({
    album,
    artist
})


