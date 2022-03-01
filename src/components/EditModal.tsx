import React from 'react';
import styled from 'styled-components';

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
    width:1060px;
    height:530px;
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
    .setTable{
        border:1px solid lightgray;
    }
    .btn{
        text-align:right;
    }
    .area{
        width:150px;
        text-align:center;
        font-size:1.5rem;
        font-weight:800;
        background-color:#FAED7D;
        padding:5px;
        height:40px;
    }
    .areaheight{
        height:130px;
    }
    td{
        border-bottom:1px solid lightgray;
    }
    .content{
        padding:5px;
        width:100%;
    }
    .contentheight{
        height:120px;
    }
    .setTextarea{
        width:99%;
        
    }
`;

const StyledButton = styled.button`
    width:100px;
    height:40px;
    font-size:21px;
    background-color:white;
    border:none;
    margin-left:3px;
    margin-top:15px;
    &:hover{
        background-color:#EAEAEA;
        // border:1px solid black;
        transition:400ms linear;
    }
    border-radius:12px;
    font-family:"ROKAFSlabSerifBold";
`;

type EditProps = {
    visible:boolean,
    onChange:(e:any)=>void,
    onConfirm:()=>void,
    onCancel:()=>void,
    edit:any
}

const EditModal = ({visible, onChange, onConfirm, onCancel, edit}:EditProps) => {
    
    if(!visible) return null;

    return(
        <Fullscreen>
            <AskModalBlock>
            <div className="frame">
            <h4>My News</h4>
            <h1>Edit</h1>       
            <table className="setTable">
            <tbody>
            <tr>
                <td className="area">author</td><td className="content"><textarea className="setTextarea" onChange={onChange} value={edit.author} name={'author'}></textarea></td>
            </tr>
            <tr>
                <td className="area">title</td><td className="content"><textarea className="setTextarea"  onChange={onChange} value={edit.title} name={'title'}></textarea></td>
            </tr>
            <tr>
                <td className="area areaheight">description</td><td className="content"><textarea className="setTextarea areaheight" onChange={onChange} value={edit.description} name={'description'}></textarea></td>
            </tr>
            <tr>
                <td className="area areaheight">content</td><td className="content"><textarea className="setTextarea areaheight" onChange={onChange} value={edit.content} name={'content'} ></textarea></td>
            </tr>
            </tbody>
            </table>
            <div className="btn">
                <StyledButton onClick={onConfirm}>수정</StyledButton>
                <StyledButton onClick={onCancel}>취소</StyledButton>
            </div>
            </div>
            </AskModalBlock>
        </Fullscreen>
    )
}

export default EditModal;