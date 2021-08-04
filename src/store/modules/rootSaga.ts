import { all } from 'redux-saga/effects';
import { albums } from './album/sagas';

export default function* rootSaga(): any {
    yield all([albums])
}