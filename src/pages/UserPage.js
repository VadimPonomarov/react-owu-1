import {React, useState, useEffect} from 'react';
import {Outlet, useParams, Link} from "react-router-dom";

import {userService} from "../servises/user.service";

function UserPage() {
    const {id} = useParams()
    const [showPosts, setShowPosts] = useState(true)
    const [user, setUser] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        userService.getUserPosts(id).then(posts => {
            setPosts(posts)
        })
        userService.getUserbyId(id).then(user => {
            setUser(user)
        })
    }, [id])


    return (
        <div className={'d-flex p-2 flex-wrap border'}>
            <h3 className={'d-flex col-4 align-items-center justify-content-center border'}>
                <div>{user.name}</div>
            </h3>
            <div className={'col-8 text-center p-2'}>
                <div>{user.username}</div>
                <div>{user.email}</div>
                <h5>Address:</h5>
                <div>{JSON.stringify(user.address)}</div>
                <h5>Company:</h5>
                <div>{JSON.stringify(user.company)}</div>
            </div>

            <Link to={`/${id}/posts`} className={'btn btn-button'} onClick={() => setShowPosts(false)}>
                Show Posts
            </Link>
            <Link to={`/${id}`} className={'btn btn-button'} onClick={() => setShowPosts(true)}>
                Close Posts
            </Link>

            <div className={'col-12'}>
                <Outlet/>
            </div>
        </div>
    );
}

export default UserPage;