import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
// install router after installing npm i react-router-dom
import App from './components/App'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
