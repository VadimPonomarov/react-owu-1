import {React, useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../servises/post.service";

function CommentsPage() {
    const {id} = useParams()
    const [comments, setComments] = useState([])

    useEffect(() => {
        postService.getPostComments(id).then(comments => {
            setComments(comments)
        })
    }, [])

    return (
        comments.map(comment => {
            return (
                <div key={comment.id} className={'p-2'}>
                    <h5>{comment.name}</h5>
                    <div>{comment.email}</div>
                    <div>{comment.body}</div>
                </div>
            )
        })
    );
}

export default CommentsPage;