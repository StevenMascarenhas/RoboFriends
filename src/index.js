import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card';
//import Hello from './Hello.js';
import App from './containers/App';
// import CardList from './CardList';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; 
import { robots } from './robots';
//1st
//ReactDOM.createRoot(document.getElementById('root'));
//2nd
// ReactDOM.render(
// <Hello greeting={'Hello'+'React Ninja'}/>,// hello is a component created  with a js expression to render
// document.getElementById('root') 
// );
//3rd
//creacting components //fetching from the array from robots.js
ReactDOM.render(
/* <div >
<Card  id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
<Card  id={robots[1].id} name={robots[1].name} email={robots[1].email} />
<Card   id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
</div> */
//passing robots as paramemter to robots prop
//<CardList robots={robots}/>

<App/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
