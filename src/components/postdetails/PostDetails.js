import React from 'react';
import {Link, Outlet} from "react-router-dom";

function PostDetails({post}) {
    return (
        <div className={'d-flex p-2 flex-wrap border'}>
            <div className={'d-flex col-4 align-items-center justify-content-center border'}>
                <div>{post.id}-{post.title}</div>
            </div>
            <div className={'col-8 text-center p-2'}>
                <div>{post.email}</div>
                <div>{post.body}</div>
            </div>

            <Link to={`comments`} className={'btn btn-button'}>
                Show Comments
            </Link>
            <Link to={``} className={'btn btn-button'}>
                Close Comments
            </Link>
            <div className={'col-12'}>
                <Outlet/>
            </div>
        </div>
    )
}

export default PostDetails;