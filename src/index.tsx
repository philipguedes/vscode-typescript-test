import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


interface Test {
  a?: number | null;
  b?: number | null;
  c?: number | null;
  d?: number | null;
  e?: number | null;
  f?: number | null;
  g?: number | null;
  h?: number | null;
  i?: number | null;
  j?: number | null;
}

function test({ a, b, c, d, e, f, g, h, i, j }: Test) {

  const bla = {
    ...(a && { a }),
    ...(b && { b }),
    ...(c && { c }),
    ...(d && { d }),
    ...(e && { e }),
    ...(f && { f }),
    ...(g && { g }),
    ...(h && { h }),
    ...(i && { i }),
    ...(j && { j }),
  }
  return bla;
}