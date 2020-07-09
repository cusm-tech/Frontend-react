import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import main from './reducers/main'
import user from './reducers/user'
import file from './reducers/file'


export const store = createStore(combineReducers({
    main,
    user,
    file
}), applyMiddleware(thunk))