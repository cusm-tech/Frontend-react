import {createStore, combineReducers, applyMiddleware} from 'redux'

import main from './reducers/main'
import user from './reducers/user'


export const store = createStore(combineReducers({
    main,
    user
}), applyMiddleware())