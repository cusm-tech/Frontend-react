import {
    GET_ALL_FILES,
    CHANGE_DIR,
    CREATE_FOLDER
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

const createFolder = data => {
    return {
        type: CREATE_FOLDER,
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

export const createFolderAsync = (level, root, name) => {
    return dispatch => {
        Axios({
            method: 'POST',
            url: FOLDER_URL + `?level=${level}&root=${root}`,
            data: {
                name: name
            }
        }).then(res => {
            dispatch(getAllFolderAsync())
        }).catch(err => {
            console.log(err)
        })
    }
}