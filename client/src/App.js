import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './components/animations/animations.css'
import './App.css';
import ListaUsuarios from './components/listaUsuarios';
import General from './components/general';
import NavBar from './components/navbar';
import AdicionarUsuario from './components/agregarUsuario';
import EditarUsuario from './components/editarUsuario'

function App() {
  return (
        <Router>
         <div>
          <NavBar />
          <Route path="/" exact component={General} />
            <Route path="/usuarios" component={ListaUsuarios} />
          <Route path="/adicionar" component={AdicionarUsuario} />
          <Route path="/editar/:id" component={EditarUsuario} />
        </div>
      </Router>
     
  );
}

export default App;
