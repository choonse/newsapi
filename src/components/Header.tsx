import React, {useState} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getArticle } from '../modules/article';
import '../App.css'
import LoginModal from './LoginModal';
import { changeField, setNum } from '../modules/article';
import { clearData, login, setLogout } from '../modules/user';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Frameset = styled.div`    
    position:fixed;  
    display:block;  
    height:130px;
    width:100%;
    background-color:#FFE400;
    display:flex;
    justify-content:center;
    box-shadow:4px 4px 10px black;
    z-index:100;
    .title{
        font-size:5.5rem;
        position:relative;
        padding-top:7px;
        font-family:"CWDangamAsac-Bold";
        z-index:200;
    }
    .scanbox{
        position:absolute;    
        width:100%;
        padding-right:10px;
        padding-top:80px;
        display:flex;
        justify-content:end;
    }
    .login{
        position:absolute;
        width:100%;
        text-align:right;
        padding-right:30px;
        padding-top:5px;
        font-size:1.2rem;
        font-weight:600;
        z-index:100;
        font-family:"ROKAFSlabSerifBold";
    }
    .loggedin{
        
    }
    span{
        color:blue;
    }

    .bookmark{
        background-color:gray;
        padding:8px;
        border-radius:10px;
        cursor:pointer;
        color:white;
        &:hover{
            background-color:darkgray;
        }
    }
    .count{
        background-color:black;
        padding:5px;
        border-radius:8px;
        color:white;
        position:relative;
        left:5px;

    }
    .clickable{
        cursor:pointer;
        &:hover{
            background-color:#EAEAEA;
            // border:1px solid black;
            transition:400ms linear;
        }
    }
    .titlemark{
        font-size:2rem;
        display:block;
        position:relative;
        left:270px;
        bottom:20px;
        color:#4641D9
    }
`;

const StyledInput = styled.input`
    font-size: 1.4rem;
    border: none;
    border-bottom: 1px solid #A6A6A6;
    outline: none;
    width: 13%;
    text-align:center;
    line-height: 30px;
    color:gray;
    background:transparent;
    &:focus{
        color:$oc-teal-7;
        border-bottom: 1px solid black;
    }
    font-family:"ROKAFSlabSerifBold";
`;

const StyledButton = styled.button`
    width:100px;
    height:40px;
    font-size:21px;
    background-color:#FFE400;
    border:none;
    margin-left:3px;
    &:hover{
        background-color:#EAEAEA;
        // border:1px solid black;
        transition:400ms linear;
    }
    border-radius:12px;
    font-family:"ROKAFSlabSerifBold";
`;

type HeaderProps ={
    scandata:string,
    page:number,
    bookmark:any,
    mark?:string
}

//헤더
const Header = ({scandata, page, bookmark, mark}:HeaderProps) => {

    const dispatch = useDispatch();
    const [visible, setVisible] = React.useState<boolean>(false);

    const {user} = useSelector(({user}:any)=>({
        user:user
    }));

    //검색버튼클릭(검색)
    const onclick = async () => {
        if(scandata){
           await Promise.all([dispatch(getArticle({scandata, page})), dispatch(setNum(page))]);
        }else{
            alert('검색어를 입력해 주세요.')
        }
    }

    //검색문자입력(redux)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                key:name,
                value
            })
        );
    }

    //enter키 검색
    const onKeyDown = (e:React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key==='Enter'){
            dispatch(getArticle({scandata}));
        }
    }

    //로그인
    const onConfirm = () => {
        
        const {id, pwd} = user;

        //입력체크
        if(id&&pwd){
            dispatch(login({id, pwd}));
        }else if(id){
            alert('비밀번호를 입력해 주세요.')
            return;
        }else if(pwd){
            alert('아이디를 입력해 주세요.')
            return;
        }else{
            alert('아이디와 비밀번호를 입력해 주세요.')
            return;
        }
        setVisible(false);
    }

    //로그인 화면 닫기
    const onCancel = () => {
        dispatch(clearData());
        setVisible(false);
    }

    //로그인 화면 표시
    const showLoginModal = () => {
        setVisible(true);
    }

    //로그아웃 작업
    const logout = () => {
        dispatch(setLogout());
    }

    return(
        
        <Frameset>
        <div className="title">
        <Link to="/" style={{ textDecoration: 'none',color:'black' }}>My News</Link> <span className="titlemark">{mark}</span>
        </div>
        <div className="login">
            {!!user&&user.login?
            <div className="loggedin">
            <span> Hi! {user.id} </span>
            {mark?
            <span className="bookmark"> <Link to="/" style={{ textDecoration: 'none',color:'white' }}>Home</Link></span>
            :
            <span className="bookmark"> <Link to="/bookmark" style={{ textDecoration: 'none',color:'white' }}>Bookmark</Link><span className="count">{!!bookmark&&bookmark.length?bookmark.length:0}</span> </span>
            }
            <StyledButton onClick={logout} className="clickable">LOGOUT</StyledButton>
            </div>
            :
            <StyledButton onClick={showLoginModal} className="clickable">LOGIN</StyledButton>
            }
            </div>
            {mark?    
            '':
                <>
                <div className="scanbox">        
                <StyledInput onChange={onChange} onKeyDown={onKeyDown} name={'scandata'} value={scandata}/>
                <StyledButton onClick={onclick} >Find</StyledButton>
                </div>
                </>
            }
        <LoginModal visible={visible} onCancel={onCancel} onConfirm={onConfirm} />
        </Frameset>  
    )
}

export default Header;