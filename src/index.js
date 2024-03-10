import React from 'react'
import ReactDOM from 'react-dom/client'
// styles everything globally, set up global styles here
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

//Strict mode activates additional checks and warnings, doesn't impact production mode, in development it renders twice - can remove
