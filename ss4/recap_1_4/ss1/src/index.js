import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * forEach- arrow function
 * log(number.forEach)=> underfind
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index) => {
//   console.log("index: " + index + "- number" + number);
// })

// Map-arrow function
// const students = ["Duc", "Vu", "Nhan", "Sang"];
// const messages = students.map((name) => {
//   return "Hi: " + name
// })
// console.log(messages);

// filter
// const scores = [80, 90, 100, 10, 20];
// const goodScores = scores.filter((scores) => {
// return scores>=90;
// })
// const goodScores2=scores.map((scores)=>{
//   return scores>=90 ? scores:null;
// }).filter((goodScores2)=>{
//   return goodScores2!==null
// })
// console.log(goodScores);
// console.log(goodScores2);

//Rest Parameter
// const sayHello=(...name)=>{
//   console.log(name);
//   console.log("Hello "+ name);
// }
// sayHello("Duc","Vu")

// spread operator
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=[1,2,3,...arr2]
// console.log(arr3);

root.render(

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
