import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { observable } from 'mobx';
import PersonContext from './contexts/PersonContext';
import PersonStore from './stores/PersonStore';

// const isLogin = observable(true);

// const person = observable({
//   name: 'mark',
//   age: 39,
// });

const personStore = new PersonStore();

// setInterval(() => {
//   personStore.age++;
// }, 1000);

// autorun(() => {
//   console.log(isLogin.get());
//   console.log(person.age);
//   console.log(personStore.age);
// });

// isLogin.set(false);

// person.age = 40;

// personStore.age = 50;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersonContext.Provider value={personStore}>
    <App />
    </PersonContext.Provider>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
