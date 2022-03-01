import styled from 'styled-components';
import Block from './Block';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addArticle } from '../modules/article';
import { setBookmark } from '../modules/bookmark';

const ListBlock = styled.div`
    padding-top:11rem;
    box-sizing:border-box;
    padding-bottom:3rem;
    width:60%;
    margin:0 auto;
    @media screen and(max-width:700px){
        width:100%;
        padding-left;1rem;
        padding-right:1rem;
    }
`;

type ListProps = {
    data:any
    scandata:string,
    page:number,
    bookmark:any,
}

const List = ({data, scandata, page, bookmark}:ListProps) =>{ 

    const dispatch = useDispatch();

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if(scrollTop + clientHeight >= scrollHeight ) {
            dispatch(addArticle({scandata, page}));
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
          return () => {window.removeEventListener('scroll', handleScroll)
    }
    })

    const onBookmark = (e:any) => {
        
        let array = [];

        if(bookmark){
            array = bookmark.concat(data.articles[e.target.id]);
        }else{
            array = [].concat(data.articles[e.target.id]);
        }
        dispatch(setBookmark(array));
        localStorage.setItem('bookmark',JSON.stringify(array));
    }

    if(!data){
        return null;
    }
    
    const article = [...data.articles].sort((a:any, b:any) => a.publishedAt > b.publishedAt ? -1 : 1)    //정렬
    let cnt:number = 0;
    return(<>
        <ListBlock>
        {article.map((article:any)=>(
            <Block key={article.url} id={cnt++} article={article} bookmark={onBookmark}  />
        ))}
        </ListBlock>
        </>
    )
}

export default List;