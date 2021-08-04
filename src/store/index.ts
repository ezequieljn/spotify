import { Middleware, Store } from 'redux'
import createSagaMiddleware, { Task } from '@redux-saga/core'
import { createWrapper } from 'next-redux-wrapper'

import createStore from './createStore'
import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

export interface SagaStore extends Store {
    sagaTask?: Task
}

const makeStore = () => {
    const isServer = typeof window === 'undefined'

    const sagaMiddleware = createSagaMiddleware()

    const middlewares: Middleware[] = [sagaMiddleware]

    if (isServer) {
        const makeConfiguredStore = () => createStore(rootReducer, middlewares);

        return makeConfiguredStore();
    } else {
        const { persistStore, persistReducer } = require('redux-persist')
        const storage = require('redux-persist/lib/storage').default

        const persistConfig = {
            key: "spotify",
            storage,
            whitelist: ['album']
        }

        const store: any = createStore(persistReducer(persistConfig, rootReducer), middlewares);

        store._persist = persistStore(store);

        (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

        return store
    }
}
export default createWrapper(makeStore)
export const wrapper = createWrapper(makeStore)