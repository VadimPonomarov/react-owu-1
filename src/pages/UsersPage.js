import {React, useEffect, useState} from 'react';
import ReactDOM from "react-dom";

import {userService} from '../servises/user.service';
import Photos from "../components/photos/Photos";
import UserDetails from "../components/userdetails/UserDetails";


function UsersPage() {
    const [users, setUsers] = useState([])
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        userService.getAll().then(users => {
            setUsers(users)
        })
    }, [])

    const albumsToggle = (id) => {

        let element = document.getElementById(`alb${id}`)
        element.classList.toggle('d-none')
        let nextElement = document.getElementById(`photos${id}`)
        nextElement.classList.toggle('d-none')
        setShowButton(!showButton)
    }

    return (
        users.map(user => {
            const handleClick = (albumId, userId) => {
                const elem = document.getElementById(userId)
                elem.lastChild.innerHtml = ''
                ReactDOM.render(
                    <Photos albumId={albumId}/>,
                    elem.lastChild)
            }

            return (
                <UserDetails
                    key={user.id}
                    user={user}
                    albumsToggle={albumsToggle}
                    handleClick={handleClick}
                    showButton={showButton}
                />
            )
        })
    )
}

export default UsersPage;