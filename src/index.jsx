import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/Home/Home.jsx';
import GlobalStyle from './styles/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
