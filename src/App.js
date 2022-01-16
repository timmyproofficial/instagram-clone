import React from 'react';
import './App.css';
import Post from './Post';
import Sidebar from './Sidebar';
import Story from './Story';
import TopBar from './TopBar';

function App() {
  return (
    <div className="app">
      <TopBar />

      <div className="app__container">
        <div className="app__container__mainContent">
          <Story />

          <Post />
          <Post />
          <Post />
        </div>
        <div className="app__container__sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
