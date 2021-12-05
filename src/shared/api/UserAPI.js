import axios from "axios";

const UserAPI = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos/1'
})

export default UserAPI;