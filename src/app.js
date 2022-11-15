import React from 'react'; 
import './app.css';

import { Header } from './containers/header/header';
import { Subreddits } from './containers/subreddits/subreddits';
import { Posts } from './containers/posts/posts';

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
