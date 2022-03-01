import styled from 'styled-components';

const DetailBlock = styled.div`

    display:flex;
    
    .thumb{
        margin-right:1rem;
        img{
            display:block;
            width:160px;
            height:170px;
            object-fit:cover;
        }
    }
    .contents{
        h2{
            margin:0;
        }
        a{
            color:black;
        }
    }
    .remove{
        background-color:gold;
    }
    .edit{
        background-color:lightgray;
        position:relative;
        left:3px;
    }
    p{
        margin:0;
        line-height:1.3;
        margin-top:1.2rem;
        white-space:normal;
    }
    span{
        background-color:pink;
        border-radius:7px;
        padding:3px;
        line-height:15px;
        font-size:13px;
        top:5px;
        position:relative;
        display:inline-block;
        @keyframes bookmark{
            0%{
                transform:rotateY(0deg);
                background-color:pink;
            }
            100%{
                transform:rotateY(360deg);
                background-color:red;
                color:white;
            }
        }
        &:hover{
            animation:bookmark 0.4s forwards;
            animation-direction:alternate;
            cursor:pointer;
        }      
    }
}
&+&{
    margin-top:2.5rem;
}
`;

type BlockProps = {
    id:number,
    article:any,
    bookmark?:(e: React.MouseEvent<HTMLButtonElement>)=>void,
    edit?:boolean,
    removeBookmark?:(e: React.MouseEvent<HTMLButtonElement>)=>void,
    onShowEditModal?:(e: React.MouseEvent<HTMLButtonElement>)=>void
}

const Block = ({id, article, bookmark, edit, removeBookmark, onShowEditModal}:BlockProps) => {

    const {title, description, url, urlToImage}:{title:string, description:string, url:string, urlToImage:string} = article;

    return(
        <DetailBlock>
            {urlToImage&&(
                <div className="thumb">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={urlToImage} alt="thumbImage" />
                </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
                {edit?
                <>
                    <span className="remove" id={url} onClick={removeBookmark}>Remove</span>
                    <span className="edit" id={String(id)} onClick={onShowEditModal}>Edit</span>
                </>
                :
                <span className="clicked" id={String(id)} onClick={bookmark}>Bookmark</span>
                }
            </div>
        </DetailBlock>
    );
};

export default Block;