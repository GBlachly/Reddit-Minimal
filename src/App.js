import React from 'react'; 
import './App.css';

import { Header } from './containers/header/header';
import { Subreddits } from './containers/Subreddits/subreddits';
import { Posts } from './containers/Posts/posts';

function App() {
  return (
    <div className="App"> 
      
      <Header />
      
      <main className='App-main-grid'>
        <Subreddits />
        <Posts />
      </main>

    </div>
  );
};

export default App;
