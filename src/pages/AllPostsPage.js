import {React, useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import {postService} from '../servises/post.service';
import {Outlet} from "react-router-dom";

function AllPostsPage() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.getAll().then(posts => {
            setPosts(posts)
        })
    }, [])

    return (
        posts.map(post => {
            return (
                <div key={post.id}>
                    <div className={'d-flex'}>
                        <Link
                            to={`${post.id}`}
                            className={'col-4 border'}
                        >
                            {post.id} - {post.title}
                        </Link>
                        <div className={'col-8 border'}>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            )
        })

    );
}

export default AllPostsPage;