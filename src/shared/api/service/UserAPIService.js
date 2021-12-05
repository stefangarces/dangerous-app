import http from '../UserAPI'

const getUserData = () => {
    return http.get(`/users`)
}

export default {
    getUserData
}