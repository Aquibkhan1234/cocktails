import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
// import  { AppProvider } from './sidebar-modal/context'
import  { AppProvider } from './cocktails/context'
import App from './cocktails/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </React.StrictMode>
);


