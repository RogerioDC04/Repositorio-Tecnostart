import React from 'react';
import ReactDOM from 'react-dom';
import App, { AppPrincipal, AppEditar, AppVisualizar } from './components/App.jsx';


ReactDOM.render(
  <React.StrictMode>
    <AppPrincipal />
    <AppVisualizar />
    <AppEditar />
  </React.StrictMode>,
  document.getElementById('root')
);

