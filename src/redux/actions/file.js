import {
    GET_ALL_FILES,
    CHANGE_DIR
} from '../../constants/action.type'

import {
    FILE_URL,
    FILES_URL,
    FOLDER_URL
} from '../../constants/urls'

import Axios from 'axios'

const getAllFolder = data => {
    return {
        type: GET_ALL_FILES,
        payload: data
    }
}

export const changeDir = (level, root) => {
    return {
        type: CHANGE_DIR,
        payload: { level, root }
    }
}


// async actions 
export const getAllFolderAsync = () => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: FILES_URL
        }).then(res => {
            dispatch(getAllFolder(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}