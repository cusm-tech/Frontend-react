import {
    GET_ALL_FILES
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


// async actions 
const getAllFolderAsync = () => {
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