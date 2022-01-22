import {React, useEffect, useState} from 'react';
import {albumService} from "../../servises/album.service";

function Photos({albumId}) {
    const [photos, setPhotos] = useState([])

    useEffect(() => {

        albumService.getPhotosByAlbumId(albumId).then(photos => {
            setPhotos(photos)
        })
    }, [albumId])

    return (
        photos.map(item => {
            return (
                <div key={item.id} className={'d-flex border align-items-center'}>
                    <img src={item.thumbnailUrl} alt={'Thumbnai Url'} className={'p-2'} style={{width: '60px'}}/>
                    <div>{item.albumId} - {item.id} - {item.title}</div>
                    <a className={'p-2'} href={item.url} target={'_blank'} rel={'noreferrer'}>Photo</a>
                </div>
            )
        })
    )
}

export default Photos;