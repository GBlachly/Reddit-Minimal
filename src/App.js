import React from 'react'; 
import './App.css';

import { Subreddits } from './containers/Subreddits/subreddits';
import { Posts } from './containers/Posts/posts';

function App() {
  return (
    <div className="App"> 
      
      <header className="App-header">
        <h1>Welcome to my app</h1>
        <nav>
          <ul>
            <li>HOME</li>
            <li>REDDIT</li>
            <li>SUBREDDITS</li>
          </ul>
        </nav> 
      </header>
      
      <main className='App-main-grid'>
        <Subreddits />
        <Posts />
      </main>

    </div>
  );
};

export default App;
