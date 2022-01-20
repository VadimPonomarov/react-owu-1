import {React, useEffect, useState} from 'react';

import {postService} from '../servises/post.service';
import AllPostsDetails from "../components/all_posts_details/AllPostsDetails";

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
                <AllPostsDetails post={post}/>
            )
        })
    )
}

export default AllPostsPage;