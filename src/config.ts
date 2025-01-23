const BASE_URL = import.meta.env.DEV
? "http://localhost/api"
: "http://54.234.229.182/api"

// const BASE_URL = "http://localhost/api"

export const API = {
    JOIN: `${BASE_URL}/join`,
    LOGIN: `${BASE_URL}/login`,
    GETALLPOST: `${BASE_URL}/getallpost`,
    GETPOST: `${BASE_URL}/getpost`,
    CREATEPOST: `${BASE_URL}/createpost`,
    MODIFYPOST: `${BASE_URL}/modifypost`,
    DELETEPOST: `${BASE_URL}/deletepost`,
    APITEST: `${BASE_URL}/test`,
    APIADMIN: `${BASE_URL}/admin`
};