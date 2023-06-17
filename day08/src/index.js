import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//---------------------------
import { Provider } from 'react-redux';
import rootReducer from './store';
//import { createStore } from 'redux'; - deprecated
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //리덕스 개발자 도구

//const store = createStore(rootReducer);
const store = createStore(rootReducer, composeWithDevTools()); //리덕스 개발자 도구
//---------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />      {/* <App/> 아래의 모든 후손까지 store를 써도 된다.  */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
createStore
앱의 상태 트리 전체를 보관하는 Redux 저장소를 만든다.
앱 내에는 단 하나의 저장소만 있어야 한다.
앱에 하나 이외의 저장소를 만들지 않는다.
-> 대신 여러 개의 리듀서를 하나의 루트 리듀서로 만들기 위해 combineReducers를 사용한다.

반환
앱의 전체 상태를 가지고 있는 객체이다.
이 객체의 상태를 바꾸는 유일한 방법은 액션을 보내는 것뿐이다.
UI를 업데이트하기 위해 상태를 구독 할 수도 있다.
*/
