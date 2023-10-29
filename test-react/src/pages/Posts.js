import React, {useEffect, useRef, useState} from 'react';
import ItemsList from "../components/ItemsList";
import NewPostForm from "../components/NewPostForm";
import PostsFilter from "../components/PostsFilter";
import {useSortedAndFilteredPosts} from "../hooks/useMyPosts";
import PostsService from "../API/PostsService";
import Loader from "../components/UI/loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/Pages";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";

const Posts = () => {
    let [posts, setPosts] = useState(
        [])
    let [filter, setFilter] = useState({sort: "", query: ""})
    let [limit, setLimit] = useState(10)
    let [page, setPage] = useState(1)
    let [totalPages, setTotalPages] = useState(0)
    const lastElement = useRef()
    const sortedPosts = useSortedAndFilteredPosts(posts, filter.sort, filter.query)
    let [fetchPosts, isPostsLoading, postsError] = useFetching(async (limit, page) => {
        const response = await PostsService.getAll(limit, page)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
        setPosts([...posts, ...response.data])
    })
    useEffect(() => {
        fetchPosts(limit, page)
    }, [page]);
    useObserver(lastElement, isPostsLoading, page < totalPages, () => {
        setPage(page + 1)
    })
    const createNewPost = (post) => {
        setPosts([...posts, post]);
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const setNewSort = (newSort) => {
        setFilter({...filter, sort: newSort});
    }
    const setNewQuery = (query) => {
        setFilter({...filter, query: query})
    }
    const changePage = (page) => {
        setPage(page)
    }
    return (
        <div className="App">
            <NewPostForm createNewPost={createNewPost}/>
            <PostsFilter filter={filter}
                         setNewSort={setNewSort}
                         setNewQuery={setNewQuery}
            />
            {postsError &&
                <h1>Error! {postsError}</h1>
            }
            <ItemsList posts={sortedPosts} title="List of posts" removePost={removePost}/>
            <div style={{height: 20}} ref={lastElement}></div>
            {isPostsLoading &&
                <div style={{justifyContent: 'center', display: "flex", marginTop: 50}}>
                    <Loader />
                </div>
            }
            <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
        </div>
    );
};

export default Posts;