import styled from 'styled-components';
import Block from './Block';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBookmark, setEdit, changeEditField, clearEdit } from '../modules/bookmark';
import EditModal from './EditModal';

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

type Bookmarklist ={
    bookmark:any,
    user:any,
    edit:object,
    original:string
}

//북마크리스트 컴포넌트
const BookmarkList = ({bookmark, user, edit, original}:Bookmarklist) =>{ 

    const dispatch = useDispatch();
    const [visible, setVisible] = useState<boolean>(false);

    if(!user.id||!user.login){

        return null;
    }

    //북마크 제거
    const removeBookmark = (e:React.MouseEvent<HTMLButtonElement>) => {
               
        const array = bookmark.articles.filter((list:any) => list.url!==e.currentTarget.id)
        dispatch(setBookmark(array));
        localStorage.setItem('bookmark',JSON.stringify(array));
    }
   
    //내용 수정 모달
    const onShowEditModal = (e:React.MouseEvent<HTMLButtonElement>) => {

        const edit = bookmark.articles[e.currentTarget.id];

        dispatch(setEdit(edit))
        setVisible(true);
    }

    //내용 수정 화면 닫기
    const onCancel = () => {
        setVisible(false);
    }

    //북마크 작업
    const onConfirm = () => {
        const array = bookmark.articles.map((list:any) => list.title!==original?list:edit)
        dispatch(setBookmark(array));
        dispatch(clearEdit());
        localStorage.setItem('bookmark',JSON.stringify(array));      
        setVisible(false);
    }

    //내용수정(redux)
    const onChange = (e:any) => {
        const {value, name} = e.target;
        dispatch(
            changeEditField({
                form:'edit',
                key:name,
                value
            })
        );
    }

    const article = bookmark.articles;
    let cnt = 0;
 
 return(<>
            <ListBlock>
            {!!article&&article.map((article:any)=>(
                <Block key={article.url} id={cnt++} article={article} edit={true} removeBookmark={removeBookmark} onShowEditModal={onShowEditModal} />
            ))}
            </ListBlock>
            <EditModal visible={visible} onCancel={onCancel} onConfirm={onConfirm} onChange={onChange} edit={edit} />
        </>
    )
}

export default BookmarkList;