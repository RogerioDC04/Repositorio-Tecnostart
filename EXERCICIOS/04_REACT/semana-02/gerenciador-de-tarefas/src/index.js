import React from 'react';
import ReactDOM from 'react-dom';
// import {AppPrincipal, AppVisualizar, AppEditar} from './aula-31/coponents/App';
import App from '../src/components/App'
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <AppVisualizar />
    <AppEditar /> */}
  </React.StrictMode>,
  document.getElementById('root')
);