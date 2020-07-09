import {
    GET_ALL_FILES
} from '../../constants/action.type'

const initialState = {
    files: [],
    currentLevel: 0,
    CurrentRoot: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_FILES:
            return {
                ...state,
                files: action.payload
            }

        default:
            return state
    }
}