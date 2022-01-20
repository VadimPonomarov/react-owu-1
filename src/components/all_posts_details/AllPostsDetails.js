import React from 'react';
import {Link, Outlet} from "react-router-dom";

function AllPostsDetails({post}) {
    return (
        <>
            <div className={'d-flex'}>
                <Link
                    to={`${post.id}`}
                    state={{post}}
                    className={'col-4 border'}
                >
                    {post.id} - {post.title}
                </Link>
                <div className={'col-8 border'}>
                    <Outlet/>
                </div>
            </div>
        </>
    );
}

export default AllPostsDetails;