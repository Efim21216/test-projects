import React, {useState} from 'react';
import MyImplButton from "./UI/button/MyImplButton";
import MyImplInput from "./UI/input/MyImplInput";

const NewPostForm = ({createNewPost}) => {
    let [post, setPost] = useState(
        {title: "", body: ""})
    const addNewPost = (e) => {
        e.preventDefault()
        createNewPost({...post, id: Date.now()})
        setPost({title: "", body: ""})
    }
    return (
        <form>
            <MyImplInput type="text"
                         placeholder="Title of the post"
                         onChange={e => setPost({...post, title: e.target.value})}
                         value={post.title}
            />
            <MyImplInput type="text"
                         placeholder="Content of the post"
                         onChange={e => setPost({...post, body: e.target.value})}
                         value={post.body}
            />
            <MyImplButton onClick={addNewPost}>Create</MyImplButton>
        </form>
    );
};

export default NewPostForm;