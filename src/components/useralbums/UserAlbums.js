import {React, useState, useEffect} from 'react';
import {Link} from "react-router-dom";

import {userService} from "../../servises/user.service";

function UserAlbums({userId, handleClick}) {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        userService.getUserAlbums(userId).then(albums => {
            setAlbums(albums)
        })
    }, [userId])

    return (
        albums.map(album => {
            return (
                <div key={album.id}>
                    <div className={'col-12'}>
                        <Link
                            to={`/albums/${album.id}`}
                            style={{marginLeft: '15px'}}
                            state={{albumId: album.id}}
                            onClick={() => handleClick(album.id, userId)}
                        >
                            {album.id} - {album.title}
                        </Link>
                    </div>
                </div>
            )
        })
    )
}

export default UserAlbums;