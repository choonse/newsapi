import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

const SET_BOOKMARK = 'SET_BOOKMARK';
const SET_EDIT = 'SET_EDIT';
const CHANGE_EDIT_FIELD = 'CHANGE_EDIT_FIELD';
const CLEAR_EDIT = 'CLEAR_EDIT';

export const setBookmark = createAction(SET_BOOKMARK, (array)=>(array));
export const setEdit = createAction(SET_EDIT, edit=>edit);
export const clearEdit = createAction(CLEAR_EDIT);

export const changeEditField = createAction(
    CHANGE_EDIT_FIELD,
    ({form, key,value}) => ({
        form,
        key,
        value,
    }),
);

const initialState = {
    data:{articles:null},
    edit:null,
}

const bookmark = handleActions(

    {   
        [CHANGE_EDIT_FIELD]:(state,{payload:{form, key, value}}) => produce(state, draft =>{
            draft[form][key] = value;
        }), 
        [SET_BOOKMARK]:(state,{payload:array})=>({
            ...state,
            data:{
                articles:[...array]
            },
        }),
        [SET_EDIT]:(state,{payload:edit})=>({
            ...state,
            edit,
            original:edit.title,
        }),
        [CLEAR_EDIT]:(state,)=>({
            ...state,
            edit:null,
            original:null,
        }),
    },
    initialState,
);

export default bookmark;