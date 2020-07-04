import {createStore, combineReducers, applyMiddleware} from 'redux'

import main from './reducers/main'


export const store = createStore(combineReducers({
    main
}), applyMiddleware())