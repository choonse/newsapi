import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import rootReducer, {rootSaga} from './modules';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { setLogin } from './modules/user';
import { setBookmark } from './modules/bookmark';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

function loadUser(){
  try{
    const id = localStorage.getItem('login');
    const localBook = localStorage.getItem('bookmark');

    if(id){
       store.dispatch(setLogin(id));
    }

    if(localBook){
      const bookmark = JSON.parse(localBook);
      store.dispatch(setBookmark(bookmark));
    }

  }catch(e){
    console.log('local Storage is not working.');
  }
}

loadUser();

ReactDOM.render( 
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
