import {axiosService} from "./axios.service";

export const postService = {
    getAll: () => axiosService.get('/posts').then(responce => responce.data),
    getPostById: (id) => axiosService.get(`/posts/${id}`).then(responce => responce.data),
    getPostComments: (id) => axiosService.get(`/posts/${id}/comments`).then(responce => responce.data)
}