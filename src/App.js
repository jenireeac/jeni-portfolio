import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import Work from './components/Work';
import Bar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <div>
     <main>
<BrowserRouter>
<Routes>
  <Route path='/' element={ <Bar /> }>
  <Route index element={ <Home /> } />
    <Route path='About' element={ <About /> } />
    <Route path='Work' element={ <Work /> } />
    <Route path='Contact' element={ <Contact /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>
      </main> 
    </div>
  );
}

export default App;
