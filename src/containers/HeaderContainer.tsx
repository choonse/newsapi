import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';


const HeaderContainer = ({mark}:{mark?:string}) => {

    const {scandata, page, bookmark} = useSelector(({article, bookmark}:any) => ({
        scandata:article.scandata,
        page:article.page,
        bookmark:bookmark.data.articles
    }));

    return(
        <Header scandata={scandata} page={page} bookmark={bookmark} mark={mark} />   
    )
}

export default HeaderContainer;