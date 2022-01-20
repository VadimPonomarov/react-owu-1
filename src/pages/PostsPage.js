import {React, useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../servises/user.service";

function PostsPage() {
    const {id} = useParams()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        userService.getUserPosts(id).then(posts => {
            setPosts(posts)
        })
    })

    return (
        posts.map(post => {
            return (
                <div key={post.id} className={'p-2'}>
                    <h5>{post.title}</h5>
                    <div>{post.body}</div>
                </div>
            )
        })
    );
}

export default PostsPage;