import {axiosService} from "./axios.service";

export const postService = {
    getAll: () => axiosService.get('/posts').then(responce => responce.data),
    getPostById: (postId) => axiosService.get(`/posts/${postId}`).then(responce => responce.data),
    getPostComments: (postId) => axiosService.get(`/posts/${postId}/comments`).then(responce => responce.data),
}