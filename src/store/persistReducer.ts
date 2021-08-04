import { Reducer } from 'react';
import { persistReducer } from 'redux-persist';

export default (reducers: Reducer<any, any>) => {

    const storage = require('redux-persist/lib/storage').default;

    const persistedReducer = persistReducer(
        {
            key: 'store',
            storage,
            whitelist: ['album']
        },
        reducers,
    );
    return persistedReducer;
};
