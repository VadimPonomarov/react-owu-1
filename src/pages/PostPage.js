import {React, useState, useEffect} from 'react';
import {Outlet, useParams, Link} from "react-router-dom";

import {postService} from "../servises/post.service";

function PostPage() {
    const {id} = useParams()
    const [showComments, setShowComments] = useState(true)
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
        postService.getPostComments(id).then(comments => {
            setComments(comments)
        })
        postService.getPostById(id).then(post => {
            setPost(post)
        })
    }, [])


    return (
        <div className={'d-flex p-2 flex-wrap border'}>
            <div className={'d-flex col-4 align-items-center justify-content-center border'}>
                <div>{post.id}-{post.title}</div>
            </div>
            <div className={'col-8 text-center p-2'}>
                <div>{post.email}</div>
                <div>{post.body}</div>
            </div>

            <Link to={`comments`} className={'btn btn-button'} onClick={() => setShowComments(false)}>
                Show Comments
            </Link>
            <Link to={``} className={'btn btn-button'} onClick={() => setShowComments(true)}>
                Close Comments
            </Link>

            <div className={'col-12'}>
                <Outlet/>
            </div>
        </div>
    );
}

export default PostPage;