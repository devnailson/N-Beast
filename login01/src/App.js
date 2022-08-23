import './App.css';

import { useState } from 'react';
import { Routes, Route} from 'react-router-dom'


import Header from './Login/componentes/Header';
import Login from './Login/componentes/Login';
import Logon from './Login/componentes/Logon';
import Footer from './Login/componentes/Footer';
import Home from './Login/componentes/Home';
import Sobre from './Login/componentes/Sobre';
import Contato from './Login/componentes/Contato';
import MinhaConta from './Login/componentes/MinhaConta';

function App() {
  const [logado,setLogado]=useState()

  return (
  <>
  <Header logado={logado}/>
      <div className='conteudoPrinc'>
        <Routes>
          <Route path='/' element={<Home logado={logado}/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logon' element={<Logon/>}/>
          <Route path='/about' element={<Sobre/>}/>
          <Route path='/contact' element={<Contato/>}/>
          <Route path='/mconta' element={<MinhaConta/>}/>
        </Routes>
      </div>
    <Footer setLogado={setLogado} logado={logado}/>
    </>
    
  );
}

export default App;
