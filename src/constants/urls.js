export const BASE_URL = (process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://cusm-backend.herokuapp.com')

export const LOGIN_URL = BASE_URL + '/auth/login'
export const SIGNUP_URL = '/auth/signup'

export const FILES_URL = BASE_URL + '/files'
export const FILE_URL = FILES_URL + '/file'
export const FOLDER_URL = FILES_URL + '/folder'