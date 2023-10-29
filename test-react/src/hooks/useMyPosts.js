import {useMemo} from 'react';

export const useSortedPosts = (posts, sort) => {

    return useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) =>
                a[sort].localeCompare(b[sort]))
        } else {
            return posts
        }
    }, [sort, posts]);
};
export const useSortedAndFilteredPosts = (posts, sort, query) => {
    let sortedPosts = useSortedPosts(posts, sort)
    return useMemo(() => {
        return sortedPosts.filter(p =>
            p.title.toLowerCase().includes(query.toLowerCase()))
    }, [sortedPosts, query])
}
