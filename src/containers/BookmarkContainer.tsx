import React from 'react';
import { useSelector } from 'react-redux';
import BookmarkList from '../components/BookmarkList'

const BookmarkContainer = () => {

    const { bookmark, user, edit, original} = useSelector(({bookmark, user}:any) => ({
        bookmark:bookmark.data,
        user:user,
        edit:bookmark.edit,
        original:bookmark.original
    }));

    return(
        <BookmarkList bookmark={bookmark} user={user} edit={edit} original={original} />   
    )
}

export default BookmarkContainer;