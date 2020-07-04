import {createStore,combineReducers, applyMiddleware} from 'redux'
import createHistory from 'history/createBrowserHistory';
import {routerReducer, routerMiddleware} from 'react-router-redux'

// importing reducers 
import main from './reducers/main'

export const history = createHistory()

export const store = createStore(
    combineReducers({
        main,
        router: routerReducer
    }),
    applyMiddleware(routerMiddleware())
)
