import { combineReducers } from 'redux';
import { StoreState } from '../createStore';

import album from './album/redurce'
import artist from './artist/redurce'
import song from './song/redurce'

export default combineReducers<StoreState>({
    album,
    artist,
    song
})


