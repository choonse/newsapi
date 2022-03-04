import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeLoginField } from '../modules/user';

const Fullscreen = styled.div`
    position:fixed;
    z-index:200;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: rgba(0, 0, 0, 0.25);
    display:flex;
    justify-content:center;
    align-items:center;
`;

const AskModalBlock = styled.div`
    width:250px;
    height:190px;
    background:white;
    padding:1.5rem;
    border-radius:4px;
    box-shadow:5px 5px 10px black;
    margin-bottom:10px;
    h1{
        margin-top:0;
        margin-bottom:12px;
    }
    h4{
        margin-bottom:0;
        color:gray;
    }
    .frame{
        bottom:25px;
        position:relative;
    }
`;

const StyledButton = styled.button`
    width:122px;
    height:40px;
    font-size:21px;
    background-color:white;
    border:none;
    margin-left:3px;
    margin-top:15px;
    &:hover{
        background-color:#EAEAEA;
        transition:400ms linear;
    }
    border-radius:12px;
    font-family:"ROKAFSlabSerifBold";
`;

const StyledInput = styled.input`
    font-size: 0.9rem;
    border: none;
    border-bottom: 1px solid #A6A6A6;
    outline: none;
    width: 100%;
    text-align:left;
    line-height: 30px;
    color:gray;
    background:transparent;
    margin-bottom:5px;
    &:focus{
        color:$oc-teal-7;
        border-bottom: 1px solid black;
    }
    font-family:"ROKAFSlabSerifBold";
`;

type Login={
    visible:boolean,
    onCancel:()=>void,
    onConfirm:()=>void,
}

//로그인 모달
const LoginModal = ({visible, onCancel, onConfirm}:Login) => {

    const dispatch = useDispatch();

    //아이디,비번 입력(redux)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {    
        const {value, name} = e.target;
        dispatch(
            changeLoginField({
                key:name,
                value
            })
        );
    }

    //enter로 로그인
    const onKeyDown = (e:React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key==='Enter'){
            onConfirm();
        }
    }

    if(!visible) return null;

    return(

        <Fullscreen>
            <AskModalBlock>
            <div className="frame">
            <h4>My News</h4>
            <h1>LOGIN</h1>
            <StyledInput placeholder="ID" type="id" onChange={onChange} name="id" onKeyDown={onKeyDown}/>
            <StyledInput placeholder="PASSWORD" type="password" onChange={onChange} name="pwd" onKeyDown={onKeyDown}/>
            <StyledButton onClick={onConfirm}>확인</StyledButton>
            <StyledButton onClick={onCancel}>취소</StyledButton>
            </div>
            </AskModalBlock>
        </Fullscreen>
    )
}

export default LoginModal;