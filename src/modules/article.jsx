import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';
import { put, takeLatest } from 'redux-saga/effects';
import * as articleAPI from '../common/api/article.tsx';
import createRequestSaga, { createRequestActionTypes } from '../common/createRequestSaga';

const SET_NUM = 'SET_NUM';

const CHANGE_FIELD = 'CHANGE_FIELD';

const [GET_ARTICLE, GET_ARTICLE_SUCCESS, GET_ARTICLE_FAILURE] = createRequestActionTypes('GET_ARTICLE',);
const [ADD_ARTICLE, ADD_ARTICLE_SUCCESS, ADD_ARTICLE_FAILURE] = createRequestActionTypes('ADD_ARTICLE',);

export const getArticle = createAction(GET_ARTICLE, ({scandata, page})=>({scandata, page}));
export const addArticle = createAction(ADD_ARTICLE, ({scandata, page})=>({scandata, page}));
export const setNum = createAction(SET_NUM, (page)=>(page));

export const changeField = createAction(
    CHANGE_FIELD,
    ({key,value}) => ({
        key,
        value,
    }),
);

const getArticleSaga = createRequestSaga(GET_ARTICLE, articleAPI.getArticle)
const addArticleSaga = createRequestSaga(ADD_ARTICLE, articleAPI.getArticle)

export function* articleSaga(){
    yield takeLatest(GET_ARTICLE, getArticleSaga)
    yield takeLatest(ADD_ARTICLE, addArticleSaga)
}

const initialState = {
    data:null,
    scandata:'today',
    page:1,
}

const article = handleActions(

    {   
        [CHANGE_FIELD]:(state,{payload:{key,value}}) => produce(state, draft =>{
        draft[key] = value;
        }),   
        [GET_ARTICLE_SUCCESS]:(state,{payload:data})=>({
            ...state,
            data,
            page:state.page+1
        }),
        [GET_ARTICLE_FAILURE]:(state)=>({
            ...state,
        }),
        [ADD_ARTICLE_SUCCESS]:(state,{payload:data})=>({
            ...state,
            data:{
                articles:[...state.data.articles, ...data.articles]
            },
            page:state.page+1
        }),
        [ADD_ARTICLE_FAILURE]:(state)=>({
            ...state,
        }),
        [SET_NUM]:(state,{payload:page})=>({
            ...state,
            page:page
        }),
    },
    initialState,
);

export default article;