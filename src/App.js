import React from 'react';
import 'animate.css'; 
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/index'
import Work from './components/Projects/index';
import Bar from './components/Navbar/index';
import About from './components/About/index';
import Contact from './components/Contact/index';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <body>

    <div>
      <header>
<Bar/>
<Home/>
      </header>
     <main>
<About/>
<Work/>
      </main>
      <footer>
<Contact/>
        </footer> 
    </div>
    </body>
  );
}

export default App;
