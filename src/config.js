// const BASE_URL = import.meta.env.DEV
// ? 'http://localhost:8080'
// : 'http://http://54.234.229.182:8080'

const BASE_URL = 'http://localhost:8080'

export const API = {
    JOIN: '${BASE_URL}/api/join',
    LOGIN: '${BASE_URL}/login',
    GETALLPOST: '${BASE_URL}/api/getallpost',
    GETPOST: '${BASE_URL}/api/getpost',
    CREATEPOST: '${BASE_URL}/api/createpost',
    MODIFYPOST: '${BASE_URL}/api/modifypost',
    DELETEPOST: '${BASE_URL}/api/deletepost',
    APITEST: '${BASE_URL}/api/test',
    APIADMIN: '${BASE_URL/api/admin'
}