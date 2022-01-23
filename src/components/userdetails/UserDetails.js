import React from 'react';
import {Link} from "react-router-dom";
import UserAlbums from "../useralbums/UserAlbums";

function UserDetails({user, albumsToggle, handleClick, showButton}) {

    return (
        <div id={user.id} className={'card m-1'}>
            <div className={'d-flex align-items-center p-2'}>
                <Link
                    to={`/${user.id}`}
                    state={{user}}
                    className={'col-4 '}
                >
                    {user.name}
                </Link>
                <Link to={'/albums'}
                      className={'col-1 ' +
                      'd-flex ' +
                      'btn ' +
                      'btn-primary ' +
                      'border ' +
                      'align-items-center ' +
                      'justify-content-center'}
                      style={{height: "30px"}}
                      onClick={() => albumsToggle(user.id)}
                >
                    {!showButton ? 'Albums' : 'Close'}
                </Link>
                <div id={`alb${user.id}`} className={'col-7 d-none'}>
                    <UserAlbums userId={user.id} handleClick={handleClick}/>
                </div>
            </div>
            <div id={`photos${user.id}`} className={'d-none'}>
                {/*Место для рендеринга Photos*/}
            </div>
        </div>
    );
}

export default UserDetails;