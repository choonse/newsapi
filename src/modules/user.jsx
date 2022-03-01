import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../common/createRequestSaga';
import * as loginProcess from '../common/loginProcess';

const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
const CLEAR_DATA = 'CLEAR_DATA';
const SET_LOGIN = 'SET_LOGIN';
const SET_LOGOUT = 'SET_LOGOUT';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('LOGIN',);

export const changeLoginField = createAction(
    CHANGE_LOGIN_FIELD,
    ({key,value}) => ({
        key,
        value,
    }),
);

export const clearData = createAction(CLEAR_DATA);
export const login = createAction(LOGIN, ({id, pwd})=>({id, pwd}));
export const setLogin = createAction(SET_LOGIN, id=>id);
export const setLogout = createAction(SET_LOGOUT, ()=>{localStorage.removeItem('login');})

const initialState = {
    id:'',
    pwd:'',
    login:'',
}

const loginSaga = createRequestSaga(LOGIN, loginProcess.setLogin)

export function* userSaga(){
    yield takeLatest(LOGIN, loginSaga)
}

const user = handleActions(

    {   
        [CHANGE_LOGIN_FIELD]:(state,{payload:{key,value}}) => produce(state, draft =>{
        draft[key] = value;
        }),   
        [CLEAR_DATA]:(state)=>({
            id:null,
            pwd:null,
            login:null
        }),
        [SET_LOGIN]:(state,{payload:id})=>({
            ...state,
            id:id,
            pwd:'',
            login:'success'
        }),
        [LOGIN_SUCCESS]:(state)=>({
            ...state,
            pwd:null,
            login:'success'
        }),
        [LOGIN_FAILURE]:(state)=>({
            id:null,
            pwd:null,
            login:null
        }),
        [SET_LOGOUT]:(state)=>({
            id:null,
            pwd:null,
            login:null
        }),
        
    },
    initialState,
);

export default user;