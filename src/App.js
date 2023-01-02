import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Work from './pages/Work';
import Bar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
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
