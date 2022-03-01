import React from 'react';
import { useSelector } from 'react-redux';
import List from '../components/List';

const ShowArticleContainer = () => {

    const {data, scandata, page, bookmark} = useSelector(({article, bookmark}:any) => ({
        data:article.data,
        scandata:article.scandata,
        page:article.page,
        bookmark:bookmark.data.articles,
    }));

    return(
        <List data={data} scandata={scandata} page={page} bookmark={bookmark} />   
    )
}

export default ShowArticleContainer;