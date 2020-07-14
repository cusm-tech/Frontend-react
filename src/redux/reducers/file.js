import {
    GET_ALL_FILES,
    CHANGE_DIR
} from '../../constants/action.type'

import _ from 'lodash'

const initialState = {
    files: [],
    currentLevel: 0,
    currentRoot: '',
    displayFiles: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_FILES:
            return {
                ...state,
                files:  action.payload,
                displayFiles: _.filter(action.payload, (o) => o.level === state.currentLevel)
            }
        case CHANGE_DIR:
            return {
                ...state,
                CurrentRoot: action.payload.root,
                currentLevel: action.payload.level,
                displayFiles: _.filter(state.files, (o) => o.level === state.currentLevel)
            }
        default:
            return state
    }
}