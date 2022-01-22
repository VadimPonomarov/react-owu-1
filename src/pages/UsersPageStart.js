import {React, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

import {userService} from '../servises/user.service';
import UserAlbums from "../components/useralbums/UserAlbums";
import {albumService} from "../servises/album.service";
import Photos from "../components/photos/Photos";
import ReactDOM from "react-dom";

function UsersPage() {
    const [users, setUsers] = useState([])
    const [photos, setPhotos] = useState([])
    const {albId} = useParams()

    useEffect(() => {
        userService.getAll().then(users => {
            setUsers(users)
        })
    }, [albId])

    useEffect(() => {
        if (!albId) {
            return
        }
        albumService.getPhotosByAlbumId(albId).then(photos => {
            setPhotos(photos)
        })
    }, [albId])

    return (
        users.map(user => {
            const handleClick = (albumId, userId) => {
                const elem = document.getElementById(userId)
                elem.lastChild.innerHtml = ''

                ReactDOM.render(
                    <Photos photos={photos}/>,
                    elem.lastChild)
            }

            return (
                <div key={user.id} id={user.id}>
                    <div className={'d-flex'}>
                        <Link
                            to={`${user.id}`}
                            state={{user}}
                            className={'col-4 border'}
                        >
                            {user.name}
                        </Link>
                        <Link to={'/albums'} className={'col-1 btn btn-button border'}>Album</Link>
                        <div className={'col-7 border'}>
                            <UserAlbums userId={user.id} handleClick={handleClick}/>
                        </div>
                    </div>
                    <div></div>
                </div>
            )
        })
    )
}

export default UsersPage;