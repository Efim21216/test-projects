import React from 'react';
import MyImplSelect from "./UI/select/MyImplSelect";
import MyImplInput from "./UI/input/MyImplInput";

const PostsFilter = ({filter, setNewSort, setNewQuery}) => {

    return (
        <div>
            <MyImplInput valeu={filter.query}
                     placeholder="Seqrch..."
                     onChange={e => setNewQuery(e.target.value)}
            />
            <MyImplSelect options={[
                {name: "By title", value: "title"},
                {name: "By content", value: "body"}
            ]} defaultOption="Sort" value={filter.sort} onChange={setNewSort}/>
        </div>
    );
};

export default PostsFilter;