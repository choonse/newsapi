import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import article, {articleSaga} from './article';
import user, {userSaga} from "./user";
import bookmark from './bookmark';

const rootReducer = combineReducers({
    article,
    user,
    bookmark
});

export function* rootSaga(){
    yield all([articleSaga(), userSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;