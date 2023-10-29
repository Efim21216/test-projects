import React from 'react';
import MyImplButton from "./UI/button/MyImplButton";
import {Link} from "react-router-dom";
import '../App.css'

const Item = ({post, number, removePost}) => {
    const removeItem = () => {
        removePost(post)
    }
    return (
        <div className="post">
            <div >
                <strong>{number}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btn">
                <Link to={`/posts/${post.id}`}
                      className="to__post"
                >Open</Link>
                <MyImplButton onClick={removeItem}>Delete</MyImplButton>
            </div>
        </div>
    );
};

export default Item;