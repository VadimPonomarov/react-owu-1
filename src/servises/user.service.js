import {axiosService} from "./axios.service";

export const userService = {
    getAll: () => axiosService.get('/users').then(responce => responce.data),
    getUserbyId: (userId) => axiosService.get(`/users/${userId}`).then(responce => responce.data),
    getUserPosts: (userId) => axiosService.get(`/users/${userId}/posts`).then(responce => responce.data),
}