import axios from 'axios';

const client = axios.create();

type getarticle = {
    scandata:string,
    page:number
}

// 데이터 가져오기
export const getArticle = ({scandata, page}:getarticle) => client.get(`https://newsapi.org/v2/everything?apiKey=${process.env.REACT_APP_KEY}&q=${scandata}&page=${page}`);
