import React from 'react'
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp'
import "./assets/styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <div className="container-app">
        <GifExpertApp />
      </div>
    </>
  </React.StrictMode>
);