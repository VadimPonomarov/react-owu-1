import {React, useState, useEffect} from 'react';
import {useParams, useLocation} from "react-router-dom";

import {postService} from "../servises/post.service";
import PostDetails from "../components/postdetails/PostDetails";

function PostPage() {
    const {id} = useParams()
    const location = useLocation()
    const [post, setPost] = useState([])

    useEffect(() => {
        if (location.state.post) {
            setPost(location.state.post)
        } else {
            postService.getPostbyId(id).then(post => {
                setPost(post)
            })
        }
    }, [])

    return (
        <PostDetails post={post}/>
    )
}

export default PostPage;