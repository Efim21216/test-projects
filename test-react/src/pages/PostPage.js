import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";
import PostsService from "../API/PostsService";

const PostPage = () => {
    const {id} = useParams();
    let [post, setPost] = useState({});
    let [comments, setComments] = useState([])
    let [fetchPost, isLoading, errorMessage] = useFetching(async () => {
        const response = await PostsService.getById(id);
        setPost(response.data)
    })
    let [fetchComments, isLoadingComments, errorMessageComments] = useFetching(async () => {
        const response = await PostsService.getCommentsById(id);
        setComments(response.data)
    })
    useEffect( () => {
        fetchPost()
        fetchComments()
    }, []);
    return (
        <div style={{marginTop: 30, width: 800}}>
            {isLoading
                ? <Loader />
                : <div>
                    <h2>{post.title}</h2>
                    <p style={{marginTop: 10}}>{post.body}</p>
                </div>
            }
            {errorMessage && <h1>{errorMessage}</h1>
            }
            <h2 style={{marginTop: 50}}>Comments</h2>
            {comments.map(c =>
                <div key={c.id}>
                    <h5>{c.email}</h5>
                    <p>{c.body}</p>
                </div>
            )}
        </div>
    );
};

export default PostPage;