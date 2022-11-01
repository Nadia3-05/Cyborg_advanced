import logo from './img/logo.png';
import './App.css';
import './style/hw17.css';

import Post from './script/post.js';
import NewPost from './script/info.js'

function App() {
  return (
    <div>                                                                                    
      <header className='header'>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        <Post props={NewPost}/>
      </main>
    </div>
    
  );
}

export default App;
