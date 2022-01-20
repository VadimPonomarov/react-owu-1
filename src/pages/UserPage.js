import {React, useState, useEffect} from 'react';
import {Outlet, useParams, Link, useLocation} from "react-router-dom";

import {userService} from "../servises/user.service";

function UserPage() {
    const {id} = useParams()
    const location = useLocation()
    let showPosts = true
    const [user, setUser] = useState([])

    useEffect(() => {
        if (location.state.user) {
            setUser(location.state.user)
        } else {
            userService.getUserbyId(id).then(user => {
                setUser(user)
            })
        }
    }, [])


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

            <Link to={`/${id}/posts`} className={'btn btn-button'} onClick={() => showPosts = false}>
                Show Posts
            </Link>
            <Link to={`/${id}`} className={'btn btn-button'} onClick={() => showPosts = false}>
                Close Posts
            </Link>

            <div className={'col-12'}>
                <Outlet/>
            </div>
        </div>
    );
}

export default UserPage;