import {React, useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import {userService} from '../servises/user.service';
import {Outlet} from "react-router-dom";

function UsersPage() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll().then(users => {
            setUsers(users)
        })
    }, [])

    return (
        users.map(user => {
            return (
                <div key={user.id}>
                    <div className={'d-flex'}>
                        <Link
                            to={`${user.id}`}
                            state={{user}}
                            className={'col-4 border'}
                        >
                            {user.name}
                        </Link>
                        <div className={'col-8 border'}>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default UsersPage;