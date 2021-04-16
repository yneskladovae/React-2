import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App";

const store = {
  user: {
    firstName: "Denis",
    lastName: "Polunosik",
  },
  avatar: {
    image: "https://image.flaticon.com/icons/png/512/145/145867.png",
    alt: "Avatar img"
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App userStuff={store}/>
  </React.StrictMode>,
  document.getElementById("root")
);
