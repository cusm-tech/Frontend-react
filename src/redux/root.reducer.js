import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import main from './reducers/main'
import user from './reducers/user'
import file from './reducers/file'
import ui from './reducers/ui'


export const store = createStore(combineReducers({
    main,
    user,
    file,
    ui
}), applyMiddleware(thunk))