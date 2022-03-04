import {call, put} from 'redux-saga/effects';

export const createRequestActionTypes = type => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return [type, SUCCESS, FAILURE];
};

//saga success, failure 처리
export default function createRequestSaga(type, request){

    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function*(action){
        try{
            const response = yield call(request, action.payload);
            yield put({
                type:SUCCESS,
                payload:response.data,    
            });
        }catch(e){
            yield put({
                type:FAILURE,
                payload:e,
                error:true,
            });
        }
    };
}