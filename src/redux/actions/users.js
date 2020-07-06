import {
    SIGNIN
} from '../../constants/action.type'


export const signin = (username, token) => {
    return {
        type: SIGNIN,
        payload: {
            username,
            token
        }
    }
}