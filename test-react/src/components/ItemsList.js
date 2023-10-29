import React from 'react';
import Item from "./Item";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const ItemsList = ({posts, title, removePost}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Posts not found
            </h1>
        )
    }
    return (
        <div style={{marginTop: 20}}>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        classNames="post"
                        timeout={500}
                    >
                        <Item post={post} number={post.id} removePost={removePost}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default ItemsList;