import {
    TOKEN,
    USERNAME
} from '../../constants/localstorage'

import {
    SIGNIN
} from '../../constants/action.type'

const initialState = {
    token: localStorage.getItem(TOKEN),
    username: localStorage.getItem(USERNAME)
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SIGNIN:
            return {
                ...state,
                token: action.payload.token,
                username: action.payload.username
            }
        default:
            return state
    }
}