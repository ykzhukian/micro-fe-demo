import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [username, setUsername] = useState('')

  const receiveMsgHandler = ({ data }) => {
    if (data?.source !== 'main') {
      return;
    }
    console.log('React received: ', data)
    setUsername(data?.username)
  }
  
  useEffect(
    () => {
      console.log('React: Listening message from main...');
      window.addEventListener('message', receiveMsgHandler);

      return () => {
        window.removeEventListener('message', receiveMsgHandler)
      }
    },
    []
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        一个 React 项目
        <h3>欢迎，{username}</h3>
      </header>
    </div>
  );
}

export default App;
