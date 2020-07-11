import {
    GET_ALL_FILES,
    CHANGE_DIR
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
        case CHANGE_DIR:
            return {
                ...state,
                CurrentRoot: action.payload.root,
                currentLevel: action.payload.level
            }
        default:
            return state
    }
}