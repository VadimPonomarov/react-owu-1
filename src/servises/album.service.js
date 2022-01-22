import {axiosService} from "./axios.service";

export const albumService = {
    getPhotosByAlbumId: (id) => axiosService.get(`/albums/${id}/photos`).then(responce => responce.data)
}