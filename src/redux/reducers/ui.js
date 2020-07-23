import {
    TOGGLE_LOADING
} from '../../constants/action.type'

const initialState = {
    isLoading: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading
            }

        default:
            return state
    }
}