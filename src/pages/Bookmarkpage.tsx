import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import BookmarkContainer from '../containers/BookmarkContainer';

const Bookmarkpage = () => {
    return(
        <>
            <HeaderContainer mark={'bookmark'} />
            <BookmarkContainer/>
        </>
    )
}

export default Bookmarkpage;