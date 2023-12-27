import React from 'react'
import ReactDOM from 'react-dom/client'
import BackGround from './App.jsx'
import './index.css'
import Header from './components/header/header.jsx'
import Contents from './components/contents/contents.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BackGround />
    <Header></Header>
    <Contents></Contents>
  </React.StrictMode>
)
