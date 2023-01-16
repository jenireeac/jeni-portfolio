import React from 'react';
import 'animate.css'; 
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Work from './pages/Work';
import Bar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <header>
<Bar/>
      </header>
     <main>
<Home/>
<About/>
<Work/>
<Contact/>
      </main> 
    </div>
  );
}

export default App;
