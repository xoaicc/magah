import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import reportWebVitals from "./reportWebVitals";

const rootContainer = document.getElementById("root");
rootContainer.addEventListener("contextmenu", event => event.preventDefault());
rootContainer.addEventListener("copy", (e) => {
    e.preventDefault();
    e.stopPropagation();
});
rootContainer.oncut = function(e) {
    e.preventDefault();
    e.stopPropagation();
}
rootContainer.onpaste = function(e) {
    e.preventDefault();
    e.stopPropagation();
}
rootContainer.onkeydown = function(e) {
    if (e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
};
rootContainer.style.userSelect = "none";
rootContainer.style.msUserSelect = "none";
rootContainer.style.mozUserSelect = "none";
rootContainer.style.khtmlUserSelect = "none";

const root = ReactDOM.createRoot(rootContainer);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();