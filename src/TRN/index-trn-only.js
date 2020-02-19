// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore, bindActionCreators } from 'redux';
//
// import Counter from './counter';
//
// import reducer from './reducer';
// //import { inc, dec, rnd } from './actions';
// import * as actions from './actions';//получить все объекты
//
// const store = createStore(reducer);
// const {dispatch} = store;
//
// // const bindActionCreator = (creator, dispatch) => (...args) => {//this is our custom function to explain how works 'bindActionCreators'
// //   dispatch(creator(...args))
// // }
//
// // const incDispatch = bindActionCreators(inc, dispatch);
// // const decDispatch = bindActionCreators(dec, dispatch);
// // const rndDispatch = bindActionCreators(rnd, dispatch);
//
// // const { incDispatch, decDispatch, rndDispatch } = bindActionCreators({
// //   incDispatch: inc,
// //   decDispatch: dec,
// //   rndDispatch: rnd
// // }, dispatch);
//
// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
//
// /*document.getElementById('inc').addEventListener('click', inc)
//
// document.getElementById('dec').addEventListener('click', dec);
//
// document.getElementById('rnd').addEventListener('click', () => {
//   const payload = Math.floor(Math.random()*10);
//   rnd(payload);
// });*/
//
// const update = () => {
//   //document.getElementById('counter').innerHTML = store.getState();
//   ReactDOM.render(
//     <Counter
//       counter={store.getState()}
//       inc={inc}
//       dec={dec}
//       rnd={() => {
//         const payload = Math.floor(Math.random()*10);
//         rnd(payload);
//       }}
//     />, document.getElementById('root'));
// };
//
// store.subscribe(update);
//
// // store.subscribe(() => {
// //   console.log(`Subscription noticed that state now is: ${store.getState()}.`);
// // })
// // //store.getState();
// // store.dispatch({type: 'INC'})
// // store.dispatch({type: 'INC'})
