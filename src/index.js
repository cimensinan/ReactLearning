import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/scss/bootstrap.scss";
// import "bootstrap" // Bu import eğer bootstrap statik olarak kullanılacaksa Javascript'i enkinleştirmem için kullanılmalıdır. Dinamik yapıda buna gerek yoktur.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrickMode console.log gibi çalışan bir yapıya sahip bir componentte console.log kullandığımızda bu StrickMode sebebiyle konsola iki defa yazdırıyor.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
